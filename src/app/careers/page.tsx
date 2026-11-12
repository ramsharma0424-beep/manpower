import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { careerBenefits, careerRoles } from "@/lib/content";
import { company } from "@/lib/data";
import { createPageMetadata, locationsLine } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers — Hiring in Sonipat and Delhi NCR",
  description: `Rudra is hiring a Business Development Manager, Business Development Executive, Operations Supervisor, and HR & Recruitment Executive in Sonipat, plus security, housekeeping, and manpower roles across ${locationsLine}.`,
  path: "/careers",
  keywords: [
    "security jobs Sonipat",
    "business development manager security Haryana",
    "manpower recruitment jobs Sonipat",
    "security guard jobs Gurugram",
    "housekeeping jobs Delhi NCR",
  ],
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work With Rudra Manpower"
        description="We are hiring in Sonipat for business development, operations, and recruitment, and we still deploy security, housekeeping, and manpower teams across Delhi NCR. Share your CV through the form."
      />
      <Breadcrumbs items={[{ name: "Careers", path: "/careers" }]} />

      <section className="py-10 sm:py-16">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="font-display text-xl font-semibold text-brand-navy sm:text-2xl dark:text-stone-100">
                Open Roles
              </h2>
              <p className="mt-3 text-sm text-stone-600 sm:text-base dark:text-stone-300">
                Office hiring is open in Sonipat. Field roles across Delhi NCR continue as well.
                Police verification is required for security deployments. Send your CV with the form
                on this page.
              </p>

              <div className="mt-6 space-y-4">
                {careerRoles.map((role) => (
                  <article key={role.id} className="card-elevated p-4 sm:p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-semibold text-brand-navy dark:text-stone-100">
                        {role.title}
                      </h3>
                      <span className="rounded-sm bg-brand-cream px-2 py-0.5 text-xs font-medium text-brand-gold dark:bg-stone-800">
                        {role.type}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                      {role.description}
                    </p>
                    {"highlights" in role && role.highlights.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {role.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm text-stone-600 dark:text-stone-300"
                          >
                            <span className="text-brand-gold">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-2 text-xs text-stone-400">
                      {role.posted >= "2026-11-01" && (
                        <>
                          Posted{" "}
                          {new Date(`${role.posted}T00:00:00`).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                          {" · "}
                        </>
                      )}
                      Location: {role.locations}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-display text-lg font-semibold text-brand-navy dark:text-stone-100">
                  Why work with us
                </h3>
                <ul className="mt-4 space-y-2">
                  {careerBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex gap-2 text-sm text-stone-600 dark:text-stone-300"
                    >
                      <span className="text-brand-gold">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-elevated p-5 sm:p-8">
              <h2 className="mb-5 font-display text-lg font-semibold text-brand-navy sm:mb-6 sm:text-xl dark:text-stone-100">
                Apply Now
              </h2>
              <CareerApplicationForm />
              <p className="mt-4 text-xs text-stone-500 dark:text-stone-400">
                Prefer to call? Reach us at{" "}
                <a href={`tel:${company.phone}`} className="text-brand-gold hover:underline">
                  {company.phone}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${company.email}`} className="text-brand-gold hover:underline">
                  {company.email}
                </a>
                .
              </p>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="section-muted py-10 sm:py-12">
        <SiteContainer>
          <p className="text-center text-sm text-stone-600 dark:text-stone-300">
            New to security work?{" "}
            <Link href="/training" className="font-semibold text-brand-gold hover:underline">
              See our training programs
            </Link>{" "}
            to understand how we prepare teams before deployment.
          </p>
        </SiteContainer>
      </section>

      <CTASection />
    </>
  );
}
