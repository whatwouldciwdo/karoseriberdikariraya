import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

const SITE_URL = "https://www.berdikariraya.com";

export const metadata: Metadata = {
  title: "Blog Karoseri Truck | Tips, Panduan & Informasi Industri",
  description:
    "Baca artikel terbaru seputar karoseri truck, tips perawatan kendaraan niaga, panduan memilih jenis karoseri, dan informasi industri logistik dari Berdikari Raya Service — ahli karoseri di Bekasi & JABODETABEK.",
  keywords: [
    "artikel karoseri truck",
    "tips perawatan dump truck",
    "panduan karoseri box aluminium",
    "informasi fuel truck",
    "blog karoseri kendaraan niaga",
    "jasa karoseri Bekasi",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog Karoseri Truck | Berdikari Raya Service",
    description:
      "Artikel, panduan, dan tips seputar karoseri kendaraan niaga: fuel truck, dump truck, box aluminium, dan lainnya dari spesialis karoseri Bekasi.",
    url: `${SITE_URL}/blog`,
    images: [{ url: "/logo/berdikariraya.png", alt: "Blog Berdikari Raya Service" }],
  },
};

const categories = ["Semua", "Panduan", "Tips & Trik", "Industri", "Regulasi"];

const categoryColors: Record<string, string> = {
  Panduan: "bg-secondary-container/20 text-secondary-container",
  "Tips & Trik": "bg-primary/10 text-primary",
  Industri: "bg-surface-container-highest text-on-surface-variant",
  Regulasi: "bg-surface-container text-on-surface-variant",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative w-full min-h-[45vh] flex items-end overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-container-high" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '48px 48px' }} />
        <div className="relative z-10 px-6 md:px-margin-desktop pb-16 md:pb-24 pt-32 max-w-5xl">
          <p className="font-label-md text-label-md text-secondary-container uppercase tracking-widest mb-4">Blog & Artikel</p>
          <h1 className="font-headline-lg text-4xl md:text-headline-lg text-white tracking-tight leading-[1.1] mb-4">
            Tips, Panduan & Wawasan<br />Dunia Karoseri Truck
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Temukan artikel praktis, panduan teknis, dan informasi terbaru seputar karoseri kendaraan niaga — ditulis oleh tim ahli Berdikari Raya Service untuk mendukung keputusan bisnis Anda.
          </p>
        </div>
      </div>

      <main className="bg-background px-6 md:px-margin-desktop py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16">
            <p className="font-label-md text-xs text-secondary-container uppercase tracking-widest mb-6">Artikel Utama</p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-surface-container-high rounded-3xl overflow-hidden border border-white/5 shadow-sleek hover:border-secondary-container/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-64 md:h-auto relative overflow-hidden">
                <Image
                  src={featured.img}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-high/60 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent md:hidden" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-label-md text-xs px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 font-label-md text-xs text-on-surface-variant">
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-headline-md text-2xl md:text-3xl text-white mb-4 group-hover:text-secondary-container transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-xs text-on-surface-variant">{featured.date}</span>
                  <div className="flex items-center gap-2 text-secondary-container font-label-md text-sm group-hover:gap-4 transition-all">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 flex-wrap mb-12">
            <Tag size={16} className="text-on-surface-variant" />
            {categories.map((cat) => (
              <button
                key={cat}
                className={`font-label-md text-sm px-4 py-2 rounded-full border transition-all ${
                  cat === "Semua"
                    ? "bg-secondary-container text-white border-secondary-container"
                    : "border-outline-variant/30 text-on-surface-variant hover:border-secondary-container hover:text-secondary-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-surface-container-high rounded-2xl overflow-hidden border border-white/5 shadow-sleek hover:border-secondary-container/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-75 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`font-label-md text-xs px-3 py-1 rounded-full backdrop-blur-md ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-label-md text-xs text-on-surface-variant">{post.date}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span className="flex items-center gap-1 font-label-md text-xs text-on-surface-variant">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-lg text-white mb-3 group-hover:text-secondary-container transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-3 flex-1 mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-secondary-container font-label-md text-xs uppercase tracking-wider mt-auto group-hover:gap-4 transition-all">
                    <span>Baca Artikel</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-24 bg-surface-container-high rounded-3xl p-10 md:p-16 border border-white/5 shadow-sleek relative overflow-hidden text-center">
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-headline-lg text-3xl md:text-4xl text-white mb-4">Butuh Konsultasi Karoseri?</h2>
              <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
                Hubungi tim ahli kami untuk mendapatkan saran dan estimasi harga karoseri yang sesuai kebutuhan bisnis Anda—gratis dan tanpa komitmen.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-label-md text-label-md hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-[#25D366]/20 group"
              >
                Hubungi Kami
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
