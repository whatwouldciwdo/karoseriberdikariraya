"use client";

import { useEffect, useRef, useState } from "react";
import {
  Fuel, Droplets, CloudRain, Package, Box, Truck, Hammer, Replace, Cylinder, Snowflake, Wrench, Settings,
  UserCheck, CircleDollarSign, ShieldCheck, Zap, HardHat, MapPin, Phone, Mail, ArrowRight, ArrowDown, CheckCircle, Check
} from "lucide-react";
import LogoLoopBase from "@/components/LogoLoop";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LogoLoop = LogoLoopBase as any;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KonsultasiButton from "@/components/KonsultasiButton";
import Image from "next/image";

const partnerLogos = [
  { src: "/logo/portfolio/alta_jaya_motor.jpg", alt: "Alta Jaya Motor" },
  { src: "/logo/portfolio/delima_wedding.png", alt: "Delima Wedding" },
  { src: "/logo/portfolio/engergy_sarana_sejahtera.jpg", alt: "Energy Sarana Sejahtera" },
  { src: "/logo/portfolio/pt_anugerah_global_superintending_logo.jpg", alt: "PT Anugerah Global Superintending" },
  { src: "/logo/portfolio/pt_delta_garda_persada_logo.jpg", alt: "PT Delta Garda Persada" },
];

const servicesList = [
  {
    title: "Karoseri Box Aluminium",
    desc: "Karoseri box aluminium ringan, kuat, dan cocok untuk distribusi barang dengan tampilan profesional. Ideal untuk logistik, makanan, dan barang sensitif.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    icon: Package,
    features: ["Material aluminium grade A", "Ringan & efisiensi BBM", "Pintu swing & roll-up"],
  },
  {
    title: "Karoseri Box Freezer",
    desc: "Box freezer untuk menjaga suhu barang tetap stabil dan aman selama pengiriman. Ideal untuk produk makanan, farmasi, dan kebutuhan rantai dingin.",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
    icon: Snowflake,
    features: ["Insulasi PU foam tebal", "Pendingin Thermo King / Carrier", "Suhu -20°C s.d. +5°C"],
  },
  {
    title: "Karoseri Box Besi",
    desc: "Pembuatan box besi untuk kebutuhan angkut barang dengan struktur kokoh dan tahan lama. Pilihan terbaik untuk muatan berat dan industri.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    icon: Box,
    features: ["Baja plat tebal", "Cat anti-karat", "Kapasitas muatan besar"],
  },
  {
    title: "Karoseri Dump Truck",
    desc: "Jasa pembuatan dump truck untuk kebutuhan proyek, konstruksi, dan pengangkutan material. Sistem hidrolik andal untuk pengosongan muatan cepat.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    icon: Hammer,
    features: ["Sistem lift hidrolik", "Bak baja tebal", "Kapasitas 5–20 ton"],
  },
  {
    title: "Karoseri Fuel Truck",
    desc: "Pembuatan karoseri fuel truck untuk distribusi BBM dengan desain aman, kuat, dan sesuai kebutuhan operasional. Kami memastikan standar keselamatan tertinggi dalam setiap unit yang kami produksi.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: Fuel,
    features: ["Tangki baja berkualitas tinggi", "Sistem perpipaan aman", "Garansi kebocoran"],
  },
  {
    title: "Karoseri Lube Truck",
    desc: "Jasa pembuatan lube truck untuk kebutuhan pelumasan dan servis lapangan di area industri dan tambang. Dirancang untuk mobilitas tinggi di medan berat.",
    img: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=800&q=80",
    icon: Droplets,
    features: ["Multi-kompartemen pelumas", "Pompa hidrolik presisi", "Desain tahan medan berat"],
  },
  {
    title: "Karoseri Water Sprayer",
    desc: "Solusi water sprayer truck untuk penyiraman jalan, proyek, dan area operasional industri. Kapasitas besar dengan sistem semprotan yang merata dan efisien.",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    icon: CloudRain,
    features: ["Kapasitas 5000–12000 liter", "Sistem semprotan depan & belakang", "Pompa tekanan tinggi"],
  },
  {
    title: "Karoseri Wing Box",
    desc: "Wing box untuk memudahkan proses bongkar muat barang dalam kegiatan logistik dan distribusi. Akses bukaan lebar dari dua sisi untuk efisiensi maksimal.",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    icon: Truck,
    features: ["Bukaan sayap kanan & kiri", "Hidrolik otomatis", "Ruang muat luas"],
  },
  {
    title: "Karoseri Three Way Truck",
    desc: "Solusi dump truck three way dengan sistem bukaan fleksibel untuk operasional yang lebih efisien. Dapat membuka ke tiga arah sesuai kebutuhan lokasi.",
    img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
    icon: Replace,
    features: ["Bukaan 3 arah", "Kontrol hidrolik akurat", "Cocok area sempit"],
  },
  {
    title: "Karoseri Truck Tangki",
    desc: "Pembuatan truck tangki untuk berbagai kebutuhan muatan cair industri, mulai dari air bersih, minyak goreng, hingga bahan kimia non-B3.",
    img: "https://images.unsplash.com/photo-1545193544-312983719627?w=800&q=80",
    icon: Cylinder,
    features: ["Material food grade tersedia", "Lapisan dalam anti-korosi", "Berbagai kapasitas"],
  },
  {
    title: "Repair Body Custom",
    desc: "Perbaikan dan custom body kendaraan niaga sesuai dengan spesifikasi dan kebutuhan operasional Anda. Kami menangani semua jenis kerusakan body kendaraan niaga.",
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    icon: Wrench,
    features: ["Analisa kerusakan gratis", "Spare part original", "Garansi perbaikan 6 bulan"],
  },
  {
    title: "Service Hydraulic System",
    desc: "Perawatan dan perbaikan sistem hidrolik untuk memastikan performa pengangkatan yang optimal. Tim ahli kami siap menangani semua merek dan tipe sistem hidrolik.",
    img: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80",
    icon: Settings,
    features: ["Servis berkala terjadwal", "Penggantian seal & komponen", "Uji tekanan sistem"],
  }
];

