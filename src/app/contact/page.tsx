import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactSections from "./ContactSections";

const metaTitle = "Hubungi Kami | Konsultasi Karoseri Truck Gratis - Bekasi & JABODETABEK";
const metaDesc =
  "Hubungi Berdikari Raya Service untuk konsultasi karoseri truck gratis. Layani area Bekasi, Jakarta, Bogor, Depok, Tangerang, dan Bandung. WhatsApp: +62 812-9157-8404. Estimasi harga dalam 1x24 jam.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  alternates: { canonical: "https://karoseriberdikariraya.com/contact" },
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: "https://karoseriberdikariraya.com/contact",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa lama waktu pengerjaan karoseri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waktu pengerjaan bervariasi tergantung jenis dan kompleksitas karoseri. Rata-rata 2–4 minggu untuk unit standar, dan 4–8 minggu untuk unit custom.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada garansi untuk hasil pekerjaan karoseri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami memberikan garansi 6 bulan untuk pekerjaan repair dan 1 tahun untuk pembuatan karoseri baru, mencakup cacat material dan workmanship.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Berdikari Raya Service bisa melayani di luar Bekasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami melayani seluruh wilayah JABODETABEK dan Bandung. Untuk wilayah lain bisa dikonsultasikan terlebih dahulu.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara mendapatkan estimasi harga karoseri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hubungi kami via WhatsApp di +62 812-9157-8404 atau email dengan menyertakan detail kebutuhan Anda. Tim kami akan memberikan konsultasi gratis dan estimasi harga dalam 1x24 jam.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <div className="relative w-full min-h-[50vh] flex items-end overflow-hidden bg-surface">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
          alt="Hubungi Berdikari Raya Service - Konsultasi Karoseri Truck Gratis"
          fill
          sizes="100vw"
          className="object-cover grayscale brightness-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 px-6 md:px-margin-desktop pb-16 md:pb-24 pt-32 max-w-5xl">
          <p className="font-label-md text-btn text-primary uppercase tracking-widest mb-4">Hubungi Kami</p>
          <h1 className="font-headline-lg text-heading text-primary tracking-tight leading-[1.1] mb-4">
            Konsultasi Karoseri Gratis,<br />Jawab dalam 1x24 Jam
          </h1>
          <p className="font-body-lg text-body text-on-surface-variant max-w-2xl leading-relaxed">
            Ada proyek karoseri yang ingin Anda diskusikan? Hubungi tim kami langsung — kami siap memberikan saran teknis, rekomendasi material, dan estimasi harga tanpa biaya apapun.
          </p>
        </div>
      </div>

      <ContactSections />

      <Footer />
    </div>
  );
}
