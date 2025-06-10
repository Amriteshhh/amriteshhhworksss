
import { BarChart3, Database, Code, Brain, Calculator, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <BarChart3 className="text-electric" size={32} />,
      name: "Data Analysis",
      level: 75,
      description: "Statistical analysis, data interpretation, and insights generation"
    },
    {
      icon: <Database className="text-vibrant" size={32} />,
      name: "SQL & Databases",
      level: 65,
      description: "Database querying, data management, and optimization"
    },
    {
      icon: <Code className="text-purple" size={32} />,
      name: "Frontend Development",
      level: 70,
      description: "HTML, CSS, JavaScript, and modern frameworks"
    },
    {
      icon: <Calculator className="text-electric" size={32} />,
      name: "Excel & Spreadsheets",
      level: 85,
      description: "Advanced formulas, pivot tables, and data modeling"
    },
    {
      icon: <Brain className="text-vibrant" size={32} />,
      name: "Analytical Thinking",
      level: 80,
      description: "Problem-solving, critical thinking, and pattern recognition"
    },
    {
      icon: <TrendingUp className="text-purple" size={32} />,
      name: "Data Visualization",
      level: 60,
      description: "Creating compelling charts, graphs, and dashboards"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical abilities and the tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-dark-secondary p-6 rounded-lg border border-gray-700 hover:border-electric/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              
              <p className="text-gray-400 mb-4 text-sm">{skill.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Proficiency</span>
                  <span className="text-sm text-electric font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-electric to-purple h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Always learning and growing • Currently focusing on{' '}
            <span className="text-electric font-semibold">Python for Data Science</span> and{' '}
            <span className="text-vibrant font-semibold">React Development</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
