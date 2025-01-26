import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;