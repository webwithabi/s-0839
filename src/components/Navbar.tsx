import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">ABINASH</Link>
          <div className="flex items-center gap-8">
            {[
              { name: "ABOUT", path: "/about" },
              { name: "WORK", path: "/work" },
              { name: "EXPERTISE", path: "/expertise" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm hover:text-primary transition-colors",
                  location.pathname === item.path && "text-primary font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="ml-4">
              Available for Projects
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;