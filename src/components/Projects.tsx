
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills and projects. Built with React, TypeScript, and Tailwind CSS with smooth animations and mobile-first design.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      date: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work showcasing my technical skills and creativity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-dark-bg rounded-lg overflow-hidden border border-gray-700 hover:border-electric/50 transition-all duration-300 card-hover"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-electric text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-gray-400" size={16} />
                  <span className="text-gray-400 text-sm">{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-purple/20 text-purple px-3 py-1 rounded-full text-sm border border-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-electric text-electric hover:bg-electric hover:text-black">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon Section */}
        <div className="text-center">
          <div className="bg-dark-bg border-2 border-dashed border-gray-600 rounded-lg p-12 hover:border-electric/50 transition-colors duration-300">
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-gradient-to-br from-electric to-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">More Projects Coming Soon!</h3>
              <p className="text-gray-400 mb-6">
                I'm currently working on exciting data analysis projects and web applications. 
                Stay tuned for updates!
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-electric/20 text-electric px-3 py-1 rounded-full text-sm">Data Dashboard</span>
                <span className="bg-vibrant/20 text-vibrant px-3 py-1 rounded-full text-sm">E-commerce Analytics</span>
                <span className="bg-purple/20 text-purple px-3 py-1 rounded-full text-sm">React App</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
