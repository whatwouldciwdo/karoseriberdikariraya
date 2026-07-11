"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, CheckCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const SITE_URL = "https://karoseriberdikariraya.com";

const metaTitle = "Hubungi Kami | Konsultasi Karoseri Truck Gratis - Bekasi & JABODETABEK";
const metaDesc =
  "Hubungi Berdikari Raya Service untuk konsultasi karoseri truck gratis. Layani area Bekasi, Jakarta, Bogor, Depok, Tangerang, dan Bandung. WhatsApp: +62 812-9157-8404. Estimasi harga dalam 1x24 jam.";

const contactMethods = [
  {
    icon: Phone,
    label: "WhatsApp / Telepon",
    value: "+62 812-9157-8404",
    sub: "Slamet Mulyono",
    href: "https://wa.me/6281291578404",
    cta: "Chat WhatsApp",
  },
  {
    icon: Phone,
    label: "WhatsApp / Telepon",
    value: "+62 821-1348-4129",
    sub: "Dodo Prasetyo",
    href: "https://wa.me/6282113484129",
    cta: "Chat WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    value: "slamet.mulyono@berdikariraya.com",
    href: "mailto:slamet.mulyono@berdikariraya.com",
    cta: "Kirim Email",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dodo.prasetyo@berdikariraya.com",
    href: "mailto:dodo.prasetyo@berdikariraya.com",
    cta: "Kirim Email",
  },
];

