
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Featured Projects</h2>
        <p className="text-cyber-grey text-center max-w-2xl mx-auto mb-12">
          Showcasing innovative security implementations that solve real-world challenges 
          through robust architecture, strategic thinking, and technical excellence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              insights={project.insights}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
