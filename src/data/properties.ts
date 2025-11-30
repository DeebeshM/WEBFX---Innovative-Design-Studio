import { Property, Testimonial } from '@/types/property';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    location: 'Beverly Hills, CA',
    price: 2850000,
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    image: property1,
    featured: true,
  },
  {
    id: '2',
    title: 'Contemporary Penthouse',
    location: 'Manhattan, NY',
    price: 3200000,
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    image: property2,
    featured: true,
  },
  {
    id: '3',
    title: 'Elegant Townhouse',
    location: 'Miami Beach, FL',
    price: 1950000,
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: property3,
    featured: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Property Investor',
    content: 'LuxEstate helped me find the perfect investment property. Their attention to detail and market knowledge is unmatched.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'First-Time Buyer',
    content: 'The team at LuxEstate made buying my first luxury home a seamless experience. Highly recommended!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Real Estate Developer',
    content: 'Professional, knowledgeable, and always available. LuxEstate is my go-to for all premium real estate needs.',
    rating: 5,
  },
];