import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilterOptions } from '@/types/property';

interface SearchBarProps {
  onSearch: (filters: FilterOptions) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    location: '',
    propertyType: '',
    minPrice: 0,
    maxPrice: 10000000,
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  const locations = [
    'Beverly Hills, CA',
    'Manhattan, NY',
    'Miami Beach, FL',
    'Malibu, CA',
    'Hamptons, NY',
    'Aspen, CO',
  ];

  const propertyTypes = [
    'house',
    'apartment', 
    'villa',
    'condo',
  ];

  const priceRanges = [
    { label: 'Any Price', min: 0, max: 10000000 },
    { label: '$500K - $1M', min: 500000, max: 1000000 },
    { label: '$1M - $2M', min: 1000000, max: 2000000 },
    { label: '$2M - $5M', min: 2000000, max: 5000000 },
    { label: '$5M+', min: 5000000, max: 10000000 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Find Your Perfect Property
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Search through our curated collection of premium properties
            </p>
          </div>

          <div className="card-luxury">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-accent" />
                  Location
                </label>
                <Select onValueChange={(value) => setFilters({ ...filters, location: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Home className="w-4 h-4 mr-2 text-accent" />
                  Property Type
                </label>
                <Select onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-accent" />
                  Price Range
                </label>
                <Select 
                  onValueChange={(value) => {
                    const range = priceRanges.find(r => r.label === value);
                    if (range) {
                      setFilters({ 
                        ...filters, 
                        minPrice: range.min, 
                        maxPrice: range.max 
                      });
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select price" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range.label} value={range.label}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-transparent">Search</label>
                <Button 
                  onClick={handleSearch}
                  className="w-full btn-luxury h-10"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchBar;