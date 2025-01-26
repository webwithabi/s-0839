import { Rocket, Users, Cog } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">Uncover Our Distinct Features</h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Website construction entails the creation and design of online platforms, encompassing layout, content, and user interaction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Rocket className="w-12 h-12 mb-6 text-primary" />
            <h3 className="text-2xl font-semibold mb-4">Project Display</h3>
            <p className="text-muted-foreground">
              Showcase portfolio projects with visually appealing and effective layouts to attract potential clients.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Users className="w-12 h-12 mb-6 text-primary" />
            <h3 className="text-2xl font-semibold mb-4">Client Feedback</h3>
            <p className="text-muted-foreground">
              Build credibility by displaying dynamic testimonials from satisfied clients on your site.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Cog className="w-12 h-12 mb-6 text-primary" />
            <h3 className="text-2xl font-semibold mb-4">Services Overview</h3>
            <p className="text-muted-foreground">
              Detailed, interactive listings to engage visitors and provide insights into your services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;