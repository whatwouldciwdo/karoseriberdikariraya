import type { Metadata } from "next";

import {
  Fuel, Droplets, CloudRain, Package, Box, Truck, Hammer, Replace, Cylinder, Snowflake, Wrench, Settings,
  ArrowRight, Check, type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KonsultasiButton from "@/components/KonsultasiButton";
import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/queries/services";

// ISR: layanan di-refresh tiap 60 detik tanpa rebuild.
export const revalidate = 60;

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

export const metadata: Metadata = {
  title: "Layanan Karoseri Truck Bekasi & JABODETABEK",
  description:
    "Jasa karoseri truck lengkap di Bekasi & JABODETABEK: fuel truck, lube truck, water sprayer, box aluminium, box besi, wing box, dump truck, three way truck, truck tangki, box freezer, repair body custom, dan service hydraulic system. Garansi kualitas, harga transparan.",
  keywords: [
    "jasa karoseri truck Bekasi",
    "karoseri fuel truck Jakarta",
    "karoseri box aluminium",
    "karoseri dump truck JABODETABEK",
    "karoseri wing box",
    "karoseri water sprayer",
    "repair body kendaraan niaga",
    "service hydraulic truck",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Layanan Karoseri Truck Bekasi | Berdikari Raya Service",
    description:
      "12 layanan karoseri kendaraan niaga: fuel truck, dump truck, box aluminium, wing box, water sprayer, truck tangki, repair body, dan lainnya. Workshop di Bekasi, melayani JABODETABEK & Bandung.",
    url: `${SITE_URL}/services`,
    images: [{ url: "/logo/berdikariraya.png", alt: "Layanan Karoseri Berdikari Raya" }],
  },
};


export default async function ServicesPage() {
  const servicesList = await getServices();

  const jsonLdServices = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Layanan Karoseri Berdikari Raya Service",
    description: "Daftar lengkap layanan karoseri dan perbaikan kendaraan niaga",
    itemListElement: servicesList.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: s.title,
      url: `${SITE_URL}/services/${s.slug}`,
    })),
  };

  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }}
      />

      {/* Hero Section */}
      <div className="relative w-full min-h-[55vh] flex items-end overflow-hidden bg-surface">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80"
          alt="Layanan Karoseri"
          fill
          priority
          quality={60}
          sizes="(max-width: 1200px) 100vw, 1600px"
          className="object-cover grayscale brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 px-6 md:px-margin-desktop pb-16 md:pb-24 pt-32 max-w-5xl">
          <p className="font-label-md text-btn text-primary uppercase tracking-widest mb-4">Layanan Kami</p>
          <h1 className="font-headline-lg text-heading text-primary tracking-tight leading-[1.1] mb-4">
            Solusi Terintegrasi Karoseri Kendaraan Industri, Logistik, serta Distribusi Perusahaan
          </h1>
          <p className="font-body-lg text-body text-on-surface-variant max-w-2xl leading-relaxed">
            Menyediakan solusi menyeluruh mulai dari konsultasi, perencanaan, pembuatan unit baru hingga perbaikan dan kustomisasi, kami hadir sebagai mitra terpercaya untuk semua kebutuhan kendaraan operasional bisnis.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <main className="bg-background px-6 md:px-margin-desktop py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesList.map((service) => {
            const Icon = iconMap[service.icon] ?? Package;
            return (
              <div
                key={service.slug}
                className="group flex flex-col bg-surface-container-high rounded-xl overflow-hidden shadow-sleek border border-outline-variant/15 hover:border-red-600/30 hover:-translate-y-2 hover:bg-surface-container-highest hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300 relative"
              >
                {/* Red Silhouette top highlight */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Image */}
                <div className="h-52 relative overflow-hidden bg-surface-container">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    quality={55}
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 47vw, 380px"
                    className="object-cover opacity-75 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-11 h-11 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 group-hover:border-red-600/30 rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Icon className="text-primary group-hover:text-red-600 transition-colors" size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <h2 className="font-headline-md font-semibold text-base md:text-2xl text-primary uppercase tracking-wide mb-3 leading-tight">
                    {service.title}
                  </h2>
                  <p className="font-body-md text-base md:text-body text-on-surface-variant leading-relaxed mb-5 flex-1">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-on-surface-variant text-btn">
                        <Check size={14} className="text-red-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 font-label-md text-btn uppercase tracking-wider text-primary border border-outline-variant/30 group-hover:border-red-600/40 rounded-full px-5 py-2.5 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                      aria-label={`Lihat detail layanan ${service.title}`}
                    >
                      Lihat Detail
                      <ArrowRight size={16} />
                    </Link>
                    <KonsultasiButton message={`Halo, saya ingin tanya tentang ${service.title}`} variant="text" />
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* CTA Bottom */}
        <div className="mt-24 max-w-4xl mx-auto text-center bg-surface-container-high rounded-3xl p-12 border border-outline-variant/15 shadow-sleek relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-headline-lg text-heading text-primary mb-4">Tidak Ada di Daftar? Kami Bisa Custom!</h2>
            <p className="font-body-lg text-on-surface-variant text-body mb-8 max-w-xl mx-auto">
              Setiap bisnis punya kebutuhan yang berbeda. Tim kami siap berdiskusi dan merancang solusi karoseri custom sesuai spesifikasi operasional Anda — konsultasi gratis, tanpa komitmen.
            </p>
            <div className="flex justify-center">
              <KonsultasiButton message="Halo, saya ingin konsultasi custom." variant="solid" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