const faqs = [
  {
    q: "Berapa lama waktu pengerjaan karoseri?",
    a: "Waktu pengerjaan bervariasi tergantung jenis dan kompleksitas karoseri. Rata-rata 2–4 minggu untuk unit standar, dan 4–8 minggu untuk unit custom.",
  },
  {
    q: "Apakah ada garansi untuk hasil pekerjaan?",
    a: "Ya, kami memberikan garansi 6 bulan untuk pekerjaan repair dan 1 tahun untuk pembuatan karoseri baru, mencakup cacat material dan workmanship.",
  },
  {
    q: "Apakah bisa melayani di luar Bekasi?",
    a: "Ya, kami melayani seluruh wilayah JABODETABEK dan Bandung. Untuk wilayah lain bisa dikonsultasikan terlebih dahulu.",
  },
  {
    q: "Bagaimana cara mendapatkan estimasi harga?",
    a: "Hubungi kami via WhatsApp atau email dengan menyertakan detail kebutuhan Anda. Tim kami akan memberikan konsultasi gratis dan estimasi harga dalam 1x24 jam.",
  },
];

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Berdikari Raya Service!%0A%0ANama: ${formData.name}%0ATelpon: ${formData.phone}%0AEmail: ${formData.email}%0ALayanan: ${formData.service}%0A%0APesan:%0A${formData.message}`;
    window.open(`https://wa.me/6281291578404?text=${text}`, "_blank");
    setSubmitted(true);
  };

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

      <main className="bg-background">
        {/* Contact Methods */}
        <section className="px-6 md:px-margin-desktop py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Konsultasi Sekarang</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-20">
              {contactMethods.map((m, idx) => (
                <a
                  key={idx}
                  href={m.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col bg-surface-container-high rounded-2xl p-5 sm:p-6 border border-outline-variant/15 hover:border-primary/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${m.icon === Phone ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/5 text-primary"}`}>
                      {m.icon === Phone ? (
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      ) : (
                        <m.icon size={24} />
                      )}
                    </div>
                    <p className="font-label-md text-btn text-on-surface-variant uppercase tracking-wider">{m.label}</p>
                  </div>
                  <div className="mt-4 min-w-0">
                    <p className="font-headline-sm text-primary text-body mb-1 break-words [overflow-wrap:anywhere]">{m.value}</p>
                    {m.sub && <p className="font-body-md text-on-surface-variant text-btn break-words">{m.sub}</p>}
                  </div>
                  <div className="flex items-center gap-1 text-primary text-btn font-label-md mt-4 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <span>{m.cta}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form + Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15 shadow-sleek">
                <h2 className="font-headline-md text-heading text-primary mb-2">Kirim Pesan</h2>
                <p className="font-body-md text-body text-on-surface-variant mb-8">Isi form di bawah dan kami akan menghubungi Anda via WhatsApp.</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="font-headline-md text-heading text-primary mb-2">Pesan Terkirim!</h3>
                    <p className="font-body-md text-body text-on-surface-variant">Tim kami akan segera menghubungi Anda.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-label-md text-btn text-on-surface-variant uppercase tracking-wider block mb-2">Nama Lengkap *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Nama Anda"
                          className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-primary placeholder:text-on-surface-variant/40 font-body-md focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-label-md text-btn text-on-surface-variant uppercase tracking-wider block mb-2">No. Telepon *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="08xxxxxxxxxx"
                          className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-primary placeholder:text-on-surface-variant/40 font-body-md focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-label-md text-btn text-on-surface-variant uppercase tracking-wider block mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@perusahaan.com"
                        className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-primary placeholder:text-on-surface-variant/40 font-body-md focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-label-md text-btn text-on-surface-variant uppercase tracking-wider block mb-2">Layanan yang Dibutuhkan</label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-primary font-body-md focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="" className="bg-surface-container-low text-primary">Pilih layanan...</option>
                        <option value="Karoseri Fuel Truck" className="bg-surface-container-low text-primary">Karoseri Fuel Truck</option>
                        <option value="Karoseri Lube Truck" className="bg-surface-container-low text-primary">Karoseri Lube Truck</option>
                        <option value="Karoseri Water Sprayer" className="bg-surface-container-low text-primary">Karoseri Water Sprayer</option>
                        <option value="Karoseri Box Aluminium" className="bg-surface-container-low text-primary">Karoseri Box Aluminium</option>
                        <option value="Karoseri Box Besi" className="bg-surface-container-low text-primary">Karoseri Box Besi</option>
                        <option value="Karoseri Wing Box" className="bg-surface-container-low text-primary">Karoseri Wing Box</option>
                        <option value="Karoseri Dump Truck" className="bg-surface-container-low text-primary">Karoseri Dump Truck</option>
                        <option value="Karoseri Three Way Truck" className="bg-surface-container-low text-primary">Karoseri Three Way Truck</option>
                        <option value="Karoseri Truck Tangki" className="bg-surface-container-low text-primary">Karoseri Truck Tangki</option>
                        <option value="Karoseri Box Freezer" className="bg-surface-container-low text-primary">Karoseri Box Freezer</option>
                        <option value="Repair Body Custom" className="bg-surface-container-low text-primary">Repair Body Custom</option>
                        <option value="Service Hydraulic System" className="bg-surface-container-low text-primary">Service Hydraulic System</option>
                        <option value="Lainnya" className="bg-surface-container-low text-primary">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-label-md text-btn text-on-surface-variant uppercase tracking-wider block mb-2">Pesan / Detail Kebutuhan *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ceritakan kebutuhan karoseri Anda secara detail..."
                        className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-primary placeholder:text-on-surface-variant/40 font-body-md focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full font-label-md text-btn hover:bg-[#1ebe5a] transition-all active:scale-95 shadow-lg hover:shadow-[#25D366]/30 border border-outline-variant/10 w-full group cursor-pointer"
                    >
                      <MessageCircle size={20} />
                      Kirim via WhatsApp
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>

              {/* Info + Map */}
              <div className="flex flex-col gap-8">
                {/* Office Info */}
                <div className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/15">
                  <h3 className="font-headline-md text-heading text-primary mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    Kantor & Workshop
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-label-md text-btn text-on-surface-variant uppercase tracking-wider mb-1">Alamat</p>
                        <p className="font-body-md text-primary leading-relaxed">
                          Jalan Macem, No 27, RT 002/001, Cikiwul, Kecamatan Bantar Gebang, Kota Bekasi, Jawa Barat, 17152
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-label-md text-btn text-on-surface-variant uppercase tracking-wider mb-1">Jam Operasional</p>
                        <p className="font-body-md text-primary">Senin – Jumat: 08.00 – 17.00 WIB</p>
                        <p className="font-body-md text-primary">Sabtu: 08.00 – 15.00 WIB</p>
                        <p className="font-body-md text-on-surface-variant">Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="flex-1 min-h-[280px] rounded-3xl overflow-hidden shadow-sleek border border-outline-variant/15 bg-surface-container-high group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.654854992524!2d106.98188331526362!3d-6.309322395431602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69922a945b6dbd%3A0xc3c5b8b5496d5a10!2sJl.%20Macem%20No.27%2C%20RT.002%2FRW.001%2C%20Cikiwul%2C%20Kec.%20Bantar%20Gebang%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017152!5e0!3m2!1sen!2sid!4v1689000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "280px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Workshop Berdikari Raya Service - Jalan Macem No. 27, Cikiwul, Bantar Gebang, Bekasi"
                    className="grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-heading text-primary mb-4">Pertanyaan Umum</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
            </div>
 
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-high rounded-2xl border border-outline-variant/15 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  >
                    <span className="font-headline-sm text-body text-primary">{faq.q}</span>
                    <div className="w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300">
                      <ArrowRight size={16} className={`text-primary transition-transform duration-300 ${openFaq === idx ? "-rotate-90" : ""}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-40 pb-6 px-6" : "max-h-0"}`}>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
