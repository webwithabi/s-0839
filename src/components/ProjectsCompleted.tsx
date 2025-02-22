
import { useState, useEffect } from "react";

const ProjectsCompleted = () => {
  const [count, setCount] = useState(0);
  const targetCount = 250;

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const increment = targetCount / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">
            {count}+
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Projects Successfully Completed
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We take pride in our track record of delivering exceptional results for our clients across various industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCompleted;
