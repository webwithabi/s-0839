import { Card } from "@/components/ui/card";

const expertiseAreas = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "Webpack", "Jest"]
  }
];

const Expertise = () => {
  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;