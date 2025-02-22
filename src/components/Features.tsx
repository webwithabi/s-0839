
import { Rocket, Users, Cog } from "lucide-react";

const Features = () => {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-3">How Can We Help</h2>
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-12">Your Business?</h2>
        <p className="text-lg sm:text-xl text-muted-foreground text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          We provide comprehensive solutions to help your business grow and succeed in the digital landscape.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
            <Rocket className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Digital Strategy</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Develop comprehensive digital strategies to enhance your online presence and reach target audiences effectively.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Brand Development</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Create and strengthen your brand identity to stand out in today's competitive market.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
            <Cog className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Technical Solutions</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Implement cutting-edge technical solutions to optimize your business operations and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
