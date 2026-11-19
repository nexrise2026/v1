import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import {
  isGeminiConfigured,
  generateChatStream,
  analyzeCitizenProblem,
  checkSchemeEligibility,
  SchemeSummaryInput,
} from './server/services/gemini';
import {
  isSarvamConfigured,
  sarvamTranslate,
  sarvamTextToSpeech,
  sarvamSpeechToText,
} from './server/services/sarvam';
import {
  isBhashiniConfigured,
  bhashiniTranslate,
  bhashiniSpeechToText,
} from './server/services/bhashini';
import {
  isGoogleMapsConfigured,
  findNearbyGovOffices,
  computeDirections,
} from './server/services/maps';
import {
  isSupabaseConfigured,
  signUpCitizen,
  signInCitizen,
  getAuthenticatedUser,
  getUserProfile,
  upsertUserProfile,
  getChatHistory,
  appendChatMessage,
  clearUserChatHistory,
  fetchSchemesFromDb,
  seedSchemesToDb,
} from './server/services/supabase';
import { SCHEMES_DATABASE } from './src/data/schemes';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Support audio base64 payloads for Sarvam AI and Bhashini STT
app.use(express.json({ limit: '15mb' }));

function notConfigured(res: Response, provider: string, requiredEnvVars: string[]) {
  return res.status(503).json({
    code: 'API_KEY_NOT_CONFIGURED',
    provider,
    requiredEnvVars,
    error: `${provider} is not configured on the server. Set ${requiredEnvVars.join(', ')} in backend environment secrets.`,
  });
}

function extractBearerToken(req: Request): string | null {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) return null;
  const token = header.slice(7).trim();
  return token || null;
}

function getRelevantSchemesForProfile(userProfile?: {
  role?: string;
  state?: string;
  district?: string;
}): SchemeSummaryInput[] {
  const role = userProfile?.role;
  const state = userProfile?.state;
  const district = userProfile?.district;

  const matched = SCHEMES_DATABASE.filter((item) => {
    if (role && item.role !== role) return false;
    const stateMatch = item.states === 'ALL' || !state || item.states.includes(state);
    if (!stateMatch) return false;
    const districtMatch =
      item.districts === 'ALL' || !item.districts || !district || item.districts.includes(district);
    return districtMatch;
  });

  const pool = matched.length > 0 ? matched : SCHEMES_DATABASE.slice(0, 12);
  return pool.map((s) => ({
    id: s.id,
    title: s.title.en,
    department: s.department.en,
    benefit: s.benefit.en,
    eligibility: s.eligibility.en,
    documents: s.documents.map((d) => d.en),
    officialPortalUrl: s.officialPortalUrl,
  }));
}

// ============================================================================
// Integration Availability Check (Booleans only — NEVER exposes keys)
// ============================================================================
app.get('/api/integrations/status', (_req: Request, res: Response) => {
  res.json({
    gemini: isGeminiConfigured(),
    sarvam: isSarvamConfigured(),
    supabase: isSupabaseConfigured(),
    googleMaps: isGoogleMapsConfigured(),
    bhashini: isBhashiniConfigured(),
  });
});

// ============================================================================
// 1. GEMINI API — Streaming Chat, Problem Analysis & Eligibility Checking
// ============================================================================
app.post('/api/chat', async (req: Request, res: Response) => {
  const { messages, userProfile, language } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages array.' });
  }

  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders?.();

  if (!isGeminiConfigured()) {
    res.write(
      `data: ${JSON.stringify({
        error: 'Gemini API key is not configured on the server. Set GEMINI_API_KEY in backend secrets.',
      })}\n\n`
    );
    res.write(`data: [DONE]\n\n`);
    res.end();
    return;
  }

  try {
    const relevantSchemes = getRelevantSchemesForProfile(userProfile);
    const { stream } = await generateChatStream({
      messages,
      userProfile,
      language,
      relevantSchemes,
    });

    for await (const chunk of stream) {
      if (res.writableEnded) break;
      const text = chunk.text || '';
      if (text) {
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
        (res as any).flush?.();
      }
    }

    if (!res.writableEnded) {
      res.write(`data: [DONE]\n\n`);
      (res as any).flush?.();
      res.end();
    }
  } catch (err: any) {
    const errMsg = err?.message || 'Unable to reach Gemini API.';
    console.warn('Gemini chat stream failed:', errMsg);
    if (!res.writableEnded) {
      res.write(`data: ${JSON.stringify({ error: errMsg })}\n\n`);
      res.write(`data: [DONE]\n\n`);
      res.end();
    }
  }
});

