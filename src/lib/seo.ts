import type { Metadata } from "next";
import { seoKeywords } from "./keywords";
import { company, faqs, leadership, services } from "./data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || company.website;

export const phoneE164 = `+91${company.phone}`;

export const locationsLine = company.locations.join(", ");

export const defaultKeywords = [
  "manpower services in Delhi NCR",
  "manpower agency Delhi NCR",
  "security services in Delhi NCR",
  "best security services Delhi NCR",
  "security guard services Delhi NCR",
  "security agency Gurugram",
  "security agency Gurgaon",
  "manpower services Gurgaon",
  "manpower services Gurugram",
  "manpower services Delhi",
  "manpower services Noida",
  "manpower services Sonipat",
  "manpower services Panipat",
  "labour provider near me",
  "labour provider Delhi NCR",
  "labour supply agency Gurugram",
  "housekeeping services Delhi NCR",
  "housekeeping services Noida",
  "best manpower agency Gurugram",
  "best security agency Gurgaon",
  "PASARA licensed security agency Gurugram",
  "police verified security guards Delhi NCR",
  "contract staffing Delhi NCR",
  "facility management services Gurugram",
  "security guards Manesar",
  "labour supply Sonipat",
  "manpower contractor Faridabad",
  "security guard company Bhiwadi",
  "manpower services near me",
  "security services near me",
  "Rudra Manpower Services",
  ...seoKeywords.slice(0, 15),
];

/** High-intent local keywords for each city location page */
export function locationSeoKeywords(city: string, state: string): string[] {
  const places = city === "Gurugram" ? ["Gurugram", "Gurgaon"] : [city];

  return places
    .flatMap((place) => [
      `manpower services ${place}`,
      `manpower services in ${place}`,
      `manpower agency ${place}`,
      `best manpower agency ${place}`,
      `security services ${place}`,
      `security services in ${place}`,
      `best security services ${place}`,
      `security guard services ${place}`,
      `security agency ${place}`,
      `best security agency ${place}`,
      `housekeeping services ${place}`,
      `labour provider ${place}`,
      `labour provider near ${place}`,
      `labour supply ${place}`,
      `labour supply agency ${place}`,
      `contract staffing ${place}`,
      `staffing agency ${place}`,
      `facility management ${place}`,
      `PASARA licensed security ${place}`,
      `police verified security guards ${place}`,
      `manpower contractor ${place}`,
      `security guards near me ${place}`,
      `manpower services near me ${place}`,
    ])
    .concat([
      `manpower agency ${city} ${state}`,
      `security agency ${city} ${state}`,
      `labour provider near me`,
      `best security services near me`,
    ]);
}

export const defaultDescription =
  "Looking for manpower services in Delhi NCR? Hire a PASARA-licensed security agency for police-verified security guards, housekeeping staff & contract labour in Gurugram, Noida, Delhi, Faridabad, Manesar & nearby. Free quote.";

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
    title: "Manpower Agency Delhi NCR | PASARA Security & Housekeeping",
    description: defaultDescription,
    path: "/",
    keywords: defaultKeywords,
  }),
  title: {
    default: `${company.shortName} | Manpower Agency Delhi NCR — PASARA Security & Housekeeping`,
    template: `%s | ${company.shortName}`,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
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

/**
 * Social / citation profile URLs for sameAs.
 * Set these env vars in .env.local (and Vercel) once profiles are live.
 * Each is optional — falsy values are filtered out automatically.
 *
 *   NEXT_PUBLIC_GBP_URL=https://maps.google.com/?cid=YOUR_CID
 *   NEXT_PUBLIC_JUSTDIAL_URL=https://www.justdial.com/...
 *   NEXT_PUBLIC_INDIAMART_URL=https://www.indiamart.com/...
 *   NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/...
 *   NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/...
 */
const sameAsProfiles = [
  process.env.NEXT_PUBLIC_GBP_URL,
  process.env.NEXT_PUBLIC_JUSTDIAL_URL,
  process.env.NEXT_PUBLIC_INDIAMART_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
].filter(Boolean) as string[];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: company.name,
  alternateName: company.shortName,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/logo.png"),
    width: 200,
    height: 60,
  },
  description: defaultDescription,
  email: company.email,
  telephone: phoneE164,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  areaServed: company.locations.map((city) => ({
    "@type": "City",
    name: city,
    containedInPlace: { "@type": "AdministrativeArea", name: "Delhi NCR" },
  })),
  foundingDate: "2023-04-10",
  ...(sameAsProfiles.length > 0 ? { sameAs: sameAsProfiles } : {}),
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  // EmploymentAgency is the correct Schema.org subtype for manpower/staffing agencies
  "@type": ["EmploymentAgency", "LocalBusiness"],
  "@id": `${siteUrl}/#localbusiness`,
  name: company.name,
  image: [
    {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.png"),
      width: 200,
      height: 60,
    },
  ],
  url: siteUrl,
  telephone: phoneE164,
  email: company.email,
  priceRange: "$$",
  description: defaultDescription,
  address: {
    "@type": "PostalAddress",
    // streetAddress omitted intentionally — SAB with no public walk-in address
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    // Gurugram city-centre coordinates — update to exact office pin once confirmed
    latitude: 28.45952,
    longitude: 77.02660,
  },
  areaServed: company.locations.map((city) => ({
    "@type": "City",
    name: city,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: company.region,
    },
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  ...(sameAsProfiles.length > 0 ? { sameAs: sameAsProfiles } : {}),
  // Uncomment and update once GBP reviews are live (prevents schema errors from zero-count):
  // aggregateRating: {
  //   "@type": "AggregateRating",
  //   ratingValue: "4.8",
  //   reviewCount: "12",
  //   bestRating: "5",
  //   worstRating: "1",
  // },
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

type ServiceLike = {
  id: string;
  title: string;
  description: string;
  areas?: string[];
};

export function createServiceJsonLd(service: ServiceLike) {
  const areas = service.areas ?? company.locations;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${service.id}#service`,
    name: service.title,
    description: service.description,
    url: absoluteUrl(`/services/${service.id}`),
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: areas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "AdministrativeArea", name: company.region },
    })),
    serviceType: service.title,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      servicePhone: phoneE164,
    },
  };
}

export const personJsonLd = leadership.map((person) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  description: person.bio,
  worksFor: { "@id": `${siteUrl}/#organization` },
  knowsAbout: [
    "Security Services",
    "Facility Management",
    "Manpower Agency",
    "Army Veteran Operations",
  ],
}));
