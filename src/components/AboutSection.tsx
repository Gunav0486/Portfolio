
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const AboutSection = () => {
  // You can customize these skills to match your actual skills
  const skills = [
    "Firewall", "Basics of Penetration Testing", "Linux", 
    "Python", "Log Analysis", "Virtualization", "Web Application Security", 
    "CTF Competitions", "Security Fundamentals", "OSINT", "Windows Security"
  ];

  return (
    <section id="about" className="py-20 bg-cyber-grey-light/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cyber-grey-light/50 h-full">
              <div className="p-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-cyber-blue-light">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="Cybersecurity Student" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-center text-cyber-blue-dark mb-4">
                  {/* Replace with you*/}
                  Sammiti Guna Vardhan
                </h3>
                
                <div className="flex justify-center space-x-4 mb-6">
                  <a href="https://www.linkedin.com/in/guna-vardhan-sammiti-a0a34a30a" className="w-10 h-10 rounded-full bg-cyber-blue-dark flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/Gunav0486?tab=repositories" className="w-10 h-10 rounded-full bg-cyber-blue-dark flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a href="https://medium.com/@jinX_state" className="w-10 h-10 rounded-full bg-cyber-blue-dark flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                    </svg>
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="mb-2">
                    <span className="text-cyber-grey">Email:</span>
                    <a href="mailto:your.email@example.com" className="text-cyber-blue-light ml-2">gunavardhansammiti64045@gmail.com</a>
                  </div>
                  <div>
                    <span className="text-cyber-grey">Visakhapatnam,</span>
                    <span className="text-cyber-grey-dark ml-2">India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cyber-grey-light/50 h-full">
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-cyber-blue-dark mb-6">
                  My Journey in Cybersecurity
                </h3>
                
                <div className="space-y-4 text-cyber-grey-dark mb-6">
                  <p>
                    {/* Replace with your personal journey */}
                   My fascination with cybersecurity began in my second year of B.Tech when I started exploring new technologies.
                   As I delved deeper, cybersecurity stood out to me, sparking my interest in its vast and complex landscape. 
                   This curiosity led me to pursue formal education in the field and further explore it through online courses
                   and personal projects.
                  </p>
                  <p>
                    As a student, I have dedicated my time to building a strong foundation in security principles through hands-on
                    experiences. These include setting up secure home lab environments, participating in Capture The Flag (CTF) 
                    competitions, and working with various security tools and frameworks.
                  </p>
                  <p>
                   However, cybersecurity is not just about technical expertise—it also requires an understanding of human behavior, 
                    effective communication, and continuous learning. Researching cybersecurity and engaging in CTFs has only deepened 
                    my passion for the field, motivating me to refine my skills and expand my knowledge.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-heading font-medium text-cyber-blue-dark mb-4">CTF Writeups</h4>
                  <div className="flex items-center">
                    <p className="text-cyber-grey-dark">I write detailed CTF challenge solutions on Medium.</p>
                    <a 
                      href="https://medium.com/@jinX_state" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-3 inline-flex items-center text-cyber-blue-light hover:underline"
                    >
                      <span>@jinX_state</span>
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-2 text-cyber-blue-dark border-cyber-blue-light hover:bg-cyber-blue-light/10"
                    onClick={() => window.open("https://medium.com/@jinX_state", "_blank")}
                  >
                    View My CTF Writeups
                  </Button>
                </div>
                
                <h4 className="font-heading font-medium text-cyber-blue-dark mb-4">Technical Skills</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {skills.map((skill, index) => (
                    <Badge key={index} className="bg-cyber-blue-light/10 text-cyber-blue-dark border-none">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <h4 className="font-heading font-medium text-cyber-blue-dark mb-4">Education</h4>
                <ul className="list-disc pl-5 space-y-2 text-cyber-grey-dark">
                  <li>Bachelor's of Technology in Electronics and Communication Engineering</li>
                  <li>CompTIA Security+ (Studying)</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
