"use server";

import { createAdminClient } from "@/lib/supabase-admin";
import { revalidatePath } from "next/cache";

function parseJsonField(formData: FormData, key: string): unknown {
  const raw = formData.get(key) as string;
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function createPortfolioProject(formData: FormData) {
  const admin = createAdminClient();

  const row = {
    slug: formData.get("slug") as string,
    short_title: formData.get("short_title") as string,
    title: formData.get("title") as string,
    client: formData.get("client") as string,
    category: formData.get("category") as string,
    location: formData.get("location") as string,
    year: formData.get("year") as string,
    excerpt: formData.get("excerpt") as string,
    hero_image: formData.get("hero_image") as string,
    meta_title: formData.get("meta_title") as string,
    meta_description: formData.get("meta_description") as string,
    content: formData.get("content") as string,
    sort_order: parseInt((formData.get("sort_order") as string) || "0"),
    images: parseJsonField(formData, "images"),
    keywords: parseJsonField(formData, "keywords"),
    highlights: parseJsonField(formData, "highlights"),
  };

  const { error } = await admin.from("portfolio").insert(row);
  if (error) return { error: error.message };

  revalidatePath("/portfolio");
  revalidatePath("/admin/portfolio");
  return { success: true };
}

export async function updatePortfolioProject(slug: string, formData: FormData) {
  const admin = createAdminClient();

  const row = {
    short_title: formData.get("short_title") as string,
    title: formData.get("title") as string,
    client: formData.get("client") as string,
    category: formData.get("category") as string,
    location: formData.get("location") as string,
    year: formData.get("year") as string,
    excerpt: formData.get("excerpt") as string,
    hero_image: formData.get("hero_image") as string,
    meta_title: formData.get("meta_title") as string,
    meta_description: formData.get("meta_description") as string,
    content: formData.get("content") as string,
    sort_order: parseInt((formData.get("sort_order") as string) || "0"),
    images: parseJsonField(formData, "images"),
    keywords: parseJsonField(formData, "keywords"),
    highlights: parseJsonField(formData, "highlights"),
  };

  const { error } = await admin.from("portfolio").update(row).eq("slug", slug);
  if (error) return { error: error.message };

  revalidatePath("/portfolio");
  revalidatePath(`/portfolio/${slug}`);
  revalidatePath("/admin/portfolio");
  return { success: true };
}

export async function deletePortfolioProject(slug: string) {
  const admin = createAdminClient();

  const { error } = await admin.from("portfolio").delete().eq("slug", slug);
  if (error) return { error: error.message };

  revalidatePath("/portfolio");
  revalidatePath("/admin/portfolio");
  return { success: true };
}
