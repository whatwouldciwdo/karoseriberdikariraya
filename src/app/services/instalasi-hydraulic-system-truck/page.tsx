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
  title: "Instalasi Hydraulic System Truck | Berdikari Raya Service",
  description:
    "Spesialis Instalasi Baru & Service Hydraulic System untuk Fuel Truck, Lube Truck, dan Water Sprayer Truck untuk Pertambangan, Kontraktor Alat Berat & Konstruksi, Perkebunan. Melayani instalasi baru, perbaikan, troubleshooting, dan upgrade hydraulic system.",
  keywords: [
    "instalasi hydraulic system truck",
    "hydraulic system fuel truck",
    "hydraulic system lube truck",
    "hydraulic system water sprayer truck",
    "instalasi hidrolik pertambangan",
    "custom hydraulic engineering",
    "service hydraulic pump",
  ],
  alternates: { canonical: `${SITE_URL}/services/instalasi-hydraulic-system-truck` },
  openGraph: {
    title: "Instalasi Hydraulic System Truck | Berdikari Raya Service",
    description:
      "Solusi Hydraulic System yang andal untuk mendukung operasional Pertambangan, Kontraktor Alat Berat & Konstruksi, serta Perkebunan.",
    url: `${SITE_URL}/services/instalasi-hydraulic-system-truck`,
    images: [{ url: "/logo/berdikariraya.png", alt: "Instalasi Hydraulic System Truck" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Instalasi Hydraulic System Truck",
  description:
    "Spesialis instalasi baru dan service hydraulic system untuk Fuel Truck, Lube Truck, dan Water Sprayer Truck untuk industri pertambangan, kontraktor alat berat & konstruksi, serta perkebunan.",
  provider: {
    "@type": "Organization",
    name: "Berdikari Raya Service",
    url: SITE_URL,
  },
  areaServed: "Indonesia",
  serviceType: "Hydraulic System Installation & Service",
};

const highlights = [
  "Instalasi Baru",
  "Service & Repair Hydraulic System",
  "Troubleshooting & Overhaul",
  "Custom Hydraulic Engineering",
  "Survey & Konsultasi Gratis",
];

const painPoints = [
  "Hydraulic Pump kehilangan tekanan.",
  "PTO tidak berfungsi dengan normal.",
  "Hydraulic Cylinder bocor atau kehilangan tenaga.",
  "Hydraulic Hose sering pecah atau mengalami kebocoran.",
  "Control Valve macet atau tidak responsif.",
  "Sistem hidrolik bekerja lambat sehingga menghambat operasional.",
  "Unit sering mengalami downtime akibat kerusakan hydraulic system.",
  "Membutuhkan instalasi hydraulic system baru untuk armada operasional.",
];

const solutions = [
  {
    title: "Instalasi Hydraulic System Baru",
    desc: "Perencanaan dan instalasi hydraulic system yang disesuaikan dengan spesifikasi kendaraan serta kebutuhan operasional perusahaan.",
    icon: Settings,
  },
  {
    title: "Service Hydraulic Pump",
    desc: "Perbaikan, overhaul, penggantian, dan pengujian hydraulic pump agar kembali menghasilkan tekanan optimal.",
    icon: Cog,
  },
  {
    title: "Service Hydraulic Cylinder",
    desc: "Perbaikan cylinder, penggantian seal, rod, hingga proses rebuilding untuk mengembalikan performa hydraulic system.",
    icon: Cylinder,
  },
  {
    title: "Service PTO",
    desc: "Pemeriksaan, instalasi, perbaikan, dan penggantian PTO agar sistem hydraulic bekerja maksimal.",
    icon: GitBranch,
  },
  {
    title: "Hydraulic Hose & Fitting",
    desc: "Penggantian hydraulic hose, fitting, adaptor, serta pemeriksaan kebocoran sistem.",
    icon: Wrench,
  },
  {
    title: "Troubleshooting Hydraulic System",
    desc: "Analisa kerusakan secara menyeluruh untuk menemukan akar permasalahan sebelum dilakukan perbaikan.",
    icon: Search,
  },
];

const industries = [
  {
    title: "Pertambangan",
    icon: Mountain,
    desc: "Mendukung operasional Fuel Truck, Lube Truck, dan Water Sprayer Truck agar selalu siap bekerja di lingkungan tambang yang memiliki tingkat operasional tinggi.",
  },
  {
    title: "Kontraktor Alat Berat & Konstruksi",
    icon: Tractor,
    desc: "Hydraulic system yang andal membantu mempercepat distribusi bahan bakar, pelumasan alat berat, serta pengendalian debu di area proyek.",
  },
  {
    title: "Perkebunan",
    icon: Trees,
    desc: "Menyediakan solusi hydraulic system yang mendukung aktivitas operasional kendaraan kerja di area perkebunan dengan kondisi medan yang menantang.",
  },
];

const whyUs = [
  {
    title: "Spesialis Hydraulic System Truck",
    desc: "Fokus pada instalasi dan service hydraulic system untuk kendaraan operasional industri.",
  },
  {
    title: "Tim Berpengalaman",
    desc: "Dikerjakan oleh teknisi yang memahami berbagai sistem hydraulic truck.",
  },
  {
    title: "Komponen Berkualitas",
    desc: "Menggunakan komponen yang telah teruji untuk mendukung performa dan umur pakai yang lebih panjang.",
  },
  {
    title: "Custom Engineering",
    desc: "Setiap sistem dapat disesuaikan dengan kebutuhan operasional pelanggan.",
  },
  {
    title: "Pengerjaan Tepat Waktu",
    desc: "Kami memahami bahwa downtime armada berdampak langsung terhadap produktivitas bisnis.",
  },
  {
    title: "Layanan Konsultasi",
    desc: "Membantu menentukan solusi hydraulic system yang paling sesuai dengan kebutuhan perusahaan.",
  },
];

const process = [
  { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami jenis kendaraan, kebutuhan operasional, serta permasalahan yang dihadapi." },
  { step: "2", title: "Survey & Analisa", desc: "Pemeriksaan unit secara menyeluruh untuk menentukan solusi terbaik." },
  { step: "3", title: "Penawaran Harga", desc: "Penyusunan proposal teknis beserta penawaran sesuai kebutuhan." },
  { step: "4", title: "Pengerjaan", desc: "Instalasi atau perbaikan dilakukan sesuai standar kualitas." },
  { step: "5", title: "Testing & Quality Control", desc: "Seluruh sistem diuji sebelum unit diserahkan kepada pelanggan." },
  { step: "6", title: "Unit Siap Beroperasi", desc: "Armada kembali siap digunakan dengan performa optimal." },
];

export default function InstalasiHydraulicSystemTruckPage() {
  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="relative w-full min-h-[75vh] flex items-end overflow-hidden bg-surface">
        <Image
          src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1600&q=80"
          alt="Instalasi Hydraulic System Truck"
          fill
          priority
          quality={60}
          sizes="100vw"
          className="object-cover grayscale brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 px-6 md:px-margin-desktop pb-16 md:pb-24 pt-32 max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-btn font-label-md text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-primary truncate">Instalasi Hydraulic System Truck</span>
          </div>
          <p className="font-label-md text-btn text-primary uppercase tracking-widest mb-4">
            Spesialis Hydraulic System Truck
          </p>
          <h1 className="font-headline-lg text-heading text-primary tracking-tight leading-[1.1] mb-5">
            Spesialis Instalasi Baru &amp; Service Hydraulic System untuk Fuel Truck, Lube Truck, dan Water Sprayer Truck
          </h1>
          <p className="font-body-lg text-body text-on-surface-variant max-w-2xl leading-relaxed mb-8">
            Solusi Hydraulic System yang andal untuk mendukung operasional Pertambangan, Kontraktor Alat Berat &amp; Konstruksi, serta Perkebunan. Kami melayani instalasi baru, perbaikan, troubleshooting, overhaul, hingga upgrade hydraulic system agar armada selalu siap beroperasi dengan aman, andal, dan minim downtime.
          </p>
          <ul className="flex flex-wrap gap-3 mb-8">
            {highlights.map((h) => (
              <li
                key={h}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high/70 backdrop-blur-md border border-outline-variant/20 rounded-full font-label-md text-btn text-on-surface-variant"
              >
                <CheckCircle size={15} className="text-red-600 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
          <KonsultasiButton
            message="Halo, saya ingin konsultasi kebutuhan Hydraulic System untuk truck operasional saya."
            variant="solid"
          />
        </div>
      </div>

      <main className="bg-background">
        {/* Trust Section */}
        <section className="px-6 md:px-margin-desktop py-20 md:py-28 border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline-lg text-heading text-primary mb-6 leading-tight">
              Dipercaya Berbagai Perusahaan untuk Mendukung Operasional Armada Industri
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
            <p className="font-body-lg text-on-surface-variant leading-relaxed mb-6">
              Hydraulic system merupakan komponen penting yang menentukan kelancaran operasional kendaraan kerja. Kerusakan pada sistem hidrolik dapat menyebabkan armada berhenti beroperasi, menghambat produktivitas, serta meningkatkan biaya operasional.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              BRS hadir sebagai mitra profesional yang menyediakan layanan instalasi dan service hydraulic system dengan standar pengerjaan yang mengutamakan kualitas, keselamatan, dan keandalan.
            </p>
          </div>
        </section>

        {/* Pain Point Section */}
        <section className="relative px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="mb-14 text-center">
              <h2 className="font-headline-lg text-heading text-primary mb-4">
                Apakah Anda Mengalami Kendala Seperti Berikut?
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painPoints.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 bg-surface-container-high/80 backdrop-blur-xl rounded-2xl p-5 border border-outline-variant/15"
                >
                  <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
            <p className="font-body-lg text-on-surface-variant leading-relaxed text-center mt-12 max-w-2xl mx-auto">
              Jika salah satu masalah tersebut terjadi, segera lakukan pemeriksaan sebelum mengganggu produktivitas perusahaan.
            </p>
          </div>
        </section>

        {/* Solusi Section */}
        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <h2 className="font-headline-lg text-heading text-primary mb-4">
                Solusi Hydraulic System yang Lengkap dalam Satu Tempat
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Kami menyediakan layanan lengkap mulai dari instalasi baru hingga perbaikan hydraulic system untuk berbagai kebutuhan armada industri.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((s) => (
                <div
                  key={s.title}
                  className="relative bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15 hover:border-red-600/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 group overflow-hidden"
                >
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

        {/* Target Industri */}
        <section className="relative px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-14 text-center">
              <h2 className="font-headline-lg text-heading text-primary mb-4">
                Solusi Hydraulic System untuk Berbagai Industri
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industries.map((ind) => (
                <div
                  key={ind.title}
                  className="flex flex-col bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500"
                >
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

        {/* Mengapa Memilih BRS */}
        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <h2 className="font-headline-lg text-heading text-primary mb-4">
                Mengapa Memilih Berdikari Raya Service?
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUs.map((w) => (
                <div
                  key={w.title}
                  className="flex flex-col bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle size={22} className="text-red-600 shrink-0" />
                    <h3 className="font-headline-sm text-heading text-primary leading-tight">{w.title}</h3>
                  </div>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proses Kerja */}
        <section className="relative px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="mb-14 text-center">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Proses Pengerjaan</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
            <div className="flex flex-col gap-4">
              {process.map((p, idx) => (
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
                  {idx < process.length - 1 && (
                    <ArrowDown size={22} className="text-primary my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto text-center bg-surface-container-high rounded-3xl p-12 border border-outline-variant/15 shadow-sleek relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-headline-lg text-heading text-primary mb-4">
                Konsultasikan Kebutuhan Hydraulic System Anda
              </h2>
              <p className="font-body-lg text-on-surface-variant text-body mb-8 max-w-xl mx-auto">
                Tim kami siap membantu menentukan solusi hydraulic system yang paling sesuai dengan kebutuhan armada Anda. Survey &amp; konsultasi gratis, tanpa komitmen.
              </p>
              <div className="flex justify-center">
                <KonsultasiButton
                  message="Halo, saya ingin konsultasi kebutuhan Hydraulic System untuk truck operasional saya."
                  variant="solid"
                />
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


