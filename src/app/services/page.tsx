import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import JsonLdScript from "@/components/JsonLdScript";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import SiteContainer from "@/components/SiteContainer";
import { company, industryLinks, sectors } from "@/lib/data";
import { absoluteUrl, createPageMetadata, createServicesJsonLd, locationsLine } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Services — Security, Housekeeping & Labour",
  description: `Need security guards, bouncers, PSOs, housekeeping staff, or construction labour in ${company.region}? Explore manpower services from ${company.shortName} across ${locationsLine} — PASARA licensed, police-verified teams.`,
  path: "/services",
  keywords: [
    "security services Gurugram",
    "bouncer services Noida",
    "PSO security Delhi NCR",
    "housekeeping manpower Noida",
    "construction labour Rohtak",
    "facility management staff Delhi NCR",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLdScript data={createServicesJsonLd()} />
      <PageHero
        eyebrow="Solutions"
        title="Our Services"
        description={`Comprehensive manpower and facility management solutions across ${sectors.join(", ")} in ${company.region}.`}
      />
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <Services showAll />

      <section className="section-muted py-12 sm:py-16">
        <SiteContainer>
          <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-3xl text-stone-600 dark:text-stone-300">
            Tailored manpower for key sectors across Delhi NCR — with sector-specific training,
            supervisor reporting, and deployment in {locationsLine}.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {industryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-elevated p-5 transition hover:border-brand-gold/40"
              >
                <h3 className="font-semibold text-brand-navy dark:text-stone-100">{link.label}</h3>
                <p className="mt-2 text-sm text-brand-gold">Explore industry solutions →</p>
              </Link>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="py-12 sm:py-16">
        <SiteContainer>
          <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
            Manpower Strength
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-600 dark:text-stone-300">
            Our workforce includes trained security guards, bouncers, PSOs, housekeeping staff, and a
            technical team comprising facility managers, supervisors, multi-technicians, electricians,
            plumbers, AC operators, carpenters, painters, and DG operators — deployed across{" "}
            {company.region}, including {locationsLine}.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <Link href="/services/security" className="btn-primary">
              Security Services
            </Link>
            <Link href="/services/housekeeping" className="btn-secondary">
              Housekeeping Services
            </Link>
            <Link href="/training" className="btn-secondary">
              Training Programs
            </Link>
          </div>
        </SiteContainer>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}
