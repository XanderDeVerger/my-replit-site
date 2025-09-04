import HeroSection from "@/components/hero-section";
import TrustIndicators from "@/components/trust-indicators";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TrustIndicators />
      <Footer />
    </div>
  );
}
