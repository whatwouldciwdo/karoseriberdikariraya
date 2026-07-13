"use server";

import { createAdminClient } from "@/lib/supabase-admin";
import { revalidatePath } from "next/cache";

export async function createBlogPost(formData: FormData) {
  const admin = createAdminClient();

  const row = {
    slug: formData.get("slug") as string,
    title: formData.get("title") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    img: formData.get("img") as string,
    category: formData.get("category") as string,
    date: formData.get("date") as string,
    read_time: formData.get("read_time") as string,
    featured: formData.get("featured") === "on",
    sort_order: parseInt((formData.get("sort_order") as string) || "0"),
  };

  const { error } = await admin.from("blog_posts").insert(row);
  if (error) return { error: error.message };

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  return { success: true };
}

export async function updateBlogPost(slug: string, formData: FormData) {
  const admin = createAdminClient();

  const row = {
    title: formData.get("title") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    img: formData.get("img") as string,
    category: formData.get("category") as string,
    date: formData.get("date") as string,
    read_time: formData.get("read_time") as string,
    featured: formData.get("featured") === "on",
    sort_order: parseInt((formData.get("sort_order") as string) || "0"),
  };

  const { error } = await admin.from("blog_posts").update(row).eq("slug", slug);
  if (error) return { error: error.message };

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/blog");
  return { success: true };
}

export async function deleteBlogPost(slug: string) {
  const admin = createAdminClient();

  const { error } = await admin.from("blog_posts").delete().eq("slug", slug);
  if (error) return { error: error.message };

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  return { success: true };
}
