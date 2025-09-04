import logoPath from "@assets/IMG_6632_1756941144036.png";

export default function Footer() {
  return (
    <>
      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to protect your vehicle?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your free quote today and never worry about covered repairs again.
          </p>
          <a 
            href="#quote" 
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="button-final-cta"
          >
            Get Your FREE Quote Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logoPath} 
                  alt="XWarranties Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div className="text-xl font-bold">XWarranties</div>
              </div>
              <p className="text-gray-300 mb-4">
                Protecting your vehicle with comprehensive auto warranty coverage that picks up where your manufacturer warranty leaves off.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#quote" className="hover:text-white transition-colors">Get Quote</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Benefits</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#why-us" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#quote" className="hover:text-white transition-colors">Get Quote</a></li>
                <li><a href="#quote" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2025 XWarranties. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
