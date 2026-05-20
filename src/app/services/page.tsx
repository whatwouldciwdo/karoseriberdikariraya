import type { Metadata } from "next";
import {
  Fuel, Droplets, CloudRain, Package, Box, Truck, Hammer, Replace, Cylinder, Snowflake, Wrench, Settings,
  ArrowRight, CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KonsultasiButton from "@/components/KonsultasiButton";
import Image from "next/image";

const SITE_URL = "https://www.berdikariraya.com";

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

const jsonLdServices = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Layanan Karoseri Berdikari Raya Service",
  description: "Daftar lengkap layanan karoseri dan perbaikan kendaraan niaga",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Karoseri Fuel Truck", url: `${SITE_URL}/services#fuel-truck` },
    { "@type": "ListItem", position: 2, name: "Karoseri Lube Truck", url: `${SITE_URL}/services#lube-truck` },
    { "@type": "ListItem", position: 3, name: "Karoseri Water Sprayer", url: `${SITE_URL}/services#water-sprayer` },
    { "@type": "ListItem", position: 4, name: "Karoseri Box Aluminium", url: `${SITE_URL}/services#box-aluminium` },
    { "@type": "ListItem", position: 5, name: "Karoseri Box Besi", url: `${SITE_URL}/services#box-besi` },
    { "@type": "ListItem", position: 6, name: "Karoseri Wing Box", url: `${SITE_URL}/services#wing-box` },
    { "@type": "ListItem", position: 7, name: "Karoseri Dump Truck", url: `${SITE_URL}/services#dump-truck` },
    { "@type": "ListItem", position: 8, name: "Karoseri Three Way Truck", url: `${SITE_URL}/services#three-way` },
    { "@type": "ListItem", position: 9, name: "Karoseri Truck Tangki", url: `${SITE_URL}/services#truck-tangki` },
    { "@type": "ListItem", position: 10, name: "Karoseri Box Freezer", url: `${SITE_URL}/services#box-freezer` },
    { "@type": "ListItem", position: 11, name: "Repair Body Custom", url: `${SITE_URL}/services#repair-body` },
    { "@type": "ListItem", position: 12, name: "Service Hydraulic System", url: `${SITE_URL}/services#hydraulic` },
  ],
};

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
  },
];

export default function ServicesPage() {
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
          <p className="font-label-md text-label-md text-secondary-container uppercase tracking-widest mb-4">Layanan Kami</p>
          <h1 className="font-headline-lg text-4xl md:text-headline-lg text-white tracking-tight leading-[1.1] mb-4">
            Solusi Lengkap Karoseri<br />Kendaraan Niaga Bekasi
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Dari pembuatan unit baru hingga perbaikan dan kustomisasi, kami hadir sebagai mitra terpercaya untuk semua kebutuhan kendaraan operasional bisnis Anda di JABODETABEK dan Bandung.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <main className="bg-background px-6 md:px-margin-desktop py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-surface-container-high rounded-2xl overflow-hidden shadow-sleek border border-white/5 hover:-translate-y-2 hover:bg-surface-container-highest transition-all duration-300"
            >
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
                <div className="absolute top-4 right-4 w-11 h-11 bg-secondary-container/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <service.icon className="text-white" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-headline-md text-xl text-white mb-3 group-hover:text-secondary-container transition-colors leading-tight">
                  {service.title}
                </h2>
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-5 flex-1">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-on-surface-variant text-sm">
                      <CheckCircle size={14} className="text-secondary-container shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <KonsultasiButton message={`Halo, saya ingin tanya tentang ${service.title}`} variant="text" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-24 max-w-4xl mx-auto text-center bg-surface-container-high rounded-3xl p-12 border border-white/5 shadow-sleek relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-headline-lg text-3xl md:text-5xl text-white mb-4">Tidak Ada di Daftar? Kami Bisa Custom!</h2>
            <p className="font-body-lg text-on-surface-variant text-lg mb-8 max-w-xl mx-auto">
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
