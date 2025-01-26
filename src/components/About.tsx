import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in space-y-12">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter">
            WEB DEVELOPER
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/d6e3816b-cc2b-4c2b-8e26-3831bbd78ff3.png" 
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-2xl font-semibold">
                Abinash is a skilled web developer with expertise in modern technologies.
              </h2>
              <p className="text-lg text-muted-foreground">
                With a passion for creating responsive and user-friendly web applications, 
                Abinash specializes in developing scalable solutions using cutting-edge technologies. 
                His focus is on writing clean, maintainable code and implementing best practices 
                in web development.
              </p>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="pt-20">
            <h2 className="text-3xl font-bold mb-8">My Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Frontend Development", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                { title: "Backend Development", skills: ["Node.js", "Express", "MongoDB", "REST APIs"] },
                { title: "Tools & Technologies", skills: ["Git", "Docker", "AWS", "CI/CD"] }
              ].map((expertise, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{expertise.title}</h3>
                  <ul className="space-y-2">
                    {expertise.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground">{skill}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="pt-20">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="E-commerce Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-muted-foreground">
                    A full-stack e-commerce solution built with React, Node.js, and MongoDB.
                    Features include real-time inventory management and secure payment integration.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Portfolio Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                  <p className="text-muted-foreground">
                    A responsive portfolio website using React and Tailwind CSS,
                    showcasing modern design principles and smooth animations.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;