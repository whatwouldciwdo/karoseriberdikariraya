"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X, Loader2, Plus } from "lucide-react";
import { uploadImages } from "@/app/admin/_actions/upload";

const labelCls = "block text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2";

async function upload(files: FileList | File[], folder: string): Promise<string[]> {
  const fd = new FormData();
  fd.set("folder", folder);
  Array.from(files).forEach((f) => fd.append("files", f));
  const res = await uploadImages(fd);
  if (res.error) throw new Error(res.error);
  return res.urls ?? [];
}

// ── Single image uploader (URL string) ──────────────────────────────
export function ImageUploadField({
  label,
  value,
  folder,
  onChange,
}: {
  label: string;
  value: string;
  folder: string;
  onChange: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setBusy(true);
    setError("");
    try {
      const urls = await upload([files[0]], folder);
      if (urls[0]) onChange(urls[0]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload gagal");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <label className={labelCls}>{label}</label>
      <div className="flex items-start gap-3">
        <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center">
          {value ? (
            <Image src={value} alt="" fill sizes="96px" className="object-cover" />
          ) : (
            <span className="text-zinc-600 text-[10px] text-center px-1">Belum ada gambar</span>
          )}
          {busy && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Loader2 className="animate-spin text-white" size={18} />
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <input
            type="url"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="URL gambar atau upload"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-red-500/50"
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={busy}
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-zinc-200 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer"
            >
              <Upload size={14} /> {busy ? "Mengunggah..." : "Upload"}
            </button>
            {value && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="flex items-center gap-1 text-zinc-500 hover:text-red-400 px-2 py-2 rounded-lg text-xs transition-colors cursor-pointer"
              >
                <X size={14} /> Hapus
              </button>
            )}
          </div>
          {error && <p className="text-red-400 text-xs">{error}</p>}
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
    </div>
  );
}

// ── Multi image uploader (array of {src, alt, caption}) ─────────────
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export function MultiImageUploader({
  label,
  value,
  folder,
  onChange,
}: {
  label: string;
  value: GalleryImage[];
  folder: string;
  onChange: (images: GalleryImage[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setBusy(true);
    setError("");
    try {
      const urls = await upload(files, folder);
      onChange([...value, ...urls.map((src) => ({ src, alt: "", caption: "" }))]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload gagal");
    } finally {
      setBusy(false);
    }
  };

  const update = (i: number, patch: Partial<GalleryImage>) => {
    onChange(value.map((img, idx) => (idx === i ? { ...img, ...patch } : img)));
  };

  const remove = (i: number) => onChange(value.filter((_, idx) => idx !== i));

  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= value.length) return;
    const next = [...value];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className={labelCls}>{label} ({value.length})</label>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-zinc-200 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
        >
          {busy ? <Loader2 className="animate-spin" size={14} /> : <Plus size={14} />}
          {busy ? "Mengunggah..." : "Tambah Gambar"}
        </button>
      </div>

      {error && <p className="text-red-400 text-xs mb-2">{error}</p>}

      {value.length === 0 ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full border border-dashed border-zinc-700 rounded-xl py-8 text-zinc-500 hover:border-zinc-600 hover:text-zinc-400 text-sm transition-colors cursor-pointer flex flex-col items-center gap-2"
        >
          <Upload size={20} />
          Klik untuk upload gambar (bisa pilih banyak sekaligus)
        </button>
      ) : (
        <div className="flex flex-col gap-3">
          {value.map((img, i) => (
            <div key={i} className="flex gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
                {img.src && <Image src={img.src} alt="" fill sizes="80px" className="object-cover" />}
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <input
                  value={img.alt}
                  onChange={(e) => update(i, { alt: e.target.value })}
                  placeholder="Alt text (SEO, deskripsi gambar)"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-100 placeholder:text-zinc-600 text-xs focus:outline-none focus:border-red-500/50"
                />
                <input
                  value={img.caption ?? ""}
                  onChange={(e) => update(i, { caption: e.target.value })}
                  placeholder="Caption (opsional)"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-100 placeholder:text-zinc-600 text-xs focus:outline-none focus:border-red-500/50"
                />
              </div>
              <div className="flex flex-col gap-1">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} className="text-zinc-500 hover:text-zinc-200 disabled:opacity-30 text-xs px-2 py-1 cursor-pointer">↑</button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === value.length - 1} className="text-zinc-500 hover:text-zinc-200 disabled:opacity-30 text-xs px-2 py-1 cursor-pointer">↓</button>
                <button type="button" onClick={() => remove(i)} className="text-zinc-500 hover:text-red-400 text-xs px-2 py-1 cursor-pointer"><X size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
