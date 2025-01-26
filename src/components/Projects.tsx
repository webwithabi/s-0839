import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Codify",
    category: "Agency, Portfolio, Saas",
    description: "A webinar platform with real-time interaction features and seamless video streaming capabilities.",
    image: "/lovable-uploads/8e05fbbf-618b-4e0c-9d7b-83d880196889.png",
    featured: true
  },
  {
    title: "Taskify",
    category: "Business, AI, Saas",
    description: "A full-featured task management platform with AI-powered productivity tools.",
    image: "/lovable-uploads/296e9313-90a3-4962-9967-7ce4c67b5926.png",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">Professional Services That</h2>
        <h2 className="text-5xl font-bold text-center mb-12">Showcase Our Expertise.</h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          From creative design to technical solutions, our services define industry excellence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-white rounded-2xl">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <Button variant="outline">View Project</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;