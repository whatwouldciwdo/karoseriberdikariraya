"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import {
  Menu, X, Wrench, Phone, FileText, Briefcase, Images, ChevronDown, ChevronRight
} from "lucide-react";
import Image from "next/image";
import { services } from "@/data/services";
import { portfolioProjects } from "@/data/portfolio";


const navItems = [
  {
    label: "Services",
    href: "/services",
    icon: Wrench,
    thumb: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=120&h=120&fit=crop&q=80",
    submenu: [
      ...["karoseri-box-aluminium", "karoseri-box-freezer", "repair-custom-body"]
        .map((slug) => services.find((s) => s.slug === slug))
        .filter((s): s is NonNullable<typeof s> => Boolean(s))
        .map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}` })),
      { label: "Instalasi Hydraulic System Truck", href: "/services/instalasi-hydraulic-system-truck" },
      { label: "Service Hydraulic System Truck", href: "/services/service-hydraulic-system-truck" },
    ],
  },

  {
    label: "Portfolio",
    href: "/portfolio",
    icon: Images,
    thumb: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=120&h=120&fit=crop&q=80",
    submenu: portfolioProjects.map((p) => ({ label: p.shortTitle, href: `/portfolio/${p.slug}` })),

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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("navbar-menu-toggle", { detail: { open: isMenuOpen } })
    );
  }, [isMenuOpen]);

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
          <div className="select-none shrink-0 uppercase">
            <span className="font-label-md font-black tracking-[0.06em] text-btn whitespace-nowrap">
              <span className="text-[#E11D2A]">BERDIKARI RAYA</span>{" "}
              <span className="text-on-primary dark:text-black">SERVICE</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
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
        <div
          className="fixed inset-0 z-30 bg-background/40 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {isMenuOpen && (
        <div id="main-navigation-menu" className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-40 flex flex-col p-8 bg-surface-container-high rounded-2xl shadow-2xl backdrop-blur-xl border border-outline-variant/15" role="dialog" aria-label="Menu navigasi utama">
          <div className="mb-6 border-b border-outline-variant/10 pb-2">
            <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">
              Navigation Menu
            </p>
          </div>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              const hasSubmenu = "submenu" in item && Array.isArray(item.submenu) && item.submenu.length > 0;
              const isSubmenuOpen = openSubmenu === item.href;
              return (
                <div key={item.href} className="flex flex-col">
                  <div
                    className={`group flex items-center gap-4 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                      isActive
                         ? "bg-primary text-on-primary font-bold shadow-md"
                         : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                    }`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 flex-1 min-w-0 cursor-pointer"
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
                      <span className="font-label-md text-btn flex-1">
                        {item.label}
                      </span>
                    </Link>
                    {hasSubmenu ? (
                      <button
                        type="button"
                        onClick={() => setOpenSubmenu(isSubmenuOpen ? null : item.href)}
                        aria-label={isSubmenuOpen ? `Tutup submenu ${item.label}` : `Buka submenu ${item.label}`}
                        aria-expanded={isSubmenuOpen}
                        className="p-1 cursor-pointer"
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${isSubmenuOpen ? "rotate-180" : ""} ${isActive ? "text-on-primary" : "text-on-surface-variant group-hover:text-on-surface"}`}
                        />
                      </button>
                    ) : (
                      <item.icon
                        size={20}
                        className={`transition-colors ${isActive ? "text-on-primary" : "text-on-surface-variant group-hover:text-on-surface"}`}
                      />
                    )}
                  </div>

                  {hasSubmenu && isSubmenuOpen && (
                    <div className="flex flex-col gap-0.5 mt-1 ml-6 pl-4 border-l border-outline-variant/20">
                      {item.submenu!.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}

                            onClick={() => setIsMenuOpen(false)}
                            className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                              isSubActive
                                ? "text-primary font-semibold bg-surface-container"
                                : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                            }`}
                          >
                            <ChevronRight size={14} className="shrink-0 text-primary group-hover:translate-x-0.5 transition-transform" />
                            <span className="font-label-md text-btn">{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 bg-primary text-on-primary py-4 rounded-full font-label-md text-btn hover:opacity-95 transition-all active:scale-95 text-center uppercase tracking-widest font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </>
  );
}
