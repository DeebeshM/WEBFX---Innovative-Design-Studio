import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'hello@luxestate.com',
      action: 'mailto:hello@luxestate.com'
    },
    {
      icon: MessageCircle,
      label: 'Live Chat',
      value: 'Chat Now',
      action: '#'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-2 h-2 bg-white/10 rounded-full absolute top-8 left-8"></div>
          <div className="w-2 h-2 bg-white/10 rounded-full absolute top-16 left-32"></div>
          <div className="w-2 h-2 bg-white/10 rounded-full absolute top-32 left-16"></div>
          <div className="w-2 h-2 bg-white/10 rounded-full absolute top-24 left-48"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Ready to Get Started?
            </span>
            
            <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
              Find Your Dream Home
              <span className="block text-accent">
                Today
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let our expert team guide you through the luxury real estate market. 
              Your perfect property is just one conversation away.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button size="lg" className="btn-luxury group px-8 py-4 text-lg">
              Browse Properties
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg"
            >
              Schedule Consultation
            </Button>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <method.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-primary-foreground/80 mb-1">{method.label}</div>
                <div className="font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                  {method.value}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-12 border-t border-primary-foreground/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-accent font-poppins">24/7</div>
                <div className="text-sm text-primary-foreground/80">Support Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent font-poppins">100%</div>
                <div className="text-sm text-primary-foreground/80">Satisfaction Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent font-poppins">500+</div>
                <div className="text-sm text-primary-foreground/80">Properties Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent font-poppins">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;