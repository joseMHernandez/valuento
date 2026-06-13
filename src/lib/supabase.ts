import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client (lazy).
 *
 * Uses the SERVICE ROLE key, which bypasses Row Level Security. This module
 * must NEVER be imported into a client component — keep it behind API routes
 * (e.g. src/app/api/lead/route.ts) only. The keys live in .env.local and are
 * never shipped to the browser.
 *
 * It's created lazily (on first request) rather than at import time so that
 * `next build` doesn't fail when env vars aren't present in the build env.
 */
let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase env vars. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local"
    );
  }

  client = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
