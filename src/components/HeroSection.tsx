import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
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

  // Function to scroll to projects section
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue-dark via-cyber-blue-dark/95 to-cyber-blue-dark z-0">
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Aspiring <br />
              <span className="text-cyber-blue-light">Cybersecurity Student</span>
            </h1>
            <p className="text-lg text-cyber-grey-light mb-8 max-w-lg">
              Passionate cybersecurity student with strong foundations in network security, ethical hacking, and security analyst . Eager to apply my knowledge to real-world security challenges.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-cyber-blue-light hover:bg-cyber-blue-light/90" onClick={scrollToProjects}>
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-cyber-blue-dark bg-cyber-blue-dark/30"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-cyber-blue-light/20 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full bg-cyber-blue-light/30"></div>
              <div className="absolute inset-16 rounded-full bg-cyber-blue-light/40 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">CS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-10 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
