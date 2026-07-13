"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase-browser";
import { deleteBlogPost } from "@/app/admin/_actions/blog";

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  featured: boolean;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const supabase = createBrowserSupabaseClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("slug, title, category, date, featured")
      .order("sort_order");
    setPosts(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm(`Hapus artikel "${slug}"?`)) return;
    const result = await deleteBlogPost(slug);
    if (result.error) alert(result.error);
    else fetchPosts();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Blog</h1>
          <p className="text-zinc-500 text-sm mt-1">{posts.length} artikel</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
        >
          <Plus size={16} /> Tambah Artikel
        </Link>
      </div>

      {loading ? (
        <div className="text-zinc-500 text-center py-16">Memuat...</div>
      ) : posts.length === 0 ? (
        <div className="text-zinc-500 text-center py-16">Belum ada artikel.</div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Judul</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Kategori</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Tanggal</th>
                <th className="text-right px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.slug} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-200">{post.title}</span>
                      {post.featured && <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full font-medium">Featured</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400">{post.category}</td>
                  <td className="px-6 py-4 text-sm text-zinc-500">{post.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/blog/edit?slug=${post.slug}`} className="p-2 hover:bg-zinc-700 rounded-lg transition-colors text-zinc-400 hover:text-zinc-200">
                        <Pencil size={14} />
                      </Link>
                      <button onClick={() => handleDelete(post.slug)} className="p-2 hover:bg-red-500/10 rounded-lg transition-colors text-zinc-400 hover:text-red-400 cursor-pointer">
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
