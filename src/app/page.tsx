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

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
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
