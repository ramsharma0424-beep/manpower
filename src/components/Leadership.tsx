import Link from "next/link";
import Reveal from "@/components/Reveal";
import { leadership } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

type LeadershipProps = {
  compact?: boolean;
};

export default function Leadership({ compact = false }: LeadershipProps) {
  const director = leadership[0];

  return (
    <section className={compact ? "py-16" : "section-muted py-20"}>
      <SiteContainer narrow>
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title="Led by Military Discipline & Integrity"
            description="Our leadership brings the precision, accountability, and mission-first ethos of the Indian Army to every workforce deployment."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="card-elevated overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="flex flex-col items-center justify-center border-b border-brand-border bg-brand-cream p-8 dark:border-stone-700 dark:bg-stone-900 md:col-span-2 md:border-b-0 md:border-r">
                <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-brand-gold/30 bg-background">
                  <svg
                    className="h-16 w-16 text-stone-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <div className="absolute -bottom-2 rounded-sm bg-brand-gold px-3 py-1 text-xs font-bold text-stone-950">
                    {director.badge}
                  </div>
                </div>
                <h3 className="text-center font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
                  {director.name}
                </h3>
                <p className="mt-1 text-center text-sm font-medium text-stone-500">{director.role}</p>
              </div>

              <div className="p-8 md:col-span-3">
                <p className="leading-relaxed text-stone-600 dark:text-stone-300">{director.bio}</p>
                <ul className="mt-6 space-y-3">
                  {director.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand-gold text-stone-950">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {compact && (
                  <Link
                    href="/about#leadership"
                    className="mt-6 inline-flex text-sm font-semibold text-brand-gold transition hover:text-brand-gold-dark"
                  >
                    Read full leadership profile →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </SiteContainer>
    </section>
  );
}
