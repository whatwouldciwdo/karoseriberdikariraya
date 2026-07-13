import { supabase } from "@/lib/supabase";

// ── Type definitions ────────────────────────────────────────────────

export interface ContactPhone {
  name: string;
  phone: string;
  whatsapp_url: string;
}

export interface ContactEmail {
  name: string;
  email: string;
}

export interface CompanyAddress {
  street: string;
  locality: string;
  region: string;
  postal_code: string;
  maps_embed_url: string;
}

export interface CompanyHours {
  weekday: string;
  saturday: string;
  sunday: string;
}

export interface CompanyStat {
  label: string;
  value: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

// ── Fallback defaults (match current hardcoded values) ──────────────

const DEFAULTS: Record<string, unknown> = {
  contact_phones: [
    { name: "Slamet Mulyono", phone: "+62 812-9157-8404", whatsapp_url: "https://wa.me/6281291578404" },
    { name: "Dodo Prasetyo", phone: "+62 821-1348-4129", whatsapp_url: "https://wa.me/6282113484129" },
  ] satisfies ContactPhone[],

  contact_emails: [
    { name: "Slamet Mulyono", email: "slamet.mulyono@berdikariraya.com" },
    { name: "Dodo Prasetyo", email: "dodo.prasetyo@berdikariraya.com" },
  ] satisfies ContactEmail[],

  company_address: {
    street: "Jalan Macem, No 27, RT 002/001, Cikiwul, Kecamatan Bantar Gebang, Kota Bekasi, Jawa Barat, 17152",
    locality: "Bantar Gebang, Bekasi",
    region: "Jawa Barat",
    postal_code: "17152",
    maps_embed_url:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.654854992524!2d106.98188331526362!3d-6.309322395431602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69922a945b6dbd%3A0xc3c5b8b5496d5a10!2sJl.%20Macem%20No.27%2C%20RT.002%2FRW.001%2C%20Cikiwul%2C%20Kec.%20Bantar%20Gebang%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017152!5e0!3m2!1sen!2sid!4v1689000000000!5m2!1sen!2sid",
  } satisfies CompanyAddress,

  company_hours: {
    weekday: "Senin – Jumat: 08.00 – 17.00 WIB",
    saturday: "Sabtu: 08.00 – 15.00 WIB",
    sunday: "Minggu: Tutup",
  } satisfies CompanyHours,

  company_stats: [
    { label: "Tahun Pengalaman", value: "10+" },
    { label: "Proyek Selesai", value: "500+" },
    { label: "Mitra Industri", value: "50+" },
    { label: "Kepuasan Klien", value: "99%" },
  ] satisfies CompanyStat[],

  faq: [
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
  ] satisfies FaqItem[],
};

// ── Query functions ─────────────────────────────────────────────────

/**
 * Ambil satu key dari site_content. Fallback ke default kalau gagal.
 */
export async function getSiteContent<T>(key: string): Promise<T> {
  const { data, error } = await supabase
    .from("site_content")
    .select("value")
    .eq("key", key)
    .maybeSingle();

  if (error || !data) {
    if (error) console.error(`getSiteContent("${key}") fallback:`, error.message);
    return (DEFAULTS[key] ?? null) as T;
  }

  return data.value as T;
}

/**
 * Ambil beberapa key sekaligus dari site_content. Mengurangi round-trip.
 */
export async function getSiteContents<T extends Record<string, unknown>>(
  keys: string[]
): Promise<T> {
  const { data, error } = await supabase
    .from("site_content")
    .select("key, value")
    .in("key", keys);

  const result: Record<string, unknown> = {};

  // Isi dari DB
  if (data && !error) {
    for (const row of data) {
      result[row.key] = row.value;
    }
  } else if (error) {
    console.error("getSiteContents fallback:", error.message);
  }

  // Isi fallback untuk key yang tidak ditemukan
  for (const key of keys) {
    if (!(key in result)) {
      result[key] = DEFAULTS[key] ?? null;
    }
  }

  return result as T;
}

/**
 * Ambil semua site_content (untuk admin panel).
 */
export async function getAllSiteContent(): Promise<Record<string, unknown>> {
  const { data, error } = await supabase
    .from("site_content")
    .select("key, value")
    .order("key");

  if (error || !data || data.length === 0) {
    if (error) console.error("getAllSiteContent fallback:", error.message);
    return { ...DEFAULTS };
  }

  const result: Record<string, unknown> = {};
  for (const row of data) {
    result[row.key] = row.value;
  }
  return result;
}
