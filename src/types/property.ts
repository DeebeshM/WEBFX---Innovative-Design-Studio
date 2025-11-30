export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: 'house' | 'apartment' | 'villa' | 'condo';
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface FilterOptions {
  location: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
}