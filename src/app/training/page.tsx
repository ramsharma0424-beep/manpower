import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteContainer from "@/components/SiteContainer";
import { trainingPrograms } from "@/lib/content";
import { company } from "@/lib/data";
import { createPageMetadata, locationsLine } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Training Programs — Security & Housekeeping",
  description: `${company.shortName} runs site-specific training every 15 days for security guards, bouncers, PSOs, housekeeping, and construction labour across ${locationsLine}.`,
  path: "/training",
  keywords: [
    "security guard training Delhi NCR",
    "housekeeping training Gurugram",
    "fire safety training guards",
    "PSO training Haryana",
  ],
});

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="How We Prepare Every Team"
        description={`Rudra Manpower doesn't just deploy staff — we train them. Site-specific refreshers every 15 days keep security, housekeeping, and labour teams aligned to your SOPs across ${company.region}.`}
      />
      <Breadcrumbs items={[{ name: "Training", path: "/training" }]} />

      <section className="py-10 sm:py-16">
        <SiteContainer>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-300">
              Led by a retired Indian Army Captain, our training emphasises briefing-before-shift
              discipline, uniform standards, and practical protocols for the environments we serve —
              corporates, hotels, factories, hospitals, malls, and construction sites.
            </p>
          </div>

          <div className="card-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.map((program, i) => (
              <Reveal key={program.title} delay={i * 60}>
                <article className="card-elevated flex h-full flex-col p-5 sm:p-6">
                  <h2 className="font-display text-lg font-semibold text-brand-navy dark:text-stone-100">
                    {program.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {program.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    {program.duration}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
            <Link href="/careers" className="btn-primary">
              Apply for a Role
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request Site Training Plan
            </Link>
          </div>
        </SiteContainer>
      </section>

      <CTASection />
    </>
  );
}
