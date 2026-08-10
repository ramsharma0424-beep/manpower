import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import { company, sectors } from "@/lib/data";
import { images } from "@/lib/images";
import SiteContainer from "./SiteContainer";

function OperationalAreas({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
        Operational Areas
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {company.locations.map((city) => (
          <span
            key={city}
            className="rounded-sm border border-brand-border bg-brand-cream px-2.5 py-1 text-xs font-medium text-brand-navy dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
          >
            {city}
          </span>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-1 sm:mt-4">
        {sectors.slice(0, 4).map((sector) => (
          <span key={sector} className="text-xs text-stone-500 dark:text-stone-400">
            · {sector}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <SiteContainer className="relative grid items-center gap-6 py-10 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
            Trusted Manpower Agency & Staffing Partner
          </p>
          <h1 className="font-display text-3xl font-extrabold uppercase leading-[1.1] tracking-wide text-brand-navy dark:text-stone-50 sm:text-5xl lg:text-6xl">
            {company.heroHeadline}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-300 sm:mt-6 sm:text-lg">
            {company.heroSubtext}
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn-primary">
              Get Your Free Quote
            </Link>
            <Link href="/services" className="btn-secondary">
              See What We Offer
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="hero-frame shadow-2xl shadow-stone-900/10">
            <div className="hero-frame-inner group">
              <CoverImage
                src={images.hero}
                alt="DLF Cyber City corporate towers in Gurugram"
                priority
                aspect="hero"
                objectPosition="center 30%"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-t from-stone-950/70 via-stone-950/15 via-45% to-transparent sm:block" />
              <div className="absolute bottom-0 left-0 right-0 z-[2] hidden border-t border-white/10 bg-stone-950/40 p-4 backdrop-blur-sm sm:block sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Operational Areas
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {company.locations.map((city) => (
                    <span
                      key={city}
                      className="rounded-sm border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-stone-100 sm:px-3 sm:py-1 sm:text-xs"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="mt-2.5 grid grid-cols-2 gap-1">
                  {sectors.slice(0, 4).map((sector) => (
                    <span key={sector} className="text-[11px] text-stone-300 sm:text-xs">
                      · {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hero-frame-accent" aria-hidden="true" />
          </div>
          <OperationalAreas className="card-elevated mt-3 p-4 sm:hidden" />
        </div>
      </SiteContainer>
    </section>
  );
}
