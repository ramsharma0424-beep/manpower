import { qualityAssurance } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

export default function QualitySection() {
  return (
    <section className="py-20">
      <SiteContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Quality Assurance at Every Shift"
              description="We maintain high operational standards through regular training, shift briefings, and performance incentives."
              align="left"
            />
          </div>

          <div className="space-y-4">
            {qualityAssurance.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-brand-navy">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
