import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const coveragePlans = [
  {
    name: "Secure Plus",
    subtitle: "Protect your vehicle's most vital components",
    features: ["Engine", "Transmission", "A/C", "And more..."],
    popular: false,
  },
  {
    name: "Supreme",
    subtitle: "Protection most similar to manufacturer warranty",
    features: ["Engine", "Transmission", "Electrical", "High-Tech Options", "And much more..."],
    popular: true,
  },
  {
    name: "Superior",
    subtitle: "Protect common parts that break down over time",
    features: ["Engine", "Transmission", "Fuel System", "High-Tech Options", "And more..."],
    popular: false,
  },
];

export default function CoveragePreview() {
  return (
    <section className="py-16 bg-white" id="coverage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Personalized Plans for Any Vehicle</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start saving on vehicle protection today with custom coverage and plans that fit your budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coveragePlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-lg transition-shadow ${
                plan.popular ? 'border-2 border-primary' : 'border border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.subtitle}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid={`button-plan-${plan.name.toLowerCase().replace(' ', '-')}`}
                >
                  Get FREE Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