app.post('/api/gemini/analyze', async (req: Request, res: Response) => {
  if (!isGeminiConfigured()) {
    return notConfigured(res, 'Gemini API', ['GEMINI_API_KEY']);
  }

  const { problemText, userProfile, language } = req.body;
  if (!problemText || typeof problemText !== 'string' || !problemText.trim()) {
    return res.status(400).json({ error: 'problemText is required.' });
  }

  try {
    const candidateSchemes = getRelevantSchemesForProfile(userProfile);
    const analysis = await analyzeCitizenProblem({
      problemText: problemText.trim(),
      userProfile,
      language,
      candidateSchemes,
    });
    res.json(analysis);
  } catch (err: any) {
    console.error('Gemini analyze error:', err);
    res.status(502).json({ error: err?.message || 'Gemini problem analysis failed.' });
  }
});

app.post('/api/gemini/eligibility', async (req: Request, res: Response) => {
  if (!isGeminiConfigured()) {
    return notConfigured(res, 'Gemini API', ['GEMINI_API_KEY']);
  }

  const { scheme, userProfile, language } = req.body;
  if (!scheme || !scheme.title) {
    return res.status(400).json({ error: 'scheme object with title is required.' });
  }

  try {
    const result = await checkSchemeEligibility({
      scheme,
      userProfile,
      language,
    });
    res.json(result);
  } catch (err: any) {
    console.error('Gemini eligibility error:', err);
    res.status(502).json({ error: err?.message || 'Gemini eligibility check failed.' });
  }
});

// ============================================================================
// 2. SARVAM AI — Indian Languages STT, TTS & Translation
// ============================================================================
app.post('/api/sarvam/translate', async (req: Request, res: Response) => {
  if (!isSarvamConfigured()) {
    return notConfigured(res, 'Sarvam AI', ['SARVAM_API_KEY']);
  }

  const { text, sourceLanguage, targetLanguage } = req.body;
  if (!text || !targetLanguage) {
    return res.status(400).json({ error: 'text and targetLanguage are required.' });
  }

  try {
    const result = await sarvamTranslate({ text, sourceLanguage, targetLanguage });
    res.json(result);
  } catch (err: any) {
    console.error('Sarvam translate error:', err);
    res.status(502).json({ error: err?.message || 'Sarvam translation failed.' });
  }
});

app.post('/api/sarvam/tts', async (req: Request, res: Response) => {
  if (!isSarvamConfigured()) {
    return notConfigured(res, 'Sarvam AI', ['SARVAM_API_KEY']);
  }

  const { text, languageCode, speaker } = req.body;
  if (!text || !languageCode) {
    return res.status(400).json({ error: 'text and languageCode are required.' });
  }

  try {
    const result = await sarvamTextToSpeech({ text, languageCode, speaker });
    res.json(result);
  } catch (err: any) {
    console.error('Sarvam TTS error:', err);
    res.status(502).json({ error: err?.message || 'Sarvam text-to-speech failed.' });
  }
});

app.post('/api/sarvam/stt', async (req: Request, res: Response) => {
  if (!isSarvamConfigured()) {
    return notConfigured(res, 'Sarvam AI', ['SARVAM_API_KEY']);
  }

  const { audioBase64, mimeType, languageCode } = req.body;
  if (!audioBase64) {
    return res.status(400).json({ error: 'audioBase64 is required.' });
  }

  try {
    const result = await sarvamSpeechToText({ audioBase64, mimeType, languageCode });
    res.json(result);
  } catch (err: any) {
    console.error('Sarvam STT error:', err);
    res.status(502).json({ error: err?.message || 'Sarvam speech-to-text failed.' });
  }
});

