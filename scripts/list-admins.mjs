// =====================================================================
// Menampilkan daftar user (admin) yang terdaftar di Supabase Auth.
// Cara pakai:
//   node scripts/list-admins.mjs
// =====================================================================
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

try {
  const envRaw = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  for (const line of envRaw.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) process.env[m[1]] = m[2].trim();
  }
} catch {
  console.error("⚠️  Tidak menemukan .env.local, memakai environment yang ada.");
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("❌ NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY belum diisi di .env.local");
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const { data, error } = await supabase.auth.admin.listUsers();

if (error) {
  console.error("❌ Gagal mengambil daftar user:", error.message);
  process.exit(1);
}

if (!data.users.length) {
  console.log("ℹ️  Belum ada user terdaftar.");
  process.exit(0);
}

console.log(`👥 Total user terdaftar: ${data.users.length}\n`);
for (const u of data.users) {
  console.log(`  • ${u.email}`);
  console.log(`    id           : ${u.id}`);
  console.log(`    dikonfirmasi : ${u.email_confirmed_at ? "ya" : "belum"}`);
  console.log(`    dibuat       : ${u.created_at}`);
  console.log(`    login terakhir: ${u.last_sign_in_at ?? "belum pernah"}`);
  console.log("");
}
