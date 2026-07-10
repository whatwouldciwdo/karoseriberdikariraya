import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portofolio | Berdikari Raya Service",
  description: "Portofolio pekerjaan karoseri dan hydraulic system truck Berdikari Raya Service.",
};

const portfolioItems = [
  "Karoseri Fuel Truck",
  "Karoseri Lube Truck",
  "Karoseri Water Sprayer",
  "Karoseri Box Aluminium",
  "Karoseri Box Besi",
  "Karoseri Wing Box",
  "Karoseri Dump Truck",
  "Karoseri Three Way Truck",
  "Karoseri Truck Tangki",
  "Karoseri Box Freezer",
  "Repair Body Custom",
  "Service Hydraulic System",
];

export default function PortfolioPage() {
  return (
    <div className="w-full bg-background text-on-background overflow-x-hidden">
      <section className="relative min-h-[70vh] flex items-end pb-16 md:pb-24 bg-surface">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Portofolio Berdikari Raya Service"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <Navbar />
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-5xl">
          <p className="font-label-md text-btn text-white/75 uppercase tracking-[0.28em] mb-4">
            Portofolio
          </p>
          <h1 className="font-headline-lg text-heading text-white tracking-tight leading-[1.1] mb-6">
            Telah Dipercaya Oleh Banyak Klien
          </h1>
          <p className="font-body-lg text-body text-white/85 max-w-3xl leading-relaxed">
            Dokumentasi ringkas pekerjaan Berdikari Raya Service dalam pembuatan karoseri dan hydraulic system truck untuk kebutuhan operasional pelanggan.
          </p>
        </div>
      </section>

      <main className="px-6 md:px-margin-desktop py-20 md:py-32 space-y-16">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div key={item} className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15 shadow-sleek">
              <CheckCircle className="text-primary mb-6" size={32} />
              <h2 className="font-headline-md text-heading text-primary mb-3">{item}</h2>
              <p className="font-body-md text-body text-on-surface-variant leading-relaxed">
                Pekerjaan dirancang sesuai kebutuhan operasional, standar material, dan fungsi unit pelanggan.
              </p>
            </div>
          ))}
        </section>

        <section className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/15 text-center flex flex-col items-center gap-6">
          <h2 className="font-headline-md text-heading text-primary">Butuh Unit Karoseri atau Hydraulic System?</h2>
          <p className="font-body-lg text-body text-on-surface-variant max-w-2xl">
            Konsultasikan kebutuhan kendaraan niaga Anda bersama Berdikari Raya Service.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-btn hover:opacity-90 transition-all active:scale-95"
          >
            Hubungi Kami
            <ArrowRight size={20} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
