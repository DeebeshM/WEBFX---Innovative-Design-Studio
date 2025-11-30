import { motion } from 'framer-motion';
import { Award, Users, Home, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-team.jpg';

const About = () => {
  const stats = [
    {
      icon: Home,
      value: '500+',
      label: 'Properties Sold',
      description: 'Successfully closed deals'
    },
    {
      icon: Users,
      value: '200+',
      label: 'Happy Clients',
      description: 'Satisfied customers'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      description: 'In luxury real estate'
    },
    {
      icon: TrendingUp,
      value: '$2B+',
      label: 'Property Value',
      description: 'Total transactions'
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src={aboutImage} 
                alt="LuxEstate Team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card rounded-xl p-6 shadow-hover max-w-xs"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-poppins">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
                <div className="text-xs text-muted-foreground mt-1">Based on 200+ reviews</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                About LuxEstate
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                Your Trusted Partner in 
                <span className="text-gradient-luxury block">
                  Luxury Real Estate
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over 15 years, LuxEstate has been the premier destination for luxury real estate. 
                We specialize in connecting discerning clients with exceptional properties that exceed 
                expectations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced professionals provides personalized service, deep market knowledge, 
                and unmatched expertise in the luxury property sector.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground font-poppins">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Button className="btn-luxury">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;