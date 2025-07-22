import { Button } from "@/components/ui/button";
import { ShoppingBag, Calendar, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onOrderNow: () => void;
  onBookTable: () => void;
}

export default function HeroSection({ onOrderNow, onBookTable }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background with stunning restaurant ambiance */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1200" 
          alt="Elegant restaurant interior with warm ambient lighting" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 text-shadow animate-fade-in">
          Welcome to <span className="text-[var(--foodie-primary)]">FoodieHub</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up max-w-2xl mx-auto">
          Experience culinary excellence where every dish tells a story of passion, tradition, and innovation
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            onClick={onOrderNow}
            className="bg-[var(--foodie-primary)] hover:bg-[var(--foodie-golden)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ShoppingBag className="mr-2" size={20} />
            Order Now
          </Button>
          <Button 
            onClick={onBookTable}
            variant="outline"
            className="glassmorphism text-white border-2 border-white hover:bg-white hover:text-[var(--foodie-dark)] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="mr-2" size={20} />
            Book Table
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl opacity-70" size={32} />
      </div>
    </section>
  );
}
