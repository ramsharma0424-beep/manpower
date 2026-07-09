import Reveal from "@/components/Reveal";
import { stats } from "@/lib/data";
import SiteContainer from "./SiteContainer";

export default function Stats() {
  return (
    <section className="border-y border-brand-border section-muted py-14">
      <SiteContainer>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center">
              <p className="font-display text-3xl font-semibold text-brand-gold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
