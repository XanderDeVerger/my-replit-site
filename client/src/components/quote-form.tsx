import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertQuoteRequestSchema, type InsertQuoteRequest } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 2010 + 1 }, (_, i) => currentYear - i);

const makes = [
  "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge",
  "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Lexus", "Lincoln",
  "Mazda", "Mercedes-Benz", "Nissan", "Ram", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo"
];

const models = {
  "Honda": ["Accord", "Civic", "CR-V", "Pilot", "Odyssey", "Fit", "HR-V", "Passport", "Ridgeline"],
  "Toyota": ["Camry", "Corolla", "RAV4", "Highlander", "Prius", "Sienna", "Tacoma", "Tundra", "4Runner"],
  "Ford": ["F-150", "Escape", "Explorer", "Focus", "Mustang", "Edge", "Expedition", "Fusion", "Ranger"],
  "Chevrolet": ["Silverado", "Equinox", "Malibu", "Traverse", "Tahoe", "Cruze", "Impala", "Suburban", "Camaro"],
};

export default function QuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<InsertQuoteRequest>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      vehicleYear: "",
      vehicleMake: "",
      vehicleModel: "",
      estimatedMileage: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = async (data: InsertQuoteRequest) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/myzdbkbo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Vehicle Year": data.vehicleYear,
          "Vehicle Make": data.vehicleMake,
          "Vehicle Model": data.vehicleModel,
          "Estimated Mileage": data.estimatedMileage,
          "First Name": data.firstName,
          "Last Name": data.lastName,
          "Email": data.email,
        }),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Submitted!",
          description: "We'll contact you soon with your free quote.",
        });
        form.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedMake = form.watch("vehicleMake");
  const availableModels = selectedMake ? models[selectedMake as keyof typeof models] || [] : [];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="vehicleYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-vehicle-year">
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="vehicleMake"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Make</FormLabel>
                <Select onValueChange={(value) => {
                  field.onChange(value);
                  form.setValue("vehicleModel", "");
                }} value={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-vehicle-make">
                      <SelectValue placeholder="Select Make" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {makes.map((make) => (
                      <SelectItem key={make} value={make}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="vehicleModel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <Select onValueChange={field.onChange} value={field.value} disabled={!selectedMake}>
                  <FormControl>
                    <SelectTrigger data-testid="select-vehicle-model">
                      <SelectValue placeholder={selectedMake ? "Select Model" : "Select Make First"} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableModels.map((model) => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="estimatedMileage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated Mileage</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g., 75,000" 
                    {...field} 
                    data-testid="input-estimated-mileage"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="First Name" 
                    {...field} 
                    data-testid="input-first-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Last Name" 
                    {...field} 
                    data-testid="input-last-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  {...field} 
                  data-testid="input-email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-primary text-primary-foreground py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          disabled={isSubmitting}
          data-testid="button-submit-quote"
        >
          {isSubmitting ? "Submitting..." : "Get a FREE Quote"}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          By clicking the button, you consent to XWarranties using automated technology to contact you using the info above regarding auto protection.
        </p>
      </form>
    </Form>
  );
}
