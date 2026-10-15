import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const publicSite = { allow: "/", disallow: ["/api/"] as string[] };

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...publicSite },
      // Search and answer-engine citability. These are not training crawlers.
      { userAgent: "Googlebot", ...publicSite },
      { userAgent: "Bingbot", ...publicSite },
      { userAgent: "Applebot", ...publicSite },
      { userAgent: "OAI-SearchBot", ...publicSite },
      { userAgent: "ChatGPT-User", ...publicSite },
      { userAgent: "Claude-SearchBot", ...publicSite },
      { userAgent: "PerplexityBot", ...publicSite },
      // Training and grounding crawlers. Allowed so the public site can be cited;
      // llms.txt still asks for written consent before model training.
      { userAgent: "GPTBot", ...publicSite },
      { userAgent: "ClaudeBot", ...publicSite },
      { userAgent: "Claude-User", ...publicSite },
      { userAgent: "Google-Extended", ...publicSite },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
