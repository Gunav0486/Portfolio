import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Create a link to the resume file in the public folder
    const link = document.createElement('a');
    link.href = import.meta.env.BASE_URL + 'resume.pdf'; // Use dynamic base path for GitHub Pages
    link.download = 'MyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-heading font-semibold text-cyber-blue-dark">
            <span className="text-cyber-blue-light">My</span>Portfolio
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#projects" 
            className="text-cyber-grey-dark hover:text-cyber-blue-light transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            Projects
          </a>
          <a 
            href="#about" 
            className="text-cyber-grey-dark hover:text-cyber-blue-light transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About Me
          </a>
          <a 
            href="#contact" 
            className="text-cyber-grey-dark hover:text-cyber-blue-light transition-colors"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
          <Button 
            className="bg-cyber-blue-light hover:bg-cyber-blue-dark text-white" 
            size="sm"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button placeholder - would expand this in a real implementation */}
          <Button variant="ghost" size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
