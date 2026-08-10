import Reveal from "@/components/Reveal";
import { stats } from "@/lib/data";
import SiteContainer from "./SiteContainer";

export default function Stats() {
  return (
    <section className="border-y-2 border-brand-gold bg-brand-navy py-10 text-white sm:py-12">
      <SiteContainer>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center">
              <p className="font-display text-3xl font-extrabold text-brand-gold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-300">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
