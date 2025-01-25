import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Book Cover Design",
    category: "Graphics Design",
    description: "The book cover design combines striking visuals with thoughtful typography, capturing the essence of the story while enticing readers with its bold and engaging aesthetic.",
    image: "/placeholder.svg"
  },
  {
    title: "Rave Interior Website Design",
    category: "UI Design and Mockup",
    description: "Rave Interior's website design blends modern aesthetics with functionality, creating a seamless user experience.",
    image: "/placeholder.svg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <span className="text-sm text-muted-foreground">{project.category}</span>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <Button variant="outline" className="mt-4">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;