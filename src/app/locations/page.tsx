import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { company, locationPages } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Manpower & Security Services Near You — Delhi NCR Locations",
  description: `Hire manpower services, best security services, and labour providers near you across ${company.locations.join(", ")}. PASARA-licensed guards, housekeeping & contract staffing by ${company.shortName}. Free quote.`,
  path: "/locations",
  keywords: [
    "manpower services near me",
    "security services near me",
    "best security services Delhi NCR",
    "labour provider near me",
    "labour provider Delhi NCR",
    "manpower agency Delhi NCR",
    "security guard services Delhi NCR",
    "housekeeping services Delhi NCR",
    "staffing agency Gurugram Noida Faridabad",
    "PASARA licensed security NCR",
    "contract staffing Delhi NCR",
    "manpower services Gurgaon",
    "manpower services Gurugram",
    "manpower services Delhi",
    "manpower services Noida",
    "manpower services Sonipat",
    "manpower services Panipat",
    "security services Gurgaon",
    "security services Noida",
    "labour supply agency Haryana",
    ...company.locations.flatMap((c) => [
      `manpower services ${c}`,
      `security services ${c}`,
      `labour provider ${c}`,
      `best security services ${c}`,
    ]),
  ],
});

export default function LocationsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Manpower Services Across Delhi NCR"
        description={`PASARA-licensed security guards, housekeeping staff, and contract labour deployed by ${company.shortName} across ${company.locations.join(", ")} — army veteran-led, police-verified teams.`}
      />
      <Breadcrumbs items={[{ name: "Service Areas", path: "/locations" }]} />

      <section className="py-10 sm:py-16">
        <SiteContainer>
          <p className="max-w-3xl text-sm leading-relaxed text-stone-600 dark:text-stone-300 sm:text-base">
            Looking for manpower services, best security services, or a labour provider near you in
            Delhi NCR? Rudra Manpower is a PASARA-licensed security and staffing agency
            headquartered in Gurugram (Gurgaon) with active deployments across{" "}
            {company.locations.join(", ")}. We provide police-verified security guards, trained
            housekeeping staff, facility management, and contract labour — scalable for single sites
            and multi-location operations. Select your city below for local service details and a
            free quote.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locationPages.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="card-elevated group flex flex-col p-6 transition hover:border-brand-gold/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-lg font-semibold text-brand-navy group-hover:text-brand-gold dark:text-stone-100">
                      {loc.city}
                    </h2>
                    <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
                      {loc.state} · {loc.region}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-brand-gold transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {loc.dominantSectors.map((sector) => (
                    <li
                      key={sector}
                      className="rounded-sm border border-brand-border bg-brand-cream px-2 py-0.5 text-xs text-stone-600 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300"
                    >
                      {sector}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {loc.summary.slice(0, 130)}…
                </p>

                <span className="mt-4 text-sm font-medium text-brand-gold">
                  Services in {loc.city} →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 max-w-3xl rounded-lg border border-brand-border bg-brand-cream/50 p-6 dark:border-stone-700 dark:bg-stone-900/40">
            <h2 className="font-display text-lg font-semibold text-brand-navy dark:text-stone-100">
              Need manpower in a location not listed?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              We regularly assess new deployment zones across Haryana, UP, and Rajasthan. Call{" "}
              <a href={`tel:${company.phone}`} className="font-semibold text-brand-gold hover:underline">
                {company.phone}
              </a>{" "}
              or use our contact form to discuss your site requirements — we&apos;ll confirm
              availability and turnaround time.
            </p>
            <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn-secondary">
                All Services
              </Link>
            </div>
          </div>
        </SiteContainer>
      </section>

      <CTASection />
    </>
  );
}
