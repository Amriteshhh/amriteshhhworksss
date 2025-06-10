
import { GraduationCap, MapPin, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me forward
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-dark-bg rounded-lg border border-electric/20">
              <GraduationCap className="text-electric" size={24} />
              <div>
                <h3 className="font-semibold text-white">Education</h3>
                <p className="text-gray-400">3rd Year Student at Jagran Lakecity University (JLU), Bhopal</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-dark-bg rounded-lg border border-vibrant/20">
              <MapPin className="text-vibrant" size={24} />
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-gray-400">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-dark-bg rounded-lg border border-purple/20">
              <Heart className="text-purple" size={24} />
              <div>
                <h3 className="font-semibold text-white">Interests</h3>
                <p className="text-gray-400">Gaming, Music, Basketball, Technology</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate technology enthusiast currently in my 3rd year at Jagran Lakecity University in Bhopal. 
              My journey in tech began with a curiosity about how data can tell stories and drive decisions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As an aspiring data analyst and frontend developer, I love combining analytical thinking with creative 
              design to build meaningful digital experiences. I enjoy working on portfolio sites and exploring 
              the intersection of data science and web development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding or analyzing data, you'll find me on the basketball court, gaming with friends, 
              or discovering new music. I believe in continuous learning and am always excited to take on new 
              challenges that push my boundaries.
            </p>
            
            <div className="bg-dark-bg p-6 rounded-lg border border-electric/20 mt-6">
              <h4 className="text-lg font-semibold text-electric mb-2">Currently Learning</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Advanced Data Analysis Techniques</li>
                <li>• Modern Frontend Frameworks</li>
                <li>• Data Visualization Tools</li>
                <li>• Statistical Analysis & Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
