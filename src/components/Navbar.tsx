"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Shield, Wrench, Phone, FileText, Briefcase
} from "lucide-react";
import Image from "next/image";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Shield,
    // Truck convoy on highway - represents main landing
    thumb: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=120&h=120&fit=crop&q=80",
  },
  {
    label: "Services",
    href: "/services",
    icon: Wrench,
    // Industrial workshop / heavy machinery
    thumb: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=120&h=120&fit=crop&q=80",
  },
  {
    label: "About Us",
    href: "/about",
    icon: Briefcase,
    // Dump truck / construction - heavy vehicle
    thumb: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=120&h=120&fit=crop&q=80",
  },
  {
    label: "Blog",
    href: "/blog",
    icon: FileText,
    // Box truck / cargo - logistics article
    thumb: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=120&h=120&fit=crop&q=80",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
    // Fuel/tank truck - contact for quote
    thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop&q=80",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-4 z-50 flex items-center justify-between gap-3 rounded-full px-5 py-2.5 bg-primary shadow-[0_8px_32px_rgba(0,0,0,0.5)] left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:top-6 md:w-max md:px-6">
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo/berdikariraya.png"
            alt="Berdikari Raya Logo"
            width={120}
            height={32}
            className="hidden md:block h-8 w-auto object-contain shrink-0"
            priority
          />
          <span className="font-bold text-on-primary text-sm md:text-base tracking-wider whitespace-nowrap select-none shrink-0">
            BERDIKARI RAYA SERVICE
          </span>
        </div>
        <button
          className="shrink-0 text-on-primary hover:text-secondary-container transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation-menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="main-navigation-menu" className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-40 flex flex-col p-8 bg-surface-container-high rounded-2xl shadow-2xl backdrop-blur-xl border border-outline-variant/10" role="dialog" aria-label="Menu navigasi utama">
          <div className="mb-6">
            <p className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest">
              Menu
            </p>
          </div>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center gap-4 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-secondary-container/15 text-secondary-container"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-white"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 border transition-all duration-200 relative ${
                    isActive ? "border-secondary-container/40" : "border-white/10 group-hover:border-white/20"
                  }`}>
                    <Image
                      src={item.thumb}
                      alt={item.label}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <span className={`font-label-md text-label-md flex-1 ${isActive ? "text-secondary-container" : ""}`}>
                    {item.label}
                  </span>
                  <item.icon
                    size={20}
                    className={`transition-colors ${isActive ? "text-secondary-container" : "text-on-surface-variant group-hover:text-white"}`}
                  />
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 bg-secondary-container text-white py-4 rounded-full font-label-md text-label-md hover:brightness-110 transition-all active:scale-95 text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </>
  );
}
