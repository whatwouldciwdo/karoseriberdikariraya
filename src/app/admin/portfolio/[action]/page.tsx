"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase-browser";
import { createPortfolioProject, updatePortfolioProject } from "@/app/admin/_actions/portfolio";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ImageUploadField, MultiImageUploader, type GalleryImage } from "@/components/admin/ImageUploader";

export default function AdminPortfolioFormPage({ params }: { params: Promise<{ action: string }> }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [action, setAction] = useState<string>("");
  const slug = searchParams.get("slug");
  const isEdit = action === "edit" && !!slug;

  const [form, setForm] = useState({
    slug: "", short_title: "", title: "", client: "", category: "",
    location: "", year: "", excerpt: "", hero_image: "",
    meta_title: "", meta_description: "", content: "", sort_order: "0",
  });
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [keywords, setKeywords] = useState("");
  const [highlights, setHighlights] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { params.then((p) => setAction(p.action)); }, [params]);

  useEffect(() => {
    if (isEdit && slug) {
      const supabase = createBrowserSupabaseClient();
      supabase.from("portfolio").select("*").eq("slug", slug).single().then(({ data }) => {
        if (data) {
          setForm({
            slug: data.slug, short_title: data.short_title ?? "", title: data.title ?? "",
            client: data.client ?? "", category: data.category ?? "", location: data.location ?? "",
            year: data.year ?? "", excerpt: data.excerpt ?? "", hero_image: data.hero_image ?? "",
            meta_title: data.meta_title ?? "", meta_description: data.meta_description ?? "",
            content: data.content ?? "", sort_order: String(data.sort_order ?? 0),
          });
          setImages(Array.isArray(data.images) ? data.images : []);
          setKeywords((data.keywords ?? []).join(", "));
          setHighlights((data.highlights ?? []).join("\n"));
        }
      });
    }
  }, [isEdit, slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.set(k, String(v)));
    fd.set("images", JSON.stringify(images));
    fd.set("keywords", JSON.stringify(keywords.split(",").map((s) => s.trim()).filter(Boolean)));
    fd.set("highlights", JSON.stringify(highlights.split("\n").map((s) => s.trim()).filter(Boolean)));

    const result = isEdit ? await updatePortfolioProject(slug!, fd) : await createPortfolioProject(fd);
    if (result.error) { setError(result.error); setLoading(false); return; }
    router.push("/admin/portfolio");
  };

  const inputCls = "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-red-500/50 transition-colors";
  const labelCls = "block text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2";
  const folder = `portfolio/${form.slug || "umum"}`;

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/portfolio" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-2xl font-bold text-zinc-100">{isEdit ? "Edit Proyek" : "Tambah Proyek"}</h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Slug</label>
            <input className={inputCls} value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required disabled={isEdit} placeholder="karoseri-truck-bpkp" />
          </div>
          <div>
            <label className={labelCls}>Kategori</label>
            <input className={inputCls} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Karoseri Truck" />
          </div>
        </div>

        <div>
          <label className={labelCls}>Judul Singkat (kartu/navbar)</label>
          <input className={inputCls} value={form.short_title} onChange={(e) => setForm({ ...form, short_title: e.target.value })} placeholder="Karoseri Truck BPKP" />
        </div>

        <div>
          <label className={labelCls}>Judul Lengkap (H1 / SEO)</label>
          <input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="Pembuatan Karoseri Truck untuk ..." />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Klien</label>
            <input className={inputCls} value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} placeholder="Nama klien" />
          </div>
          <div>
            <label className={labelCls}>Lokasi</label>
            <input className={inputCls} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="JABODETABEK" />
          </div>
          <div>
            <label className={labelCls}>Tahun</label>
            <input className={inputCls} value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} placeholder="2025" />
          </div>
        </div>

        <div>
          <label className={labelCls}>Excerpt (ringkasan kartu)</label>
          <textarea className={inputCls} rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="Ringkasan singkat proyek..." />
        </div>

        <ImageUploadField label="Gambar Utama (Hero)" value={form.hero_image} folder={folder} onChange={(url) => setForm({ ...form, hero_image: url })} />

        <MultiImageUploader label="Galeri Gambar" value={images} folder={folder} onChange={setImages} />

        <div>
          <label className={labelCls}>Konten Artikel (HTML)</label>
          <textarea className={`${inputCls} font-mono text-xs`} rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="<p>Konten artikel proyek...</p>" />
        </div>

        <div>
          <label className={labelCls}>Highlights (satu per baris)</label>
          <textarea className={inputCls} rows={4} value={highlights} onChange={(e) => setHighlights(e.target.value)} placeholder="Kapasitas 10 ton&#10;Material besi grade A" />
        </div>

        <div>
          <label className={labelCls}>Keywords (pisahkan dengan koma)</label>
          <input className={inputCls} value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="karoseri truck, jasa karoseri, karoseri Bekasi" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Meta Title</label>
            <input className={inputCls} value={form.meta_title} onChange={(e) => setForm({ ...form, meta_title: e.target.value })} placeholder="Judul untuk mesin pencari" />
          </div>
          <div>
            <label className={labelCls}>Sort Order</label>
            <input className={inputCls} type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Meta Description</label>
          <textarea className={inputCls} rows={2} value={form.meta_description} onChange={(e) => setForm({ ...form, meta_description: e.target.value })} placeholder="Deskripsi 150-160 karakter untuk SEO" />
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">{error}</div>}

        <button type="submit" disabled={loading} className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer">
          {loading ? "Menyimpan..." : isEdit ? "Update Proyek" : "Simpan Proyek"}
        </button>
      </form>
    </div>
  );
}
