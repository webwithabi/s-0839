import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

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

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;