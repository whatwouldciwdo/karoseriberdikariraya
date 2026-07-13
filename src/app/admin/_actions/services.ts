"use server";

import { createAdminClient } from "@/lib/supabase-admin";
import { revalidatePath } from "next/cache";

function parseJsonField(formData: FormData, key: string): unknown {
  const raw = formData.get(key) as string;
  if (!raw) return key === "intro" ? {} : [];
  try {
    return JSON.parse(raw);
  } catch {
    return key === "intro" ? {} : [];
  }
}

export async function createService(formData: FormData) {
  const admin = createAdminClient();

  const row = {
    slug: formData.get("slug") as string,
    title: formData.get("title") as string,
    short_title: formData.get("short_title") as string,
    tagline: formData.get("tagline") as string,
    desc: formData.get("desc") as string,
    img: formData.get("img") as string,
    hero_img: formData.get("hero_img") as string,
    about_img: formData.get("about_img") as string,
    hero_alt: formData.get("hero_alt") as string,
    about_alt: formData.get("about_alt") as string,
    icon: formData.get("icon") as string,
    meta_description: formData.get("meta_description") as string,
    service_type: formData.get("service_type") as string,
    pain_point_heading: formData.get("pain_point_heading") as string,
    sort_order: parseInt((formData.get("sort_order") as string) || "0"),
    keywords: parseJsonField(formData, "keywords"),
    highlights: parseJsonField(formData, "highlights"),
    intro: parseJsonField(formData, "intro"),
    pain_points: parseJsonField(formData, "pain_points"),
    features: parseJsonField(formData, "features"),
    benefits: parseJsonField(formData, "benefits"),
    use_cases: parseJsonField(formData, "use_cases"),
    process: parseJsonField(formData, "process"),
  };

  const { error } = await admin.from("services").insert(row);
  if (error) return { error: error.message };

  revalidatePath("/services");
  revalidatePath("/admin/services");
  return { success: true };
}

export async function updateService(slug: string, formData: FormData) {
  const admin = createAdminClient();

  const row = {
    title: formData.get("title") as string,
    short_title: formData.get("short_title") as string,
    tagline: formData.get("tagline") as string,
    desc: formData.get("desc") as string,
    img: formData.get("img") as string,
    hero_img: formData.get("hero_img") as string,
    about_img: formData.get("about_img") as string,
    hero_alt: formData.get("hero_alt") as string,
    about_alt: formData.get("about_alt") as string,
    icon: formData.get("icon") as string,
    meta_description: formData.get("meta_description") as string,
    service_type: formData.get("service_type") as string,
    pain_point_heading: formData.get("pain_point_heading") as string,
    sort_order: parseInt((formData.get("sort_order") as string) || "0"),
    keywords: parseJsonField(formData, "keywords"),
    highlights: parseJsonField(formData, "highlights"),
    intro: parseJsonField(formData, "intro"),
    pain_points: parseJsonField(formData, "pain_points"),
    features: parseJsonField(formData, "features"),
    benefits: parseJsonField(formData, "benefits"),
    use_cases: parseJsonField(formData, "use_cases"),
    process: parseJsonField(formData, "process"),
  };

  const { error } = await admin.from("services").update(row).eq("slug", slug);
  if (error) return { error: error.message };

  revalidatePath("/services");
  revalidatePath(`/services/${slug}`);
  revalidatePath("/admin/services");
  return { success: true };
}

export async function deleteService(slug: string) {
  const admin = createAdminClient();

  const { error } = await admin.from("services").delete().eq("slug", slug);
  if (error) return { error: error.message };

  revalidatePath("/services");
  revalidatePath("/admin/services");
  return { success: true };
}
