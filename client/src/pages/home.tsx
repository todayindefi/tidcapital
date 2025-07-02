import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CapabilitiesSection from "@/components/capabilities-section";
import MethodologySection from "@/components/methodology-section";
import ProductsSection from "@/components/products-section";
import ResearchSection from "@/components/research-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CapabilitiesSection />
      <MethodologySection />
      <ProductsSection />
      <ResearchSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
