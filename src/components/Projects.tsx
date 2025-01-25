import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "/placeholder.svg"
  },
  {
    title: "Project Two",
    description: "Full-stack e-commerce platform with real-time updates",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/placeholder.svg"
  },
  {
    title: "Project Three",
    description: "Mobile-first social media dashboard",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/placeholder.svg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted" />
              <div className="p-6">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;