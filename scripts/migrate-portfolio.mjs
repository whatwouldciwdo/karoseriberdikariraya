// =====================================================================
// Migrasi data portfolio dari src/data/portfolio.ts ke Supabase.
// Cara pakai:
//   1. Pastikan .env.local sudah berisi SUPABASE_SERVICE_ROLE_KEY
//   2. Jalankan tabel dulu (supabase/02_services_portfolio.sql) di SQL Editor
//   3. Jalankan: node scripts/migrate-portfolio.mjs
//      atau:    npm run migrate:portfolio
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

const { portfolioProjects } = await import("../src/data/portfolio.ts");

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const rows = portfolioProjects.map((p, i) => ({
  slug: p.slug,
  short_title: p.shortTitle,
  title: p.title,
  client: p.client,
  category: p.category,
  location: p.location,
  year: p.year,
  excerpt: p.excerpt,
  hero_image: p.heroImage,
  images: p.images,
  meta_title: p.metaTitle,
  meta_description: p.metaDescription,
  keywords: p.keywords,
  highlights: p.highlights,
  content: p.content,
  sort_order: i,
}));

console.log(`📦 Migrasi ${rows.length} proyek portfolio ke Supabase...`);

const { error } = await supabase
  .from("portfolio")
  .upsert(rows, { onConflict: "slug" });

if (error) {
  console.error("❌ Gagal migrasi portfolio:", error.message);
  process.exit(1);
}

console.log(`✅ Berhasil migrasi ${rows.length} proyek portfolio ke Supabase.`);
