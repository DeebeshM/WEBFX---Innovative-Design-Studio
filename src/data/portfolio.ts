import { Project } from '@/types/portfolio';
import portfolioMobile from '@/assets/portfolio-mobile-app.jpg';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioWebsite from '@/assets/portfolio-website.jpg';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    image: portfolioMobile,
    description: 'A clean and intuitive mobile banking application with modern UI design principles.',
    tags: ['UI/UX', 'Mobile', 'Fintech'],
    url: 'https://example.com/project1'
  },
  {
    id: '2',
    title: 'Luxury Brand Identity',
    category: 'Branding',
    image: portfolioBranding,
    description: 'Complete brand identity system for a high-end fashion boutique.',
    tags: ['Branding', 'Identity', 'Luxury'],
    url: 'https://example.com/project2'
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    category: 'Web Design',
    image: portfolioWebsite,
    description: 'Modern e-commerce website with seamless user experience and conversion optimization.',
    tags: ['Web Design', 'E-commerce', 'UX'],
    url: 'https://example.com/project3'
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'WEBFX delivered exceptional design work that perfectly captured our brand vision. Their attention to detail is unmatched.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    content: 'Working with WEBFX was a game-changer for our product. They transformed our ideas into beautiful, functional designs.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director, CreativeCo',
    content: 'Professional, creative, and always on time. WEBFX is our go-to design partner for all major projects.',
    rating: 5,
  },
];