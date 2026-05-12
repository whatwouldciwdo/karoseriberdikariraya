import type { MetadataRoute } from "next";

const SITE_URL = "https://www.berdikariraya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/panduan-memilih-jenis-karoseri-truck`,
      lastModified: "2026-05-10T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog/tips-perawatan-hydraulic-dump-truck`,
      lastModified: "2026-05-05T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog/keunggulan-karoseri-box-aluminium`,
      lastModified: "2026-04-28T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog/karoseri-fuel-truck-standar-migas`,
      lastModified: "2026-04-20T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog/water-sprayer-truck-konstruksi`,
      lastModified: "2026-04-14T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog/tips-repair-body-kendaraan-niaga`,
      lastModified: "2026-04-07T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
