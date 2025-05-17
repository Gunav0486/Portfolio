
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  insights: string[];
  details?: string;
}

const ProjectCard = ({ title, description, image, tags, insights, details }: ProjectCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <>
      <div className="project-card animate-fade-in card-shadow">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-cyber-grey-light/10 text-cyber-blue-dark">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-heading font-semibold mb-2 text-cyber-blue-dark">{title}</h3>
          <p className="text-cyber-grey mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-cyber-blue-light mb-2">Key Takeaways:</h4>
            <ul className="space-y-1">
              {insights.map((insight, index) => (
                <li key={index} className="text-sm text-cyber-grey-dark flex items-start">
                  <span className="text-cyber-blue-light mr-2">•</span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-2 text-cyber-blue-light border-cyber-blue-light hover:bg-cyber-blue-light hover:text-white"
            onClick={() => setShowDetails(true)}
          >
            View Project Details
          </Button>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-cyber-blue-dark">{title}</DialogTitle>
            <DialogDescription className="text-cyber-grey text-base">{description}</DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="mt-4 max-h-[60vh]">
            <div className="pr-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <Badge key={index} className="bg-cyber-blue-light/10 text-cyber-blue-dark">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="mb-6">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-64 object-cover rounded-md mb-4" 
                />
              </div>
              
              <h4 className="text-lg font-medium text-cyber-blue-dark mb-2">Key Takeaways:</h4>
              <ul className="space-y-2 mb-6">
                {insights.map((insight, index) => (
                  <li key={index} className="text-cyber-grey-dark flex items-start">
                    <span className="text-cyber-blue-light mr-2 text-xl">•</span>
                    {insight}
                  </li>
                ))}
              </ul>
              
              {details && (
                <div className="border-t pt-4">
                  <h4 className="text-lg font-medium text-cyber-blue-dark mb-2">Project Details:</h4>
                  <p className="text-cyber-grey-dark whitespace-pre-line">{details}</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
