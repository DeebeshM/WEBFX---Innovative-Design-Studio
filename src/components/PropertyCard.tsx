import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="property-card group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        
        {/* Like Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300">
          <Heart className="w-4 h-4 text-primary hover:text-accent transition-colors" />
        </button>
        
        {/* Property Type */}
        <div className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium capitalize">
          {property.type}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="text-2xl font-bold text-accent font-poppins mb-2">
          {formatPrice(property.price)}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
          {property.title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{property.location}</span>
        </div>
        
        {/* Property Details */}
        <div className="flex items-center justify-between mb-6 text-muted-foreground">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
        
        {/* Action Button */}
        <Button className="w-full btn-outline-luxury group">
          View Details
          <motion.div
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            →
          </motion.div>
        </Button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;