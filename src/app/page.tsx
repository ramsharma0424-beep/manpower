import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutIntro from "@/components/AboutIntro";
import WhyChooseRudra from "@/components/WhyChooseRudra";
import CoreValues from "@/components/CoreValues";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Solutions from "@/components/Solutions";
import Leadership from "@/components/Leadership";
import BlogsPreview from "@/components/BlogsPreview";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import JsonLdScript from "@/components/JsonLdScript";
import SiteContainer from "@/components/SiteContainer";
import { homeKeywordSummary } from "@/lib/content";
import { createFaqJsonLd, createServicesJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLdScript data={createFaqJsonLd()} />
      <JsonLdScript data={createServicesJsonLd()} />
      <Hero />
      <Stats />
      <section className="border-b border-brand-border bg-brand-cream/40 py-5 dark:bg-stone-900/40">
        <SiteContainer>
          <p className="max-w-4xl text-center text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-left">
            {homeKeywordSummary}
          </p>
        </SiteContainer>
      </section>
      <WhyChooseRudra />
      <AboutIntro compact />
      <CoreValues />
      <Services />
      <Testimonials />
      <Solutions />
      <Leadership compact />
      <BlogsPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
