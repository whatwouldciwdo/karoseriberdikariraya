// =====================================================================
// One-off sync ke Supabase:
//   1. Samakan gambar tiap artikel blog dengan topik kontennya.
//   2. Ganti gambar kartu Karoseri Lube Truck ke hasil konversi webp.
//
// Cara pakai: node scripts/sync-news-lube.mjs
// =====================================================================
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

const envRaw = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
for (const line of envRaw.split("\n")) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m) process.env[m[1]] = m[2].trim();
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("❌ SUPABASE env belum diisi di .env.local");
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// 1. Gambar artikel blog sesuai topik
const blogImages = {
  // Artikel umum tentang karoseri & logistik
  "mengenal-karoseri-dan-perannya-dalam-industri":
    "/images/services/karoseri-three-way-truck/karoseri-three-way-truck-01.webp",
  // Panduan memilih jenis karoseri (bahas dump, box, tangki)
  "panduan-memilih-karoseri-truck-bisnis":
    "/images/services/karoseri-dump-truck/karoseri-dump-truck-01.webp",
  // Keunggulan wingbox -> gambar wingbox
  "keunggulan-karoseri-wingbox-logistik":
    "/images/services/karoseri-wing-box/karoseri-wing-box-01.webp",
  // Aluminium vs besi -> gambar box aluminium
  "karoseri-box-aluminium-vs-besi":
    "/images/services/karoseri-box-aluminium/karoseri-box-aluminium-01.webp",
};

for (const [slug, img] of Object.entries(blogImages)) {
  const { error } = await supabase.from("blog_posts").update({ img }).eq("slug", slug);
  if (error) {
    console.error(`❌ Gagal update blog ${slug}:`, error.message);
    process.exit(1);
  }
  console.log(`✅ Update gambar blog ${slug}`);
}

// 2. Kartu Karoseri Lube Truck
{
  const { error } = await supabase
    .from("services")
    .update({
      img: "/images/services/karoseri-lube-truck/karoseri-lube-truck-02.webp",
    })
    .eq("slug", "karoseri-lube-truck");
  if (error) {
    console.error("❌ Gagal update karoseri-lube-truck:", error.message);
    process.exit(1);
  }
  console.log("✅ Update gambar kartu karoseri-lube-truck");
}

console.log("\n🎉 Selesai sinkronisasi berita & lube truck.");
