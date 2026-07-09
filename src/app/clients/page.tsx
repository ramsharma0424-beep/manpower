import type { Metadata } from "next";
import ClientsShowcase from "@/components/ClientsShowcase";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Clients — Trusted by Leading Brands",
  description: `See who trusts ${company.shortName} for security, housekeeping, and labour in ${company.region}. Clients include Mothers Dairy, Tata Steel, Lemon Tree & more.`,
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Esteemed Clients"
        description={`Trusted by leading brands in FMCG, hospitality, manufacturing, construction, and fitness across ${company.region}.`}
      />

      <ClientsShowcase />
      <CTASection />
    </>
  );
}
