import type { Metadata } from "next";
import {
  UserCheck, CircleDollarSign, ShieldCheck, Zap, HardHat, MapPin, ArrowRight, Building2, Target, Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const SITE_URL = "https://www.berdikariraya.com";

export const metadata: Metadata = {
  title: "Tentang Berdikari Raya Service | Karoseri Truck Bekasi Sejak 2012",
  description:
    "Berdikari Raya Service berdiri sejak 2012 sebagai spesialis karoseri kendaraan niaga di Bekasi, JABODETABEK, dan Bandung. Lebih dari 500 unit karoseri selesai, 50+ mitra industri, dan pengalaman 10+ tahun di bidang fuel truck, dump truck, box aluminium, dan repair body.",
  keywords: [
    "tentang Berdikari Raya Service",
    "karoseri truck Bekasi terpercaya",
    "workshop karoseri Bekasi",
    "perusahaan karoseri JABODETABEK",
    "jasa karoseri berpengalaman",
    "profil perusahaan karoseri",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "Tentang Berdikari Raya Service | Karoseri Truck Bekasi Sejak 2012",
    description:
      "10+ tahun pengalaman, 500+ unit selesai, 50+ mitra industri. Berdikari Raya Service adalah spesialis karoseri kendaraan niaga terpercaya di Bekasi dan JABODETABEK.",
    url: `${SITE_URL}/about`,
    images: [{ url: "/logo/berdikariraya.png", alt: "Berdikari Raya Service" }],
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Berdikari Raya Service",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/berdikariraya.png`,
  foundingDate: "2012",
  description:
    "Spesialis karoseri kendaraan niaga di Bekasi, JABODETABEK, dan Bandung. Melayani pembuatan dan perbaikan fuel truck, dump truck, box aluminium, wing box, water sprayer, truck tangki, dan service hydraulic system.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Macem No. 27, RT 002/001, Cikiwul",
    addressLocality: "Bantar Gebang, Bekasi",
    addressRegion: "Jawa Barat",
    postalCode: "17152",
    addressCountry: "ID",
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+6281291578404", contactType: "sales", availableLanguage: "Indonesian" },
    { "@type": "ContactPoint", telephone: "+6282113484129", contactType: "customer service", availableLanguage: "Indonesian" },
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
  areaServed: ["Bekasi", "Jakarta", "Bogor", "Depok", "Tangerang", "Bandung"],
};

const values = [
  {
    icon: ShieldCheck,
    title: "Integritas",
    desc: "Kami membangun kepercayaan pelanggan melalui kejujuran, transparansi harga, dan kualitas pekerjaan yang konsisten.",
  },
  {
    icon: Zap,
    title: "Inovasi",
    desc: "Kami terus berinovasi dalam teknik dan material karoseri untuk menghadirkan solusi yang efisien dan modern.",
  },
  {
    icon: HardHat,
    title: "Keselamatan",
    desc: "Setiap unit yang kami produksi mengikuti standar keselamatan ketat untuk melindungi pengemudi dan muatan.",
  },
  {
    icon: UserCheck,
    title: "Profesionalisme",
    desc: "Tim mekanik berpengalaman dan konsultatif yang siap memberikan saran terbaik sesuai kebutuhan Anda.",
  },
  {
    icon: CircleDollarSign,
    title: "Transparansi",
    desc: "Harga kompetitif dengan rincian biaya yang jelas. Tidak ada biaya tersembunyi dalam setiap proyek.",
  },
  {
    icon: Award,
    title: "Kualitas",
    desc: "Material berstandar tinggi, proses kerja terstandar, dan garansi pada setiap produk yang kami hasilkan.",
  },
];

const milestones = [
  { year: "2012", event: "Berdikari Raya Service didirikan di Bekasi dengan fokus repair body kendaraan niaga." },
  { year: "2015", event: "Ekspansi layanan ke pembuatan karoseri box aluminium dan box besi untuk pasar logistik." },
  { year: "2018", event: "Mulai melayani order karoseri fuel truck dan lube truck untuk sektor energi dan tambang." },
  { year: "2021", event: "Perluasan workshop dan penambahan tim untuk memenuhi permintaan yang terus meningkat." },
  { year: "2024", event: "Mencapai lebih dari 500 unit karoseri selesai dan 50+ mitra industri aktif di seluruh Indonesia." },
];

const team = [
  {
    name: "Slamet Mulyono",
    role: "Direktur Utama & Konsultan Teknis",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    contact: "+62 812-9157-8404",
  },
  {
    name: "Dodo Prasetyo",
    role: "Manajer Operasional & Pengawas Produksi",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    contact: "+62 821-1348-4129",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full" style={{ overflowX: "clip" }}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />

      {/* Hero */}
      <div className="relative w-full min-h-[65vh] flex items-end overflow-hidden bg-surface">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80"
          alt="Workshop Berdikari Raya"
          fill
          sizes="100vw"
          className="object-cover grayscale brightness-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 px-6 md:px-margin-desktop pb-16 md:pb-24 pt-32 max-w-5xl">
          <p className="font-label-md text-label-md text-secondary-container uppercase tracking-widest mb-4">Tentang Kami</p>
          <h1 className="font-headline-lg text-4xl md:text-headline-lg text-white tracking-tight leading-[1.1] mb-6">
            Spesialis Karoseri Kendaraan Niaga<br />di Bekasi Sejak 2012
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Lebih dari satu dekade melayani industri, logistik, konstruksi, dan distribusi di seluruh JABODETABEK dan Bandung — dengan standar kualitas tertinggi dan komitmen penuh pada kepuasan pelanggan.
          </p>
        </div>
      </div>

      <main className="bg-background">
        {/* Company Story */}
        <section className="px-6 md:px-margin-desktop py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="h-[400px] md:h-[550px] bg-surface-container-high rounded-2xl overflow-hidden shadow-sleek border border-white/5 group">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                  alt="Workshop Karoseri"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-surface-container-high border border-white/10 rounded-2xl p-6 shadow-sleek backdrop-blur-xl">
                <div className="flex gap-8">
                  <div className="text-center">
                    <p className="font-display-lg text-3xl text-secondary-container">10+</p>
                    <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-wider mt-1">Tahun</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display-lg text-3xl text-primary">500+</p>
                    <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-wider mt-1">Unit</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display-lg text-3xl text-primary">50+</p>
                    <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-wider mt-1">Mitra</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6 md:space-y-8 mt-8 md:mt-0">
              <div>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-white mb-4">Siapa Kami?</h2>
                <div className="w-16 h-1.5 bg-secondary-container rounded-full mb-8" />
                <div className="space-y-5">
                  <p className="font-body-lg text-on-surface-variant leading-relaxed">
                    <strong className="text-white font-semibold">Berdikari Raya Service</strong> adalah perusahaan jasa{" "}
                    <strong className="text-white font-semibold">karoseri truk di JABODETABEK dan Bandung</strong> yang berdiri sejak 2012. Kami melayani pembuatan dan perbaikan berbagai kebutuhan kendaraan niaga untuk sektor industri, logistik, konstruksi, dan distribusi.
                  </p>
                  <p className="font-body-lg text-on-surface-variant leading-relaxed">
                    Workshop kami yang berlokasi strategis di Bekasi dilengkapi dengan peralatan modern dan dioperasikan oleh tenaga mekanik berpengalaman yang terlatih untuk menghasilkan produk karoseri berkualitas tinggi, rapi, fungsional, dan sesuai spesifikasi pelanggan.
                  </p>
                  <p className="font-body-lg text-on-surface-variant leading-relaxed">
                    Dengan menangani{" "}
                    <strong className="text-white font-semibold">karoseri box aluminium, box besi, wing box, dump truck, fuel truck, truck tangki, water sprayer truck</strong>, hingga{" "}
                    <strong className="text-white font-semibold">repair body custom</strong> dan{" "}
                    <strong className="text-white font-semibold">service hydraulic system</strong>, kami menjadi solusi satu pintu untuk semua kebutuhan kendaraan niaga Anda.
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="https://wa.me/6281291578404"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary-container text-white px-8 py-4 rounded-full font-label-md text-label-md hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-secondary-container/20 group"
                >
                  Konsultasi Sekarang
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '48px 48px' }} />
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-secondary-container/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-3xl md:text-5xl text-white mb-4">Nilai-Nilai Kami</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-secondary-container to-primary rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="relative bg-surface-container-high/80 backdrop-blur-xl rounded-3xl p-8 border border-white/5 hover:border-secondary-container/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary-container/10 transition-all duration-500 group overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-secondary-container to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-16 h-16 bg-surface-container-lowest/50 border border-white/10 group-hover:border-secondary-container/50 group-hover:bg-secondary-container/10 text-secondary-container rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-[10deg]">
                    <val.icon size={30} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-headline-md text-xl text-white mb-3 group-hover:text-secondary-container transition-colors">{val.title}</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones / Timeline */}
        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-3xl md:text-5xl text-white mb-4">Perjalanan Kami</h2>
              <div className="w-20 h-1.5 bg-secondary-container rounded-full mx-auto" />
            </div>

            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 -translate-x-1/2" />

              {milestones.map((m, idx) => (
                <div key={idx} className={`relative flex items-start gap-6 pb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Left/Right content (desktop) */}
                  <div className={`flex-1 hidden md:flex ${idx % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"}`}>
                    <div className="bg-surface-container-high rounded-2xl p-6 border border-white/5 max-w-xs hover:border-secondary-container/20 transition-colors">
                      <p className="font-body-md text-on-surface-variant leading-relaxed">{m.event}</p>
                    </div>
                  </div>

                  {/* Year dot */}
                  <div className="relative z-10 flex-shrink-0 w-20 flex flex-col items-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center shadow-lg shadow-secondary-container/30">
                      <Target size={20} className="text-white" />
                    </div>
                    <span className="font-display-lg text-secondary-container text-xl mt-2">{m.year}</span>
                  </div>

                  {/* Mobile content */}
                  <div className="flex-1 md:hidden">
                    <p className="font-body-md text-on-surface-variant leading-relaxed pt-2">{m.event}</p>
                  </div>

                  {/* Right side placeholder (desktop) */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-3xl md:text-5xl text-white mb-4">Tim Kami</h2>
              <div className="w-20 h-1.5 bg-secondary-container rounded-full mx-auto mb-6" />
              <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
                Dipimpin oleh para profesional berpengalaman yang berdedikasi untuk memberikan hasil terbaik bagi setiap pelanggan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="flex-1 max-w-xs mx-auto sm:mx-0 bg-surface-container-high rounded-3xl overflow-hidden border border-white/5 shadow-sleek hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline-md text-xl text-white mb-1">{member.name}</h3>
                    <p className="font-body-md text-secondary-container text-sm mb-3">{member.role}</p>
                    <a
                      href={`https://wa.me/${member.contact.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-body-md text-on-surface-variant hover:text-white text-sm transition-colors"
                    >
                      {member.contact}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="px-6 md:px-margin-desktop py-24 border-t border-outline-variant/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-headline-md text-3xl text-white flex items-center gap-4 mb-8">
              <div className="w-2 h-8 bg-secondary-container rounded-full" />
              Lokasi Workshop
            </h2>
            <div className="flex items-start gap-4 bg-surface-container p-6 rounded-2xl border border-white/5 mb-8">
              <MapPin className="text-secondary-container mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  Jalan Macem, No 27, RT 002/001, Cikiwul, Kecamatan Bantar Gebang, Kota Bekasi, Jawa Barat, 17152
                </p>
                <p className="font-body-md text-secondary-container mt-2">
                  Senin – Jumat: 08.00 – 17.00 WIB | Sabtu: 08.00 – 15.00 WIB
                </p>
              </div>
            </div>
            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-sleek border border-white/5 bg-surface-container-high group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.654854992524!2d106.98188331526362!3d-6.309322395431602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69922a945b6dbd%3A0xc3c5b8b5496d5a10!2sJl.%20Macem%20No.27%2C%20RT.002%2FRW.001%2C%20Cikiwul%2C%20Kec.%20Bantar%20Gebang%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017152!5e0!3m2!1sen!2sid!4v1689000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Workshop Berdikari Raya Service - Jalan Macem No. 27, Cikiwul, Bantar Gebang, Bekasi"
                className="grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
