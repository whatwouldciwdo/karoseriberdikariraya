import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-surface-container-lowest overflow-hidden border-t border-outline-variant/10">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

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
              />
            </div>
            <div className="flex flex-col space-y-2 text-on-surface-variant font-body-lg">
              <p className="text-white font-semibold tracking-wide">BERDIKARI RAYA SERVICE</p>
              <p className="leading-relaxed">Solusi Terpercaya Karoseri, Repair, Body Custom, dan Hydraulic System.</p>
            </div>
          </div>

          {/* Navigasi */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-headline-md text-xl text-white font-bold tracking-wider mb-2">Navigasi</h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-on-surface-variant hover:text-secondary-container transition-colors font-body-md"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hubungi Kami */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-headline-md text-xl text-white font-bold tracking-wider mb-2">Hubungi Kami</h3>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/6282113484129" className="flex items-center gap-3 text-on-surface-variant hover:text-secondary-container transition-colors">
                <Phone size={18} />
                <span className="font-body-md">+62 821-1348-4129</span>
              </a>
              <a href="mailto:dodo.prasetyo@berdikariraya.com" className="flex items-center gap-3 text-on-surface-variant hover:text-secondary-container transition-colors">
                <Mail size={18} />
                <span className="font-body-md truncate">dodo.prasetyo@berdikariraya.com</span>
              </a>
              <a href="https://wa.me/6281291578404" className="flex items-center gap-3 text-on-surface-variant hover:text-secondary-container transition-colors">
                <Phone size={18} />
                <span className="font-body-md">+62 812-9157-8404</span>
              </a>
              <a href="mailto:slamet.mulyono@berdikariraya.com" className="flex items-center gap-3 text-on-surface-variant hover:text-secondary-container transition-colors">
                <Mail size={18} />
                <span className="font-body-md truncate">slamet.mulyono@berdikariraya.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-on-surface-variant font-body-sm flex flex-col md:flex-row items-center gap-2 text-center md:text-left min-w-0 w-full md:w-auto">
            <MapPin size={16} className="hidden md:block text-secondary-container shrink-0" />
            <span className="break-words">Jalan Macem, No 27, RT 002/001, Cikiwul, Kecamatan Bantar Gebang, Kota Bekasi, Jawa Barat, 17152</span>
          </div>
          <span className="font-body-sm text-on-surface-variant/60">
            © 2026 Berdikari Raya. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
