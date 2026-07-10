import Reveal from "@/components/Reveal";
import { whyChooseRudra } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

export default function WhyChooseRudra() {
  return (
    <section className="section-muted py-12 sm:py-16">
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="Why Rudra"
            title="6 Reasons to Choose Rudra Manpower"
            description="PASARA licensed, led by a dedicated retired armed forces team, and built for the real manpower problems businesses face across Delhi NCR."
          />
        </Reveal>

        <div className="card-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseRudra.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="card-elevated flex h-full flex-col p-5 sm:p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-gold text-sm font-bold text-stone-950">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-navy dark:text-stone-100">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
