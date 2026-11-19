const ULCA_CONFIG_URL = 'https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/getModelsPipeline';
const DHRUVA_INFERENCE_URL = 'https://dhruva-api.bhashini.gov.in/services/inference/pipeline';
const DEFAULT_PIPELINE_ID = '64392f96daac500b55c543cd';

const DRAVIDIAN_LANGS = new Set(['kn', 'ta', 'te', 'ml']);
const INDO_ARYAN_LANGS = new Set(['hi', 'mr', 'bn', 'gu', 'pa', 'or', 'ur', 'as']);

function getBhashiniConfig() {
  const apiKey = process.env.BHASHINI_API_KEY?.trim();
  if (!apiKey || apiKey === 'YOUR_BHASHINI_API_KEY') {
    return null;
  }
  return {
    apiKey,
    userId: process.env.BHASHINI_USER_ID?.trim() || '',
    pipelineId: process.env.BHASHINI_PIPELINE_ID?.trim() || DEFAULT_PIPELINE_ID,
  };
}

export function isBhashiniConfigured(): boolean {
  return getBhashiniConfig() !== null;
}

function defaultAsrServiceId(sourceLanguage: string): string {
  const lang = sourceLanguage.toLowerCase().split('-')[0];
  if (lang === 'en') return 'ai4bharat/whisper-medium-en--gpu--t4';
  if (DRAVIDIAN_LANGS.has(lang)) return 'ai4bharat/conformer-multilingual-dravidian-gpu--t4';
  if (INDO_ARYAN_LANGS.has(lang)) return 'ai4bharat/conformer-multilingual-indo_aryan-gpu--t4';
  return 'ai4bharat/conformer-hi-gpu--t4';
}

function normalizeIso639(lang?: string): string {
  if (!lang) return 'en';
  const base = lang.toLowerCase().split('-')[0];
  if (base === 'od') return 'or';
  return base;
}

interface DiscoveredPipeline {
  callbackUrl: string;
  authHeaderName: string;
  authHeaderValue: string;
  serviceId: string;
}

async function resolvePipeline(params: {
  taskType: 'translation' | 'asr';
  sourceLanguage: string;
  targetLanguage?: string;
}): Promise<DiscoveredPipeline> {
  const cfg = getBhashiniConfig();
  if (!cfg) {
    throw new Error('BHASHINI_API_KEY is not configured on the server.');
  }

  // If BHASHINI_USER_ID is provided, run the official ULCA pipeline config discovery
  if (cfg.userId) {
    const languageConfig: Record<string, string> = {
      sourceLanguage: params.sourceLanguage,
    };
    if (params.targetLanguage) {
      languageConfig.targetLanguage = params.targetLanguage;
    }

    const configResp = await fetch(ULCA_CONFIG_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        userID: cfg.userId,
        ulcaApiKey: cfg.apiKey,
      },
      body: JSON.stringify({
        pipelineTasks: [
          {
            taskType: params.taskType,
            config: { language: languageConfig },
          },
        ],
        pipelineRequestConfig: {
          pipelineId: cfg.pipelineId,
        },
      }),
    });

    const configJson = await configResp.json().catch(() => ({}));
    if (!configResp.ok) {
      const msg = configJson?.message || configJson?.detail || `HTTP ${configResp.status}`;
      throw new Error(`Bhashini ULCA pipeline config error: ${msg}`);
    }

    const callbackUrl = configJson?.pipelineInferenceAPIEndPoint?.callbackUrl || DHRUVA_INFERENCE_URL;
    const authHeaderName =
      configJson?.pipelineInferenceAPIEndPoint?.inferenceApiKey?.name || 'Authorization';
    const authHeaderValue =
      configJson?.pipelineInferenceAPIEndPoint?.inferenceApiKey?.value || cfg.apiKey;
    const serviceId =
      configJson?.pipelineResponseConfig?.[0]?.config?.[0]?.serviceId ||
      (params.taskType === 'translation'
        ? 'ai4bharat/indictrans-v2-all-gpu--t4'
        : defaultAsrServiceId(params.sourceLanguage));

    return { callbackUrl, authHeaderName, authHeaderValue, serviceId };
  }

  // Direct Dhruva Inference API key path
  return {
    callbackUrl: DHRUVA_INFERENCE_URL,
    authHeaderName: 'Authorization',
    authHeaderValue: cfg.apiKey,
    serviceId:
      params.taskType === 'translation'
        ? 'ai4bharat/indictrans-v2-all-gpu--t4'
        : defaultAsrServiceId(params.sourceLanguage),
  };
}

export async function bhashiniTranslate(params: {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
}) {
  const sourceLanguage = normalizeIso639(params.sourceLanguage);
  const targetLanguage = normalizeIso639(params.targetLanguage);
  const text = params.text.trim();

  if (!text) {
    throw new Error('Text to translate cannot be empty.');
  }

  const pipeline = await resolvePipeline({
    taskType: 'translation',
    sourceLanguage,
    targetLanguage,
  });

  const response = await fetch(pipeline.callbackUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      [pipeline.authHeaderName]: pipeline.authHeaderValue,
    },
    body: JSON.stringify({
      pipelineTasks: [
        {
          taskType: 'translation',
          config: {
            language: { sourceLanguage, targetLanguage },
            serviceId: pipeline.serviceId,
          },
        },
      ],
      inputData: {
        input: [{ source: text }],
      },
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const msg = data?.detail || data?.message || `HTTP ${response.status}`;
    throw new Error(`Bhashini Translate error: ${msg}`);
  }

  const translatedText = data?.pipelineResponse?.[0]?.output?.[0]?.target || '';
  if (!translatedText) {
    throw new Error('Bhashini returned an empty translation.');
  }

  return {
    translatedText,
    sourceLanguage,
    targetLanguage,
    provider: 'bhashini',
  };
}

export async function bhashiniSpeechToText(params: {
  audioBase64: string;
  sourceLanguage: string;
  audioFormat?: string;
}) {
  const sourceLanguage = normalizeIso639(params.sourceLanguage);
  const cleanedBase64 = params.audioBase64.replace(/^data:audio\/[^;]+;base64,/, '').trim();
  if (!cleanedBase64) {
    throw new Error('Audio payload is required.');
  }

  const audioFormat = params.audioFormat || 'wav';

  const pipeline = await resolvePipeline({
    taskType: 'asr',
    sourceLanguage,
  });

  const response = await fetch(pipeline.callbackUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      [pipeline.authHeaderName]: pipeline.authHeaderValue,
    },
    body: JSON.stringify({
      pipelineTasks: [
        {
          taskType: 'asr',
          config: {
            language: { sourceLanguage },
            serviceId: pipeline.serviceId,
            audioFormat,
            samplingRate: 16000,
          },
        },
      ],
      inputData: {
        audio: [{ audioContent: cleanedBase64 }],
      },
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const msg = data?.detail || data?.message || `HTTP ${response.status}`;
    throw new Error(`Bhashini ASR error: ${msg}`);
  }

  const transcript = data?.pipelineResponse?.[0]?.output?.[0]?.source || '';
  return {
    transcript,
    languageCode: sourceLanguage,
    provider: 'bhashini',
  };
}
