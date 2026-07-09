import SiteContainer from "@/components/SiteContainer";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="premium-hero py-12 text-white sm:py-16 lg:py-24">
      <SiteContainer>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">{eyebrow}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-300 sm:mt-6 sm:text-base lg:text-lg">
          {description}
        </p>
        <div className="gold-line mt-6 sm:mt-8" />
      </SiteContainer>
    </section>
  );
}
