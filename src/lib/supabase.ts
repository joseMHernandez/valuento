import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client (lazy).
 *
 * Uses the PUBLISHABLE (anon) key. Even though it's only ever used here on the
 * server, the publishable key is safe by design: the `leads` table has RLS
 * enabled with an insert-only policy for the anon role, so this key can write a
 * lead but cannot read, update, or delete any rows.
 *
 * Created lazily (on first request) rather than at import time so that
 * `next build` doesn't fail when env vars aren't present in the build env.
 */
let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (client) return client;

  const supabaseUrl = process.env.SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !publishableKey) {
    throw new Error(
      "Missing Supabase env vars. Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY in .env.local"
    );
  }

  client = createClient(supabaseUrl, publishableKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
