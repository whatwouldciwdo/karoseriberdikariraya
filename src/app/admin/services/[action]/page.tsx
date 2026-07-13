"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase-browser";
import { createService, updateService } from "@/app/admin/_actions/services";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ImageUploadField } from "@/components/admin/ImageUploader";

export default function AdminServiceFormPage({ params }: { params: Promise<{ action: string }> }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [action, setAction] = useState<string>("");
  const slug = searchParams.get("slug");
  const isEdit = action === "edit" && !!slug;

  const [form, setForm] = useState({
    slug: "", title: "", short_title: "", tagline: "", desc: "",
    img: "", hero_img: "", about_img: "", hero_alt: "", about_alt: "",
    icon: "", meta_description: "", service_type: "", pain_point_heading: "", sort_order: "0",
  });
  // JSON fields stored as raw text for editing
  const [json, setJson] = useState({
    keywords: "[]", highlights: "[]", intro: "{}", pain_points: "[]",
    features: "[]", benefits: "[]", use_cases: "[]", process: "[]",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { params.then((p) => setAction(p.action)); }, [params]);

  useEffect(() => {
    if (isEdit && slug) {
      const supabase = createBrowserSupabaseClient();
      supabase.from("services").select("*").eq("slug", slug).single().then(({ data }) => {
        if (data) {
          setForm({
            slug: data.slug, title: data.title ?? "", short_title: data.short_title ?? "",
            tagline: data.tagline ?? "", desc: data.desc ?? "", img: data.img ?? "",
            hero_img: data.hero_img ?? "", about_img: data.about_img ?? "",
            hero_alt: data.hero_alt ?? "", about_alt: data.about_alt ?? "", icon: data.icon ?? "",
            meta_description: data.meta_description ?? "", service_type: data.service_type ?? "",
            pain_point_heading: data.pain_point_heading ?? "", sort_order: String(data.sort_order ?? 0),
          });
          const pretty = (v: unknown, fb: string) => (v == null ? fb : JSON.stringify(v, null, 2));
          setJson({
            keywords: pretty(data.keywords, "[]"),
            highlights: pretty(data.highlights, "[]"),
            intro: pretty(data.intro, "{}"),
            pain_points: pretty(data.pain_points, "[]"),
            features: pretty(data.features, "[]"),
            benefits: pretty(data.benefits, "[]"),
            use_cases: pretty(data.use_cases, "[]"),
            process: pretty(data.process, "[]"),
          });
        }
      });
    }
  }, [isEdit, slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate JSON fields early to avoid saving garbage.
    for (const [k, v] of Object.entries(json)) {
      try { JSON.parse(v); } catch { setError(`Format JSON tidak valid pada field: ${k}`); return; }
    }

    setLoading(true);
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.set(k, String(v)));
    Object.entries(json).forEach(([k, v]) => fd.set(k, v));

    const result = isEdit ? await updateService(slug!, fd) : await createService(fd);
    if (result.error) { setError(result.error); setLoading(false); return; }
    router.push("/admin/services");
  };

  const inputCls = "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-red-500/50 transition-colors";
  const labelCls = "block text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2";
  const folder = `services/${form.slug || "umum"}`;

  const jsonField = (key: keyof typeof json, label: string, hint: string, rows = 5) => (
    <div>
      <label className={labelCls}>{label}</label>
      <p className="text-zinc-600 text-xs mb-2">{hint}</p>
      <textarea className={`${inputCls} font-mono text-xs`} rows={rows} value={json[key]} onChange={(e) => setJson({ ...json, [key]: e.target.value })} />
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/services" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-2xl font-bold text-zinc-100">{isEdit ? "Edit Layanan" : "Tambah Layanan"}</h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Slug</label>
            <input className={inputCls} value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required disabled={isEdit} placeholder="karoseri-box-aluminium" />
          </div>
          <div>
            <label className={labelCls}>Icon (lucide)</label>
            <input className={inputCls} value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} placeholder="Package" />
          </div>
        </div>

        <div>
          <label className={labelCls}>Judul</label>
          <input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="Karoseri Box Aluminium" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Judul Singkat</label>
            <input className={inputCls} value={form.short_title} onChange={(e) => setForm({ ...form, short_title: e.target.value })} placeholder="Box Aluminium" />
          </div>
          <div>
            <label className={labelCls}>Tagline</label>
            <input className={inputCls} value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} placeholder="Ringan, Kuat, dan Profesional" />
          </div>
        </div>

        <div>
          <label className={labelCls}>Deskripsi</label>
          <textarea className={inputCls} rows={3} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} placeholder="Deskripsi layanan..." />
        </div>

        <ImageUploadField label="Gambar Kartu / Thumbnail (img)" value={form.img} folder={folder} onChange={(url) => setForm({ ...form, img: url })} />
        <ImageUploadField label="Gambar Hero" value={form.hero_img} folder={folder} onChange={(url) => setForm({ ...form, hero_img: url })} />
        <ImageUploadField label="Gambar About / Overview" value={form.about_img} folder={folder} onChange={(url) => setForm({ ...form, about_img: url })} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Alt Hero</label>
            <input className={inputCls} value={form.hero_alt} onChange={(e) => setForm({ ...form, hero_alt: e.target.value })} placeholder="Deskripsi gambar hero" />
          </div>
          <div>
            <label className={labelCls}>Alt About</label>
            <input className={inputCls} value={form.about_alt} onChange={(e) => setForm({ ...form, about_alt: e.target.value })} placeholder="Deskripsi gambar about" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Service Type</label>
            <input className={inputCls} value={form.service_type} onChange={(e) => setForm({ ...form, service_type: e.target.value })} placeholder="Aluminium Box Body" />
          </div>
          <div>
            <label className={labelCls}>Heading Pain Point</label>
            <input className={inputCls} value={form.pain_point_heading} onChange={(e) => setForm({ ...form, pain_point_heading: e.target.value })} placeholder="Masalah yang sering dihadapi" />
          </div>
          <div>
            <label className={labelCls}>Sort Order</label>
            <input className={inputCls} type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Meta Description</label>
          <textarea className={inputCls} rows={2} value={form.meta_description} onChange={(e) => setForm({ ...form, meta_description: e.target.value })} placeholder="Deskripsi SEO 150-160 karakter" />
        </div>

        <div className="border-t border-zinc-800 pt-6">
          <p className="text-zinc-300 text-sm font-medium mb-4">Konten Terstruktur (format JSON)</p>
          <div className="flex flex-col gap-5">
            {jsonField("keywords", "Keywords", 'Array string. Contoh: ["karoseri box aluminium", "box aluminium truck"]', 3)}
            {jsonField("highlights", "Highlights", 'Array string. Contoh: ["Material Grade A", "Hemat BBM"]', 3)}
            {jsonField("intro", "Intro", 'Objek: { "heading": "...", "paragraphs": ["...", "..."] }', 6)}
            {jsonField("pain_points", "Pain Points", 'Array string.', 4)}
            {jsonField("features", "Features", 'Array string.', 4)}
            {jsonField("benefits", "Benefits", 'Array objek: [{ "title": "...", "desc": "..." }]', 6)}
            {jsonField("use_cases", "Use Cases", 'Array string.', 4)}
            {jsonField("process", "Process", 'Array objek: [{ "step": "01", "title": "...", "desc": "..." }]', 6)}
          </div>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">{error}</div>}

        <button type="submit" disabled={loading} className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer">
          {loading ? "Menyimpan..." : isEdit ? "Update Layanan" : "Simpan Layanan"}
        </button>
      </form>
    </div>
  );
}
