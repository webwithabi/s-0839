import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A passionate full-stack developer with a love for creating beautiful and functional web applications. I specialize in React, TypeScript, and modern web technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground">React, TypeScript, Tailwind CSS</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-muted-foreground">Node.js, Express, PostgreSQL</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Tools</h3>
              <p className="text-muted-foreground">Git, Docker, AWS</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;