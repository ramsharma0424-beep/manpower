import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16">
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="Client Feedback"
            title="What Our Clients Say"
            description="Facility managers and operations teams across Delhi NCR trust us for disciplined, verified manpower."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name + item.role} delay={i * 80}>
              <blockquote className="card-elevated flex h-full flex-col p-5 sm:p-6">
                <p className="flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 border-t border-brand-border pt-4 dark:border-stone-700">
                  <p className="text-sm font-semibold text-brand-navy dark:text-stone-100">
                    {item.name}
                  </p>
                  <p className="text-xs text-brand-gold">{item.role}</p>
                  <p className="mt-1 text-xs text-stone-400">{item.location}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
