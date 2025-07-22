import HeroSection from "@/components/sections/hero-section";
import FeaturedDishes from "@/components/sections/featured-dishes";
import Testimonials from "@/components/sections/testimonials";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleOrderNow = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setLocation('/menu');
    }
  };

  const handleBookTable = () => {
    const message = "Hello! I'd like to make a reservation at FoodieHub. Please let me know your availability. Thank you!";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <HeroSection onOrderNow={handleOrderNow} onBookTable={handleBookTable} />
      <FeaturedDishes />
      <Testimonials />
    </div>
  );
}
