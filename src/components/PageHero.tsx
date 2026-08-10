import SiteContainer from "@/components/SiteContainer";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="premium-hero py-12 sm:py-16 lg:py-20">
      <SiteContainer>
        <p className="pl-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold sm:pl-5">
          {eyebrow}
        </p>
        <h1 className="mt-3 pl-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:mt-4 sm:pl-5 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl pl-4 text-sm leading-relaxed text-stone-300 sm:mt-6 sm:pl-5 sm:text-base lg:text-lg">
          {description}
        </p>
        <div className="brand-line mt-6 sm:mt-8 sm:ml-5" />
      </SiteContainer>
    </section>
  );
}
