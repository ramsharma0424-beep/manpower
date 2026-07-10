import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Reveal from "@/components/Reveal";
import { company, sectors } from "@/lib/data";
import { images } from "@/lib/images";
import SiteContainer from "./SiteContainer";

function OperationalAreas({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(166,124,82,0.08),transparent_55%)]" />
      <SiteContainer className="relative grid items-center gap-6 py-10 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Trusted Workforce Partner
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-brand-navy dark:text-stone-50 sm:text-5xl lg:text-6xl">
              {company.heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-300 sm:mt-6 sm:text-lg">
              {company.heroSubtext}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn-primary">
                Get Your Free Quote
              </Link>
              <Link href="/services" className="btn-secondary">
                See What We Offer
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <div className="group relative overflow-hidden rounded-lg shadow-2xl shadow-stone-900/10">
            <CoverImage
              src={images.hero}
              alt="DLF Cyber City corporate towers in Gurugram"
              priority
              aspect="hero"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-t from-stone-950/75 via-stone-950/15 to-transparent sm:block" />
            <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/10 bg-stone-950/35 p-4 backdrop-blur-sm sm:block sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Operational Areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {company.locations.map((city) => (
                  <span
                    key={city}
                    className="rounded-sm border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-stone-100"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-1 pt-2">
                {sectors.slice(0, 4).map((sector) => (
                  <span key={sector} className="text-xs text-stone-300">
                    · {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <OperationalAreas className="card-elevated mt-3 p-4 sm:hidden" />
        </div>
      </SiteContainer>
    </section>
  );
}
