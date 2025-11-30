import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/portfolio';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8">
                Design Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold font-grotesk mb-8 leading-[0.9]"
            >
              A Portfolio
              <br />
              <span className="block">
                of{' '}
                <span className="text-gradient">
                  Innovative
                </span>
              </span>
              <span className="block">Design</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed"
            >
              I&apos;m a Product Designer living in Munich, and I focus on making 
              digital experiences that are easy to use, enjoyable, and get 
              the job done.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button className="btn-cta group">
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div>
                  <span className="block font-medium text-foreground">INSTAGRAM</span>
                </div>
                <div>
                  <span className="block font-medium text-foreground">BEHANCE</span>
                </div>
                <div>
                  <span className="block font-medium text-foreground">DRIBBBLE</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Portfolio Preview Section */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Large Featured Project */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-0 right-0 w-80 h-80 portfolio-card float-1 z-20"
            >
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium">{projects[0].category}</div>
                <div className="text-xs opacity-80">{projects[0].title}</div>
              </div>
            </motion.div>

            {/* Medium Project */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 5 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="absolute top-32 left-0 w-64 h-64 portfolio-card float-2 z-10"
            >
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium">{projects[1].category}</div>
                <div className="text-xs opacity-80">{projects[1].title}</div>
              </div>
            </motion.div>

            {/* Small Project */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-20 right-16 w-48 h-48 portfolio-card float-3 z-30"
            >
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium">{projects[2].category}</div>
                <div className="text-xs opacity-80">{projects[2].title}</div>
              </div>
            </motion.div>

            {/* Service Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute bottom-0 right-0 flex flex-col space-y-2"
            >
              <span className="px-4 py-2 bg-card border rounded-full text-sm font-medium shadow-soft">
                UI/UX
              </span>
              <span className="px-4 py-2 bg-card border rounded-full text-sm font-medium shadow-soft">
                Branding
              </span>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center"
            >
              <div className="text-sm text-muted-foreground mb-2">Scroll to explore</div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center mx-auto"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;