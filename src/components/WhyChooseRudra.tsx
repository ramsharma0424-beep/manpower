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
            title="Reasons to Choose Rudra Manpower"
            description="PASARA licensed manpower services, security guard services, housekeeping services, facility management services, and contract staffing — deployed across Delhi NCR with police-verified teams."
          />
        </Reveal>

        <div className="card-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseRudra.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="h-full">
              <article className="card-elevated flex h-full flex-col border-t-4 border-t-brand-gold p-5 sm:p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-gold text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold uppercase tracking-wide text-brand-navy dark:text-stone-100">
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
