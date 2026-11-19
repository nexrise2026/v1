import { createClient, SupabaseClient } from '@supabase/supabase-js';

function getSupabaseEnv() {
  const url = process.env.SUPABASE_URL?.trim();
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY?.trim();
  const secretKey = process.env.SUPABASE_SECRET_KEY?.trim();

  const validUrl = url && url !== 'YOUR_SUPABASE_URL' && url.startsWith('http');
  const validPub =
    publishableKey && publishableKey !== 'YOUR_SUPABASE_PUBLISHABLE_KEY' ? publishableKey : null;
  const validSecret =
    secretKey && secretKey !== 'YOUR_SUPABASE_SECRET_KEY' ? secretKey : null;

  if (!validUrl || (!validPub && !validSecret)) {
    return null;
  }

  return {
    url: url!,
    publishableKey: validPub || validSecret!,
    secretKey: validSecret || validPub!,
    hasAdminKey: Boolean(validSecret),
  };
}

export function isSupabaseConfigured(): boolean {
  return getSupabaseEnv() !== null;
}

function createAuthClient(): SupabaseClient {
  const env = getSupabaseEnv();
  if (!env) {
    throw new Error('Supabase environment variables (SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, SUPABASE_SECRET_KEY) are not configured.');
  }
  return createClient(env.url, env.publishableKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function createServerClient(userAccessToken?: string): SupabaseClient {
  const env = getSupabaseEnv();
  if (!env) {
    throw new Error('Supabase environment variables (SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, SUPABASE_SECRET_KEY) are not configured.');
  }
  if (env.hasAdminKey) {
    return createClient(env.url, env.secretKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return createClient(env.url, env.publishableKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: userAccessToken
      ? { headers: { Authorization: `Bearer ${userAccessToken}` } }
      : undefined,
  });
}

export async function signUpCitizen(params: { email: string; password: string; fullName?: string }) {
  const client = createAuthClient();
  const { data, error } = await client.auth.signUp({
    email: params.email.trim(),
    password: params.password,
    options: {
      data: { full_name: params.fullName || '' },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    user: data.user ? { id: data.user.id, email: data.user.email } : null,
    accessToken: data.session?.access_token || null,
    requiresEmailConfirmation: !data.session,
  };
}

export async function signInCitizen(params: { email: string; password: string }) {
  const client = createAuthClient();
  const { data, error } = await client.auth.signInWithPassword({
    email: params.email.trim(),
    password: params.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    user: data.user ? { id: data.user.id, email: data.user.email } : null,
    accessToken: data.session?.access_token || null,
  };
}

export async function getAuthenticatedUser(accessToken: string) {
  const client = createAuthClient();
  const { data, error } = await client.auth.getUser(accessToken);
  if (error || !data.user) {
    throw new Error(error?.message || 'Invalid or expired authentication token.');
  }
  return { id: data.user.id, email: data.user.email || '' };
}

export async function getUserProfile(userId: string, accessToken?: string) {
  const client = createServerClient(accessToken);
  const { data, error } = await client
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    throw new Error(`Supabase profile fetch error: ${error.message}`);
  }

  if (!data) return null;

  return {
    fullName: data.full_name || '',
    role: data.role || 'student',
    state: data.state || '',
    district: data.district || '',
    category: data.category || '',
    annualIncome: data.annual_income || '',
    rationCard: data.ration_card || '',
    gender: data.gender || '',
    ageOrProofNumber: data.age_or_proof_number || '',
    preferredLanguage: data.preferred_language || 'en',
  };
}

export async function upsertUserProfile(
  userId: string,
  profile: Record<string, any>,
  accessToken?: string
) {
  const client = createServerClient(accessToken);
  const row = {
    user_id: userId,
    full_name: profile.fullName || '',
    role: profile.role || 'student',
    state: profile.state || '',
    district: profile.district || '',
    category: profile.category || '',
    annual_income: profile.annualIncome || '',
    ration_card: profile.rationCard || '',
    gender: profile.gender || '',
    age_or_proof_number: profile.ageOrProofNumber || '',
    preferred_language: profile.preferredLanguage || 'en',
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await client
    .from('profiles')
    .upsert(row, { onConflict: 'user_id' })
    .select()
    .single();

  if (error) {
    throw new Error(`Supabase profile save error: ${error.message}`);
  }

  return data;
}

export async function getChatHistory(userId: string, accessToken?: string) {
  const client = createServerClient(accessToken);
  const { data, error } = await client
    .from('chat_messages')
    .select('id, sender, text, is_voice, language_code, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .limit(100);

  if (error) {
    throw new Error(`Supabase chat history fetch error: ${error.message}`);
  }

  return (data || []).map((row: any) => ({
    id: row.id,
    sender: row.sender as 'user' | 'assistant',
    text: row.text,
    isVoice: Boolean(row.is_voice),
    timestamp: new Date(row.created_at).getTime(),
  }));
}

export async function appendChatMessage(
  userId: string,
  message: { id: string; sender: 'user' | 'assistant'; text: string; isVoice?: boolean; languageCode?: string },
  accessToken?: string
) {
  const client = createServerClient(accessToken);
  const { error } = await client.from('chat_messages').upsert(
    {
      id: message.id,
      user_id: userId,
      sender: message.sender,
      text: message.text,
      is_voice: Boolean(message.isVoice),
      language_code: message.languageCode || 'en',
      created_at: new Date().toISOString(),
    },
    { onConflict: 'id' }
  );

  if (error) {
    throw new Error(`Supabase chat save error: ${error.message}`);
  }
}

export async function clearUserChatHistory(userId: string, accessToken?: string) {
  const client = createServerClient(accessToken);
  const { error } = await client.from('chat_messages').delete().eq('user_id', userId);
  if (error) {
    throw new Error(`Supabase chat clear error: ${error.message}`);
  }
}

export async function fetchSchemesFromDb(filters?: { role?: string }) {
  const client = createServerClient();
  let query = client.from('schemes').select('*');
  if (filters?.role) {
    query = query.eq('role', filters.role);
  }
  const { data, error } = await query;
  if (error) {
    throw new Error(`Supabase schemes query error: ${error.message}`);
  }
  return (data || []).map((row: any) => ({
    id: row.id,
    role: row.role,
    states: row.states,
    districts: row.districts,
    title: row.title,
    department: row.department,
    benefit: row.benefit,
    eligibility: row.eligibility,
    documents: row.documents || [],
    deadline: row.deadline || undefined,
    tags: row.tags || [],
    applyMode: row.apply_mode || 'OFFICIAL_PORTAL',
    verified: Boolean(row.verified),
    officialPortalUrl: row.official_portal_url || undefined,
  }));
}

export async function seedSchemesToDb(schemes: Array<Record<string, any>>) {
  const client = createServerClient();
  const rows = schemes.map((s) => ({
    id: s.id,
    role: s.role,
    states: s.states,
    districts: s.districts || 'ALL',
    title: s.title,
    department: s.department,
    benefit: s.benefit,
    eligibility: s.eligibility,
    documents: s.documents || [],
    deadline: s.deadline || null,
    tags: s.tags || [],
    apply_mode: s.applyMode || 'OFFICIAL_PORTAL',
    verified: Boolean(s.verified),
    official_portal_url: s.officialPortalUrl || null,
    updated_at: new Date().toISOString(),
  }));

  const { error } = await client.from('schemes').upsert(rows, { onConflict: 'id' });
  if (error) {
    throw new Error(`Supabase schemes seed error: ${error.message}`);
  }
  return { seededCount: rows.length };
}
