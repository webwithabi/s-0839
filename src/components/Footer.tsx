import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">Email: karunanidhiabinash@gmail.com</p>
            <p className="text-muted-foreground">Phone: +91 7305971450</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="text-muted-foreground">
              #86, Vasanthapuri Estate<br />
              Ambalnagar, Mamallapuram<br />
              Chengalpattu-603104
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Abinash-k" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/abinash-karunanidhi-129527249/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:karunanidhiabinash@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ABINASH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;