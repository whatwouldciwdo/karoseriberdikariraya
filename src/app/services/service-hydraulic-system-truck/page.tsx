import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle, ChevronRight, AlertTriangle,
  Wrench, Settings, Cylinder, Cog, GitBranch, Search,
  Mountain, Tractor, Trees, ArrowDown, ArrowRight,
  Package, Snowflake, Fuel, Droplets, CloudRain, Box, Truck, Hammer, Replace, type LucideIcon,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KonsultasiButton from "@/components/KonsultasiButton";
import { services } from "@/data/services";

const SITE_URL = "https://karoseriberdikariraya.com";

const iconMap: Record<string, LucideIcon> = {
  Package, Snowflake, Settings, Wrench, Fuel, Droplets, CloudRain, Box, Truck, Hammer, Replace, Cylinder,
};


export const metadata: Metadata = {
  title: "Service Hydraulic System Truck | Berdikari Raya Service",
  description:
    "Service, repair, troubleshooting, overhaul, dan upgrade hydraulic system untuk Fuel Truck, Lube Truck, Water Sprayer Truck, dump truck, dan armada industri. Survey & konsultasi gratis.",
  keywords: [
    "service hydraulic system truck",
    "repair hydraulic truck",
    "troubleshooting hydraulic system",
    "overhaul hydraulic pump",
    "service PTO truck",
    "service hydraulic cylinder",
  ],
  alternates: { canonical: `${SITE_URL}/services/service-hydraulic-system-truck` },
  openGraph: {
    title: "Service Hydraulic System Truck | Berdikari Raya Service",
    description:
      "Layanan service hydraulic system truck untuk menjaga armada tetap aman, andal, dan minim downtime.",
    url: `${SITE_URL}/services/service-hydraulic-system-truck`,
    images: [{ url: "/logo/berdikariraya.png", alt: "Service Hydraulic System Truck" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Service Hydraulic System Truck",
  description:
    "Service, repair, troubleshooting, overhaul, dan upgrade hydraulic system untuk kendaraan operasional industri.",
  provider: {
    "@type": "Organization",
    name: "Berdikari Raya Service",
    url: SITE_URL,
  },
  areaServed: "Indonesia",
  serviceType: "Hydraulic System Truck Service & Repair",
};

const highlights = [
  "Service & Repair Hydraulic System",
  "Troubleshooting Kerusakan",
  "Overhaul Hydraulic Pump & Cylinder",
  "Service PTO, Hose & Fitting",
  "Survey & Konsultasi Gratis",
];

const painPoints = [
  "Hydraulic Pump kehilangan tekanan atau suara kerja tidak normal.",
  "PTO tidak berfungsi dengan normal saat sistem dioperasikan.",
  "Hydraulic Cylinder bocor, lemah, atau kehilangan tenaga.",
  "Hydraulic Hose pecah, rembes, atau fitting mengalami kebocoran.",
  "Control Valve macet, berat, atau tidak responsif.",
  "Gerakan sistem hidrolik lambat dan menghambat operasional unit.",
  "Unit sering downtime karena kerusakan hydraulic system berulang.",
  "Membutuhkan pengecekan menyeluruh sebelum kerusakan semakin besar.",
];

const serviceItems = [
  {
    title: "Service Hydraulic Pump",

    desc: "Pemeriksaan, perbaikan, overhaul, penggantian komponen, dan pengujian hydraulic pump agar tekanan kembali optimal.",
    icon: Cog,
  },
  {
    title: "Service Hydraulic Cylinder",
    desc: "Perbaikan cylinder, penggantian seal, perbaikan rod, dan rebuilding untuk mengembalikan performa dorong/angkat.",
    icon: Cylinder,
  },
  {
    title: "Service PTO",
    desc: "Pemeriksaan, perbaikan, instalasi ulang, dan penggantian PTO agar hydraulic system bekerja stabil dan maksimal.",
    icon: GitBranch,
  },
  {
    title: "Hydraulic Hose & Fitting",
    desc: "Penggantian hose, fitting, adaptor, clamp, dan pengecekan titik kebocoran pada jalur hydraulic system.",
    icon: Wrench,
  },
  {
    title: "Troubleshooting Hydraulic System",
    desc: "Analisa menyeluruh untuk menemukan akar masalah sebelum dilakukan repair, overhaul, atau penggantian komponen.",
    icon: Search,
  },
  {
    title: "Upgrade Hydraulic System",
    desc: "Peningkatan performa sistem hidrolik agar sesuai kebutuhan operasional Fuel Truck, Lube Truck, dan Water Sprayer Truck.",
    icon: Settings,
  },
];

const industries = [
  {
    title: "Pertambangan",
    icon: Mountain,
    desc: "Menjaga Fuel Truck, Lube Truck, dan Water Sprayer Truck tetap siap beroperasi di lingkungan tambang dengan intensitas kerja tinggi.",
  },
  {
    title: "Kontraktor Alat Berat & Konstruksi",
    icon: Tractor,
    desc: "Mendukung distribusi bahan bakar, pelumasan alat berat, dan pengendalian debu proyek melalui sistem hidrolik yang andal.",
  },
  {
    title: "Perkebunan",
    icon: Trees,
    desc: "Membantu kendaraan kerja tetap produktif di medan perkebunan yang menantang dengan perawatan hydraulic system profesional.",
  },
];

const whyUs = [
  "Spesialis hydraulic system truck untuk armada industri.",
  "Teknisi berpengalaman dalam analisa kerusakan hydraulic system.",
  "Menggunakan komponen berkualitas dan sesuai kebutuhan unit.",
  "Solusi repair dapat disesuaikan dengan kondisi operasional pelanggan.",
  "Pengerjaan mengutamakan kualitas, keselamatan, dan ketepatan waktu.",
  "Konsultasi teknis untuk menentukan langkah perbaikan paling efektif.",
];

const process = [
  { step: "1", title: "Konsultasi Masalah", desc: "Mengumpulkan informasi gejala kerusakan, jenis unit, dan kondisi operasional." },
  { step: "2", title: "Survey & Pemeriksaan", desc: "Pengecekan hydraulic pump, PTO, cylinder, hose, fitting, valve, dan jalur sistem." },
  { step: "3", title: "Analisa & Rekomendasi", desc: "Menentukan akar kerusakan serta opsi perbaikan yang paling tepat." },
  { step: "4", title: "Penawaran Service", desc: "Menyusun kebutuhan pekerjaan, komponen, estimasi biaya, dan waktu pengerjaan." },
  { step: "5", title: "Repair / Overhaul", desc: "Pengerjaan service dilakukan sesuai standar kualitas dan kebutuhan unit." },
  { step: "6", title: "Testing & Serah Terima", desc: "Sistem diuji untuk memastikan performa kembali optimal sebelum unit digunakan." },
];

export default function ServiceHydraulicSystemTruckPage() {
  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative w-full min-h-[75vh] flex items-end overflow-hidden bg-surface">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80"
          alt="Service Hydraulic System Truck"
          fill
          priority
          quality={60}
          sizes="100vw"
          className="object-cover grayscale brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 px-6 md:px-margin-desktop pb-16 md:pb-24 pt-32 max-w-5xl">
          <div className="flex items-center gap-2 text-btn font-label-md text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-primary truncate">Service Hydraulic System Truck</span>
          </div>
          <p className="font-label-md text-btn text-primary uppercase tracking-widest mb-4">
            Service & Repair Hydraulic System Truck
          </p>
          <h1 className="font-headline-lg text-heading text-primary tracking-tight leading-[1.1] mb-5">
            Service Hydraulic System Truck untuk Armada Industri yang Aman, Andal, dan Minim Downtime
          </h1>
          <p className="font-body-lg text-body text-on-surface-variant max-w-2xl leading-relaxed mb-8">
            Kami melayani perbaikan, troubleshooting, overhaul, dan upgrade hydraulic system untuk Fuel Truck, Lube Truck, Water Sprayer Truck, dan kendaraan kerja industri. Dikerjakan oleh tim berpengalaman untuk memastikan sistem hidrolik kembali bekerja optimal.
          </p>
          <ul className="flex flex-wrap gap-3 mb-8">
            {highlights.map((h) => (
              <li key={h} className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high/70 backdrop-blur-md border border-outline-variant/20 rounded-full font-label-md text-btn text-on-surface-variant">
                <CheckCircle size={15} className="text-red-600 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
          <KonsultasiButton message="Halo, saya ingin konsultasi service Hydraulic System Truck." variant="solid" />
        </div>
      </div>

      <main className="bg-background">
        <section className="px-6 md:px-margin-desktop py-20 md:py-28 border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline-lg text-heading text-primary mb-6 leading-tight">
              Mitra Service Hydraulic System untuk Menjaga Produktivitas Armada
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
            <p className="font-body-lg text-on-surface-variant leading-relaxed mb-6">
              Kerusakan hydraulic system dapat membuat unit berhenti bekerja, menghambat distribusi, dan meningkatkan biaya operasional. Pemeriksaan serta perbaikan yang tepat membantu mencegah downtime berkepanjangan.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              BRS menyediakan layanan service hydraulic system dengan pendekatan profesional: analisa masalah, rekomendasi teknis, pengerjaan terukur, dan testing sebelum unit kembali beroperasi.
            </p>
          </div>
        </section>

        <section className="relative px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="mb-14 text-center">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Tanda Hydraulic System Perlu Segera Diservice</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painPoints.map((p) => (
                <div key={p} className="flex items-start gap-3 bg-surface-container-high/80 backdrop-blur-xl rounded-2xl p-5 border border-outline-variant/15">
                  <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Layanan Service Hydraulic System</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Satu tempat untuk pemeriksaan, perbaikan, overhaul, dan upgrade sistem hidrolik truck operasional perusahaan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceItems.map((s) => (
                <div key={s.title} className="relative bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15 hover:border-red-600/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 group overflow-hidden">

                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-14 h-14 bg-primary/5 border border-outline-variant/30 group-hover:border-red-600/40 text-primary rounded-2xl flex items-center justify-center mb-6 transition-all duration-500">
                    <s.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-headline-md text-heading text-primary mb-3 leading-tight">{s.title}</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-14 text-center">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Melayani Berbagai Industri</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industries.map((ind) => (
                <div key={ind.title} className="flex flex-col bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 bg-primary/5 border border-outline-variant/30 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <ind.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-headline-md text-heading text-primary mb-3 leading-tight">{ind.title}</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Mengapa Service di BRS?</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUs.map((w) => (
                <div key={w} className="flex items-start gap-3 bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15 hover:border-primary/30 transition-all duration-300">
                  <CheckCircle size={22} className="text-red-600 shrink-0 mt-0.5" />
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="mb-14 text-center">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Proses Service</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
            <div className="flex flex-col gap-4">
              {process.map((p, idx) => (
                <div key={p.step} className="flex flex-col items-center">
                  <div className="w-full flex items-start gap-5 bg-surface-container-high rounded-3xl p-6 border border-outline-variant/15">
                    <div className="w-12 h-12 shrink-0 bg-primary text-on-primary rounded-2xl flex items-center justify-center font-headline-sm font-bold">{p.step}</div>
                    <div>
                      <h3 className="font-headline-sm text-heading text-primary mb-1.5 leading-tight">{p.title}</h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                  {idx < process.length - 1 && <ArrowDown size={22} className="text-primary my-1" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto text-center bg-surface-container-high rounded-3xl p-12 border border-outline-variant/15 shadow-sleek relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Konsultasikan Kendala Hydraulic System Anda</h2>
              <p className="font-body-lg text-on-surface-variant text-body mb-8 max-w-xl mx-auto">
                Ceritakan kendala unit Anda kepada tim kami. Kami siap membantu analisa awal dan rekomendasi service yang paling sesuai.
              </p>
              <div className="flex justify-center">
                <KonsultasiButton message="Halo, saya ingin konsultasi service Hydraulic System Truck." variant="solid" />
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
              {services.slice(0, 3).map((rel) => {
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


