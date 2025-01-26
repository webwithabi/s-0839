import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Full Stack Development",
    description: "Built a scalable e-commerce platform using React, Node.js, and MongoDB, featuring real-time inventory management and secure payment integration.",
    image: "/placeholder.svg"
  },
  {
    title: "Portfolio Website",
    category: "Frontend Development",
    description: "Designed and developed a responsive portfolio website using React and Tailwind CSS, showcasing modern design principles and smooth animations.",
    image: "/placeholder.svg"
  }
];

const Work = () => {
  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Featured Work</h2>
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

export default Work;