import Image from "next/image";
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

        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3 sm:gap-5">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.id}
              delay={i * 60}
              className={i === certifications.length - 1 ? "col-start-2" : undefined}
            >
              <div className="card-elevated group flex h-full flex-col items-center p-3 text-center sm:p-4">
                <div className="mb-3 flex h-24 w-full items-center justify-center overflow-hidden rounded-sm border border-brand-border bg-white px-1 py-1 transition-transform duration-500 group-hover:scale-[1.02] dark:border-stone-700 dark:bg-stone-950 sm:h-28 sm:px-1.5">
                  <Image
                    src={cert.logo}
                    alt={`${cert.title} logo`}
                    width={280}
                    height={112}
                    className="max-h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="text-sm font-semibold text-brand-navy dark:text-stone-100">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
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
