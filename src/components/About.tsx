import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in space-y-12">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter">
            UI/UX DESIGNER
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/d6e3816b-cc2b-4c2b-8e26-3831bbd78ff3.png" 
                alt="Designer workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-2xl font-semibold">
                John Doe is a skilled product and UX designer based in New York.
              </h2>
              <p className="text-lg text-muted-foreground">
                With a keen eye for detail and a passion for creating seamless user experiences, 
                John excels in developing intuitive and user-centered digital products. His work 
                focuses on understanding user needs, balancing aesthetics with functionality, 
                and driving innovation through thoughtful design solutions.
              </p>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto py-4 scrollbar-hide">
            {["UX DESIGN", "UI DESIGN", "INTERACTION DESIGN", "UX AUDIT", "PRODUCT DESIGN"].map((skill) => (
              <span key={skill} className="text-sm font-medium whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;