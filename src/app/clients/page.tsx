import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientsShowcase from "@/components/ClientsShowcase";
import CTASection from "@/components/CTASection";
import JsonLdScript from "@/components/JsonLdScript";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Clients — Trusted by Leading Brands",
  description: `See who trusts ${company.shortName} for security, housekeeping, and labour in ${company.region}. Clients include Mothers Dairy, Tata Steel, Lemon Tree & more.`,
  path: "/clients",
  keywords: [
    "Rudra Manpower clients",
    "manpower clients Delhi NCR",
    "security agency clients Gurugram",
    "Mothers Dairy security manpower",
  ],
});

export default function ClientsPage() {
  return (
    <>
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Clients of ${company.shortName}`,
          description: `Trusted brands and enterprises served by ${company.shortName} across ${company.region}.`,
          url: absoluteUrl("/clients"),
        }}
      />
      <PageHero
        eyebrow="Portfolio"
        title="Our Esteemed Clients"
        description={`Trusted by leading brands in FMCG, hospitality, manufacturing, construction, and fitness across ${company.region}.`}
      />
      <Breadcrumbs items={[{ name: "Clients", path: "/clients" }]} />

      <ClientsShowcase />
      <CTASection />
    </>
  );
}
