import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import Portfolio from '@/components/portfolio/Portfolio';
import Services from '@/components/portfolio/Services';
import About from '@/components/portfolio/About';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
