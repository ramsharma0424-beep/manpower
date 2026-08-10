import Link from "next/link";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/data";
import SiteContainer from "./SiteContainer";

export default function CTASection() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <SiteContainer>
        <Reveal>
          <div className="relative overflow-hidden border-2 border-brand-gold bg-brand-navy p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-gold/20 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 text-left lg:flex-row lg:items-center lg:gap-8">
              <div>
                <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
                  Let&apos;s build the right team for your site
                </h2>
                <p className="mt-3 max-w-xl text-base text-stone-300 sm:text-lg">
                  Tell us what you need — security guard services, housekeeping services, construction labour supply, facility management services, or full contract staffing. We&apos;ll respond quickly with workforce solutions tailored to your location.
                </p>
              </div>
              <div className="flex w-full flex-col items-start gap-3 sm:w-auto sm:flex-row sm:items-center">
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
