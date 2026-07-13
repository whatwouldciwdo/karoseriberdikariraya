import "server-only";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Admin client (service role key). HANYA untuk kode server (admin panel).
 * Melewati Row Level Security, jadi jangan pernah diekspos ke browser.
 * Impor "server-only" memastikan file ini tidak ikut ter-bundle ke client.
 */
export function createAdminClient() {
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase admin env vars. Pastikan SUPABASE_SERVICE_ROLE_KEY sudah diisi di .env.local / Netlify."
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
