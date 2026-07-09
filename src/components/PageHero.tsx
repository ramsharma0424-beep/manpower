import SiteContainer from "@/components/SiteContainer";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="premium-hero py-16 text-white sm:py-20 lg:py-24">
      <SiteContainer>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
          {description}
        </p>
        <div className="gold-line mt-8" />
      </SiteContainer>
    </section>
  );
}
