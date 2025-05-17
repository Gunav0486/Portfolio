
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-blue-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              <span className="text-cyber-blue-light">My</span>Portfolio
            </h3>
            <p className="text-cyber-grey-light max-w-xs">
              Aspiring cybersecurity professional focused on innovative security solutions and best practices for modern digital environments.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#projects" 
                  className="text-cyber-grey-light hover:text-cyber-blue-light transition-colors"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); 
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-cyber-grey-light hover:text-cyber-blue-light transition-colors"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); 
                  }}
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-cyber-grey-light hover:text-cyber-blue-light transition-colors"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); 
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-cyber-blue-light" />
                <a href="mailto:your.email@example.com" className="text-cyber-grey-light hover:text-cyber-blue-light transition-colors">
                  gunavardhansammiti64045@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-cyber-blue-light" />
                <a href="https://linkedin.com/in/your-profile" className="text-cyber-grey-light hover:text-cyber-blue-light transition-colors">
                  www.linkedin.com/in/guna-vardhan-sammiti-a0a34a30a
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-cyber-blue-light" />
                <a href="tel:+1234567890" className="text-cyber-grey-light hover:text-cyber-blue-light transition-colors">
                  +91 7893165667
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-grey-dark/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyber-grey-light text-sm">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-cyber-grey-light hover:text-cyber-blue-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cyber-grey-light hover:text-cyber-blue-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
