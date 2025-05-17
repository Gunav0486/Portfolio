
import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'soft' | 'tools';
}

const SkillsVisualization = () => {
  const [animated, setAnimated] = useState(false);
  
  // Sample skills data - replace with your actual skills
  const skills: Skill[] = [
    { name: "Network Security", level: 75, category: "technical" },
    { name: "Linux Administration", level: 70, category: "technical" },
    { name: "Python", level: 80, category: "technical" },
    { name: "Web Security", level: 65, category: "technical" },
    { name: "Bash Scripting", level: 60, category: "technical" },
    { name: "CTF Competitions", level: 75, category: "technical" },
    { name: "Cryptography", level: 65, category: "technical" },
    { name: "OSINT", level: 70, category: "technical" },
  ];

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && !animated) {
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check in case section is already in view
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animated]);

  return (
    <section id="skills-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-10 text-center text-cyber-blue-dark">
          My Skills
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-cyber-blue-dark">{skill.name}</span>
                  <span className="text-sm font-medium text-cyber-grey">
                    {animated ? `${skill.level}%` : '0%'}
                  </span>
                </div>
                <Progress 
                  value={animated ? skill.level : 0} 
                  className="h-2 transition-all duration-1000 ease-out bg-cyber-grey-light/30"
                  indicatorClassName="bg-cyber-blue-light"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-cyber-grey-dark italic">
              *Skills self-assessed and continuously improving through coursework and projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;
