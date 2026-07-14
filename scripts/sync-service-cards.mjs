// =====================================================================
// One-off sync: terapkan revisi kartu layanan ke Supabase.
//   1. Box Freezer  -> img: karoseri-box-freezer-03.webp
//   2. Water Sprayer-> img: karoseri-water-sprayer-02.webp
//   3. Water Sprayer-> about_img: karoseri-water-sprayer-03.webp (+ alt)
//   4. Hapus kartu Karoseri Truck Tangki
//
// Cara pakai: node scripts/sync-service-cards.mjs
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

async function update(slug, patch) {
  const { error } = await supabase.from("services").update(patch).eq("slug", slug);
  if (error) {
    console.error(`❌ Gagal update ${slug}:`, error.message);
    process.exit(1);
  }
  console.log(`✅ Update ${slug}`);
}

// 1. Box Freezer thumbnail
await update("karoseri-box-freezer", {
  img: "/images/services/karoseri-box-freezer/karoseri-box-freezer-03.webp",
});

// 2 & 3. Water Sprayer thumbnail + about image + alt
await update("karoseri-water-sprayer", {
  img: "/images/services/water-sprayer/karoseri-water-sprayer-02.webp",
  hero_img: "/images/services/water-sprayer/karoseri-water-sprayer-01.webp",
  about_img: "/images/services/water-sprayer/karoseri-water-sprayer-03.webp",
  about_alt:
    "Karoseri water sprayer truck dengan tangki air besar dan sistem semprotan untuk penyiraman jalan dan pengendalian debu proyek",
});

// 4. Hapus Karoseri Truck Tangki
{
  const { error } = await supabase
    .from("services")
    .delete()
    .eq("slug", "karoseri-truck-tangki");
  if (error) {
    console.error("❌ Gagal hapus karoseri-truck-tangki:", error.message);
    process.exit(1);
  }
  console.log("✅ Hapus karoseri-truck-tangki");
}

console.log("\n🎉 Selesai sinkronisasi kartu layanan.");
