import Link from "next/link";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/data";
import SiteContainer from "./SiteContainer";

export default function CTASection() {
  return (
    <section className="border-t border-brand-border py-14 sm:py-16">
      <SiteContainer>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-brand-border bg-brand-cream p-8 sm:p-10 dark:border-stone-700 dark:bg-stone-900">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl" />
            <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-stone-50 sm:text-3xl">
                  Let&apos;s build the right team for your site
                </h2>
                <p className="mt-3 max-w-xl text-base text-stone-600 dark:text-stone-300 sm:text-lg">
                  Tell us what you need — security, housekeeping, construction labour, or full
                  facility support. We&apos;ll respond quickly with a plan tailored to your location.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Get Your Free Quote
                </Link>
                <a href={`tel:${company.phone}`} className="btn-secondary">
                  Call {company.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </SiteContainer>
    </section>
  );
}
