import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Check, ChevronRight, CheckCircle, AlertTriangle, ArrowDown,
  Package, Snowflake, Settings, Wrench, Fuel, Droplets, CloudRain, Box, Truck,
  Hammer, Replace, Cylinder, type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KonsultasiButton from "@/components/KonsultasiButton";
import { services, getService } from "@/data/services";

const SITE_URL = "https://karoseriberdikariraya.com";

const iconMap: Record<string, LucideIcon> = {
  Package,
  Snowflake,
  Settings,
  Wrench,
  Fuel,
  Droplets,
  CloudRain,
  Box,
  Truck,
  Hammer,
  Replace,
  Cylinder,
};


type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Layanan Tidak Ditemukan" };
  }

  const url = `${SITE_URL}/services/${service.slug}`;

  return {
    title: `${service.title} | Berdikari Raya Service`,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Berdikari Raya Service`,
      description: service.metaDescription,
      url,
      images: [{ url: service.heroImg, alt: service.heroAlt }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] ?? Package;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Berdikari Raya Service",
      url: SITE_URL,
    },
    areaServed: ["Bekasi", "Jakarta", "Bogor", "Depok", "Tangerang", "Bandung"],
    serviceType: service.serviceType,
    url: `${SITE_URL}/services/${service.slug}`,
    image: service.heroImg,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.shortTitle, item: `${SITE_URL}/services/${service.slug}` },
    ],
  };

  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <div className="relative w-full min-h-[70vh] flex items-end overflow-hidden bg-surface">
        <Image
          src={service.heroImg}
          alt={service.heroAlt}
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover grayscale brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 px-6 md:px-margin-desktop pb-16 md:pb-24 pt-32 max-w-5xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-btn font-label-md text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-primary truncate">{service.shortTitle}</span>
          </nav>
          <p className="font-label-md text-btn text-primary uppercase tracking-widest mb-4">{service.tagline}</p>
          <h1 className="font-headline-lg text-heading text-primary tracking-tight leading-[1.1] mb-5">
            {service.title}
          </h1>
          <p className="font-body-lg text-body text-on-surface-variant max-w-2xl leading-relaxed mb-8">
            {service.desc}
          </p>
          <ul className="flex flex-wrap gap-3 mb-8">
            {service.highlights.map((h) => (
              <li
                key={h}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high/70 backdrop-blur-md border border-outline-variant/20 rounded-full font-label-md text-btn text-on-surface-variant"
              >
                <CheckCircle size={15} className="text-red-600 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
          <KonsultasiButton message={`Halo, saya ingin konsultasi tentang ${service.title}.`} variant="solid" />
        </div>
      </div>

      <main className="bg-background">
        {/* Overview — 2 gambar (hero di atas + about di sini) */}
        <section className="px-6 md:px-margin-desktop py-20 md:py-28 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative order-2 md:order-1">
              <div className="h-[380px] md:h-[500px] bg-surface-container-high rounded-2xl relative overflow-hidden shadow-sleek border border-white/5 group">
                <Image
                  src={service.aboutImg}
                  alt={service.aboutAlt}
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute top-5 right-5 w-14 h-14 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="text-primary" size={26} />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6 order-1 md:order-2">
              <div>
                <h2 className="font-headline-lg text-heading text-primary mb-4 leading-tight">{service.intro.heading}</h2>
                <div className="w-16 h-1.5 bg-primary rounded-full mb-6" />
                {service.intro.paragraphs.map((p, i) => (
                  <p key={i} className="font-body-lg text-on-surface-variant leading-relaxed mb-4">{p}</p>
                ))}
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-on-surface-variant text-btn font-label-md">
                    <Check size={16} className="text-red-600 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <KonsultasiButton message={`Halo, saya ingin tanya tentang ${service.title}.`} variant="solid" />
              </div>
            </div>
          </div>
        </section>

        {/* Pain Point / Kebutuhan */}
        <section className="relative px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="mb-14 text-center">
              <h2 className="font-headline-lg text-heading text-primary mb-4">{service.painPointHeading}</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.painPoints.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 bg-surface-container-high/80 backdrop-blur-xl rounded-2xl p-5 border border-outline-variant/15"
                >
                  <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keunggulan / Benefits */}
        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Keunggulan Layanan Kami</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((b) => (
                <div
                  key={b.title}
                  className="relative bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15 hover:border-red-600/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 group overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-14 h-14 bg-primary/5 border border-outline-variant/30 group-hover:border-red-600/40 text-primary rounded-2xl flex items-center justify-center mb-6 transition-all duration-500">
                    <CheckCircle size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-headline-md text-heading text-primary mb-3 leading-tight">{b.title}</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-12 max-w-2xl">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Cocok Untuk</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full" />
            </div>
            <div className="flex flex-wrap gap-3">
              {service.useCases.map((u) => (
                <span
                  key={u}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-surface-container-high border border-outline-variant/15 rounded-full font-label-md text-btn text-on-surface-variant"
                >
                  <Check size={15} className="text-primary" />
                  {u}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Proses Kerja */}
        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-3xl mx-auto">
            <div className="mb-14 text-center">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Proses Pengerjaan</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
            <div className="flex flex-col gap-4">
              {service.process.map((p, idx) => (
                <div key={p.step} className="flex flex-col items-center">
                  <div className="w-full flex items-start gap-5 bg-surface-container-high rounded-3xl p-6 border border-outline-variant/15">
                    <div className="w-12 h-12 shrink-0 bg-primary text-on-primary rounded-2xl flex items-center justify-center font-headline-sm font-bold">
                      {p.step}
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-heading text-primary mb-1.5 leading-tight">{p.title}</h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                  {idx < service.process.length - 1 && <ArrowDown size={22} className="text-primary my-1" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto text-center bg-surface-container-high rounded-3xl p-12 border border-outline-variant/15 shadow-sleek relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-headline-lg text-heading text-primary mb-4">
                Konsultasikan Kebutuhan {service.shortTitle} Anda
              </h2>
              <p className="font-body-lg text-on-surface-variant text-body mb-8 max-w-xl mx-auto">
                Tim kami siap membantu menentukan solusi yang paling sesuai dengan kebutuhan operasional Anda. Survey &amp; konsultasi gratis, tanpa komitmen.
              </p>
              <div className="flex justify-center">
                <KonsultasiButton message={`Halo, saya ingin konsultasi tentang ${service.title}.`} variant="solid" />
              </div>
            </div>
          </div>
        </section>

        {/* Browse Another Service */}
        <section className="bg-surface-container-lowest px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <p className="font-label-md text-btn text-primary uppercase tracking-widest mb-3">Jelajahi Lainnya</p>
              <h2 className="font-headline-lg text-heading text-primary mb-4">Layanan Lainnya dari Berdikari Raya Service</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((rel) => {
                const RelIcon = iconMap[rel.icon] ?? Package;
                return (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group flex flex-col bg-surface-container-high rounded-2xl overflow-hidden border border-outline-variant/15 shadow-sleek hover:border-red-600/30 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="h-44 relative overflow-hidden">
                      <Image
                        src={rel.img}
                        alt={`Layanan ${rel.title} Berdikari Raya Service`}
                        fill
                        quality={55}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-75 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute top-4 right-4 w-10 h-10 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 rounded-full flex items-center justify-center shadow-lg">
                        <RelIcon className="text-primary" size={18} />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-headline-sm text-heading text-primary mb-3 group-hover:text-primary transition-colors">{rel.title}</h3>
                      <p className="font-body-md text-body text-on-surface-variant line-clamp-2 mb-4 flex-1">{rel.desc}</p>
                      <div className="flex items-center gap-2 text-primary font-label-md text-btn uppercase tracking-wider mt-auto group-hover:gap-4 transition-all">
                        <span>Lihat Layanan</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/40 font-label-md text-btn uppercase tracking-wider transition-all"
              >
                Lihat Semua Layanan
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
