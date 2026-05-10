import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import InfoTabs from "@/components/InfoTabs";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <InfoTabs />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
