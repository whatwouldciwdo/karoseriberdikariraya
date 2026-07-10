import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {

  return (
    <footer className="relative w-full bg-white text-black overflow-hidden border-t border-black/10">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-margin-desktop py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Profil */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/logo/berdikariraya.png"
                alt="Berdikari Raya Logo"
                width={200}
                height={48}
                className="h-12 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </div>
            <div className="select-none uppercase">

              <span className="font-label-md font-black tracking-[0.06em] text-btn whitespace-nowrap">
                <span className="text-[#E11D2A]">BERDIKARI RAYA</span>{" "}
                <span className="text-black">SERVICE</span>
              </span>
            </div>
            <div className="flex flex-col space-y-2 text-black/70 text-body">
              <p className="font-semibold text-black leading-relaxed text-body">Build. Reliability. Solutions.</p>
              <p className="leading-relaxed text-body">Karoseri &amp; Hydraulic System Truck</p>
            </div>
          </div>
 
          {/* Navigasi */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-btn text-black font-bold tracking-wider mb-2">Navigasi</h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "About Us", href: "/about" },
                { label: "News", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black/70 hover:text-[#E11D2A] transition-colors text-btn"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
 
          {/* Hubungi Kami */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-btn text-black font-bold tracking-wider mb-2">Hubungi Kami</h3>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/6282113484129" className="flex items-center gap-3 text-black/70 hover:text-[#E11D2A] transition-colors">
                <Phone size={18} />
                <span className="text-btn">+62 821-1348-4129</span>
              </a>
              <a href="mailto:dodo.prasetyo@berdikariraya.com" className="flex items-center gap-3 text-black/70 hover:text-[#E11D2A] transition-colors">
                <Mail size={18} />
                <span className="text-btn truncate">dodo.prasetyo@berdikariraya.com</span>
              </a>
              <a href="https://wa.me/6281291578404" className="flex items-center gap-3 text-black/70 hover:text-[#E11D2A] transition-colors">
                <Phone size={18} />
                <span className="text-btn">+62 812-9157-8404</span>
              </a>
              <a href="mailto:slamet.mulyono@berdikariraya.com" className="flex items-center gap-3 text-black/70 hover:text-[#E11D2A] transition-colors">
                <Mail size={18} />
                <span className="text-btn truncate">slamet.mulyono@berdikariraya.com</span>
              </a>
            </div>
          </div>
        </div>
 
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-black/70 text-btn flex flex-col md:flex-row items-center gap-2 text-center md:text-left min-w-0 w-full md:w-auto">
            <MapPin size={16} className="hidden md:block text-[#E11D2A] shrink-0" />
            <span className="break-words">Jalan Macem, No 27, RT 002/001, Cikiwul, Kecamatan Bantar Gebang, Kota Bekasi, Jawa Barat, 17152</span>
          </div>
          <span className="text-btn text-black/50">
            © 2026 Berdikari Raya. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
