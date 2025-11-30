import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@webfx.design',
      href: 'mailto:hello@webfx.design'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+49 89 123 456 789',
      href: 'tel:+4989123456789'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Munich, Germany',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-2 h-2 bg-white rounded-full absolute top-8 left-8"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute top-16 left-32"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute top-32 left-16"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute top-24 left-48"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute bottom-8 right-8"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute bottom-16 right-32"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-grotesk mb-6 leading-tight">
              Ready to Create
              <span className="block text-accent">
                Something Amazing?
              </span>
            </h2>
            
            <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss your project and explore how we can bring your vision to life 
              through exceptional design.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button size="lg" className="btn-cta group px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg"
            >
              View Our Process
            </Button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <info.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-primary-foreground/70 mb-2">{info.label}</div>
                <div className="font-medium text-primary-foreground group-hover:text-accent transition-colors">
                  {info.value}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-12 border-t border-primary-foreground/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-primary-foreground/60 text-sm">
                © 2024 WEBFX Design Studio. All rights reserved.
              </div>
              
              <div className="flex space-x-8 text-sm">
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;