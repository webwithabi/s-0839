
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Monitor, Users2, Smartphone } from "lucide-react";

const services = [
  {
    title: "Service 01",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. From simple websites to complex enterprise solutions.",
    icon: Monitor
  },
  {
    title: "Service 02",
    description: "Collaborative development process with thorough consultation and planning to ensure your project meets all requirements and exceeds expectations.",
    icon: Users2
  },
  {
    title: "Service 03",
    description: "Mobile-first responsive design ensuring your web applications work flawlessly across all devices with optimal user experience.",
    icon: Smartphone
  }
];

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-sky-400 mb-4">Company name here</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2472] mb-6">Our Service</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Blue wave background */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-[#87CEEB] rounded-t-[100px] -z-10" />

            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-8 relative w-64 h-64">
                  <service.icon className="w-full h-full text-sky-500 p-8" />
                </div>
                <Card className="w-full p-6 bg-transparent border-none shadow-none">
                  <h3 className="text-xl font-semibold mb-4 text-[#0A2472]">{service.title}</h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
