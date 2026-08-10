import Image from "next/image";
import { certifications } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

export default function ComplianceBadges() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Registrations & Certificates"
            description="Fully licensed and registered with all statutory authorities for manpower deployment across Delhi NCR."
          />
        </Reveal>

        <div className="card-grid mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 60} className="h-full">
              <div className="cert-card flex h-full flex-col">
                <div className="cert-logo-box">
                  <Image
                    src={cert.logo}
                    alt={`${cert.title} logo`}
                    width={200}
                    height={80}
                    className="max-h-16 w-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold text-brand-navy">{cert.title}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-stone-600">
                  {cert.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
