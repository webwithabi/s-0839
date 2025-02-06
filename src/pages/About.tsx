
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="animate-fade-in space-y-12">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter">
              ABOUT ME
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/d6e3816b-cc2b-4c2b-8e26-3831bbd78ff3.png" 
                  alt="Abinash workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  I'm Abinash, a passionate Web Developer based in India.
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  With a strong foundation in web development and a keen eye for detail,
                  I specialize in creating responsive and user-friendly web applications.
                  My approach combines technical expertise with creative problem-solving
                  to deliver exceptional digital solutions.
                </p>
              </div>
            </div>

            {/* Why Choose Me Section */}
            <div className="pt-16 md:pt-20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Why Choose Me?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Proven Experience",
                    description: "With years of experience in web development, I've successfully delivered numerous projects across various industries."
                  },
                  {
                    title: "Modern Tech Stack",
                    description: "I stay up-to-date with the latest technologies and best practices to ensure your project uses cutting-edge solutions."
                  },
                  {
                    title: "Dedicated Support",
                    description: "I provide continuous support and clear communication throughout the development process and after launch."
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* What I Can Provide Section */}
            <div className="pt-16 md:pt-20 pb-20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What I Can Provide</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    title: "Custom Web Development",
                    description: "Tailored web solutions that meet your specific business needs, from simple websites to complex web applications.",
                    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Integration"]
                  },
                  {
                    title: "Technical Consultation",
                    description: "Expert advice on choosing the right technologies and architecture for your project.",
                    features: ["Technology Stack Selection", "Performance Optimization", "Security Best Practices", "Scalability Planning"]
                  },
                  {
                    title: "Frontend Development",
                    description: "Creating engaging and responsive user interfaces using modern frameworks and libraries.",
                    features: ["React/Next.js Development", "UI/UX Implementation", "Performance Optimization", "Cross-browser Compatibility"]
                  },
                  {
                    title: "Backend Development",
                    description: "Building robust server-side applications and APIs to power your web applications.",
                    features: ["API Development", "Database Design", "Authentication Systems", "Server Management"]
                  }
                ].map((service, index) => (
                  <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
