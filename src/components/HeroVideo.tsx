"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Load video on all devices unless the connection is slow or data-saver is on
    const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };
    const conn = nav.connection;
    const isSaveData = conn?.saveData;
    const isSlowConnection = conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g";

    if (!isSaveData && !isSlowConnection) {
      setVideoLoaded(true);
    }
  }, []);

  // Ensure the video actually plays on mobile browsers.
  // iOS/Android require the muted property to be set programmatically and
  // play() to be invoked explicitly; the autoPlay attribute alone is unreliable.
  useEffect(() => {
    if (!videoLoaded) return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.setAttribute("muted", "");
    video.playsInline = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked; retry once the user interacts with the page.
          const resume = () => {
            video.play().catch(() => {});
            window.removeEventListener("touchstart", resume);
            window.removeEventListener("click", resume);
          };
          window.addEventListener("touchstart", resume, { once: true });
          window.addEventListener("click", resume, { once: true });
        });
      }
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, [videoLoaded]);

  return (
    <>
      {/* Poster image always shown */}
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=60"
        alt="Berdikari Raya Service background"
        fill
        priority
        quality={40}
        sizes="(max-width: 640px) 640px, (max-width: 1024px) 828px, 1200px"
        className={`object-cover grayscale brightness-50 transition-opacity duration-700 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
      />
      {/* Video only loaded on desktop/fast connection */}
      {videoLoaded && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
          autoPlay
          loop
          muted
          playsInline
          src="/video/Berdikari.mp4"
        />
      )}
    </>
  );
}
