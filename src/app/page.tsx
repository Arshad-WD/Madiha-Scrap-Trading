import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import MaterialsSection from "@/components/MaterialsSection";
import WorkCarousel from "@/components/WorkCarousel";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="w-full overflow-hidden relative">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <MaterialsSection />
      <WorkCarousel />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
