import Link from "next/link";
import SiteContainer from "@/components/SiteContainer";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-20">
      <SiteContainer className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-brand-navy dark:text-stone-100 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-stone-600 dark:text-stone-300">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Head back home or
          contact us — we&apos;re happy to help.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
