"use server";

import { createAdminClient } from "@/lib/supabase-admin";

const BUCKET = "media";
const MAX_SIZE = 8 * 1024 * 1024; // 8 MB
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif", "image/svg+xml"];

function slugifyName(name: string) {
  const dot = name.lastIndexOf(".");
  const base = (dot === -1 ? name : name.slice(0, dot))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const ext = dot === -1 ? "" : name.slice(dot).toLowerCase();
  return `${base || "image"}${ext}`;
}

/**
 * Upload satu atau banyak gambar ke Supabase Storage (bucket "media").
 * Menerima FormData dengan field "files" (bisa banyak) dan optional "folder".
 * Mengembalikan daftar public URL.
 */
export async function uploadImages(
  formData: FormData
): Promise<{ urls?: string[]; error?: string }> {
  const admin = createAdminClient();
  const folder = (formData.get("folder") as string) || "uploads";
  const files = formData.getAll("files").filter((f): f is File => f instanceof File);

  if (files.length === 0) return { error: "Tidak ada file yang dipilih." };

  const urls: string[] = [];

  for (const file of files) {
    if (file.size > MAX_SIZE) {
      return { error: `File "${file.name}" melebihi 8 MB.` };
    }
    if (file.type && !ALLOWED.includes(file.type)) {
      return { error: `Tipe file "${file.type}" tidak didukung.` };
    }

    const cleanFolder = folder.replace(/[^a-z0-9/_-]/gi, "").replace(/^\/+|\/+$/g, "");
    const path = `${cleanFolder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${slugifyName(file.name)}`;

    const { error } = await admin.storage.from(BUCKET).upload(path, file, {
      cacheControl: "31536000",
      upsert: false,
      contentType: file.type || "application/octet-stream",
    });

    if (error) return { error: error.message };

    const { data } = admin.storage.from(BUCKET).getPublicUrl(path);
    urls.push(data.publicUrl);
  }

  return { urls };
}
