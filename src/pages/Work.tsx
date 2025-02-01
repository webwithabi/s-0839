import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const categories = ["ALL", "WEB", "MOBILE", "BRANDING", "PACKAGING", "VIDEO"];

const projects = [
  {
    title: "Verizon Webinar",
    category: "WEB",
    description: "A webinar platform built for Verizon with real-time interaction features and seamless video streaming capabilities.",
    image: "/lovable-uploads/b122ed21-d646-43af-acd4-01edd5456715.png",
    featured: true
  },
  {
    title: "DMart E-commerce",
    category: "WEB",
    description: "A full-featured e-commerce platform for DMart with product management, cart functionality, and secure checkout process.",
    image: "/lovable-uploads/09bc817d-d5b2-488d-b1bd-c7ab00e26588.png",
    featured: false
  },
  {
    title: "Mobile Banking App",
    category: "MOBILE",
    description: "A secure and user-friendly mobile banking application with features like transaction history and bill payments.",
    image: "/placeholder.svg",
    featured: true
  },
  {
    title: "Tech Brand Identity",
    category: "BRANDING",
    description: "Complete brand identity design for a technology startup, including logo, color palette, and brand guidelines.",
    image: "/placeholder.svg",
    featured: false
  }
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = projects.filter(project => 
    activeCategory === "ALL" ? true : project.category === activeCategory
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-16">Work we've loved doing</h1>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-8 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  activeCategory === category 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary",
                  activeCategory === category && "after:content-['•'] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Flex Layout */}
          <div className="flex flex-wrap gap-8 animate-fade-in">
            {filteredProjects.map((project, index) => {
              const isEvenRow = Math.floor(index / 2) % 2 === 0;
              const isFirstInRow = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={cn(
                    "group relative overflow-hidden rounded-lg",
                    "flex-grow-0 flex-shrink-0",
                    isFirstInRow ? (isEvenRow ? "w-[65%]" : "w-[30%]") : (isEvenRow ? "w-[30%]" : "w-[65%]")
                  )}
                >
                  <div className={cn(
                    "bg-muted overflow-hidden",
                    isFirstInRow ? (isEvenRow ? "aspect-[2/1]" : "aspect-[3/4]") : (isEvenRow ? "aspect-[3/4]" : "aspect-[2/1]")
                  )}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;