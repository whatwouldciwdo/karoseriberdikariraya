"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase-browser";
import { createBlogPost, updateBlogPost } from "@/app/admin/_actions/blog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ImageUploadField } from "@/components/admin/ImageUploader";

export default function AdminBlogFormPage({ params }: { params: Promise<{ action: string }> }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [action, setAction] = useState<string>("");
  const slug = searchParams.get("slug");
  const isEdit = action === "edit" && !!slug;

  const [form, setForm] = useState({
    slug: "", title: "", excerpt: "", content: "", img: "",
    category: "", date: "", read_time: "", featured: false, sort_order: "0",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    params.then((p) => setAction(p.action));
  }, [params]);

  useEffect(() => {
    if (isEdit && slug) {
      const supabase = createBrowserSupabaseClient();
      supabase.from("blog_posts").select("*").eq("slug", slug).single().then(({ data }) => {
        if (data) setForm({
          slug: data.slug, title: data.title, excerpt: data.excerpt,
          content: data.content, img: data.img, category: data.category,
          date: data.date, read_time: data.read_time, featured: data.featured,
          sort_order: String(data.sort_order ?? 0),
        });
      });
    }
  }, [isEdit, slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (k === "featured") formData.set(k, v ? "on" : "off");
      else formData.set(k, String(v));
    });

    const result = isEdit
      ? await updateBlogPost(slug!, formData)
      : await createBlogPost(formData);

    if (result.error) { setError(result.error); setLoading(false); return; }
    router.push("/admin/blog");
  };

  const inputCls = "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-red-500/50 transition-colors";
  const labelCls = "block text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2";

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blog" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-2xl font-bold text-zinc-100">
          {isEdit ? "Edit Artikel" : "Tambah Artikel"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Slug</label>
            <input className={inputCls} value={form.slug} onChange={(e) => setForm({...form, slug: e.target.value})} required disabled={isEdit} placeholder="judul-artikel" />
          </div>
          <div>
            <label className={labelCls}>Kategori</label>
            <input className={inputCls} value={form.category} onChange={(e) => setForm({...form, category: e.target.value})} placeholder="Karoseri" />
          </div>
        </div>

        <div>
          <label className={labelCls}>Judul</label>
          <input className={inputCls} value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} required placeholder="Judul Artikel" />
        </div>

        <div>
          <label className={labelCls}>Excerpt</label>
          <textarea className={inputCls} rows={3} value={form.excerpt} onChange={(e) => setForm({...form, excerpt: e.target.value})} placeholder="Ringkasan singkat..." />
        </div>

        <div>
          <label className={labelCls}>Konten (HTML)</label>
          <textarea className={`${inputCls} font-mono text-xs`} rows={15} value={form.content} onChange={(e) => setForm({...form, content: e.target.value})} placeholder="<p>Konten artikel...</p>" />
        </div>

        <ImageUploadField label="Gambar Utama" value={form.img} folder={`blog/${form.slug || "umum"}`} onChange={(url) => setForm({ ...form, img: url })} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Tanggal</label>
            <input className={inputCls} type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} />
          </div>
          <div>
            <label className={labelCls}>Waktu Baca</label>
            <input className={inputCls} value={form.read_time} onChange={(e) => setForm({...form, read_time: e.target.value})} placeholder="5 menit" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Sort Order</label>
            <input className={inputCls} type="number" value={form.sort_order} onChange={(e) => setForm({...form, sort_order: e.target.value})} />
          </div>
          <div className="flex items-center gap-3 pt-6">
            <input type="checkbox" id="featured" checked={form.featured} onChange={(e) => setForm({...form, featured: e.target.checked})} className="w-4 h-4 accent-red-500" />
            <label htmlFor="featured" className="text-zinc-400 text-sm">Featured</label>
          </div>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">{error}</div>}

        <button type="submit" disabled={loading} className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer">
          {loading ? "Menyimpan..." : isEdit ? "Update Artikel" : "Simpan Artikel"}
        </button>
      </form>
    </div>
  );
}
