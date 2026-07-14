// Temp: list current services rows from Supabase (slug, title, img).
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

const { data, error } = await supabase
  .from("services")
  .select("slug,title,short_title,img,about_img,sort_order")
  .order("sort_order", { ascending: true });

if (error) {
  console.error("❌", error.message);
  process.exit(1);
}

for (const r of data) {
  console.log(`[${r.sort_order}] ${r.slug} | ${r.title}\n     img: ${r.img}\n     about_img: ${r.about_img}`);
}
console.log(`\nTotal: ${data.length} services`);
