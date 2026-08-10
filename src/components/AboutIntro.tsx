import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Reveal from "@/components/Reveal";
import { aboutContent, company } from "@/lib/data";
import { images } from "@/lib/images";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

type AboutIntroProps = {
  compact?: boolean;
};

export default function AboutIntro({ compact = false }: AboutIntroProps) {
  return (
    <section className="section-muted py-12 sm:py-16 lg:py-20">
      <SiteContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <Reveal>
              <SectionHeading
                eyebrow="About Us"
                title={aboutContent.title}
                description={aboutContent.summary}
                align="left"
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="leading-relaxed text-stone-600 dark:text-stone-300">
                {aboutContent.paragraphs[0]}
              </p>
            </Reveal>
            {!compact && (
              <Reveal delay={150}>
                <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">
                  {aboutContent.paragraphs[1]}
                </p>
              </Reveal>
            )}
            {compact && (
              <Reveal delay={200}>
                <Link href="/about" className="btn-primary mt-6">
                  About Rudra Manpower
                </Link>
              </Reveal>
            )}
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={120}>
              <div className="hero-frame shadow-xl shadow-stone-900/10">
                <div className="hero-frame-inner group">
                  <CoverImage
                    src={images.about}
                    alt="Indian professionals at work in a corporate setting"
                    aspect="hero"
                    objectPosition="center 35%"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="hero-frame-accent" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="card-elevated mt-4 border-l-4 border-l-brand-gold p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">
                  Why businesses choose us
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Army veteran-led security company with disciplined teams",
                    "Police verified security guards on every PASARA licensed deployment",
                    "Corporate manpower solutions for brands like Mothers Dairy & Lemon Tree",
                    `Workforce solutions across ${company.region} — Gurugram, Noida, Bhiwadi & more`,
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-stone-700 dark:text-stone-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand-gold text-xs text-white">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
