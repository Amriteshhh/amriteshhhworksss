
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Download, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:amritesh2601@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow tech enthusiasts. 
                Whether you need help with data analysis, want to build a portfolio, or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-dark-bg rounded-lg border border-electric/20">
                <Mail className="text-electric" size={24} />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:amritesh2601@gmail.com" className="text-gray-400 hover:text-electric transition-colors">
                    amritesh2601@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-dark-bg rounded-lg border border-vibrant/20">
                <MapPin className="text-vibrant" size={24} />
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-dark-bg rounded-lg border border-purple/20">
                <Phone className="text-purple" size={24} />
                <div>
                  <h4 className="font-semibold text-white">Availability</h4>
                  <p className="text-gray-400">Open for freelance & collaboration</p>
                </div>
              </div>
            </div>
            
            {/* Social Links & Resume */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect & Download</h4>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="border-electric text-electric hover:bg-electric hover:text-black"
                >
                  <Download size={16} className="mr-2" />
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-600"
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-600"
                >
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-dark-bg p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-dark-secondary border-gray-600 text-white placeholder-gray-400 focus:border-electric"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-dark-secondary border-gray-600 text-white placeholder-gray-400 focus:border-electric"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-dark-secondary border-gray-600 text-white placeholder-gray-400 focus:border-electric"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  className="bg-dark-secondary border-gray-600 text-white placeholder-gray-400 focus:border-electric resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-electric hover:bg-electric/80 text-black font-semibold py-3 glow-effect"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
