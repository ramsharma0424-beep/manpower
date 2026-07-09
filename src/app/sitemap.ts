import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/clients",
    "/blogs",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
    "/disclaimer",
    "/cookie-policy",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...blogs.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
