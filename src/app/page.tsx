import Link from "next/link";
import {
  Package, Snowflake, Settings, Wrench, Fuel, Droplets, CloudRain, Box, Truck, Hammer, Replace, Cylinder,
  UserCheck, CircleDollarSign, ShieldCheck, Zap, HardHat, MapPin, Mail, ArrowRight, Check,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KonsultasiButton from "@/components/KonsultasiButton";
import HeroVideo from "@/components/HeroVideo";
import Image from "next/image";
import { getServices } from "@/lib/queries/services";
import {
  getSiteContents,
  type ContactPhone,
  type ContactEmail,
  type CompanyAddress,
  type CompanyHours,
  type CompanyStat,
} from "@/lib/queries/site-content";

// ISR: halaman utama di-refresh tiap 60 detik tanpa rebuild.
export const revalidate = 60;

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

const reasonsList = [
  { icon: UserCheck, text: "Mekanik berpengalaman dan konsultatif" },
  { icon: CircleDollarSign, text: "Harga kompetitif dan transparan" },
  { icon: ShieldCheck, text: "Material berkualitas dan bergaransi" },
  { icon: Zap, text: "Layanan cepat dan responsif" },
  { icon: HardHat, text: "Mengutamakan keselamatan kerja" },
  { icon: MapPin, text: "Workshop luas strategis" }
];

export default async function Home() {
  const [servicesList, siteContent] = await Promise.all([
    getServices(),
    getSiteContents<{
      contact_phones: ContactPhone[];
      contact_emails: ContactEmail[];
      company_address: CompanyAddress;
      company_hours: CompanyHours;
      company_stats: CompanyStat[];
    }>(["contact_phones", "contact_emails", "company_address", "company_hours", "company_stats"]),
  ]);

  const phones = siteContent.contact_phones;
  const emails = siteContent.contact_emails;
  const address = siteContent.company_address;
  const hours = siteContent.company_hours;
  const stats = siteContent.company_stats;

  return (
    <div className="w-full" style={{ overflowX: 'clip' }}>
      {/* Hero Section */}
      <div className="relative w-full h-[100dvh] min-h-[600px] flex flex-col justify-end pb-16 md:pb-24 bg-surface">
        {/* Background Video */}
        <div className="absolute inset-0 bg-surface">
          <HeroVideo />
          {/* Grain Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
          ></div>
          {/* Dark Gradient Overlay (Bottom Up) */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

          {/* Centered Logo Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
            <Image
              src="/logo/berdikariraya.png"
              alt="Berdikari Raya watermark"
              width={420}
              height={140}
              priority
              className="w-[55%] max-w-[420px] h-auto object-contain opacity-20 brightness-0 invert drop-shadow-2xl select-none"
            />
          </div>
        </div>

        {/* Shared Navbar */}
        <Navbar />

        {/* Headline */}
        <div className="relative left-6 md:left-margin-desktop max-w-5xl z-10 pr-6 w-full mt-auto pt-32">
          <p className="font-label-md text-btn text-white/80 uppercase tracking-[0.28em] drop-shadow-lg mb-4">
            Berdikari Raya Service
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] font-black text-heading text-white tracking-tight leading-[1.05] drop-shadow-2xl mb-4 md:mb-6 max-w-4xl md:whitespace-nowrap">
            Build. Reliability. Solutions.
          </h1>
          <p className="font-[family-name:var(--font-libre-franklin)] text-body text-white/90 max-w-3xl drop-shadow-lg leading-relaxed font-semibold">
            Karoseri &amp; Hydraulic System Truck
          </p>
        </div>
      </div>
      {/* Build Reliability Solutions Section */}
      <main className="relative bg-background px-6 md:px-margin-desktop py-20 md:py-32 space-y-20 md:space-y-32 overflow-hidden">
        <section className="flex flex-col gap-10 md:gap-14 relative">
          {/* Ghost Text Background (Responsive & Subtle) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none tracking-[0.2em] font-black text-transparent opacity-[0.015] font-[family-name:var(--font-montserrat)] leading-none text-[15vw] md:text-[22vw] uppercase [-webkit-text-stroke:2px_var(--color-on-background)] z-0">
            BRS
          </div>

          <div className="max-w-4xl relative z-10">
            <h2 className="font-[family-name:var(--font-montserrat)] font-black text-heading text-primary leading-tight whitespace-normal md:whitespace-nowrap break-words">
              One Stop Solutions
            </h2>
            <p className="font-[family-name:var(--font-libre-franklin)] text-body text-on-surface-variant leading-relaxed font-semibold mt-4 text-justify">
              Karoseri, Repair, Custom &amp; Hydraulic System Truck untuk Industri, Logistik, Distribusi &amp; Pertambangan
            </p>
            <div className="w-16 md:w-24 h-1.5 bg-primary rounded-full mt-6"></div>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {[
              {
                title: "Build",
                desc: "Kami membangun karoseri yang dirancang sesuai kebutuhan operasional pelanggan",
                icon: Hammer,
                num: "01",
              },
              {
                title: "Reliability",
                desc: "Kami menghadirkan kualitas, ketahanan, dan layanan yang dapat diandalkan untuk mendukung bisnis pelanggan yang berkelanjutan",
                icon: ShieldCheck,
                num: "02",
              },
              {
                title: "Solutions",
                desc: "Kami memberikan solusi menyeluruh, mulai dari perencanaan, produksi, instalasi, hingga layanan purna jual untuk mendukung kesuksesan bisnis pelanggan",
                icon: Wrench,
                num: "03",
              },
            ].map((item) => (
              <div key={item.title} className="group flex flex-col bg-surface-container-high/60 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-outline-variant/15 hover:border-red-600/30 hover:-translate-y-2 hover:bg-surface-container-highest hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300 relative overflow-hidden">
                {/* Red Silhouette top highlight */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Big watermark number */}
                <div className="absolute -top-4 -right-2 text-6xl md:text-7xl font-[family-name:var(--font-montserrat)] font-black text-transparent opacity-[0.04] group-hover:opacity-[0.08] transition-opacity [-webkit-text-stroke:2px_var(--color-on-background)] pointer-events-none select-none z-0">
                  {item.num}
                </div>

                {/* Header Icon + Label */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-primary/5 border border-outline-variant/20 group-hover:border-red-600/30 rounded-2xl flex items-center justify-center transition-all duration-300">
                    <item.icon className="text-primary group-hover:text-red-600 transition-colors" size={24} />
                  </div>
                  <h3 className="font-headline-md text-heading text-primary group-hover:text-primary transition-colors">{item.title}</h3>
                </div>

                <p className="font-body-lg text-body text-on-surface-variant leading-relaxed relative z-10 text-justify">{item.desc}</p>
                
                {/* Logo or Icon Watermark at the bottom right */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 text-primary opacity-[0.02] group-hover:opacity-[0.05] group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500 pointer-events-none select-none z-0">
                  <item.icon size={96} strokeWidth={1} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section (High Density) */}
        <section className="bg-surface-container-low rounded-2xl p-6 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border border-outline-variant/10 shadow-sleek">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1 md:gap-2">
              <span className="font-label-md text-btn text-on-surface-variant uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="font-display-lg text-heading text-primary">
                {stat.value}
              </span>
            </div>
          ))}
        </section>

        {/* Services / Layanan Section */}
        <section className="flex flex-col space-y-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="font-headline-lg text-3xl md:text-5xl text-primary break-words">Layanan Produk Kami</h2>
            <div className="w-16 md:w-24 h-1.5 bg-primary rounded-full"></div>
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl px-4 text-justify">
              Kami menyediakan berbagai macam pembuatan karoseri dan layanan perbaikan untuk mendukung kelancaran bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full max-w-full">
            {servicesList.map((service) => {
              const Icon = iconMap[service.icon] ?? Package;
              return (
                <div key={service.slug} className="group flex flex-col bg-surface-container-high rounded-xl overflow-hidden shadow-sleek border border-outline-variant/15 hover:border-red-600/30 hover:-translate-y-2 hover:bg-surface-container-highest hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300 cursor-pointer w-full relative">
                  {/* Red Silhouette top highlight */}
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
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
                    <div className="absolute top-4 right-4 w-10 h-10 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/20 group-hover:border-red-600/30 rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Icon className="text-primary group-hover:text-red-600 transition-colors" size={18} />
                    </div>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-1 w-full">
                    <h3 className="font-headline-md font-semibold text-base md:text-2xl text-primary uppercase tracking-wide mb-3 leading-tight">{service.title}</h3>
                    <p className="font-body-md text-base md:text-body text-on-surface-variant leading-relaxed mb-4 md:mb-6 flex-1 text-justify">
                      {service.desc}
                    </p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-on-surface-variant text-btn">
                          <Check size={14} className="text-red-600 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <KonsultasiButton message={`Halo, saya ingin tanya tentang ${service.title}`} variant="text" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Mitra & Klien Section */}
        <section className="flex flex-col items-center text-center space-y-6 pb-8 pt-16 border-t border-outline-variant/10 mt-32">
          <p className="font-label-md text-btn text-on-surface-variant uppercase tracking-[0.28em]">
            Portofolio
          </p>
          <h2 className="font-headline-md text-heading text-primary">Telah Dipercaya Oleh Banyak Klien</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
          <p className="font-body-lg text-body text-on-surface-variant max-w-2xl">
            Lihat dokumentasi dan daftar pekerjaan Berdikari Raya Service yang telah mendukung kebutuhan operasional pelanggan.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-btn hover:opacity-90 transition-all active:scale-95 shadow-lg border border-outline-variant/10"
          >
            Lihat Portofolio
            <ArrowRight size={20} />
          </Link>
        </section>

        {/* Kenapa Memilih Kami Section */}
        <section className="relative flex flex-col space-y-16 bg-surface-container-lowest px-6 md:px-16 py-32 rounded-t-[3rem] mt-16 border-t border-outline-variant/10 overflow-hidden w-full">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-on-background) 2px, transparent 0)', backgroundSize: '48px 48px' }}></div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <h2 className="font-headline-lg text-heading text-primary max-w-4xl leading-[1.2] font-bold tracking-wide">
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
                <h3 className="font-headline-sm text-heading text-primary/90 font-medium group-hover:text-primary transition-colors duration-300 leading-relaxed">
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
            <h2 className="font-headline-md text-heading text-primary flex items-center gap-4">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Kantor Pusat
            </h2>
            <div className="flex flex-col space-y-6 text-on-surface-variant">
              <div className="flex items-start gap-4 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/15">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="font-body-md text-body leading-relaxed">
                  {address.street}
                </p>
              </div>
              <p className="font-body-md text-body">
                {hours.weekday}, {hours.saturday}
              </p>
            </div>
          </div>

          {/* Kontak Kami */}
          <div className="flex flex-col space-y-8">
            <h2 className="font-headline-md text-heading text-primary flex items-center gap-4">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Kontak Kami
            </h2>
            <div className="flex flex-col space-y-4">
              {phones.map((p) => (
                <a key={p.phone} href={p.whatsapp_url} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container p-4 rounded-2xl border border-outline-variant/15 transition-colors group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors shrink-0" style={{ background: 'rgba(37,211,102,0.12)' }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#25d366" className="group-hover:scale-110 transition-transform"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body-lg text-body text-primary group-hover:text-primary transition-colors">{p.name}</span>
                    <span className="font-body-md text-btn text-on-surface-variant">{p.phone}</span>
                  </div>
                </a>
              ))}
              {emails.map((e) => (
                <a key={e.email} href={`mailto:${e.email}`} className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container p-4 rounded-2xl border border-outline-variant/15 transition-colors group min-w-0">
                  <div className="w-12 h-12 bg-primary/5 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <span className="font-body-lg text-btn text-primary group-hover:text-primary transition-colors break-all min-w-0">{e.email}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Maps Section */}
        <section className="max-w-6xl mx-auto w-full pb-32">
          <h2 className="font-headline-md text-heading text-primary flex items-center gap-4 mb-8">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            Kantor Kami
          </h2>
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-sleek border border-outline-variant/15 bg-surface-container-high relative group">
            <iframe
              src={address.maps_embed_url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Workshop Berdikari Raya Service"
              className="grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

