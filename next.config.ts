import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.9"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tzzkmllzfuimtvvzxjis.supabase.co",
      },
    ],

    formats: ["image/avif", "image/webp"],
    deviceSizes: [400, 500, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
