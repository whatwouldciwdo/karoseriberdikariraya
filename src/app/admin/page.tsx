import { createServerSupabaseClient } from "@/lib/supabase-server";
import { FileText, Wrench, FolderOpen, Settings } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

async function getCounts() {
  const [blogRes, servicesRes, portfolioRes, siteContentRes] = await Promise.all([
    supabase.from("blog_posts").select("slug", { count: "exact", head: true }),
    supabase.from("services").select("slug", { count: "exact", head: true }),
    supabase.from("portfolio").select("slug", { count: "exact", head: true }),
    supabase.from("site_content").select("key", { count: "exact", head: true }),
  ]);

  return {
    blog: blogRes.count ?? 0,
    services: servicesRes.count ?? 0,
    portfolio: portfolioRes.count ?? 0,
    siteContent: siteContentRes.count ?? 0,
  };
}

const cards = [
  { key: "blog" as const, label: "Artikel Blog", icon: FileText, href: "/admin/blog", color: "text-blue-400", bg: "bg-blue-500/10" },
  { key: "services" as const, label: "Layanan", icon: Wrench, href: "/admin/services", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { key: "portfolio" as const, label: "Portfolio", icon: FolderOpen, href: "/admin/portfolio", color: "text-purple-400", bg: "bg-purple-500/10" },
  { key: "siteContent" as const, label: "Site Content", icon: Settings, href: "/admin/site-content", color: "text-amber-400", bg: "bg-amber-500/10" },
];

export default async function AdminDashboard() {
  const serverSupabase = await createServerSupabaseClient();
  const { data: { user } } = await serverSupabase.auth.getUser();
  const counts = await getCounts();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-100">Dashboard</h1>
        <p className="text-zinc-500 text-sm mt-1">
          Selamat datang, {user?.email ?? "Admin"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Link
            key={card.key}
            href={card.href}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors group"
          >
            <div className={`w-10 h-10 ${card.bg} rounded-xl flex items-center justify-center mb-4`}>
              <card.icon size={20} className={card.color} />
            </div>
            <p className="text-2xl font-bold text-zinc-100">{counts[card.key]}</p>
            <p className="text-zinc-500 text-sm mt-1">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
