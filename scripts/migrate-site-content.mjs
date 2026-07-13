// =====================================================================
// Migrasi data site_content (teks statis) ke Supabase.
// Cara pakai:
//   1. Pastikan .env.local sudah berisi SUPABASE_SERVICE_ROLE_KEY
//   2. Jalankan tabel dulu (supabase/03_site_content.sql) di SQL Editor
//   3. Jalankan: npm run migrate:site-content
// =====================================================================
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

// Load .env.local secara manual (tanpa dependency tambahan)
const envRaw = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
for (const line of envRaw.split("\n")) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m) process.env[m[1]] = m[2].trim();
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

const rows = [
  {
    key: "contact_phones",
    value: [
      { name: "Slamet Mulyono", phone: "+62 812-9157-8404", whatsapp_url: "https://wa.me/6281291578404" },
      { name: "Dodo Prasetyo", phone: "+62 821-1348-4129", whatsapp_url: "https://wa.me/6282113484129" },
    ],
  },
  {
    key: "contact_emails",
    value: [
      { name: "Slamet Mulyono", email: "slamet.mulyono@berdikariraya.com" },
      { name: "Dodo Prasetyo", email: "dodo.prasetyo@berdikariraya.com" },
    ],
  },
  {
    key: "company_address",
    value: {
      street: "Jalan Macem, No 27, RT 002/001, Cikiwul, Kecamatan Bantar Gebang, Kota Bekasi, Jawa Barat, 17152",
      locality: "Bantar Gebang, Bekasi",
      region: "Jawa Barat",
      postal_code: "17152",
      maps_embed_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.654854992524!2d106.98188331526362!3d-6.309322395431602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69922a945b6dbd%3A0xc3c5b8b5496d5a10!2sJl.%20Macem%20No.27%2C%20RT.002%2FRW.001%2C%20Cikiwul%2C%20Kec.%20Bantar%20Gebang%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017152!5e0!3m2!1sen!2sid!4v1689000000000!5m2!1sen!2sid",
    },
  },
  {
    key: "company_hours",
    value: {
      weekday: "Senin – Jumat: 08.00 – 17.00 WIB",
      saturday: "Sabtu: 08.00 – 15.00 WIB",
      sunday: "Minggu: Tutup",
    },
  },
  {
    key: "company_stats",
    value: [
      { label: "Tahun Pengalaman", value: "10+" },
      { label: "Proyek Selesai", value: "500+" },
      { label: "Mitra Industri", value: "50+" },
      { label: "Kepuasan Klien", value: "99%" },
    ],
  },
  {
    key: "faq",
    value: [
      {
        q: "Berapa lama waktu pengerjaan karoseri?",
        a: "Waktu pengerjaan bervariasi tergantung jenis dan kompleksitas karoseri. Rata-rata 2–4 minggu untuk unit standar, dan 4–8 minggu untuk unit custom.",
      },
      {
        q: "Apakah ada garansi untuk hasil pekerjaan?",
        a: "Ya, kami memberikan garansi 6 bulan untuk pekerjaan repair dan 1 tahun untuk pembuatan karoseri baru, mencakup cacat material dan workmanship.",
      },
      {
        q: "Apakah bisa melayani di luar Bekasi?",
        a: "Ya, kami melayani seluruh wilayah JABODETABEK dan Bandung. Untuk wilayah lain bisa dikonsultasikan terlebih dahulu.",
      },
      {
        q: "Bagaimana cara mendapatkan estimasi harga?",
        a: "Hubungi kami via WhatsApp atau email dengan menyertakan detail kebutuhan Anda. Tim kami akan memberikan konsultasi gratis dan estimasi harga dalam 1x24 jam.",
      },
    ],
  },
];

console.log(`📦 Migrasi ${rows.length} site_content keys ke Supabase...`);

const { error } = await supabase
  .from("site_content")
  .upsert(rows, { onConflict: "key" });

if (error) {
  console.error("❌ Gagal migrasi site_content:", error.message);
  process.exit(1);
}

console.log(`✅ Berhasil migrasi ${rows.length} site_content keys ke Supabase.`);
