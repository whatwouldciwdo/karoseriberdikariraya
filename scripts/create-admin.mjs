// =====================================================================
// Membuat user admin panel via Supabase service role key.
// Cara pakai:
//   1. Pastikan .env.local sudah berisi NEXT_PUBLIC_SUPABASE_URL &
//      SUPABASE_SERVICE_ROLE_KEY
//   2. Jalankan:
//        node scripts/create-admin.mjs <email> <password>
//      contoh:
//        node scripts/create-admin.mjs admin@berdikariraya.com RahasiaKuat123
//      atau lewat npm:
//        npm run create:admin -- admin@berdikariraya.com RahasiaKuat123
// =====================================================================
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

// Load .env.local secara manual (tanpa dependency tambahan)
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

const [, , email, password] = process.argv;

if (!email || !password) {
  console.error("❌ Usage: node scripts/create-admin.mjs <email> <password>");
  process.exit(1);
}

if (!url || !serviceKey) {
  console.error("❌ NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY belum diisi di .env.local");
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

console.log(`👤 Membuat user admin: ${email} ...`);

const { data, error } = await supabase.auth.admin.createUser({
  email,
  password,
  email_confirm: true, // langsung aktif tanpa verifikasi email
});

if (error) {
  // Kalau user sudah ada, tawarkan update password.
  if (/already been registered|already exists/i.test(error.message)) {
    console.log("ℹ️  User sudah terdaftar. Memperbarui password...");
    const { data: list, error: listErr } = await supabase.auth.admin.listUsers();
    if (listErr) {
      console.error("❌ Gagal mengambil daftar user:", listErr.message);
      process.exit(1);
    }
    const existing = list.users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
    if (!existing) {
      console.error("❌ User tidak ditemukan meski katanya sudah terdaftar.");
      process.exit(1);
    }
    const { error: updErr } = await supabase.auth.admin.updateUserById(existing.id, {
      password,
      email_confirm: true,
    });
    if (updErr) {
      console.error("❌ Gagal update password:", updErr.message);
      process.exit(1);
    }
    console.log(`✅ Password untuk ${email} berhasil diperbarui.`);
    process.exit(0);
  }

  console.error("❌ Gagal membuat user:", error.message);
  process.exit(1);
}

console.log(`✅ User admin berhasil dibuat: ${data.user.email}`);
console.log("   Login di: /admin/login");
