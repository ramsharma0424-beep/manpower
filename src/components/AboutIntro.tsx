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
              <div className="group overflow-hidden rounded-lg shadow-xl shadow-stone-900/10">
                <CoverImage
                  src={images.about}
                  alt="Rudra Manpower team collaborating on workforce solutions"
                  aspect="hero"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="card-elevated mt-4 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
                  Why businesses choose us
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "You'll get army veteran-led, disciplined teams",
                    "Every security guard is police-verified before day one",
                    "We serve brands like Mothers Dairy & Lemon Tree in Gurugram, plus Tata Steel",
                    `We're active across ${company.region} — ready when you need us`,
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-stone-700 dark:text-stone-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand-gold text-xs text-stone-950">
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
