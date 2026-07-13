// =====================================================================
// Convert foto layanan (JPEG/WhatsApp) menjadi .webp dengan nama file
// yang SEO-friendly, lalu simpan ke folder ber-slug.
//
// Sumber : public/images/services/<Nama Folder>/*.jpeg
// Output : public/images/services/<slug>/<seo-name>-NN.webp
//
// Cara pakai:
//   node scripts/convert-service-images.mjs
// =====================================================================
import sharp from "sharp";
import { readdirSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SERVICES_DIR = join(ROOT, "public", "images", "services");

// Mapping folder sumber -> folder output (slug) + basis nama file SEO.
const folderMap = [
  { dir: "Box Alumunium", out: "karoseri-box-aluminium", base: "karoseri-box-aluminium" },
  { dir: "Box Besi", out: "karoseri-box-besi", base: "karoseri-box-besi" },
  { dir: "Box Freezer", out: "karoseri-box-freezer", base: "karoseri-box-freezer" },
  { dir: "Custom", out: "body-custom", base: "body-custom-kendaraan-niaga" },
  { dir: "Dump Truck", out: "karoseri-dump-truck", base: "karoseri-dump-truck" },
  { dir: "Fuel Truck", out: "karoseri-fuel-truck", base: "karoseri-fuel-truck" },
  { dir: "Instalasi Hydraulic", out: "hydraulic-system-truck", base: "instalasi-hydraulic-system-truck" },
  { dir: "Lube Truck", out: "karoseri-lube-truck", base: "karoseri-lube-truck" },
  { dir: "Repair", out: "karoseri-repair", base: "karoseri-repair" },
  { dir: "Service Hydraulic", out: "hydraulic-system-truck", base: "service-hydraulic-system-truck" },
  { dir: "Three Way", out: "karoseri-three-way-truck", base: "karoseri-three-way-truck" },
  { dir: "Wing Box", out: "karoseri-wing-box", base: "karoseri-wing-box" },
];

const IMG_EXT = /\.(jpe?g|png|webp)$/i;

let total = 0;

for (const { dir, out, base } of folderMap) {
  const srcDir = join(SERVICES_DIR, dir);
  let files;
  try {
    files = readdirSync(srcDir)
      .filter((f) => IMG_EXT.test(f))
      .sort();
  } catch {
    console.warn(`⚠️  Lewati (folder tidak ada): ${dir}`);
    continue;
  }

  if (files.length === 0) {
    console.warn(`⚠️  Tidak ada gambar di: ${dir}`);
    continue;
  }

  const outDir = join(SERVICES_DIR, out);
  mkdirSync(outDir, { recursive: true });

  let idx = 0;
  for (const file of files) {
    idx += 1;
    const suffix = String(idx).padStart(2, "0");
    const outName = `${base}-${suffix}.webp`;
    const srcPath = join(srcDir, file);
    const outPath = join(outDir, outName);

    await sharp(srcPath)
      .rotate() // hormati EXIF orientation
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);

    const kb = (statSync(outPath).size / 1024).toFixed(0);
    console.log(`✅ ${dir}/${file}  ->  services/${out}/${outName}  (${kb} KB)`);
    total += 1;
  }
}

console.log(`\n🎉 Selesai. ${total} gambar dikonversi ke .webp.`);
