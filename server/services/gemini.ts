import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY' || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

export function isGeminiConfigured(): boolean {
  return getGeminiClient() !== null;
}

export interface CitizenProfileInput {
  fullName?: string;
  role?: string;
  state?: string;
  district?: string;
  category?: string;
  annualIncome?: string;
  rationCard?: string;
  gender?: string;
  ageOrProofNumber?: string;
}

export interface LanguageInput {
  code?: string;
  name?: string;
  nativeName?: string;
  bcp47?: string;
}

export interface SchemeSummaryInput {
  id: string;
  title: string;
  department: string;
  benefit: string;
  eligibility: string;
  documents?: string[];
  officialPortalUrl?: string;
}

export interface ProblemAnalysisResult {
  problemSummary: string;
  recommendedSchemes: Array<{
    schemeId: string;
    title: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    matchReason: string;
    estimatedBenefit: string;
  }>;
  requiredDocuments: string[];
  actionSteps: string[];
  suggestedOfficeType: string;
}

export interface EligibilityCheckResult {
  status: 'ELIGIBLE' | 'LIKELY_ELIGIBLE' | 'NEEDS_VERIFICATION' | 'NOT_ELIGIBLE';
  confidenceScore: number;
  summary: string;
  matchedCriteria: string[];
  missingOrToVerify: string[];
  nextSteps: string[];
}

export async function generateChatStream(params: {
  messages: Array<{ sender: string; text: string }>;
  userProfile?: CitizenProfileInput;
  language?: LanguageInput;
  relevantSchemes?: SchemeSummaryInput[];
}) {
  const ai = getGeminiClient();
  if (!ai) {
    throw new Error('GEMINI_API_KEY is not configured on the server.');
  }

  const languageName = params.language?.name || 'English';
  const languageCode = params.language?.code || 'en';
  const nativeName = params.language?.nativeName || 'English';

  const schemeContext =
    params.relevantSchemes && params.relevantSchemes.length > 0
      ? `\nAvailable verified schemes for this citizen:\n${params.relevantSchemes
          .slice(0, 8)
          .map((s) => `- ${s.title} (${s.department}): ${s.benefit}. Eligibility: ${s.eligibility}`)
          .join('\n')}`
      : '';

  const systemInstruction = `You are NIRVAHA AI, an ultra-fast, caring, verified public welfare advisor for Indian citizens.
MANDATORY: You MUST reply 100% in ${languageName} (${languageCode}, script: ${nativeName}). NEVER output English unless language is explicitly English.
Answer format: Be direct, concise, and helpful (60–110 words). Recommend specific matching Indian government schemes, list exact documents required, and mention that the citizen can check eligibility or start in AssistFill inside this app.
Citizen Profile: Name: ${params.userProfile?.fullName || 'Citizen'}, Role: ${params.userProfile?.role || 'Citizen'}, State: ${params.userProfile?.state || 'India'}, District: ${params.userProfile?.district || 'Unspecified'}, Category: ${params.userProfile?.category || 'Unspecified'}, Income: ${params.userProfile?.annualIncome || 'Unspecified'}, Ration Card: ${params.userProfile?.rationCard || 'Unspecified'}.${schemeContext}`;

  const mergedTurns: Array<{ role: 'user' | 'model'; text: string }> = [];
  for (const m of params.messages) {
    const text = typeof m?.text === 'string' ? m.text.trim() : '';
    if (!text) continue;
    const role: 'user' | 'model' = m?.sender === 'user' ? 'user' : 'model';
    const prev = mergedTurns[mergedTurns.length - 1];
    if (prev && prev.role === role) {
      prev.text = `${prev.text}\n${text}`;
    } else {
      mergedTurns.push({ role, text });
    }
  }

  const recentTurns = mergedTurns.slice(-6);
  while (recentTurns.length > 0 && recentTurns[0].role !== 'user') {
    recentTurns.shift();
  }
  while (recentTurns.length > 0 && recentTurns[recentTurns.length - 1].role !== 'user') {
    recentTurns.pop();
  }

  if (recentTurns.length === 0) {
    throw new Error('At least one non-empty user message is required.');
  }

  const contents = recentTurns.map((m) => ({
    role: m.role,
    parts: [{ text: m.text }],
  }));

  const modelsToTry: Array<{
    name: string;
    config: Record<string, unknown>;
  }> = [
    {
      name: 'gemini-3.1-flash-lite',
      config: {
        systemInstruction,
        maxOutputTokens: 380,
        thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
      },
    },
    {
      name: 'gemini-4-hydrogen',
      config: {
        systemInstruction,
        maxOutputTokens: 380,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      },
    },
  ];

  let lastErr: unknown = null;
  for (const modelInfo of modelsToTry) {
    try {
      const stream = await ai.models.generateContentStream({
        model: modelInfo.name,
        contents,
        config: modelInfo.config,
      });
      return { stream, model: modelInfo.name };
    } catch (err) {
      lastErr = err;
    }
  }

  throw lastErr instanceof Error ? lastErr : new Error('Failed to generate Gemini stream.');
}

