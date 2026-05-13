import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  const SITE_URL = "https://www.berdikariraya.com";
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: "article",
      publishedTime: post.date, // In production, use ISO format
      images: [{ url: post.img, alt: post.title }],
    },
  };
}

export default function BlogDetail({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Find related articles (just the next two in the array for now, or loop around)
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const relatedPosts = [
    blogPosts[(currentIndex + 1) % blogPosts.length],
    blogPosts[(currentIndex + 2) % blogPosts.length],
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      <ReadingProgress />
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-margin-desktop overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-label-md text-on-surface-variant mb-8">
            <Link href="/" className="hover:text-secondary-container transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-secondary-container transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-secondary-container truncate">{post.category}</span>
          </div>

          {/* Title & Meta */}
          <div className="mb-10">
            <span className="inline-block px-3 py-1 bg-secondary-container/20 text-secondary-container rounded-full font-label-md text-xs uppercase tracking-wider mb-6">
              {post.category}
            </span>
            <h1 className="font-headline-lg text-3xl md:text-5xl text-white tracking-tight leading-[1.2] mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-label-md text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-secondary-container" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-secondary-container" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="px-6 md:px-margin-desktop pb-24">
        <div className="max-w-4xl mx-auto -mt-8 relative z-20">
          {/* Featured Image */}
          <div className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 mb-16 relative">
            <Image 
              src={post.img} 
              alt={post.title} 
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-3xl mx-auto
            prose-headings:font-headline-md prose-headings:text-white prose-headings:font-normal
            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:text-secondary-container prose-h3:mt-8
            prose-p:font-body-md prose-p:text-on-surface-variant prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-secondary-container hover:prose-a:text-white prose-a:transition-colors
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ul:text-on-surface-variant prose-ul:mb-8
            prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-secondary-container prose-blockquote:bg-surface-container/30 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:text-white prose-blockquote:font-body-lg prose-blockquote:italic
          ">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Share & Back */}
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link 
              href="/blog"
              className="group flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors font-label-md text-sm uppercase tracking-wider"
            >
              <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-secondary-container group-hover:bg-secondary-container/10 transition-colors">
                <ArrowLeft size={16} />
              </div>
              Kembali ke Blog
            </Link>

            <a 
              href="https://wa.me/6281291578404"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-surface-container-high border border-white/5 rounded-full text-white font-label-md text-sm hover:border-secondary-container/50 transition-colors"
            >
              Konsultasi Proyek Karoseri
            </a>
          </div>
        </div>
      </main>

      {/* Related Posts */}
      <section className="bg-surface-container-lowest py-20 px-6 md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-headline-md text-3xl text-white mb-4">Baca Juga</h2>
            <div className="w-16 h-1.5 bg-secondary-container rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group flex flex-col bg-surface-container-high rounded-2xl overflow-hidden border border-white/5 shadow-sleek hover:border-secondary-container/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={rel.img}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-75 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-label-md text-xs px-3 py-1 bg-surface-container-high/80 text-secondary-container backdrop-blur-md rounded-full">
                      {rel.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-lg text-white mb-3 group-hover:text-secondary-container transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 mb-4 flex-1">
                    {rel.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-secondary-container font-label-md text-xs uppercase tracking-wider mt-auto group-hover:gap-4 transition-all">
                    <span>Baca Artikel</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
