import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutIntro from "@/components/AboutIntro";
import CoreValues from "@/components/CoreValues";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import ClientsShowcase from "@/components/ClientsShowcase";
import Leadership from "@/components/Leadership";
import BlogsPreview from "@/components/BlogsPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutIntro compact />
      <CoreValues />
      <Services />
      <Solutions />
      <Leadership compact />
      <ClientsShowcase preview />
      <BlogsPreview />
      <CTASection />
    </>
  );
}
