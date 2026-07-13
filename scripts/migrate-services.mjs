// =====================================================================
// Migrasi data services dari src/data/services.ts ke Supabase.
// Cara pakai:
//   1. Pastikan .env.local sudah berisi SUPABASE_SERVICE_ROLE_KEY
//   2. Jalankan tabel dulu (supabase/02_services_portfolio.sql) di SQL Editor
//   3. Jalankan: node scripts/migrate-services.mjs
//      atau:    npm run migrate:services
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

const { services } = await import("../src/data/services.ts");

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const rows = services.map((s, i) => ({
  slug: s.slug,
  title: s.title,
  short_title: s.shortTitle,
  tagline: s.tagline,
  desc: s.desc,
  img: s.img,
  hero_img: s.heroImg,
  about_img: s.aboutImg,
  hero_alt: s.heroAlt,
  about_alt: s.aboutAlt,
  icon: s.icon,
  meta_description: s.metaDescription,
  keywords: s.keywords,
  service_type: s.serviceType,
  highlights: s.highlights,
  intro: s.intro,
  pain_point_heading: s.painPointHeading,
  pain_points: s.painPoints,
  features: s.features,
  benefits: s.benefits,
  use_cases: s.useCases,
  process: s.process,
  sort_order: i,
}));

console.log(`📦 Migrasi ${rows.length} layanan ke Supabase...`);

const { error } = await supabase
  .from("services")
  .upsert(rows, { onConflict: "slug" });

if (error) {
  console.error("❌ Gagal migrasi services:", error.message);
  process.exit(1);
}

console.log(`✅ Berhasil migrasi ${rows.length} layanan ke Supabase.`);
