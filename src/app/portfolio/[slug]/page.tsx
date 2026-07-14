import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Building2,
  MapPin,
  CalendarDays,
  Tag,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getPortfolioProjects,
  getPortfolioProjectBySlug,
} from "@/lib/queries/portfolio";

// ISR: portofolio di-refresh tiap 60 detik tanpa rebuild.
export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://karoseriberdikariraya.com";

export async function generateStaticParams() {
  const portfolioProjects = await getPortfolioProjects();
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioProjectBySlug(slug);


  if (!project) {
    return { title: "Portofolio Tidak Ditemukan" };
  }

  const url = `${SITE_URL}/portfolio/${project.slug}`;

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: project.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url,
      type: "article",
      images: [{ url: project.heroImage, alt: project.title }],
    },
  };
}

export default async function PortfolioDetail({ params }: Props) {
  const { slug } = await params;
  const project = await getPortfolioProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const portfolioProjects = await getPortfolioProjects();
  const currentIndex = portfolioProjects.findIndex((p) => p.slug === project.slug);

  const related = [
    portfolioProjects[(currentIndex + 1) % portfolioProjects.length],
    portfolioProjects[(currentIndex + 2) % portfolioProjects.length],
  ].filter((p) => p.slug !== project.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.metaDescription,
    image: `${SITE_URL}${project.heroImage}`,
    author: { "@type": "Organization", name: "Berdikari Raya Service" },
    publisher: {
      "@type": "Organization",
      name: "Berdikari Raya Service",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo/berdikariraya.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/portfolio/${project.slug}`,
    keywords: project.keywords.join(", "),
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <div className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-margin-desktop overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-btn font-label-md text-on-surface-variant mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/portfolio" className="hover:text-primary transition-colors">Portofolio</Link>
            <ChevronRight size={14} />
            <span className="text-primary truncate">{project.shortTitle}</span>
          </div>

          <div className="mb-10">
            <span className="inline-block px-3 py-1 bg-primary/5 text-primary border border-outline-variant/25 rounded-full font-label-md text-btn uppercase tracking-wider mb-6">
              {project.category}
            </span>
            <h1 className="font-headline-lg text-heading text-primary tracking-tight leading-[1.2] mb-8">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-btn font-label-md text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-primary" />
                {project.client}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {project.location}
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-primary" />
                {project.year}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="px-6 md:px-margin-desktop pb-24">
        <div className="max-w-4xl mx-auto -mt-8 relative z-20">
          {/* Hero Image */}
          <div className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/15 mb-12 relative">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          {/* Highlights */}
          <div className="max-w-3xl mx-auto mb-12 bg-surface-container-high rounded-2xl border border-outline-variant/15 p-6 md:p-8 shadow-sleek">
            <div className="flex items-center gap-2 mb-5">
              <Tag size={16} className="text-primary" />
              <h2 className="font-label-md text-btn text-primary uppercase tracking-widest">Ringkasan Proyek</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 font-body-md text-body text-on-surface-variant">
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article */}
          <article className="prose prose-lg max-w-3xl mx-auto
            prose-headings:font-headline-md prose-headings:text-primary prose-headings:font-normal
            prose-h2:text-heading prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-heading prose-h3:text-primary prose-h3:mt-8
            prose-p:font-body-md prose-p:text-body prose-p:text-on-surface-variant prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-primary hover:prose-a:text-secondary prose-a:transition-colors
            prose-strong:text-primary prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ul:text-on-surface-variant prose-ul:mb-8
            prose-li:mb-2
          ">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </article>

          {/* Gallery */}
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="font-headline-md text-heading text-primary mb-8">Dokumentasi Proyek</h2>
            <div className="flex flex-col gap-8">
              {project.images.map((img, i) => (
                <figure key={img.src} className="flex flex-col gap-3">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-outline-variant/15 shadow-sleek">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 768px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="font-body-md text-body text-on-surface-variant text-center italic">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>

          {/* Back & CTA */}
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-label-md text-btn uppercase tracking-wider cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                <ArrowLeft size={16} />
              </div>
              Kembali ke Portofolio
            </Link>

            <a
              href="https://wa.me/6281291578404"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white rounded-full font-label-md text-btn shadow-lg hover:bg-[#1ebe5a] hover:shadow-[#25D366]/30 transition-all active:scale-95 border border-outline-variant/10 cursor-pointer"
            >
              Konsultasi Proyek Serupa
            </a>
          </div>
        </div>
      </main>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="bg-surface-container-lowest py-20 px-6 md:px-margin-desktop border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="font-headline-md text-heading text-primary mb-4">Proyek Lainnya</h2>
              <div className="w-16 h-1.5 bg-primary rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/portfolio/${rel.slug}`}
                  className="group flex flex-col bg-surface-container-high rounded-2xl overflow-hidden border border-outline-variant/15 shadow-sleek hover:border-primary/20 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={rel.heroImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-75 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="font-label-md text-btn px-3 py-1 bg-surface-container-high/80 text-primary border border-outline-variant/20 backdrop-blur-md rounded-full">
                        {rel.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2 break-words">
                      {rel.title}
                    </h3>
                    <p className="text-sm md:text-base text-on-surface-variant leading-relaxed line-clamp-2 mb-4 flex-1 break-words">
                      {rel.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-label-md text-btn uppercase tracking-wider mt-auto group-hover:gap-4 transition-all">
                      <span>Lihat Proyek</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