const reasonsList = [
  { icon: UserCheck, text: "Mekanik berpengalaman dan konsultatif" },
  { icon: CircleDollarSign, text: "Harga kompetitif dan transparan" },
  { icon: ShieldCheck, text: "Material berkualitas dan bergaransi" },
  { icon: Zap, text: "Layanan cepat dan responsif" },
  { icon: HardHat, text: "Mengutamakan keselamatan kerja" },
  { icon: MapPin, text: "Workshop luas strategis" }
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Only load video on non-mobile and when connection is fast enough
    const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };
    const conn = nav.connection;
    const isSaveData = conn?.saveData;
    const isSlowConnection = conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g";
    const isMobile = window.innerWidth < 768;

    if (!isSaveData && !isSlowConnection && !isMobile) {
      setVideoLoaded(true);
    }
  }, []);

  return (
    <div className="w-full" style={{ overflowX: 'clip' }}>
      {/* Hero Background Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 bg-surface">
          {/* Poster image always shown */}
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=60"
            alt="Berdikari Raya Service background"
            fill
            priority
            quality={40}
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 828px, 1200px"
            className={`object-cover grayscale brightness-50 transition-opacity duration-700 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
          />
          {/* Video only loaded on desktop/fast connection */}
          {videoLoaded && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
              autoPlay
              loop
              muted
              playsInline
              src="/video/Berdikari.mp4"
            />
          )}
          {/* Grain Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
          ></div>
          {/* Dark Gradient Overlay (Bottom Up) */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        {/* Shared Navbar */}
        <Navbar />

        {/* Headline */}
        <div className="absolute bottom-[8%] md:bottom-[5%] left-6 md:left-margin-desktop max-w-5xl z-10 pr-6">
          <h1 className="font-headline-lg font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.3] drop-shadow-2xl mb-4 md:mb-6 max-w-4xl">
            Solusi karoseri truck, repair body custom, dan service hydraulic system untuk kebutuhan operasional industri, logistik, serta distribusi perusahaan.
          </h1>
          <p className="font-body-lg text-base sm:text-lg md:text-xl text-white/90 max-w-3xl drop-shadow-lg leading-relaxed font-medium">
            Spesialis dalam pembuatan karoseri truck meliputi box aluminium, box freezer, box besi, wing box, dump truck, dump truck three way, lube truck, fuel truck, truck tangki, water sprayer truck, hingga repair body custom dan service hydraulic system dengan standar pengerjaan yang terukur serta profesional.
          </p>
        </div>
      </div>
      {/* Tentang Kami Section */}
      <main className="relative bg-background px-6 md:px-margin-desktop py-20 md:py-32 space-y-20 md:space-y-32 overflow-hidden">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image/Collage Side */}
          <div className="h-[280px] sm:h-[380px] md:h-[580px] bg-surface-container-high rounded-2xl relative overflow-hidden group shadow-sleek border border-white/5">
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
              alt="Berdikari Raya Service Collage"
              fill
              priority
              quality={60}
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </div>

          {/* Text Content Side */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div>
              <h2 className="font-headline-lg text-4xl md:text-5xl lg:text-headline-lg text-primary mb-4 md:mb-6">
                Tentang Kami
              </h2>
              <div className="w-16 md:w-20 h-1.5 bg-primary rounded-full mb-6 md:mb-8"></div>

              <div className="space-y-6">
                <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                  Berdikari Raya Service adalah perusahaan jasa karoseri truck di Jabodetabek dan Bandung yang melayani pembuatan serta perbaikan berbagai kebutuhan kendaraan niaga untuk sektor industri, logistik, konstruksi, dan distribusi.
                </p>
                <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                  Kami menangani berbagai jenis karoseri truck meliputi box aluminium, box freezer, box besi, wing box, dump truck, dump truck three way, lube truck, fuel truck, truck tangki, water sprayer truck, hingga repair body custom dan service hydraulic system.
                </p>
                <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                  Didukung tenaga kerja berpengalaman dan proses pengerjaan yang terstandar, Berdikari Raya Service berkomitmen menghadirkan hasil yang kuat, rapi, fungsional, dan sesuai kebutuhan operasional perusahaan dengan standar kerja yang profesional dan terukur.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <KonsultasiButton message="Halo, saya ingin konsultasi tentang pembuatan/perbaikan karoseri." variant="solid" />
            </div>
          </div>
        </section>

        {/* Stats Section (High Density) */}
        <section className="bg-surface-container-low rounded-2xl p-6 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border border-outline-variant/10 shadow-sleek">
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-label-md text-[10px] sm:text-xs md:text-sm text-on-surface-variant uppercase tracking-wider">
              Tahun Pengalaman
            </span>
            <span className="font-display-lg text-4xl sm:text-5xl md:text-headline-lg text-primary">
              10+
            </span>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-label-md text-[10px] sm:text-xs md:text-sm text-on-surface-variant uppercase tracking-wider">
              Proyek Selesai
            </span>
            <span className="font-display-lg text-4xl sm:text-5xl md:text-headline-lg text-primary">
              500+
            </span>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-label-md text-[10px] sm:text-xs md:text-sm text-on-surface-variant uppercase tracking-wider">
              Mitra Industri
            </span>
            <span className="font-display-lg text-4xl sm:text-5xl md:text-headline-lg text-primary">
              50+
            </span>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-label-md text-[10px] sm:text-xs md:text-sm text-on-surface-variant uppercase tracking-wider">
              Kepuasan Klien
            </span>
            <span className="font-display-lg text-4xl sm:text-5xl md:text-headline-lg text-primary">
              99%
            </span>
          </div>
        </section>

        {/* Services / Layanan Section */}
        <section className="flex flex-col space-y-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="font-headline-lg text-3xl md:text-5xl text-primary">Layanan Produk Kami</h2>
            <div className="w-16 md:w-24 h-1.5 bg-primary rounded-full"></div>
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl px-4">
              Kami menyediakan berbagai macam pembuatan karoseri dan layanan perbaikan untuk mendukung kelancaran bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full max-w-full">
            {servicesList.map((service, idx) => (
              <div key={idx} className="group flex flex-col bg-surface-container-high rounded-xl overflow-hidden shadow-sleek border border-outline-variant/15 hover:-translate-y-2 hover:bg-surface-container-highest transition-all duration-300 cursor-pointer w-full">
                <div className="h-48 md:h-56 relative overflow-hidden bg-surface-container w-full">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    quality={55}
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 47vw, 380px"
                    className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <service.icon className="text-primary" size={18} />
                  </div>
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1 w-full">
                  <h3 className="font-headline-md font-semibold text-base md:text-lg text-primary uppercase tracking-wider mb-3 leading-tight">{service.title}</h3>
                  <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed line-clamp-3 mb-4 md:mb-6 flex-1">
                    {service.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-on-surface-variant text-xs md:text-sm">
                        <Check size={14} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <KonsultasiButton message={`Halo, saya ingin tanya tentang ${service.title}`} variant="text" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mitra & Klien Section */}
        <section className="flex flex-col space-y-12 pb-8 pt-16 border-t border-outline-variant/10 mt-32">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="font-headline-md text-2xl md:text-4xl text-primary">Telah Dipercaya Oleh</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="w-full relative overflow-hidden py-8">
            <LogoLoop
              logos={partnerLogos}
              speed={50}
              direction="left"
              logoHeight={72}
              gap={80}
              hoverSpeed={15}
              scaleOnHover
              fadeOut
              fadeOutColor="var(--color-background)"
              ariaLabel="Mitra dan Klien Berdikari Raya"
            />
          </div>
        </section>

        {/* Kenapa Memilih Kami Section */}
        <section className="relative flex flex-col space-y-16 bg-surface-container-lowest px-6 md:px-16 py-32 rounded-t-[3rem] mt-16 border-t border-outline-variant/10 overflow-hidden w-full">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-on-background) 2px, transparent 0)', backgroundSize: '48px 48px' }}></div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <h2 className="font-headline-lg text-3xl md:text-5xl text-primary max-w-4xl leading-[1.2] font-bold tracking-wide">
              Kenapa Memilih Jasa Karoseri Berdikari Raya Service?
            </h2>
            <div className="w-24 h-1.5 bg-primary rounded-full"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
            {reasonsList.map((reason, idx) => (
              <div key={idx} className="relative bg-gradient-to-b from-surface-container-high/80 to-surface-container-low/80 backdrop-blur-xl rounded-3xl p-10 flex flex-col items-center text-center border border-outline-variant/15 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-3 transition-all duration-500 group overflow-hidden">

                {/* Subtle top border highlight on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Soft glow behind the icon */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Icon Container */}
                <div className="relative w-20 h-20 bg-surface-container-lowest/50 border border-outline-variant/20 group-hover:border-primary/40 group-hover:bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-inner">
                  <reason.icon size={36} strokeWidth={1.5} className="drop-shadow-lg transition-all duration-500" />
                </div>

                {/* Text */}
                <h3 className="font-headline-sm text-xl text-primary/90 font-medium group-hover:text-primary transition-colors duration-300 leading-relaxed">
                  {reason.text}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Pre-Footer Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-24 max-w-6xl mx-auto w-full pt-16">
          {/* Kantor Pusat */}
          <div className="flex flex-col space-y-8">
            <h2 className="font-headline-md text-3xl text-primary flex items-center gap-4">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Kantor Pusat
            </h2>
            <div className="flex flex-col space-y-6 text-on-surface-variant">
              <p className="font-body-md text-lg">
                Senin - Jumat : 08:00 - 17:00, Sabtu: 08:00 - 15:00
              </p>
              <div className="flex items-start gap-4 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/15">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="font-body-md text-lg leading-relaxed">
                  Jalan Macem, No 27, RT 002/001, Cikiwul, Kecamatan Bantar Gebang, Kota Bekasi, Jawa Barat, 17152
                </p>
              </div>
            </div>
          </div>

          {/* Kontak Kami */}
          <div className="flex flex-col space-y-8">
            <h2 className="font-headline-md text-3xl text-primary flex items-center gap-4">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Kontak Kami
            </h2>
            <div className="flex flex-col space-y-4">
              <a href="https://wa.me/6281291578404" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container p-4 rounded-2xl border border-outline-variant/15 transition-colors group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors shrink-0" style={{ background: 'rgba(37,211,102,0.12)' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#25d366" className="group-hover:scale-110 transition-transform"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-body-lg text-lg text-primary group-hover:text-primary transition-colors">Slamet Mulyono</span>
                  <span className="font-body-md text-sm text-on-surface-variant">+62 812-9157-8404</span>
                </div>
              </a>
              <a href="mailto:slamet.mulyono@berdikariraya.com" className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container p-4 rounded-2xl border border-outline-variant/15 transition-colors group min-w-0">
                <div className="w-12 h-12 bg-primary/5 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <span className="font-body-lg text-base text-primary group-hover:text-primary transition-colors break-all min-w-0">slamet.mulyono@berdikariraya.com</span>
              </a>
              <a href="https://wa.me/6282113484129" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container p-4 rounded-2xl border border-outline-variant/15 transition-colors group min-w-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors shrink-0" style={{ background: 'rgba(37,211,102,0.12)' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#25d366" className="group-hover:scale-110 transition-transform"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448{1.04}h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-body-lg text-lg text-primary group-hover:text-primary transition-colors">Dodo Prasetyo</span>
                  <span className="font-body-md text-sm text-on-surface-variant">+62 821-1348-4129</span>
                </div>
              </a>
              <a href="mailto:dodo.prasetyo@berdikariraya.com" className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container p-4 rounded-2xl border border-outline-variant/15 transition-colors group min-w-0">
                <div className="w-12 h-12 bg-primary/5 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <span className="font-body-lg text-base text-primary group-hover:text-primary transition-colors break-all min-w-0">dodo.prasetyo@berdikariraya.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Maps Section */}
        <section className="max-w-6xl mx-auto w-full pb-32">
          <h2 className="font-headline-md text-3xl text-primary flex items-center gap-4 mb-8">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            Kantor Kami
          </h2>
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-sleek border border-outline-variant/15 bg-surface-container-high relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.654854992524!2d106.98188331526362!3d-6.309322395431602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69922a945b6dbd%3A0xc3c5b8b5496d5a10!2sJl.%20Macem%20No.27%2C%20RT.002%2FRW.001%2C%20Cikiwul%2C%20Kec.%20Bantar%20Gebang%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017152!5e0!3m2!1sen!2sid!4v1689000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Workshop Berdikari Raya Service - Jalan Macem No. 27, Cikiwul, Bantar Gebang, Bekasi"
              className="grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
