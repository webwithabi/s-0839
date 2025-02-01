import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6">
          <div className="animate-fade-in space-y-12">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter">
              ABOUT ME
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/d6e3816b-cc2b-4c2b-8e26-3831bbd78ff3.png" 
                  alt="Abinash workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-2xl font-semibold">
                  I'm Abinash, a passionate Web Developer based in India.
                </h2>
                <p className="text-lg text-muted-foreground">
                  With a strong foundation in web development and a keen eye for detail,
                  I specialize in creating responsive and user-friendly web applications.
                  My approach combines technical expertise with creative problem-solving
                  to deliver exceptional digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;