import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";
import { industries } from "@/lib/content";
import { locationPages, services } from "@/lib/data";
import { siteUrl } from "@/lib/seo";

// Static pages with accurate last-significant-change dates (ISO 8601).
// Update these whenever the page content meaningfully changes.
// Do NOT use `new Date()` here — dynamic timestamps are ignored by Google.
const staticPages: Array<{ path: string; lastModified: string }> = [
  { path: "", lastModified: "2026-10-15" },
  { path: "/services", lastModified: "2026-10-15" },
  { path: "/contact", lastModified: "2026-08-11" },
  { path: "/about", lastModified: "2026-08-11" },
  { path: "/blogs", lastModified: "2026-10-15" },
  { path: "/careers", lastModified: "2026-06-01" },
  { path: "/training", lastModified: "2026-06-01" },
  { path: "/locations", lastModified: "2026-10-15" },
  { path: "/privacy-policy", lastModified: "2023-04-10" },
  { path: "/terms-of-use", lastModified: "2023-04-10" },
  { path: "/disclaimer", lastModified: "2023-04-10" },
  { path: "/cookie-policy", lastModified: "2023-04-10" },
];

// Service and industry pages share a common last-update date.
// Update when content in data.ts / content.ts is meaningfully revised.
const SERVICE_LAST_MOD = "2026-10-15";
const INDUSTRY_LAST_MOD = "2026-07-01";
const LOCATION_LAST_MOD = "2026-10-15";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(({ path, lastModified }) => ({
      url: `${siteUrl}${path}`,
      lastModified,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.id}`,
      lastModified: SERVICE_LAST_MOD,
    })),
    ...industries.map((industry) => ({
      url: `${siteUrl}/industries/${industry.slug}`,
      lastModified: INDUSTRY_LAST_MOD,
    })),
    ...blogs.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
      lastModified: post.isoDate,
    })),
    ...locationPages.map((loc) => ({
      url: `${siteUrl}/locations/${loc.slug}`,
      lastModified: LOCATION_LAST_MOD,
    })),
  ];
}
