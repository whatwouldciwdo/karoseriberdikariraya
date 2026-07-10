"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface KonsultasiButtonProps {
  message?: string;
  variant?: "solid" | "text"; 
}

export default function KonsultasiButton({ message = "Halo, saya ingin konsultasi", variant = "solid" }: KonsultasiButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen) {
      timeout = setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  const phone1 = "6281291578404";
  const phone2 = "6282113484129";
  const href1 = `https://wa.me/${phone1}?text=${encodeURIComponent(message)}`;
  const href2 = `https://wa.me/${phone2}?text=${encodeURIComponent(message)}`;

  if (variant === "solid") {
    if (isOpen) {
      return (
        <div className="flex flex-col sm:flex-row gap-3 w-fit">
          <a
            href={href1}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-[#25D366] text-white px-6 py-3 rounded-full font-label-md text-btn hover:bg-[#1ebe5a] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/30 group w-full sm:w-auto border border-outline-variant/10 cursor-pointer"
          >
            Konsultasi dengan Slamet
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={href2}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-[#25D366] text-white px-6 py-3 rounded-full font-label-md text-btn hover:bg-[#1ebe5a] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/30 group w-full sm:w-auto border border-outline-variant/10 cursor-pointer"
          >
            Konsultasi dengan Dodo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      );
    }
 
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#25D366] text-white px-8 py-4 rounded-full font-label-md text-btn hover:bg-[#1ebe5a] transition-all active:scale-95 flex items-center gap-2 group shadow-lg hover:shadow-[#25D366]/30 w-fit border border-outline-variant/10 cursor-pointer"
      >
        Konsultasi Sekarang
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    );
  }
 
  // Variant text
  if (isOpen) {
    return (
      <div className="flex flex-col gap-2 mt-auto">
        <span className="text-btn text-on-surface-variant font-medium">Konsultasi Dengan:</span>
        <div className="flex items-center gap-3">
          <a
            href={href1}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 font-label-md text-btn uppercase tracking-wider text-[#25D366] hover:text-[#19a94f] transition-all group/link cursor-pointer"
          >
            Slamet
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
          <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
          <a
            href={href2}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 font-label-md text-btn uppercase tracking-wider text-[#25D366] hover:text-[#19a94f] transition-all group/link cursor-pointer"
          >
            Dodo
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    );
  }
 
  return (
    <button
      onClick={(e) => { e.preventDefault(); setIsOpen(true); }}
      className="flex items-center gap-2 font-label-md text-btn uppercase tracking-wider mt-auto group-hover:gap-4 transition-all w-fit cursor-pointer text-[#25D366] hover:text-[#19a94f]"
    >
      <span>Konsultasi Sekarang</span>
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
