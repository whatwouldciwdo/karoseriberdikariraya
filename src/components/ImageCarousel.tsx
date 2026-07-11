"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  /** Optional aria-label describing the gallery */
  label?: string;
};

export default function ImageCarousel({ images, label = "Galeri foto" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count]
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (count === 0) return null;

  return (
    <div
      className="relative w-full"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      {/* Main image */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-surface-container-high border border-outline-variant/15 shadow-sleek">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Foto sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Foto berikutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/50 text-white text-btn font-label-md backdrop-blur-sm">
              {index + 1} / {count}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {count > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Lihat foto ${i + 1}`}
              aria-current={i === index}
              className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                i === index
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
