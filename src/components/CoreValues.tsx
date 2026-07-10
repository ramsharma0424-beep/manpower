import Reveal from "@/components/Reveal";
import { coreValues } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

const icons: Record<string, React.ReactElement> = {
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  ),
  clock: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  eye: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </>
  ),
  heart: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  ),
  star: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  ),
};

export default function CoreValues() {
  return (
    <section className="py-20">
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            description="The principles that guide every recruitment, deployment, and client engagement at Rudra Manpower."
          />
        </Reveal>

        <div className="card-grid grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, i) => (
            <Reveal key={value.title} delay={i * 70} className="h-full">
              <div className="card-elevated flex h-full min-h-full flex-col p-6">
                <div className="mb-4 inline-flex rounded-sm bg-brand-cream p-3 text-brand-gold dark:bg-stone-800">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icons[value.icon]}
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-navy dark:text-stone-100">
                  {value.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
