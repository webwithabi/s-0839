import { Rocket, Users, Cog } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">How Can We Help</h2>
        <h2 className="text-5xl font-bold text-center mb-12">Your Business?</h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          We provide comprehensive solutions to help your business grow and succeed in the digital landscape.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Rocket className="w-12 h-12 mb-6 text-primary" />
            <h3 className="text-2xl font-semibold mb-4">Digital Strategy</h3>
            <p className="text-muted-foreground">
              Develop comprehensive digital strategies to enhance your online presence and reach target audiences effectively.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Users className="w-12 h-12 mb-6 text-primary" />
            <h3 className="text-2xl font-semibold mb-4">Brand Development</h3>
            <p className="text-muted-foreground">
              Create and strengthen your brand identity to stand out in today's competitive market.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Cog className="w-12 h-12 mb-6 text-primary" />
            <h3 className="text-2xl font-semibold mb-4">Technical Solutions</h3>
            <p className="text-muted-foreground">
              Implement cutting-edge technical solutions to optimize your business operations and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;