// ============================================================================
// 3. BHASHINI (ULCA / Dhruva) — Indian Language ASR & Translation
// ============================================================================
app.post('/api/bhashini/translate', async (req: Request, res: Response) => {
  if (!isBhashiniConfigured()) {
    return notConfigured(res, 'Bhashini', ['BHASHINI_API_KEY']);
  }

  const { text, sourceLanguage, targetLanguage } = req.body;
  if (!text || !sourceLanguage || !targetLanguage) {
    return res.status(400).json({ error: 'text, sourceLanguage, and targetLanguage are required.' });
  }

  try {
    const result = await bhashiniTranslate({ text, sourceLanguage, targetLanguage });
    res.json(result);
  } catch (err: any) {
    console.error('Bhashini translate error:', err);
    res.status(502).json({ error: err?.message || 'Bhashini translation failed.' });
  }
});

app.post('/api/bhashini/stt', async (req: Request, res: Response) => {
  if (!isBhashiniConfigured()) {
    return notConfigured(res, 'Bhashini', ['BHASHINI_API_KEY']);
  }

  const { audioBase64, sourceLanguage, audioFormat } = req.body;
  if (!audioBase64 || !sourceLanguage) {
    return res.status(400).json({ error: 'audioBase64 and sourceLanguage are required.' });
  }

  try {
    const result = await bhashiniSpeechToText({ audioBase64, sourceLanguage, audioFormat });
    res.json(result);
  } catch (err: any) {
    console.error('Bhashini ASR error:', err);
    res.status(502).json({ error: err?.message || 'Bhashini speech recognition failed.' });
  }
});

// ============================================================================
// 4. GOOGLE MAPS PLATFORM — Nearby Government Offices & Directions
// ============================================================================
app.post('/api/maps/nearby-offices', async (req: Request, res: Response) => {
  if (!isGoogleMapsConfigured()) {
    return notConfigured(res, 'Google Maps Platform', ['GOOGLE_MAPS_API_KEY']);
  }

  const { query, state, district, lat, lng, radiusMeters, languageCode } = req.body;
  if (!query || typeof query !== 'string' || !query.trim()) {
    return res.status(400).json({ error: 'Search query (e.g., Taluk Office, CSC) is required.' });
  }

  try {
    const result = await findNearbyGovOffices({
      query: query.trim(),
      state,
      district,
      lat: typeof lat === 'number' ? lat : undefined,
      lng: typeof lng === 'number' ? lng : undefined,
      radiusMeters: typeof radiusMeters === 'number' ? radiusMeters : undefined,
      languageCode,
    });
    res.json(result);
  } catch (err: any) {
    console.error('Google Maps nearby-offices error:', err);
    res.status(502).json({ error: err?.message || 'Failed to search nearby government offices.' });
  }
});

app.post('/api/maps/directions', async (req: Request, res: Response) => {
  if (!isGoogleMapsConfigured()) {
    return notConfigured(res, 'Google Maps Platform', ['GOOGLE_MAPS_API_KEY']);
  }

  const {
    originLat,
    originLng,
    originAddress,
    destinationLat,
    destinationLng,
    destinationPlaceId,
    destinationAddress,
    travelMode,
    languageCode,
  } = req.body;

  try {
    const result = await computeDirections({
      originLat: typeof originLat === 'number' ? originLat : undefined,
      originLng: typeof originLng === 'number' ? originLng : undefined,
      originAddress,
      destinationLat: typeof destinationLat === 'number' ? destinationLat : undefined,
      destinationLng: typeof destinationLng === 'number' ? destinationLng : undefined,
      destinationPlaceId,
      destinationAddress,
      travelMode,
      languageCode,
    });
    res.json(result);
  } catch (err: any) {
    console.error('Google Maps directions error:', err);
    res.status(502).json({ error: err?.message || 'Failed to compute directions.' });
  }
});

