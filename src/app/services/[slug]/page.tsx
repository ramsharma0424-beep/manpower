import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CoverImage from "@/components/CoverImage";
import CTASection from "@/components/CTASection";
import JsonLdScript from "@/components/JsonLdScript";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { getServiceDetail } from "@/lib/content";
import { company, services } from "@/lib/data";
import { createPageMetadata, createServiceJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return { title: "Service Not Found" };

  const titles: Record<string, string> = {
    security: "Best Security Agency in Delhi NCR | PASARA Licensed Guards",
    housekeeping: "Housekeeping Services Delhi NCR | Office & Corporate",
    bouncer: "Bouncer Services Delhi NCR | Event & Hotel Security",
    pso: "PSO Services Delhi NCR | Personal Security Officer",
    technical: "Facility Management Services Gurugram | Technical Manpower",
    horticulture: "Horticulture Services Gurugram | Landscaping Manpower",
    labour: "Labour Supply Delhi NCR | Industrial & Warehouse Manpower",
    "construction-labour": "Construction Labour Supply Delhi NCR | Site Manpower",
    professional: "Site Supervisor Supply Delhi NCR | Facility Coordinators",
    "contract-staffing": "Top Manpower Services in Delhi NCR | Contract Staffing",
  };

  return createPageMetadata({
    title: titles[service.id] ?? `${service.title} in ${company.region}`,
    description: service.heroDescription.slice(0, 155),
    path: `/services/${service.id}`,
    image: service.image,
    keywords: service.keywords,
  });
}

const serviceH1: Record<string, string> = {
  security: "Hire PASARA-Licensed Security Guards in Delhi NCR",
  housekeeping: "Professional Housekeeping Services for Offices in Delhi NCR",
  bouncer: "Professional Bouncer Services for Events & Hotels in Delhi NCR",
  pso: "Personal Security Officers for VIP & Executive Protection, Delhi NCR",
  technical: "Integrated Facility Management & Technical Manpower in Delhi NCR",
  horticulture: "Horticulture & Landscaping Manpower Services in Delhi NCR",
  labour: "Verified Labour Supply for Factories & Warehouses – Delhi NCR",
  "construction-labour":
    "Construction Labour Supply for Residential & Commercial Sites, Delhi NCR",
  professional: "Site Supervisors & Facility Coordinators Across Delhi NCR",
  "contract-staffing": "Verified Manpower Services Across Delhi NCR",
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) notFound();

  return (
    <>
      <JsonLdScript
        data={createServiceJsonLd({
          id: service.id,
          title: service.title,
          description: service.heroDescription,
          areas: service.areas,
        })}
      />
      {service.faqs && service.faqs.length > 0 && (
        <JsonLdScript
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
      )}
      <PageHero
        eyebrow={service.eyebrow}
        title={serviceH1[service.id] ?? service.title}
        description={service.heroDescription}
      />
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.id}` },
        ]}
      />

      <section className="py-10 sm:py-16">
        <SiteContainer>
          <CoverImage
            src={service.image}
            alt={service.imageAlt}
            aspect="wide"
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="mb-8 rounded-lg sm:mb-10"
          />

          <p className="max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-300">
            {service.intro}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-500 sm:text-base dark:text-stone-400">
            {service.keywordParagraph}
          </p>

          {service.sections?.map((section) => (
            <div key={section.heading} className="mt-10 max-w-3xl">
              <h2 className="font-display text-xl font-semibold text-brand-navy sm:text-2xl dark:text-stone-100">
                {section.heading}
              </h2>
              {section.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 48)}
                  className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-300"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}

          <h2 className="mt-10 font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
            What We Offer
          </h2>
          <div className="card-grid mt-6 grid gap-4 sm:grid-cols-2">
            {service.offerings.map((offering) => (
              <article key={offering.title} className="card-elevated flex h-full flex-col p-5 sm:p-6">
                <h3 className="font-semibold text-brand-navy dark:text-stone-100">
                  {offering.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {offering.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
                Why {company.shortName}
              </h2>
              <ul className="mt-4 space-y-2">
                {service.whyUs.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-stone-600 dark:text-stone-300"
                  >
                    <span className="text-brand-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
                Areas We Serve
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.areas.map((city) => (
                  <Link
                    key={city}
                    href={`/locations/${city.toLowerCase()}`}
                    className="rounded-sm border border-brand-border bg-brand-cream px-3 py-1 text-sm font-medium text-brand-navy transition hover:border-brand-gold hover:text-brand-gold dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {service.guide && (
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-300">
              Planning the contract?{" "}
              <Link href={service.guide.href} className="font-semibold text-brand-gold hover:text-brand-gold-dark">
                {service.guide.label}
              </Link>
              .
            </p>
          )}

          {service.faqs && service.faqs.length > 0 && (
            <div className="mt-12 max-w-3xl">
              <h2 className="font-display text-xl font-semibold text-brand-navy sm:text-2xl dark:text-stone-100">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 space-y-3">
                {service.faqs.map((faq) => (
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
            </div>
          )}

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link href="/services" className="btn-secondary">
              All Services
            </Link>
            <Link href="/training" className="btn-secondary">
              Our Training
            </Link>
          </div>
        </SiteContainer>
      </section>

      <CTASection />
    </>
  );
}