export async function analyzeCitizenProblem(params: {
  problemText: string;
  userProfile?: CitizenProfileInput;
  language?: LanguageInput;
  candidateSchemes: SchemeSummaryInput[];
}): Promise<ProblemAnalysisResult> {
  const ai = getGeminiClient();
  if (!ai) {
    throw new Error('GEMINI_API_KEY is not configured on the server.');
  }

  const languageName = params.language?.name || 'English';
  const languageCode = params.language?.code || 'en';
  const nativeName = params.language?.nativeName || 'English';

  const catalogText = params.candidateSchemes
    .slice(0, 15)
    .map(
      (s) =>
        `ID: ${s.id} | Title: ${s.title} | Dept: ${s.department} | Benefit: ${s.benefit} | Eligibility: ${s.eligibility} | Docs: ${(s.documents || []).join(', ')}`
    )
    .join('\n');

  const prompt = `Analyze this Indian citizen's problem and recommend the best matching government welfare schemes from the catalog below.

Citizen Profile:
- Name: ${params.userProfile?.fullName || 'Citizen'}
- Role: ${params.userProfile?.role || 'General'}
- State: ${params.userProfile?.state || 'India'}
- District: ${params.userProfile?.district || 'Unspecified'}
- Category: ${params.userProfile?.category || 'Unspecified'}
- Annual Income: ${params.userProfile?.annualIncome || 'Unspecified'}
- Ration Card: ${params.userProfile?.rationCard || 'Unspecified'}
- Gender: ${params.userProfile?.gender || 'Unspecified'}

Citizen Problem Description:
"${params.problemText}"

Verified Schemes Catalog:
${catalogText || 'Use general Central and State Indian government welfare schemes relevant to this profile.'}

INSTRUCTIONS:
1. Write ALL human-readable fields (problemSummary, title, matchReason, estimatedBenefit, requiredDocuments, actionSteps) strictly in ${languageName} (${languageCode}, ${nativeName}).
2. Keep suggestedOfficeType in concise English suitable for Google Maps search (e.g., "District Social Welfare Office", "Taluk Office / Tehsildar", "Raita Samparka Kendra", "Common Service Centre").
3. Recommend up to 3 most relevant schemes. Prefer exact IDs from the catalog above when matching.`;

  const response = await ai.models.generateContent({
    model: 'gemini-4-hydrogen',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          problemSummary: { type: Type.STRING },
          recommendedSchemes: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                schemeId: { type: Type.STRING },
                title: { type: Type.STRING },
                priority: { type: Type.STRING, enum: ['HIGH', 'MEDIUM', 'LOW'] },
                matchReason: { type: Type.STRING },
                estimatedBenefit: { type: Type.STRING },
              },
              required: ['schemeId', 'title', 'priority', 'matchReason', 'estimatedBenefit'],
            },
          },
          requiredDocuments: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          actionSteps: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          suggestedOfficeType: { type: Type.STRING },
        },
        required: [
          'problemSummary',
          'recommendedSchemes',
          'requiredDocuments',
          'actionSteps',
          'suggestedOfficeType',
        ],
      },
    },
  });

  const rawText = response.text?.trim();
  if (!rawText) {
    throw new Error('Gemini returned an empty analysis response.');
  }

  return JSON.parse(rawText) as ProblemAnalysisResult;
}

export async function checkSchemeEligibility(params: {
  scheme: SchemeSummaryInput;
  userProfile?: CitizenProfileInput;
  language?: LanguageInput;
}): Promise<EligibilityCheckResult> {
  const ai = getGeminiClient();
  if (!ai) {
    throw new Error('GEMINI_API_KEY is not configured on the server.');
  }

  const languageName = params.language?.name || 'English';
  const languageCode = params.language?.code || 'en';
  const nativeName = params.language?.nativeName || 'English';

  const prompt = `Evaluate this citizen's eligibility for the following Indian government scheme accurately and honestly.

Scheme:
- Title: ${params.scheme.title}
- Department: ${params.scheme.department}
- Benefit: ${params.scheme.benefit}
- Official Eligibility Criteria: ${params.scheme.eligibility}
- Required Documents: ${(params.scheme.documents || []).join(', ')}

Citizen Profile:
- Role: ${params.userProfile?.role || 'Unspecified'}
- State: ${params.userProfile?.state || 'Unspecified'}
- District: ${params.userProfile?.district || 'Unspecified'}
- Category: ${params.userProfile?.category || 'Unspecified'}
- Annual Income: ${params.userProfile?.annualIncome || 'Unspecified'}
- Ration Card: ${params.userProfile?.rationCard || 'Unspecified'}
- Gender: ${params.userProfile?.gender || 'Unspecified'}
- Age / Proof Info: ${params.userProfile?.ageOrProofNumber || 'Not provided'}

INSTRUCTIONS:
1. Write summary, matchedCriteria, missingOrToVerify, and nextSteps strictly in ${languageName} (${languageCode}, ${nativeName}).
2. Be honest: if income, age, landholding, disability %, or state residency is missing or exceeds a stated threshold, reflect that clearly in status and missingOrToVerify.
3. confidenceScore must be an integer from 0 to 100.`;

  const response = await ai.models.generateContent({
    model: 'gemini-4-hydrogen',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          status: {
            type: Type.STRING,
            enum: ['ELIGIBLE', 'LIKELY_ELIGIBLE', 'NEEDS_VERIFICATION', 'NOT_ELIGIBLE'],
          },
          confidenceScore: { type: Type.INTEGER },
          summary: { type: Type.STRING },
          matchedCriteria: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          missingOrToVerify: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          nextSteps: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
        },
        required: [
          'status',
          'confidenceScore',
          'summary',
          'matchedCriteria',
          'missingOrToVerify',
          'nextSteps',
        ],
      },
    },
  });

  const rawText = response.text?.trim();
  if (!rawText) {
    throw new Error('Gemini returned an empty eligibility response.');
  }

  return JSON.parse(rawText) as EligibilityCheckResult;
}
