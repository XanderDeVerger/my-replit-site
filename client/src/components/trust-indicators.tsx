import { Shield, Clock, Users } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "30-day money-back guarantee",
    description: "Try the best protection at an unbeatable value risk-free for 30 days.",
  },
  {
    icon: Users,
    title: "You're in the driver's seat",
    description: "Choose any certified mechanic to work on your vehicle.",
  },
  {
    icon: Clock,
    title: "Quick and easy claims",
    description: "We cut out the middlemen to get you the help you need faster.",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-secondary/30" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">We've got your back.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No matter how new or well-maintained your vehicle is, it will eventually need repairs. With XWarranties on your side, you can get back on the road fast.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
