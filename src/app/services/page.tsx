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
import { homeKeywordSummary } from "@/lib/content";
import { servicesMainKeywords } from "@/lib/keywords";
import { absoluteUrl, createPageMetadata, createServicesJsonLd, locationsLine } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Best Security Agency & Top Manpower Services in Delhi NCR",
  description: `Hire security guards in Gurugram, housekeeping staff in Noida, or contract manpower across Faridabad, Manesar & Delhi NCR. PASARA-licensed teams from ${company.shortName}.`,
  path: "/services",
  keywords: servicesMainKeywords(),
});

export default function ServicesPage() {
  return (
    <>
      <JsonLdScript data={createServicesJsonLd()} />
      <PageHero
        eyebrow="Solutions"
        title="Security, Housekeeping & Manpower Services Across Delhi NCR"
        description={`Manpower services, security services, housekeeping services, facility management services, and labour supply across ${sectors.join(", ")} in ${company.region}.`}
      />
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <section className="border-b border-brand-border bg-brand-cream/40 py-6 dark:bg-stone-900/40">
        <SiteContainer>
          <p className="max-w-4xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {homeKeywordSummary}
          </p>
        </SiteContainer>
      </section>

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
          <div className="card-grid mt-6 grid gap-4 sm:grid-cols-3">
            {industryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-elevated flex h-full flex-col p-5 transition hover:border-brand-gold/40"
              >
                <h3 className="font-semibold text-brand-navy dark:text-stone-100">{link.label}</h3>
                <p className="mt-auto pt-2 text-sm text-brand-gold">Explore industry solutions →</p>
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
