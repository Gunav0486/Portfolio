
import { Mail, Linkedin, Phone, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react"; // Add ExternalLink icon

const ContactSection = () => {
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

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white text-center">Get in Touch</h2>
        <p className="text-cyber-grey-light text-center max-w-2xl mx-auto mb-12">
          Interested in discussing cybersecurity solutions or potential collaboration? 
          Feel free to reach out through any of the channels below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in flex flex-col items-center text-center">
            <Mail className="h-12 w-12 text-cyber-blue-light mb-4" />
            <h3 className="text-xl font-medium mb-2 text-cyber-blue-dark">Email</h3>
            <p className="text-cyber-grey-dark mb-4">Reach out via email for any inquiries or opportunities</p>
            <a href="mailto:gunavardhansammiti64045@gmail.com" className="text-cyber-blue-light hover:underline font-medium">
              gunavardhansammiti64045@gmail.com
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in flex flex-col items-center text-center">
            <Linkedin className="h-12 w-12 text-cyber-blue-light mb-4" />
            <h3 className="text-xl font-medium mb-2 text-cyber-blue-dark">LinkedIn</h3>
            <p className="text-cyber-grey-dark mb-4">Connect with me professionally and see my career updates</p>
            <a href="https://www.linkedin.com/in/guna-vardhan-sammiti-a0a34a30a" className="text-cyber-blue-light hover:underline font-medium">
              www.linkedin.com/in/guna-vardhan-sammiti-a0a34a30a
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in flex flex-col items-center text-center">
            <Github className="h-12 w-12 text-cyber-blue-light mb-4" />
            <h3 className="text-xl font-medium mb-2 text-cyber-blue-dark">GitHub</h3>
            <p className="text-cyber-grey-dark mb-4">Check out my code and security projects</p>
            <a href="https://github.com/Gunav0486?tab=repositories" className="text-cyber-blue-light hover:underline font-medium">
              github.com/Gunav0486
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in flex flex-col items-center text-center">
            <FileText className="h-12 w-12 text-cyber-blue-light mb-4" />
            <h3 className="text-xl font-medium mb-2 text-cyber-blue-dark">Medium</h3>
            <p className="text-cyber-grey-dark mb-4">Read my CTF writeups and security insights</p>
            <a href="https://medium.com/@jinX_state" target="_blank" rel="noopener noreferrer" className="text-cyber-blue-light hover:underline font-medium flex items-center">
              @jinX_state
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-cyber-blue-light text-white hover:bg-cyber-blue-dark"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download My Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
