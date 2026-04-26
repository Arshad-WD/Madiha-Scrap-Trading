import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <div className="section-divider" />
      <AboutSection />

      <div className="section-divider" />
      <ServicesSection />

      <div className="section-divider" />
      <WhyChooseUs />

      <div className="section-divider" />
      <ProcessSection />

      <div className="section-divider" />
      <TestimonialsSection />

      <div className="section-divider" />
      <ContactSection />
    </>
  );
}
