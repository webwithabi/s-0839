
import { useState } from "react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. From simple websites to complex enterprise solutions.",
    features: ["Responsive Design", "Performance Optimization", "SEO-friendly Structure", "Modern UI/UX"]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    features: ["Cross-platform Development", "Native Apps", "App Store Optimization", "Mobile UI Design"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services using AWS, Azure, or Google Cloud Platform to power your digital transformation.",
    features: ["Cloud Migration", "Serverless Architecture", "DevOps Integration", "24/7 Monitoring"]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="col-span-1 group"
    >
      <Card className={cn(
        "relative overflow-hidden transition-all duration-300",
        isOpen ? "h-auto" : "h-[280px] sm:h-[300px]",
        "hover:shadow-lg"
      )}>
        <CollapsibleTrigger className="w-full text-left p-4 sm:p-6">
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold">{service.title}</h3>
            <ChevronDown className={cn(
              "h-5 w-5 transition-transform duration-300",
              isOpen && "transform rotate-180"
            )} />
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            {service.description}
          </p>
        </CollapsibleTrigger>

        <CollapsibleContent className="p-4 sm:p-6 pt-0">
          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-3">Key Features</h4>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  className="flex items-center text-sm sm:text-base animate-slide-in"
                  style={{ animationDelay: `${featureIndex * 100}ms` }}
                >
                  <span className="mr-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
