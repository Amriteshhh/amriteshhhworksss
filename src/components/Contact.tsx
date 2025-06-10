
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Download, Github, Linkedin, Loader2 } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration with your credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Amritesh Jhilpe',
      };

      await emailjs.send(
        'service_145rbvs', // Your service ID
        'template_db7j028', // Your template ID
        templateParams,
        '82rrT-Wk6UZR4iIhh' // Your public key
      );

      // Success feedback
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Error feedback
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly at amritesh2601@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-electric hover:bg-electric/80 text-black font-semibold py-3 glow-effect"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
