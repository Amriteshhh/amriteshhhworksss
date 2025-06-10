
import { Globe, BarChart, FileText, Palette, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-electric" size={40} />,
      title: "Personal Portfolio Development",
      description: "Create stunning, responsive portfolio websites that showcase your skills and professional journey with modern design and smooth animations.",
      features: ["Responsive Design", "Modern UI/UX", "SEO Optimized", "Fast Loading"],
      color: "electric"
    },
    {
      icon: <Palette className="text-vibrant" size={40} />,
      title: "Website Layout Design",
      description: "Design beautiful, user-friendly website layouts that capture your brand essence and provide excellent user experience across all devices.",
      features: ["Custom Layouts", "Brand Identity", "Mobile-First", "Interactive Elements"],
      color: "vibrant"
    },
    {
      icon: <BarChart className="text-purple" size={40} />,
      title: "Data Analysis & Insights",
      description: "Transform your raw data into meaningful insights with comprehensive analysis, visualization, and actionable recommendations for decision-making.",
      features: ["Statistical Analysis", "Data Visualization", "Report Generation", "Trend Analysis"],
      color: "purple"
    },
    {
      icon: <Database className="text-electric" size={40} />,
      title: "Data Entry & Management",
      description: "Accurate and efficient data entry services with proper organization, cleaning, and management to ensure data quality and accessibility.",
      features: ["Data Cleaning", "Excel Expertise", "Database Setup", "Quality Assurance"],
      color: "electric"
    },
    {
      icon: <FileText className="text-vibrant" size={40} />,
      title: "Business Analytics Reports",
      description: "Comprehensive business reports that provide clear insights into performance metrics, trends, and growth opportunities for informed decisions.",
      features: ["Performance Metrics", "Trend Analysis", "Custom Reports", "Executive Summaries"],
      color: "vibrant"
    },
    {
      icon: <Zap className="text-purple" size={40} />,
      title: "Consultation & Training",
      description: "One-on-one consultation for data analysis projects and basic training on tools and techniques to help you become more data-driven.",
      features: ["Project Guidance", "Tool Training", "Best Practices", "Ongoing Support"],
      color: "purple"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for your digital and data needs. Let's work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-dark-secondary p-6 rounded-lg border border-gray-700 hover:border-electric/50 transition-all duration-300 card-hover group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-${service.color}`}></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className={`w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-black transition-colors duration-300`}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-electric/10 via-purple/10 to-vibrant/10 rounded-lg p-8 border border-electric/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you need a stunning portfolio, data insights, or web design, I'm here to help you achieve your goals. 
              Let's discuss your project and create something amazing together.
            </p>
            <Button 
              size="lg" 
              className="bg-electric hover:bg-electric/80 text-black font-semibold px-8 py-3 glow-effect"
            >
              <a href="#contact">Get Started Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
