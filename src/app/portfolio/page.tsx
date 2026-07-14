import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPortfolioProjects } from "@/lib/queries/portfolio";

// ISR: portofolio di-refresh tiap 60 detik tanpa rebuild.
export const revalidate = 60;

const SITE_URL = "https://karoseriberdikariraya.com";


export const metadata: Metadata = {
  title: "Portofolio Karoseri Truck & Repair Body | Berdikari Raya Service",
  description:
    "Lihat portofolio pekerjaan karoseri truck, karoseri box aluminium, box freezer, dan repair body dari Berdikari Raya Service. Telah dipercaya berbagai perusahaan dan instansi di JABODETABEK.",
  keywords: [
    "portofolio karoseri truck",
    "jasa karoseri truck",
    "karoseri box aluminium",
    "karoseri box freezer",
    "repair body truck",
    "karoseri Bekasi",
  ],
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title: "Portofolio Karoseri Truck & Repair Body | Berdikari Raya Service",
    description:
      "Dokumentasi proyek karoseri truck, box aluminium, box freezer, dan repair body untuk berbagai perusahaan dan instansi.",
    url: `${SITE_URL}/portfolio`,
    images: [{ url: "/logo/berdikariraya.png", alt: "Portofolio Berdikari Raya Service" }],
  },
};

export default async function PortfolioPage() {
  const portfolioProjects = await getPortfolioProjects();

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
            Dokumentasi pekerjaan Berdikari Raya Service dalam pembuatan karoseri truck, karoseri box, dan repair body untuk kebutuhan operasional perusahaan maupun instansi.
          </p>
        </div>
      </section>

      <main className="px-6 md:px-margin-desktop py-20 md:py-32 space-y-16">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group flex flex-col bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/15 shadow-sleek hover:border-primary/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-52 relative overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.images[0]?.alt ?? project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-label-md text-btn px-3 py-1 rounded-full backdrop-blur-md bg-surface-container-high/80 text-primary border border-outline-variant/20">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-7 md:p-8">
                <div className="flex items-center gap-2 mb-3 text-on-surface-variant">
                  <Building2 size={14} className="text-primary shrink-0" />
                  <span className="font-label-md text-btn">{project.client}</span>
                </div>
                <h2 className="font-headline-md font-semibold text-base md:text-2xl text-primary uppercase tracking-wide mb-3 leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="font-body-md text-base md:text-body text-on-surface-variant leading-relaxed mb-5 flex-1">
                  {project.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-label-md text-btn uppercase tracking-wider mt-auto group-hover:gap-4 transition-all">
                  <span>Lihat Proyek</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/15 text-center flex flex-col items-center gap-6">
          <h2 className="font-headline-md text-heading text-primary">Butuh Unit Karoseri atau Repair Body?</h2>
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
