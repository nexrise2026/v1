const SARVAM_BASE_URL = 'https://api.sarvam.ai';

const APP_TO_SARVAM_LANG: Record<string, string> = {
  en: 'en-IN',
  kn: 'kn-IN',
  hi: 'hi-IN',
  ta: 'ta-IN',
  te: 'te-IN',
  ml: 'ml-IN',
  mr: 'mr-IN',
  bn: 'bn-IN',
  gu: 'gu-IN',
  pa: 'pa-IN',
  or: 'od-IN',
  ur: 'ur-IN',
  as: 'as-IN',
};

function getSarvamApiKey(): string | null {
  const key = process.env.SARVAM_API_KEY?.trim();
  if (!key || key === 'YOUR_SARVAM_API_KEY') {
    return null;
  }
  return key;
}

export function isSarvamConfigured(): boolean {
  return getSarvamApiKey() !== null;
}

export function toSarvamLanguageCode(code?: string): string {
  if (!code) return 'en-IN';
  if (code === 'auto' || code === 'unknown') return code;
  if (code.includes('-')) return code;
  return APP_TO_SARVAM_LANG[code.toLowerCase()] || 'en-IN';
}

export async function sarvamTranslate(params: {
  text: string;
  sourceLanguage?: string;
  targetLanguage: string;
}) {
  const apiKey = getSarvamApiKey();
  if (!apiKey) {
    throw new Error('SARVAM_API_KEY is not configured on the server.');
  }

  const input = params.text.trim();
  if (!input) {
    throw new Error('Text to translate cannot be empty.');
  }

  const sourceCode = params.sourceLanguage ? toSarvamLanguageCode(params.sourceLanguage) : 'auto';
  const targetCode = toSarvamLanguageCode(params.targetLanguage);

  const response = await fetch(`${SARVAM_BASE_URL}/translate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-subscription-key': apiKey,
    },
    body: JSON.stringify({
      input,
      source_language_code: sourceCode,
      target_language_code: targetCode,
      model: 'sarvam-translate:v1',
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errMsg = data?.error?.message || data?.detail || data?.message || `HTTP ${response.status}`;
    throw new Error(`Sarvam Translate error: ${errMsg}`);
  }

  return {
    translatedText: data.translated_text || '',
    sourceLanguageCode: data.source_language_code || sourceCode,
    targetLanguageCode: targetCode,
    provider: 'sarvam',
  };
}

export async function sarvamTextToSpeech(params: {
  text: string;
  languageCode: string;
  speaker?: string;
}) {
  const apiKey = getSarvamApiKey();
  if (!apiKey) {
    throw new Error('SARVAM_API_KEY is not configured on the server.');
  }

  const cleanText = params.text.replace(/[*#_`]/g, '').trim().slice(0, 1500);
  if (!cleanText) {
    throw new Error('Text for speech synthesis cannot be empty.');
  }

  const targetCode = toSarvamLanguageCode(params.languageCode);

  const response = await fetch(`${SARVAM_BASE_URL}/text-to-speech`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-subscription-key': apiKey,
    },
    body: JSON.stringify({
      text: cleanText,
      target_language_code: targetCode,
      model: 'bulbul:v3',
      speaker: params.speaker || 'shubh',
      pace: 1.0,
      speech_sample_rate: 24000,
      output_audio_codec: 'wav',
      enable_preprocessing: true,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errMsg = data?.error?.message || data?.detail || data?.message || `HTTP ${response.status}`;
    throw new Error(`Sarvam TTS error: ${errMsg}`);
  }

  const audioBase64 = Array.isArray(data.audios) ? data.audios[0] : '';
  if (!audioBase64) {
    throw new Error('Sarvam TTS returned no audio payload.');
  }

  return {
    audioBase64,
    mimeType: 'audio/wav',
    languageCode: targetCode,
    provider: 'sarvam',
  };
}

export async function sarvamSpeechToText(params: {
  audioBase64: string;
  mimeType?: string;
  languageCode?: string;
}) {
  const apiKey = getSarvamApiKey();
  if (!apiKey) {
    throw new Error('SARVAM_API_KEY is not configured on the server.');
  }

  const cleanedBase64 = params.audioBase64.replace(/^data:audio\/[^;]+;base64,/, '').trim();
  if (!cleanedBase64) {
    throw new Error('Audio payload is required.');
  }

  const mimeType = params.mimeType || 'audio/webm';
  const ext = mimeType.includes('wav')
    ? 'wav'
    : mimeType.includes('mp3') || mimeType.includes('mpeg')
      ? 'mp3'
      : mimeType.includes('ogg')
        ? 'ogg'
        : 'webm';

  const buffer = Buffer.from(cleanedBase64, 'base64');
  const blob = new Blob([buffer], { type: mimeType });

  const formData = new FormData();
  formData.append('file', blob, `recording.${ext}`);
  formData.append('model', 'saaras:v3');
  formData.append(
    'language_code',
    params.languageCode ? toSarvamLanguageCode(params.languageCode) : 'unknown'
  );

  const response = await fetch(`${SARVAM_BASE_URL}/speech-to-text`, {
    method: 'POST',
    headers: {
      'api-subscription-key': apiKey,
    },
    body: formData,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errMsg = data?.error?.message || data?.detail || data?.message || `HTTP ${response.status}`;
    throw new Error(`Sarvam STT error: ${errMsg}`);
  }

  return {
    transcript: data.transcript || '',
    languageCode: data.language_code || params.languageCode || 'unknown',
    provider: 'sarvam',
  };
}
