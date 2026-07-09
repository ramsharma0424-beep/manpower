import type { Metadata } from "next";
import SiteContainer from "@/components/SiteContainer";
import { company } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

type PolicyPageProps = {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export function PolicyLayout({
  title,
  lastUpdated = "July 2026",
  children,
}: PolicyPageProps) {
  return (
    <>
      <section className="premium-hero py-16 text-white sm:py-20 lg:py-24">
        <SiteContainer narrow>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">Legal</p>
          <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-stone-400">Last updated: {lastUpdated}</p>
          <div className="gold-line mt-6" />
        </SiteContainer>
      </section>
      <SiteContainer narrow className="prose-policy space-y-6 py-12 leading-relaxed text-stone-600 dark:text-stone-300 [&_a]:text-brand-gold [&_a]:underline [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand-navy dark:[&_h2]:text-stone-100">
        {children}
      </SiteContainer>
    </>
  );
}

export function policyMetadata(title: string, path: string): Metadata {
  return createPageMetadata({
    title,
    description: `${title} for ${company.name}. Learn how we handle privacy, legal terms, cookies, and website usage.`,
    path,
  });
}
