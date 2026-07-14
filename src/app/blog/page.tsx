import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getBlogPosts } from "@/lib/queries/blog";

const SITE_URL = "https://karoseriberdikariraya.com";

// ISR: halaman di-cache namun otomatis refresh tiap 60 detik.
// Edit artikel di admin akan tampil tanpa perlu rebuild Netlify.
export const revalidate = 60;


export const metadata: Metadata = {
  title: "News Karoseri Truck | Tips, Panduan & Informasi Industri",
  description:
    "Baca berita dan artikel terbaru seputar karoseri truck, tips perawatan kendaraan niaga, panduan memilih jenis karoseri, dan informasi industri logistik dari Berdikari Raya Service — ahli karoseri di Bekasi & JABODETABEK.",
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
    title: "News Karoseri Truck | Berdikari Raya Service",
    description:
      "Berita, artikel, panduan, dan tips seputar karoseri kendaraan niaga: fuel truck, dump truck, box aluminium, dan lainnya dari spesialis karoseri Bekasi.",
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



export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const [featured, ...rest] = blogPosts;


  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative w-full min-h-[45vh] flex items-end overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-container-high" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-on-background) 2px, transparent 0)', backgroundSize: '48px 48px' }} />
        <div className="relative z-10 px-6 md:px-margin-desktop pb-16 md:pb-24 pt-32 max-w-5xl">
          <p className="font-label-md text-btn text-primary uppercase tracking-widest mb-4">News & Artikel</p>
          <h1 className="font-headline-lg text-heading text-primary tracking-tight leading-[1.1] mb-4">
            Tips, Panduan & Wawasan<br />Dunia Karoseri Truck
          </h1>
          <p className="font-body-lg text-body text-on-surface-variant max-w-2xl leading-relaxed">
            Temukan artikel praktis, panduan teknis, dan informasi terbaru seputar karoseri kendaraan niaga — ditulis oleh tim ahli Berdikari Raya Service untuk mendukung keputusan bisnis Anda.
          </p>
        </div>
      </div>

      <main className="bg-background px-6 md:px-margin-desktop py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16">
            <p className="font-label-md text-btn text-primary uppercase tracking-widest mb-6">Artikel Utama</p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/15 shadow-sleek hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
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
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
                  <span className={`font-label-md text-btn px-3 py-1 rounded-full ${featured.category === "Panduan" ? "bg-primary/5 text-primary border border-outline-variant/20" : categoryColors[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 font-label-md text-btn text-on-surface-variant">
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-headline-md text-heading text-primary mb-4 group-hover:text-primary transition-colors leading-tight break-words hyphens-auto">
                  {featured.title}
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-6 line-clamp-3 break-words">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="font-label-md text-btn text-on-surface-variant">{featured.date}</span>
                  <div className="flex items-center gap-2 text-primary font-label-md text-btn group-hover:gap-4 transition-all">
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
                className={`font-label-md text-btn px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  cat === "Semua"
                    ? "bg-primary text-on-primary border-primary shadow-sm"
                    : "border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary"
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
                className="group flex flex-col bg-surface-container-high rounded-2xl overflow-hidden border border-outline-variant/15 shadow-sleek hover:border-primary/20 hover:-translate-y-2 transition-all duration-300"
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
                    <span className={`font-label-md text-btn px-3 py-1 rounded-full backdrop-blur-md ${post.category === "Panduan" ? "bg-primary/5 text-primary border border-outline-variant/20" : categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
 
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                    <span className="font-label-md text-btn text-on-surface-variant">{post.date}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span className="flex items-center gap-1 font-label-md text-btn text-on-surface-variant">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-primary mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2 break-words hyphens-auto">
                    {post.title}
                  </h2>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed line-clamp-3 flex-1 mb-5 break-words">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-label-md text-btn px-4 py-2 rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-on-primary group-hover:gap-3 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      Baca Selengkapnya
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-24 bg-surface-container-high rounded-3xl p-10 md:p-16 border border-outline-variant/15 shadow-sleek relative overflow-hidden text-center">
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Butuh Konsultasi Karoseri?</h2>
              <p className="font-body-lg text-body text-on-surface-variant max-w-xl mx-auto mb-8">
                Hubungi tim ahli kami untuk mendapatkan saran dan estimasi harga karoseri yang sesuai kebutuhan bisnis Anda—gratis dan tanpa komitmen.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-label-md text-btn hover:bg-[#1ebe5a] transition-all active:scale-95 shadow-lg hover:shadow-[#25D366]/30 border border-outline-variant/10 group cursor-pointer"
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
