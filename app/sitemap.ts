import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/siteOrigin";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-24");
  return [
    {
      url: siteOrigin,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteOrigin}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteOrigin}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
