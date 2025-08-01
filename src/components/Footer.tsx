import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-accent-warm rounded-full flex items-center justify-center">
                <span className="text-accent-warm-foreground font-bold text-sm">JT</span>
              </div>
              <span className="text-xl font-bold">Justice Together</span>
            </div>
            <p className="text-primary-foreground/80">© 2025 Justice Together</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://instagram.com/justicetogether_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary-foreground hover:text-accent-warm transition-colors duration-200"
            >
              <Instagram size={20} />
              <span>@justicetogether_</span>
            </a>
            
            <a 
              href="mailto:justicetogether2027@gmail.com"
              className="flex items-center space-x-2 text-primary-foreground hover:text-accent-warm transition-colors duration-200"
            >
              <Mail size={20} />
              <span>justicetogether2027@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;