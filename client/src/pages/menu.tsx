import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { menuData, MenuItemData } from "@/lib/menu-data";
import { useToast } from "@/hooks/use-toast";

type CategoryType = 'all' | 'starters' | 'mains' | 'desserts' | 'drinks';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = [
    { id: 'all' as CategoryType, label: 'All Items' },
    { id: 'starters' as CategoryType, label: 'Starters' },
    { id: 'mains' as CategoryType, label: 'Main Course' },
    { id: 'desserts' as CategoryType, label: 'Desserts' },
    { id: 'drinks' as CategoryType, label: 'Drinks' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItemData) => {
    addToCart(item);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--foodie-dark)] mb-4">
            Our <span className="text-[var(--foodie-primary)]">Menu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes, each prepared with passion and the finest ingredients
          </p>
        </div>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id 
                  ? 'menu-category active' 
                  : 'border-2 border-[var(--foodie-primary)] text-[var(--foodie-primary)] hover:bg-[var(--foodie-primary)] hover:text-white'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-playfair text-xl font-bold text-[var(--foodie-dark)]">{item.name}</h3>
                  <Badge variant="secondary" className="ml-2 capitalize">
                    {item.category}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[var(--foodie-primary)]">${item.price}</span>
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-[var(--foodie-primary)] hover:bg-[var(--foodie-golden)] text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
