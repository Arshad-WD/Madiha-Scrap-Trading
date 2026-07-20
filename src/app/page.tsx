import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import ServicesSection from '@/components/sections/ServicesSection';
import MaterialsSection from '@/components/sections/MaterialsSection';
import WorkCarousel from '@/components/sections/WorkCarousel';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import InteriorDemolition from '@/components/sections/InteriorDemolition';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';

export default function Home() {
  return (
    <main className="w-full overflow-hidden relative">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <MaterialsSection />
      <InteriorDemolition />
      <WorkCarousel />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
