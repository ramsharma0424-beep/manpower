import SiteContainer from "@/components/SiteContainer";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="premium-hero py-16 text-white sm:py-20">
      <SiteContainer>
        <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
          {eyebrow}
        </p>
        <h1 className="animate-rise mt-4 font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="animate-rise mt-6 max-w-2xl text-lg text-stone-300" style={{ animationDelay: "120ms" }}>
          {description}
        </p>
        <div className="gold-line mt-8" />
      </SiteContainer>
    </section>
  );
}
