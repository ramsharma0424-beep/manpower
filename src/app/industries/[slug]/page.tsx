import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CoverImage from "@/components/CoverImage";
import CTASection from "@/components/CTASection";
import JsonLdScript from "@/components/JsonLdScript";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { getIndustry, industries } from "@/lib/content";
import { company } from "@/lib/data";
import { createPageMetadata, createServiceJsonLd, absoluteUrl, siteUrl } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry Not Found" };

  return createPageMetadata({
    title: `${industry.title} — ${company.region}`,
    description: industry.heroDescription,
    path: `/industries/${industry.slug}`,
    image: industry.image,
    keywords: industry.keywords,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) notFound();

  const industryServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/industries/${industry.slug}#service`,
    name: industry.title,
    description: industry.heroDescription,
    url: absoluteUrl(`/industries/${industry.slug}`),
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: company.locations.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "AdministrativeArea", name: company.region },
    })),
    serviceType: industry.title,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
    },
  };

  return (
    <>
      <JsonLdScript data={industryServiceJsonLd} />
      <PageHero
        eyebrow={industry.eyebrow}
        title={industry.title}
        description={industry.heroDescription}
      />
      <Breadcrumbs
        items={[
          { name: "Industries", path: "/services" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ]}
      />

      <section className="py-10 sm:py-16">
        <SiteContainer>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <CoverImage
                src={industry.image}
                alt={industry.imageAlt}
                aspect="wide"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-lg lg:hidden"
              />
              <p className="mt-0 text-sm leading-relaxed text-stone-600 sm:text-base lg:mt-0 dark:text-stone-300">
                {industry.summary}
              </p>

              <h2 className="mt-8 font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
                Services for {industry.eyebrow}
              </h2>
              <ul className="mt-4 space-y-3">
                {industry.services.map((service) => (
                  <li
                    key={service}
                    className="flex gap-3 text-sm text-stone-600 dark:text-stone-300"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand-gold text-xs text-stone-950">
                      ✓
                    </span>
                    {service}
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
                Why Rudra for this sector
              </h2>
              <ul className="mt-4 space-y-2">
                {industry.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-stone-600 dark:text-stone-300"
                  >
                    <span className="text-brand-gold">·</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
                <Link href="/services" className="btn-secondary">
                  View All Services
                </Link>
              </div>
            </div>

            <CoverImage
              src={industry.image}
              alt={industry.imageAlt}
              aspect="wide"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="hidden rounded-lg lg:block"
            />
          </div>
        </SiteContainer>
      </section>

      <CTASection />
    </>
  );
}
