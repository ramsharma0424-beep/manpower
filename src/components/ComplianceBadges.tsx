import { certifications } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

export default function ComplianceBadges() {
  return (
    <section className="section-muted py-16">
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Registrations & Certificates"
            description="Fully licensed and registered with all statutory authorities for manpower deployment across Delhi NCR."
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 60}>
              <div className="card-elevated group flex flex-col items-center p-6 text-center">
                <div
                  className={`mb-4 flex h-20 w-20 items-center justify-center rounded-sm bg-gradient-to-br ${cert.colors} text-lg font-bold text-white shadow-md transition-transform duration-500 group-hover:scale-105`}
                >
                  {cert.name}
                </div>
                <h3 className="text-sm font-semibold text-brand-navy dark:text-stone-100">
                  {cert.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
                  {cert.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-stone-500 dark:text-stone-400">
          Verified and compliant with all applicable labour, security, and corporate regulations.
        </p>
      </SiteContainer>
    </section>
  );
}
