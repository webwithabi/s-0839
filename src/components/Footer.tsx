import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">Email: hello@example.com</p>
            <p className="text-muted-foreground">Phone: +1 234 567 890</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="text-muted-foreground">
              123 Web Dev Street<br />
              San Francisco, CA 94105
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
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