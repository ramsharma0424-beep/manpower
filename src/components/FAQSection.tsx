import JsonLdScript from "@/components/JsonLdScript";
import { faqs } from "@/lib/data";
import { createFaqJsonLd } from "@/lib/seo";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

type FAQSectionProps = {
  showSchema?: boolean;
};

export default function FAQSection({ showSchema = true }: FAQSectionProps) {
  return (
    <section className="py-12 sm:py-16">
      <SiteContainer narrow>
        {showSchema && <JsonLdScript data={createFaqJsonLd()} />}
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Quick answers about our manpower services, coverage areas, and how to get started."
        />
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group card-elevated overflow-hidden"
            >
              <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-brand-navy marker:content-none sm:px-6 sm:text-base dark:text-stone-100 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="mt-0.5 shrink-0 text-brand-gold transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-brand-border px-5 py-4 text-sm leading-relaxed text-stone-600 dark:border-stone-700 dark:text-stone-300 sm:px-6">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
