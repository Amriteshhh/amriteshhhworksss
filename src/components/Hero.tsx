import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6">
            <img src="https://i.postimg.cc/8P9VQKzK/Amritesh-DP-profile.jpg" alt="Amritesh Jhilpe" className="w-32 h-32 rounded-full mx-auto border-4 border-electric glow-effect object-cover" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Amritesh</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-6 text-gray-300">
            <span className="typing-animation">Aspiring Data Analyst & Frontend Developer</span>
          </div>
          
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">Blending creativity with data to build impactful digital experiences. Currently pursuing BCA degree at JLU Bhopal, passionate about technology and innovation.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-electric hover:bg-electric/80 text-black font-semibold px-8 py-3 glow-effect">
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="border-vibrant text-vibrant hover:bg-vibrant hover:text-black px-8 py-3">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-electric" size={32} />
      </div>
    </section>;
};
export default Hero;