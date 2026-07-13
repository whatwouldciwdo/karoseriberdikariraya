"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase-browser";
import { deleteService } from "@/app/admin/_actions/services";

interface Row {
  slug: string;
  title: string;
  short_title: string;
  service_type: string;
}

export default function AdminServicesPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRows = async () => {
    const supabase = createBrowserSupabaseClient();
    const { data } = await supabase
      .from("services")
      .select("slug, title, short_title, service_type")
      .order("sort_order");
    setRows(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchRows(); }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm(`Hapus layanan "${slug}"?`)) return;
    const result = await deleteService(slug);
    if (result.error) alert(result.error);
    else fetchRows();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Layanan</h1>
          <p className="text-zinc-500 text-sm mt-1">{rows.length} layanan</p>
        </div>
        <Link href="/admin/services/new" className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
          <Plus size={16} /> Tambah Layanan
        </Link>
      </div>

      {loading ? (
        <div className="text-zinc-500 text-center py-16">Memuat...</div>
      ) : rows.length === 0 ? (
        <div className="text-zinc-500 text-center py-16">Belum ada layanan.</div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Judul</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Tipe</th>
                <th className="text-right px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.slug} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-zinc-200">{row.title}</td>
                  <td className="px-6 py-4 text-sm text-zinc-400">{row.service_type}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/services/edit?slug=${row.slug}`} className="p-2 hover:bg-zinc-700 rounded-lg transition-colors text-zinc-400 hover:text-zinc-200">
                        <Pencil size={14} />
                      </Link>
                      <button onClick={() => handleDelete(row.slug)} className="p-2 hover:bg-red-500/10 rounded-lg transition-colors text-zinc-400 hover:text-red-400 cursor-pointer">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
