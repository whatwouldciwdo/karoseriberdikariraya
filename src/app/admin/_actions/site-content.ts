"use server";

import { createAdminClient } from "@/lib/supabase-admin";
import { revalidatePath } from "next/cache";

export async function getSiteContent(): Promise<{
  rows?: { key: string; value: unknown }[];
  error?: string;
}> {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from("site_content")
    .select("key, value");
  if (error) return { error: error.message };
  return { rows: data ?? [] };
}

export async function updateSiteContent(key: string, value: unknown) {
  const admin = createAdminClient();

  const { error } = await admin
    .from("site_content")
    .upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: "key" });

  if (error) return { error: error.message };

  // Revalidate semua halaman publik yang pakai site_content
  revalidatePath("/");
  revalidatePath("/contact");
  revalidatePath("/about");
  revalidatePath("/admin/site-content");
  return { success: true };
}
