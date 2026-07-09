import type { Metadata } from "next";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { company, sectors } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Services — Security, Housekeeping & Labour",
  description: `Need security guards, housekeeping staff, or construction labour in ${company.region}? Explore 8 manpower services from ${company.shortName} — PASARA licensed, police-verified teams.`,
  path: "/services",
  keywords: [
    "security services Gurugram",
    "housekeeping manpower Noida",
    "construction labour Rohtak",
    "facility management staff Delhi NCR",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Our Services"
        description={`Comprehensive manpower and facility management solutions across ${sectors.join(", ")} in ${company.region}.`}
      />

      <Services showAll />

      <section className="section-muted py-16">
        <SiteContainer>
          <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
            Manpower Strength
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-600 dark:text-stone-300">
            Our workforce includes trained security guards, housekeeping staff, and a technical team
            comprising facility managers, supervisors, multi-technicians, electricians, plumbers, AC
            operators, carpenters, painters, and DG operators — deployed across {company.region}.
          </p>
        </SiteContainer>
      </section>

      <CTASection />
    </>
  );
}
