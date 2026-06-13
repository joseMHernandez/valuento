-- Valuento lead capture table.
-- Run this once in the Supabase SQL editor (Dashboard → SQL Editor → New query).

create table if not exists public.leads (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  name            text not null,
  email           text not null,
  monthly_revenue text not null,   -- one of: 50k-100k, 100k-250k, 250k-500k, 500k-1m, 1m-plus
  scaling_budget  text not null,   -- one of: under-2k, 2k-5k, 5k-10k, 10k-25k, 25k-plus
  crm_synced      boolean not null default false
);

-- Helpful for de-duping / lookups by email.
create index if not exists leads_email_idx on public.leads (email);

-- Enable Row Level Security. The app writes with the PUBLISHABLE (anon) key,
-- so we add an insert-only policy below. There is intentionally NO select /
-- update / delete policy, meaning that key can write a lead but can never read
-- back, change, or delete any rows — leads stay private.
alter table public.leads enable row level security;

create policy "anon can insert leads"
  on public.leads
  for insert
  to anon
  with check (true);
