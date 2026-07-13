import { supabase } from "@/lib/supabase";
import {
  portfolioProjects as fallbackProjects,
  type PortfolioProject,
  type PortfolioImage,
} from "@/data/portfolio";

export type { PortfolioProject, PortfolioImage };

type PortfolioRow = {
  slug: string;
  short_title: string;
  title: string;
  client: string;
  category: string;
  location: string;
  year: string;
  excerpt: string;
  hero_image: string;
  images: PortfolioImage[];
  meta_title: string;
  meta_description: string;
  keywords: string[];
  highlights: string[];
  content: string;
  sort_order: number;
};

function rowToProject(row: PortfolioRow): PortfolioProject {
  return {
    slug: row.slug,
    shortTitle: row.short_title,
    title: row.title,
    client: row.client,
    category: row.category,
    location: row.location,
    year: row.year,
    excerpt: row.excerpt,
    heroImage: row.hero_image,
    images: row.images ?? [],
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    keywords: row.keywords ?? [],
    highlights: row.highlights ?? [],
    content: row.content,
  };
}

/**
 * Ambil semua proyek portfolio dari Supabase, urut sort_order.
 * Kalau gagal / kosong, jatuh ke data lokal supaya situs tidak kosong.
 */
export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error || !data || data.length === 0) {
    if (error) console.error("getPortfolioProjects fallback:", error.message);
    return fallbackProjects;
  }

  return (data as PortfolioRow[]).map(rowToProject);
}

export async function getPortfolioProjectBySlug(
  slug: string
): Promise<PortfolioProject | null> {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) {
    if (error) console.error("getPortfolioProjectBySlug fallback:", error.message);
    return fallbackProjects.find((p) => p.slug === slug) ?? null;
  }

  return rowToProject(data as PortfolioRow);
}
