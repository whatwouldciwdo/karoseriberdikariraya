import { supabase } from "@/lib/supabase";
import { blogPosts as fallbackPosts, type BlogPost } from "@/data/blog";

export type { BlogPost };

type BlogRow = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  img: string;
  category: string;
  date: string;
  read_time: string;
  featured: boolean;
  sort_order: number;
};

function rowToPost(row: BlogRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    img: row.img,
    category: row.category,
    date: row.date,
    readTime: row.read_time,
    featured: row.featured,
  };
}

/**
 * Ambil semua artikel dari Supabase, urut sort_order.
 * Kalau Supabase gagal / kosong, jatuh ke data lokal (fallback) supaya
 * situs tidak pernah tampil kosong.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error || !data || data.length === 0) {
    if (error) console.error("getBlogPosts fallback:", error.message);
    return fallbackPosts;
  }

  return (data as BlogRow[]).map(rowToPost);
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) {
    if (error) console.error("getBlogPost fallback:", error.message);
    return fallbackPosts.find((p) => p.slug === slug) ?? null;
  }

  return rowToPost(data as BlogRow);
}