// ============================================================================
// 5. SUPABASE — Auth, Citizen Profiles, Chat History & Schemes Database
// ============================================================================
app.post('/api/auth/signup', async (req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  const { email, password, fullName } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required.' });
  }

  try {
    const result = await signUpCitizen({ email, password, fullName });
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err?.message || 'Sign-up failed.' });
  }
});

app.post('/api/auth/signin', async (req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required.' });
  }

  try {
    const result = await signInCitizen({ email, password });
    res.json(result);
  } catch (err: any) {
    res.status(401).json({ error: err?.message || 'Invalid email or password.' });
  }
});

app.get('/api/auth/me', async (req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  const token = extractBearerToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Missing Authorization Bearer token.' });
  }

  try {
    const user = await getAuthenticatedUser(token);
    res.json({ user });
  } catch (err: any) {
    res.status(401).json({ error: err?.message || 'Unauthorized.' });
  }
});

app.get('/api/profile', async (req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  const token = extractBearerToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Missing Authorization Bearer token.' });
  }

  try {
    const user = await getAuthenticatedUser(token);
    const profile = await getUserProfile(user.id, token);
    res.json({ profile });
  } catch (err: any) {
    res.status(401).json({ error: err?.message || 'Failed to load profile.' });
  }
});

app.put('/api/profile', async (req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  const token = extractBearerToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Missing Authorization Bearer token.' });
  }

  try {
    const user = await getAuthenticatedUser(token);
    const saved = await upsertUserProfile(user.id, req.body || {}, token);
    res.json({ profile: saved });
  } catch (err: any) {
    res.status(400).json({ error: err?.message || 'Failed to save profile.' });
  }
});

app.get('/api/chat/history', async (req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  const token = extractBearerToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Missing Authorization Bearer token.' });
  }

  try {
    const user = await getAuthenticatedUser(token);
    const messages = await getChatHistory(user.id, token);
    res.json({ messages });
  } catch (err: any) {
    res.status(401).json({ error: err?.message || 'Failed to load chat history.' });
  }
});

app.post('/api/chat/history', async (req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  const token = extractBearerToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Missing Authorization Bearer token.' });
  }

  const { id, sender, text, isVoice, languageCode } = req.body;
  if (!id || !sender || typeof text !== 'string') {
    return res.status(400).json({ error: 'id, sender, and text are required.' });
  }

  try {
    const user = await getAuthenticatedUser(token);
    await appendChatMessage(user.id, { id, sender, text, isVoice, languageCode }, token);
    res.json({ saved: true });
  } catch (err: any) {
    res.status(400).json({ error: err?.message || 'Failed to save chat message.' });
  }
});

app.delete('/api/chat/history', async (req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  const token = extractBearerToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Missing Authorization Bearer token.' });
  }

  try {
    const user = await getAuthenticatedUser(token);
    await clearUserChatHistory(user.id, token);
    res.json({ cleared: true });
  } catch (err: any) {
    res.status(400).json({ error: err?.message || 'Failed to clear chat history.' });
  }
});

app.get('/api/schemes', async (req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  const role = typeof req.query.role === 'string' ? req.query.role : undefined;
  try {
    const schemes = await fetchSchemesFromDb({ role });
    res.json({ source: 'supabase', count: schemes.length, schemes });
  } catch (err: any) {
    res.status(502).json({ error: err?.message || 'Failed to fetch schemes from Supabase.' });
  }
});

app.post('/api/schemes/seed', async (_req: Request, res: Response) => {
  if (!isSupabaseConfigured()) {
    return notConfigured(res, 'Supabase', [
      'SUPABASE_URL',
      'SUPABASE_PUBLISHABLE_KEY',
      'SUPABASE_SECRET_KEY',
    ]);
  }

  try {
    const result = await seedSchemesToDb(SCHEMES_DATABASE as any);
    res.json(result);
  } catch (err: any) {
    res.status(502).json({ error: err?.message || 'Failed to seed schemes into Supabase.' });
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`NIRVAHA AI server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
