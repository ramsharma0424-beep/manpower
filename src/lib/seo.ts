import type { Metadata } from "next";
import { company, faqs, services } from "./data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || company.website;

export const phoneE164 = `+91${company.phone}`;

export const locationsLine = company.locations.join(", ");

export const defaultKeywords = [
  "manpower services Delhi NCR",
  "security guard services Gurugram",
  "housekeeping services Noida",
  "construction labour Rohtak",
  "manpower agency Sonipat",
  "security guards Manesar",
  "housekeeping staff Faridabad",
  "PASARA licensed security agency",
  "facility management manpower",
  "Rudra Manpower Services",
  "workforce solutions Haryana",
  "contract staffing Delhi NCR",
  "verified security personnel",
  "police verified security guards",
  "manpower supplier Gurugram",
];

export const defaultDescription = `Looking for reliable security, housekeeping, or labour staff in Delhi NCR? Rudra Manpower deploys police-verified, army-led teams across ${locationsLine}. PASARA licensed. Get a free quote today.`;

type PageMetaOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
};

export function absoluteUrl(path = ""): string {
  return `${siteUrl}${path}`;
}

export function absoluteImageUrl(image: string): string {
  return image.startsWith("http") ? image : absoluteUrl(image);
}

export function createPageMetadata({
  title,
  description,
  path = "",
  image,
  keywords = defaultKeywords,
  type = "website",
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteImageUrl(image) : undefined;

  return {
    title,
    description,
    keywords,
    authors: [{ name: company.name }],
    creator: company.name,
    publisher: company.name,
    applicationName: company.shortName,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_IN",
      url,
      siteName: company.shortName,
      title: `${title} | ${company.shortName}`,
      description,
      ...(imageUrl
        ? { images: [{ url: imageUrl, width: 1200, height: 630, alt: title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.shortName}`,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    other: {
      "geo.region": "IN-HR",
      "geo.placename": "Gurugram",
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
  formatDetection: {
    telephone: true,
    email: true,
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  category: "business",
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${company.shortName} Services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "LocalBusiness",
          name: company.name,
          url: siteUrl,
        },
        areaServed: company.locations.map((city) => ({
          "@type": "City",
          name: city,
        })),
        serviceType: service.title,
      },
    })),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: company.name,
  alternateName: company.shortName,
  url: siteUrl,
  logo: absoluteUrl("/logo.png"),
  description: defaultDescription,
  email: company.email,
  telephone: phoneE164,
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

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: company.name,
  image: absoluteUrl("/logo.png"),
  url: siteUrl,
  telephone: phoneE164,
  email: company.email,
  priceRange: "$$",
  description: defaultDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4595,
    longitude: 77.0266,
  },
  areaServed: company.locations.map((city) => ({
    "@type": "City",
    name: city,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: company.region,
    },
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Manpower & Facility Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: company.shortName,
  url: siteUrl,
  description: defaultDescription,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-IN",
};

export const globalJsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, localBusinessJsonLd, websiteJsonLd],
};
