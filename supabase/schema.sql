-- ==============================================================================
-- NIRVAHA AI — Supabase PostgreSQL Schema
-- Run this SQL in your Supabase Dashboard -> SQL Editor to create tables & RLS.
-- ==============================================================================

-- 1. Citizen Profiles
create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null default '',
  role text not null default 'student' check (role in ('student', 'farmer', 'worker', 'senior', 'disability')),
  state text not null default '',
  district text not null default '',
  category text not null default '',
  annual_income text not null default '',
  ration_card text not null default '',
  gender text not null default '',
  age_or_proof_number text not null default '',
  preferred_language text not null default 'en',
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = user_id);

create policy "Users can upsert own profile"
  on public.profiles for insert
  with check (auth.uid() = user_id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = user_id);

-- 2. Citizen Chat History
create table if not exists public.chat_messages (
  id text primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  sender text not null check (sender in ('user', 'assistant')),
  text text not null,
  is_voice boolean not null default false,
  language_code text not null default 'en',
  created_at timestamptz not null default now()
);

create index if not exists idx_chat_messages_user_created
  on public.chat_messages (user_id, created_at asc);

alter table public.chat_messages enable row level security;

create policy "Users can read own chat messages"
  on public.chat_messages for select
  using (auth.uid() = user_id);

create policy "Users can insert own chat messages"
  on public.chat_messages for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own chat messages"
  on public.chat_messages for delete
  using (auth.uid() = user_id);

-- 3. Government Schemes Database
create table if not exists public.schemes (
  id text primary key,
  role text not null check (role in ('student', 'farmer', 'worker', 'senior', 'disability')),
  states jsonb not null default '"ALL"'::jsonb,
  districts jsonb default '"ALL"'::jsonb,
  title jsonb not null,
  department jsonb not null,
  benefit jsonb not null,
  eligibility jsonb not null,
  documents jsonb not null default '[]'::jsonb,
  deadline jsonb,
  tags jsonb not null default '[]'::jsonb,
  apply_mode text not null default 'OFFICIAL_PORTAL' check (apply_mode in ('IN_APP_FORM', 'OFFICIAL_PORTAL')),
  verified boolean not null default true,
  official_portal_url text,
  updated_at timestamptz not null default now()
);

create index if not exists idx_schemes_role
  on public.schemes (role);

alter table public.schemes enable row level security;

create policy "Anyone can read verified schemes"
  on public.schemes for select
  using (true);
