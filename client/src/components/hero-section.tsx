import { Card } from "@/components/ui/card";
import QuoteForm from "./quote-form";
import logoPath from "@assets/IMG_6632_1756941144036.png";

export default function HeroSection() {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoPath} 
                  alt="XWarranties Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div className="text-2xl font-bold text-foreground">XWarranties</div>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Why XWarranties
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#quote" 
                className="bg-accent text-accent-foreground px-6 py-2 rounded-md font-semibold hover:bg-accent/90 transition-colors"
                data-testid="button-header-quote"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Never pay for covered car repairs again.
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                XWarranties picks up where your auto warranty leaves off. When breakdowns happen, our vehicle protection plans shield you from the high cost of parts and labor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#quote" 
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors text-center"
                  data-testid="button-hero-quote"
                >
                  Get Your FREE Quote
                </a>
                <a 
                  href="#why-us" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center"
                  data-testid="button-hero-learn"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Quote Form Card */}
            <Card className="bg-white rounded-2xl p-8 form-shadow" id="quote">
              <div className="bg-accent text-accent-foreground text-center py-3 rounded-lg mb-6">
                <h3 className="text-xl font-bold">Get your FREE Quote</h3>
                <p className="text-sm opacity-90">Quick quote, zero obligation</p>
              </div>
              
              <QuoteForm />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
