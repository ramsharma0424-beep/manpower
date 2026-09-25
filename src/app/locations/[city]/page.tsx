import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLdScript from "@/components/JsonLdScript";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { company, locationPages, services } from "@/lib/data";
import { absoluteUrl, createPageMetadata, locationSeoKeywords, phoneE164, siteUrl } from "@/lib/seo";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return locationPages.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const loc = locationPages.find((l) => l.slug === city);
  if (!loc) return { title: "Location Not Found" };

  const base = createPageMetadata({
    title: `Manpower & Security Services in ${loc.city} | Labour Provider Near You`,
    description: `Best manpower & security services in ${loc.city}, ${loc.state}. Hire PASARA-licensed security guards, housekeeping staff, and labour providers near ${loc.city} from ${company.shortName}. Police-verified teams. Call ${company.phone}.`,
    path: `/locations/${loc.slug}`,
    keywords: locationSeoKeywords(loc.city, loc.state),
  });

  return {
    ...base,
    other: {
      "geo.region": loc.geoRegion,
      "geo.placename": loc.city,
      "geo.position": `${loc.geo.latitude};${loc.geo.longitude}`,
      ICBM: `${loc.geo.latitude}, ${loc.geo.longitude}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const loc = locationPages.find((l) => l.slug === city);
  if (!loc) notFound();

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": ["EmploymentAgency", "LocalBusiness"],
    "@id": `${siteUrl}/locations/${loc.slug}#localbusiness`,
    name: `${company.name} — ${loc.city}`,
    url: absoluteUrl(`/locations/${loc.slug}`),
    telephone: phoneE164,
    email: company.email,
    description: `PASARA-licensed security guard services, housekeeping services, and manpower deployment in ${loc.city}, ${loc.state} by ${company.name}.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.geo.latitude,
      longitude: loc.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: { "@type": "AdministrativeArea", name: loc.region },
    },
    parentOrganization: { "@id": `${siteUrl}/#organization` },
  };

  const faqSchema =
    loc.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: loc.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  const featuredServices = services.slice(0, 6);

  return (
    <>
      <JsonLdScript data={locationSchema} />
      {faqSchema && <JsonLdScript data={faqSchema} />}
      <PageHero
        eyebrow={`${loc.city}, ${loc.state}`}
        title={`Security Guards, Housekeeping & Manpower Services in ${loc.city}`}
        description={`PASARA-licensed security guards, housekeeping staff, and contract labour deployed across ${loc.city} by ${company.shortName} — army veteran-led, police verified.`}
      />
      <Breadcrumbs
        items={[
          { name: "Service Areas", path: "/locations" },
          { name: loc.city, path: `/locations/${loc.slug}` },
        ]}
      />

      <section className="py-10 sm:py-16">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
                Why Rudra Manpower in {loc.city}?
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">
                {loc.summary}
              </p>
              {loc.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300"
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-4 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                {loc.deploymentNote}
              </p>

              <h2 className="mt-10 font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
                Manpower, security &amp; labour providers near {loc.city}
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">
                If you searched for manpower services in {loc.city}, best security services in{" "}
                {loc.city}, a labour provider near {loc.city}, or a security agency in {loc.city},{" "}
                {company.shortName} is built for local deployment — PASARA-licensed security guards,
                trained housekeeping staff, and EPFO-aligned contract labour with supervisor
                accountability on every shift.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-stone-600 dark:text-stone-300 sm:text-base">
                <li>Security guard services &amp; night watch in {loc.city}</li>
                <li>Housekeeping and facility hygiene staff for offices, factories &amp; societies</li>
                <li>Labour supply / labour provider for warehouses, plants &amp; project sites</li>
                <li>Contract staffing with clear attendance and replacement SLAs</li>
              </ul>

              <h2 className="mt-10 font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
                Services We Provide in {loc.city}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {featuredServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="card-elevated flex flex-col p-5 transition hover:border-brand-gold/40"
                  >
                    <h3 className="font-semibold text-brand-navy dark:text-stone-100">
                      {service.title} in {loc.city}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                      {service.description.slice(0, 120)}…
                    </p>
                    <span className="mt-3 text-sm font-medium text-brand-gold">Learn more →</span>
                  </Link>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote in {loc.city}
                </Link>
                <Link href="/services" className="btn-secondary">
                  All Services
                </Link>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="card-elevated p-5">
                <h3 className="mb-3 font-semibold text-brand-navy dark:text-stone-100">
                  Key Sectors in {loc.city}
                </h3>
                <ul className="space-y-2">
                  {loc.dominantSectors.map((sector) => (
                    <li
                      key={sector}
                      className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300"
                    >
                      <span className="text-brand-gold">✓</span>
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-elevated p-5">
                <h3 className="mb-3 font-semibold text-brand-navy dark:text-stone-100">
                  Contact for {loc.city}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300">
                  Reach our deployment team directly:
                </p>
                <a
                  href={`tel:${company.phone}`}
                  className="mt-3 block font-semibold text-brand-gold hover:underline"
                >
                  {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block break-all text-sm text-brand-gold hover:underline"
                >
                  {company.email}
                </a>
              </div>

              <div className="card-elevated p-5">
                <h3 className="mb-3 font-semibold text-brand-navy dark:text-stone-100">
                  Other Service Areas
                </h3>
                <ul className="space-y-1">
                  {locationPages
                    .filter((l) => l.slug !== loc.slug)
                    .map((l) => (
                      <li key={l.slug}>
                        <Link
                          href={`/locations/${l.slug}`}
                          className="text-sm text-stone-500 transition hover:text-brand-gold dark:text-stone-400"
                        >
                          {l.city}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </SiteContainer>
      </section>

      {loc.faqs.length > 0 && (
        <section className="py-10 sm:py-14">
          <SiteContainer>
            <h2 className="font-display text-xl font-semibold text-brand-navy dark:text-stone-100 sm:text-2xl">
              Frequently Asked Questions — {loc.city}
            </h2>
            <div className="mt-4 max-w-3xl space-y-3">
              {loc.faqs.map((faq) => (
                <details key={faq.question} className="group card-elevated overflow-hidden">
                  <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-brand-navy marker:content-none dark:text-stone-100 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.question}
                      <span className="mt-0.5 shrink-0 text-brand-gold transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-brand-border px-5 py-4 text-sm leading-relaxed text-stone-600 dark:border-stone-700 dark:text-stone-300">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </SiteContainer>
        </section>
      )}

      <CTASection />
    </>
  );
}
