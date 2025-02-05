
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import ProjectsCompleted from "@/components/ProjectsCompleted";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <Features />
        <ProjectsCompleted />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
