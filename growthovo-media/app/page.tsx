import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OfferSection from "@/components/OfferSection";
import ComparisonSection from "@/components/ComparisonSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />

      {/* Offset for fixed nav */}
      <div className="pt-16">
        <HeroSection />
        <ServicesSection />
        <OfferSection />
        <ComparisonSection />
        <ContactSection />
        <Footer />
      </div>
      {/* Section IDs updated: services, pricing, compare, contact */}

      <WhatsAppButton />
    </main>
  );
}
