import { supabase } from "@/lib/supabase";
import { services as fallbackServices, type ServiceDetail } from "@/data/services";

export type { ServiceDetail };

type ServiceRow = {
  slug: string;
  title: string;
  short_title: string;
  tagline: string;
  desc: string;
  img: string;
  hero_img: string;
  about_img: string;
  hero_alt: string;
  about_alt: string;
  icon: string;
  meta_description: string;
  keywords: string[];
  service_type: string;
  highlights: string[];
  intro: ServiceDetail["intro"];
  pain_point_heading: string;
  pain_points: string[];
  features: string[];
  benefits: ServiceDetail["benefits"];
  use_cases: string[];
  process: ServiceDetail["process"];
  sort_order: number;
};

function rowToService(row: ServiceRow): ServiceDetail {
  return {
    slug: row.slug,
    title: row.title,
    shortTitle: row.short_title,
    tagline: row.tagline,
    desc: row.desc,
    img: row.img,
    heroImg: row.hero_img,
    aboutImg: row.about_img,
    heroAlt: row.hero_alt,
    aboutAlt: row.about_alt,
    icon: row.icon,
    metaDescription: row.meta_description,
    keywords: row.keywords ?? [],
    serviceType: row.service_type,
    highlights: row.highlights ?? [],
    intro: row.intro ?? { heading: "", paragraphs: [] },
    painPointHeading: row.pain_point_heading,
    painPoints: row.pain_points ?? [],
    features: row.features ?? [],
    benefits: row.benefits ?? [],
    useCases: row.use_cases ?? [],
    process: row.process ?? [],
  };
}

/**
 * Ambil semua layanan dari Supabase, urut sort_order.
 * Kalau gagal / kosong, jatuh ke data lokal supaya situs tidak kosong.
 */
export async function getServices(): Promise<ServiceDetail[]> {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error || !data || data.length === 0) {
    if (error) console.error("getServices fallback:", error.message);
    return fallbackServices;
  }

  return (data as ServiceRow[]).map(rowToService);
}

export async function getServiceBySlug(slug: string): Promise<ServiceDetail | null> {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) {
    if (error) console.error("getServiceBySlug fallback:", error.message);
    return fallbackServices.find((s) => s.slug === slug) ?? null;
  }

  return rowToService(data as ServiceRow);
}
