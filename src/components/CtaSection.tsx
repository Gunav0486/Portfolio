
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CtaSection = () => {
  // Function to handle resume download
  const handleResumeDownload = () => {
    // Create a link to the resume file in the public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This assumes you'll upload a PDF file named resume.pdf to your public folder
    link.download = 'MyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle contact button click
  const handleContactClick = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-cyber-green-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-cyber-blue-dark">
            Looking for Opportunities to Learn and Grow
          </h2>
          <p className="text-cyber-grey-dark mb-8 text-lg">
            I'm actively seeking internships, entry-level positions, and collaboration opportunities in cybersecurity.
            Let's connect and discuss how my skills and enthusiasm can contribute to your team.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-cyber-blue-light hover:bg-cyber-blue-dark" onClick={handleContactClick}>
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyber-blue-dark text-cyber-blue-dark hover:bg-cyber-blue-dark hover:text-white bg-white"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
