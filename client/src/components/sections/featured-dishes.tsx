import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { featuredDishes } from "@/lib/menu-data";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    Swiper: any;
  }
}

export default function FeaturedDishes() {
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    // Initialize Swiper when component mounts
    const initSwiper = () => {
      if (window.Swiper) {
        new window.Swiper('.featured-swiper', {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        });
      }
    };

    // Check if Swiper is loaded, if not wait a bit
    if (window.Swiper) {
      initSwiper();
    } else {
      const timer = setTimeout(initSwiper, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAddToCart = (dish: typeof featuredDishes[0]) => {
    addToCart(dish);
    toast({
      title: "Added to cart!",
      description: `${dish.name} has been added to your cart.`,
    });
  };

  const getBadgeVariant = (index: number) => {
    switch (index) {
      case 0: return "Chef's Choice";
      case 1: return "Premium";
      case 2: return "Popular";
      default: return "Featured";
    }
  };

  const getBadgeColor = (index: number) => {
    switch (index) {
      case 0: return "bg-[var(--foodie-primary)]";
      case 1: return "bg-[var(--foodie-golden)]";
      case 2: return "bg-red-500";
      default: return "bg-blue-500";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--foodie-dark)] mb-4">
            Featured <span className="text-[var(--foodie-primary)]">Dishes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our chef's signature creations, crafted with the finest ingredients and presented with artistic flair
          </p>
        </div>
        
        {/* Swiper Carousel */}
        <div className="swiper featured-swiper">
          <div className="swiper-wrapper">
            {featuredDishes.map((dish, index) => (
              <div key={dish.id} className="swiper-slide">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <Badge className={`absolute top-4 right-4 ${getBadgeColor(index)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {getBadgeVariant(index)}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-2xl font-bold text-[var(--foodie-dark)] mb-2">{dish.name}</h3>
                    <p className="text-gray-600 mb-4">{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[var(--foodie-primary)]">${dish.price}</span>
                      <Button 
                        onClick={() => handleAddToCart(dish)}
                        className="bg-[var(--foodie-primary)] hover:bg-[var(--foodie-golden)] text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="swiper-pagination mt-8"></div>
        </div>
      </div>
    </section>
  );
}
