// =====================================================================
// Migrasi data blog dari src/data/blog.ts ke Supabase.
// Cara pakai:
//   1. Pastikan .env.local sudah berisi SUPABASE_SERVICE_ROLE_KEY
//   2. Jalankan tabel dulu (supabase/01_blog.sql) di SQL Editor
//   3. Jalankan: node scripts/migrate-blog.mjs
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

// blog.ts di-import lewat tsx (lihat script "migrate:blog" di package.json)
const { blogPosts } = await import("../src/data/blog.ts");


const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const rows = blogPosts.map((p, i) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  content: p.content,
  img: p.img,
  category: p.category,
  date: p.date,
  read_time: p.readTime,
  featured: p.featured ?? false,
  sort_order: i,
}));

const { error } = await supabase
  .from("blog_posts")
  .upsert(rows, { onConflict: "slug" });

if (error) {
  console.error("❌ Gagal migrasi:", error.message);
  process.exit(1);
}

console.log(`✅ Berhasil migrasi ${rows.length} artikel ke Supabase.`);
