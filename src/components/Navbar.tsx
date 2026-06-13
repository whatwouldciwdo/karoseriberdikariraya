"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Shield, Wrench, Phone, FileText, Briefcase
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Shield,
    thumb: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=120&h=120&fit=crop&q=80",
  },
  {
    label: "Services",
    href: "/services",
    icon: Wrench,
    thumb: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=120&h=120&fit=crop&q=80",
  },
  {
    label: "About Us",
    href: "/about",
    icon: Briefcase,
    thumb: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=120&h=120&fit=crop&q=80",
  },
  {
    label: "News",
    href: "/blog",
    icon: FileText,
    thumb: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=120&h=120&fit=crop&q=80",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
    thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop&q=80",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-4 z-50 flex items-center justify-between gap-4 rounded-full px-5 py-2.5 bg-primary shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:top-6 md:w-max md:px-6 border border-outline-variant/10">
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo/berdikariraya.png"
            alt="Berdikari Raya Logo"
            width={120}
            height={32}
            className="hidden md:block h-8 w-auto object-contain shrink-0"
            style={{ width: "auto" }}
            priority
          />
          <span className="font-bold text-on-primary text-sm md:text-base tracking-wider whitespace-nowrap select-none shrink-0 font-nav-ui">
            BERDIKARI RAYA
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <button
            className="shrink-0 text-on-primary hover:opacity-85 transition-opacity p-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation-menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="main-navigation-menu" className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-40 flex flex-col p-8 bg-surface-container-high rounded-2xl shadow-2xl backdrop-blur-xl border border-outline-variant/15" role="dialog" aria-label="Menu navigasi utama">
          <div className="mb-6 border-b border-outline-variant/10 pb-2">
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Navigation Menu
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
                      ? "bg-primary text-on-primary font-bold shadow-md"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 border transition-all duration-200 relative ${
                    isActive ? "border-on-primary/40" : "border-outline-variant/20 group-hover:border-outline-variant/40"
                  }`}>
                    <Image
                      src={item.thumb}
                      alt={item.label}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <span className="font-label-md text-label-md flex-1">
                    {item.label}
                  </span>
                  <item.icon
                    size={20}
                    className={`transition-colors ${isActive ? "text-on-primary" : "text-on-surface-variant group-hover:text-on-surface"}`}
                  />
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 bg-primary text-on-primary py-4 rounded-full font-label-md text-label-md hover:opacity-95 transition-all active:scale-95 text-center uppercase tracking-widest font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </>
  );
}
