import { createClient } from "@supabase/supabase-js";

// Jangan throw saat import: kalau env var belum diset (mis. build pertama di
// Netlify sebelum env variable dikonfigurasi), pakai placeholder supaya modul
// tetap bisa di-import. Query akan gagal secara graceful dan jatuh ke data
// fallback lokal (lihat src/lib/queries/*).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY belum diset. " +
      "Memakai data fallback lokal. Set env var di Netlify untuk memakai konten dari database."
  );
}

/**
 * Client publik (anon key). Dipakai untuk membaca konten.
 * Aman dipakai di server maupun browser karena tunduk pada Row Level Security.
 */
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key",
  {
    auth: {
      persistSession: false,
    },
  }
);


