import type { MetadataRoute } from "next";
import { getServices } from "@/lib/queries/services";

const SITE_URL = "https://karoseriberdikariraya.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();
  const services = await getServices();

  const serviceDetailPages: MetadataRoute.Sitemap = [
    // Halaman service dedicated (hydraulic)
    {
      url: `${SITE_URL}/services/instalasi-hydraulic-system-truck`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/service-hydraulic-system-truck`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Halaman service data-driven
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

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
    ...serviceDetailPages,
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
      url: `${SITE_URL}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
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
