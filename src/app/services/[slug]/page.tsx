import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CoverImage from "@/components/CoverImage";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { getServiceDetail, serviceDetails } from "@/lib/content";
import { company } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return { title: "Service Not Found" };

  return createPageMetadata({
    title: `${service.title} in ${company.region}`,
    description: service.heroDescription,
    path: `/services/${service.id}`,
    image: service.image,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
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

          <h2 className="mt-10 font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
            What We Offer
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.offerings.map((offering) => (
              <article key={offering.title} className="card-elevated p-5 sm:p-6">
                <h3 className="font-semibold text-brand-navy dark:text-stone-100">
                  {offering.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
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
                  <span
                    key={city}
                    className="rounded-sm border border-brand-border bg-brand-cream px-3 py-1 text-sm font-medium text-brand-navy dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

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
