"use client";

import { useEffect, useState } from "react";
import { getSiteContent, updateSiteContent } from "@/app/admin/_actions/site-content";
import { Save, Loader2 } from "lucide-react";

const KEY_LABELS: Record<string, string> = {
  contact_phones: "Nomor Telepon / WhatsApp",
  contact_emails: "Alamat Email",
  company_address: "Alamat Perusahaan",
  company_hours: "Jam Operasional",
  company_stats: "Statistik Perusahaan",
  faq: "FAQ",
};

// Urutan tampil yang diinginkan; key lain menyusul di belakang.
const KEY_ORDER = [
  "contact_phones", "contact_emails", "company_address",
  "company_hours", "company_stats", "faq",
];

interface Entry {
  key: string;
  text: string;
  original: string;
  saving: boolean;
  message: string;
  error: string;
}

export default function AdminSiteContentPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    getSiteContent().then((res) => {
      if (res.error) {
        setLoadError(res.error);
        setLoading(false);
        return;
      }
      const rows = [...(res.rows ?? [])];
      rows.sort((a, b) => {
        const ia = KEY_ORDER.indexOf(a.key);
        const ib = KEY_ORDER.indexOf(b.key);
        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
      });
      setEntries(
        rows.map((r) => {
          const text = JSON.stringify(r.value, null, 2);
          return { key: r.key, text, original: text, saving: false, message: "", error: "" };
        })
      );
      setLoading(false);
    });
  }, []);

  const patch = (key: string, p: Partial<Entry>) =>
    setEntries((prev) => prev.map((e) => (e.key === key ? { ...e, ...p } : e)));

  const handleSave = async (entry: Entry) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(entry.text);
    } catch {
      patch(entry.key, { error: "Format JSON tidak valid.", message: "" });
      return;
    }
    patch(entry.key, { saving: true, error: "", message: "" });
    const result = await updateSiteContent(entry.key, parsed);
    if (result.error) {
      patch(entry.key, { saving: false, error: result.error });
    } else {
      patch(entry.key, { saving: false, message: "Tersimpan.", original: entry.text });
      setTimeout(() => patch(entry.key, { message: "" }), 2500);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-100">Konten Situs</h1>
        <p className="text-zinc-500 text-sm mt-1">Edit konten global: kontak, alamat, jam, statistik, dan FAQ.</p>
      </div>

      {loading ? (
        <div className="text-zinc-500 text-center py-16">Memuat...</div>
      ) : loadError ? (
        <div className="text-red-400 text-center py-16 max-w-2xl mx-auto">
          Gagal memuat data: {loadError}
          <p className="text-zinc-500 text-xs mt-2">
            Pastikan tabel <code className="text-zinc-400">site_content</code> sudah dibuat (jalankan{" "}
            <code className="text-zinc-400">supabase/03_site_content.sql</code>) dan{" "}
            <code className="text-zinc-400">SUPABASE_SERVICE_ROLE_KEY</code> sudah diisi.
          </p>
        </div>
      ) : entries.length === 0 ? (
        <div className="text-zinc-500 text-center py-16">
          Belum ada data. Jalankan seed <code className="text-zinc-400">supabase/03_site_content.sql</code> lalu{" "}
          <code className="text-zinc-400">npm run migrate:site-content</code> terlebih dahulu.
        </div>
      ) : (
        <div className="flex flex-col gap-6 max-w-3xl">
          {entries.map((entry) => {
            const dirty = entry.text !== entry.original;
            return (
              <div key={entry.key} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h2 className="text-zinc-100 font-medium text-sm">{KEY_LABELS[entry.key] ?? entry.key}</h2>
                    <p className="text-zinc-600 text-xs font-mono">{entry.key}</p>
                  </div>
                  <button
                    onClick={() => handleSave(entry)}
                    disabled={entry.saving || !dirty}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 disabled:opacity-40 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                  >
                    {entry.saving ? <Loader2 className="animate-spin" size={14} /> : <Save size={14} />}
                    {entry.saving ? "Menyimpan..." : "Simpan"}
                  </button>
                </div>
                <textarea
                  value={entry.text}
                  onChange={(e) => patch(entry.key, { text: e.target.value })}
                  rows={Math.min(20, entry.text.split("\n").length + 1)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 font-mono text-xs focus:outline-none focus:border-red-500/50 transition-colors"
                  spellCheck={false}
                />
                {entry.error && <p className="text-red-400 text-xs mt-2">{entry.error}</p>}
                {entry.message && <p className="text-emerald-400 text-xs mt-2">{entry.message}</p>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
