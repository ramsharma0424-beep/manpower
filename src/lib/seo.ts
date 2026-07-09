import type { Metadata } from "next";
import { company } from "./data";

export const siteUrl = "https://www.rudramanpowerservices.com";

export const defaultKeywords = [
  "manpower services Delhi NCR",
  "security guard services Gurugram",
  "housekeeping services Noida",
  "construction labour Rohtak",
  "PASARA licensed security agency",
  "facility management manpower",
  "Rudra Manpower Services",
  "workforce solutions Haryana",
  "contract staffing Delhi NCR",
  "verified security personnel",
];

export const defaultDescription =
  "Looking for reliable security, housekeeping, or labour staff in Delhi NCR? Rudra Manpower deploys police-verified, army-led teams across Gurugram, Noida & Rohtak. Get a free quote today.";

type PageMetaOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path = "",
  image = "/logo.png",
  keywords = defaultKeywords,
  type = "website",
}: PageMetaOptions): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: company.name }],
    creator: company.name,
    publisher: company.name,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_IN",
      url,
      siteName: company.shortName,
      title: `${title} | ${company.shortName}`,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.shortName}`,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export const rootMetadata: Metadata = {
  ...createPageMetadata({
    title: "Security, Housekeeping & Manpower Solutions in Delhi NCR",
    description: defaultDescription,
    path: "/",
    keywords: defaultKeywords,
  }),
  title: {
    default: `${company.shortName} | Security, Housekeeping & Manpower in Delhi NCR`,
    template: `%s | ${company.shortName}`,
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: defaultDescription,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: company.locations,
  foundingDate: "2023-04-10",
  sameAs: [],
};
