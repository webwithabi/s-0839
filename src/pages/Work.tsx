
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const categories = ["ALL", "WEB"];

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
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">Work we've loved doing</h1>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
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

          {/* Projects Grid Layout for Mobile */}
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-6 sm:gap-8 animate-fade-in">
            {filteredProjects.map((project, index) => {
              const isEvenRow = Math.floor(index / 2) % 2 === 0;
              const isFirstInRow = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={cn(
                    "group relative overflow-hidden rounded-lg w-full",
                    "sm:flex-grow-0 sm:flex-shrink-0",
                    {
                      "sm:w-[65%]": isFirstInRow && isEvenRow || !isFirstInRow && !isEvenRow,
                      "sm:w-[30%]": !isFirstInRow && isEvenRow || isFirstInRow && !isEvenRow
                    }
                  )}
                >
                  <div className={cn(
                    "bg-muted overflow-hidden",
                    "aspect-[3/2] sm:aspect-auto",
                    {
                      "sm:aspect-[2/1]": isFirstInRow && isEvenRow || !isFirstInRow && !isEvenRow,
                      "sm:aspect-[3/4]": !isFirstInRow && isEvenRow || isFirstInRow && !isEvenRow
                    }
                  )}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200 mb-4 px-2">{project.description}</p>
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
