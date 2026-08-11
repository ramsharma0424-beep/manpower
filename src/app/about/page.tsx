import type { Metadata } from "next";
import AboutIntro from "@/components/AboutIntro";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComplianceBadges from "@/components/ComplianceBadges";
import CoreValues from "@/components/CoreValues";
import JsonLdScript from "@/components/JsonLdScript";
import Leadership from "@/components/Leadership";
import PageHero from "@/components/PageHero";
import Solutions from "@/components/Solutions";
import SiteContainer from "@/components/SiteContainer";
import { aboutContent, company, mission, qualityAssurance, sectors, vision } from "@/lib/data";
import { homeKeywords } from "@/lib/keywords";
import { createPageMetadata, absoluteUrl, locationsLine, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Rudra Manpower — Agency in Gurugram, Delhi NCR",
  description: `Meet ${company.shortName}: a verified manpower agency and PASARA licensed security agency in ${company.region}. Army veteran-led workforce solutions and corporate manpower solutions across ${locationsLine}.`,
  path: "/about",
  keywords: homeKeywords(),
});

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: `About ${company.shortName}`,
            description: aboutContent.summary,
            url: absoluteUrl("/about"),
            mainEntity: { "@id": `${absoluteUrl("/")}#organization` },
          },
          ...personJsonLd,
        ]}
      />
      <PageHero
        eyebrow="About Us"
        title={company.name}
        description={aboutContent.summary}
      />
      <Breadcrumbs items={[{ name: "About Us", path: "/about" }]} />

      <div id="who-we-are" className="scroll-mt-24">
        <AboutIntro />
      </div>

      <section className="py-16">
        <SiteContainer narrow>
          <div className="space-y-6 leading-relaxed text-stone-600 dark:text-stone-300">
            {aboutContent.paragraphs.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </SiteContainer>
      </section>

      <div id="certificates" className="scroll-mt-24">
        <ComplianceBadges />
      </div>

      <section id="vision" className="scroll-mt-24 section-muted py-16">
        <SiteContainer>
          <div className="card-grid grid gap-8 md:grid-cols-2">
            <div className="card-elevated h-full p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Vision</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
                {vision.title}
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">
                {vision.description}
              </p>
            </div>
            <div id="mission" className="card-elevated h-full scroll-mt-24 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Mission</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
                {mission.title}
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">
                {mission.description}
              </p>
            </div>
          </div>
        </SiteContainer>
      </section>

      <div id="core-values" className="scroll-mt-24">
        <CoreValues />
      </div>

      <div id="solutions" className="scroll-mt-24">
        <Solutions />
      </div>

      <section className="py-16">
        <SiteContainer>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
                Where We Operate
              </h2>
              <p className="mt-4 text-stone-600 dark:text-stone-300">
                Deploying verified workforce across {company.region} — including{" "}
                {company.locations.join(", ")}.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {company.locations.map((city) => (
                  <span
                    key={city}
                    className="rounded-sm bg-brand-cream px-4 py-2 text-sm font-medium text-brand-gold dark:bg-stone-800"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-elevated p-8">
              <h3 className="font-display text-lg font-semibold text-brand-navy dark:text-stone-100">
                Industries We Serve
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {sectors.map((sector) => (
                  <div key={sector} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    {sector}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <div id="leadership" className="scroll-mt-24">
        <Leadership />
      </div>

      <section id="quality-standards" className="scroll-mt-24 section-muted py-16">
        <SiteContainer>
          <h2 className="mb-8 text-center font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
            Quality Assurance at Every Shift
          </h2>
          <div className="card-grid grid gap-4 md:grid-cols-2">
            {qualityAssurance.map((item, i) => (
              <div key={item} className="card-elevated flex h-full items-start gap-4 p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-brand-gold text-sm font-bold text-stone-950">
                  {i + 1}
                </span>
                <p className="text-stone-600 dark:text-stone-300">{item}</p>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

    </>
  );
}
