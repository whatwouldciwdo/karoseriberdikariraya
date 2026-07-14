// One-off: convert the Gemini PNG into karoseri-water-sprayer-03.webp
import sharp from "sharp";
import { statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const src = join(
  ROOT,
  "public/images/services/karoseri-lube-truck/Gemini_Generated_Image_hskdmdhskdmdhskd-clean.png"
);
const out = join(
  ROOT,
  "public/images/services/water-sprayer/karoseri-water-sprayer-03.webp"
);

await sharp(src)
  .rotate()
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(out);

const kb = (statSync(out).size / 1024).toFixed(0);
console.log(`✅ ${out} (${kb} KB)`);
