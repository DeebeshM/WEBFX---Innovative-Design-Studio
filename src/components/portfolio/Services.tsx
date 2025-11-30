import { motion } from 'framer-motion';
import { Palette, Monitor, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand systems that tell your story and connect with your audience through strategic design.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Beautiful, functional websites that convert visitors into customers with exceptional user experience.',
      features: ['UI/UX Design', 'Responsive Design', 'Prototyping', 'User Testing']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Intuitive mobile applications that users love, designed for iOS and Android platforms.',
      features: ['App Design', 'User Flow', 'Interface Design', 'Design Systems']
    },
    {
      icon: Zap,
      title: 'Digital Strategy',
      description: 'Data-driven design decisions that align with your business goals and user needs.',
      features: ['User Research', 'Design Audit', 'Optimization', 'Analytics']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-grotesk mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in creating digital experiences that are not only beautiful 
            but also functional and user-centered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-modern group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-grotesk mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="text-sm font-medium text-foreground/80 bg-background px-3 py-2 rounded-lg"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;