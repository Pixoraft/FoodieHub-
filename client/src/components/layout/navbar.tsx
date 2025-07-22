import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import CartModal from "@/components/modals/cart-modal";
import { Menu, ShoppingCart, Utensils } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = getCartCount();

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/", onClick: () => scrollToSection("home") },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about", onClick: () => scrollToSection("about") },
    { label: "Contact", href: "/contact", onClick: () => scrollToSection("contact") },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
        isScrolled ? 'scrolled' : ''
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center">
                <Utensils className="text-white" size={20} />
              </div>
              <span className="font-playfair text-2xl font-bold text-white">FoodieHub</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-[var(--foodie-primary)] transition-colors duration-300"
                  onClick={item.onClick}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                onClick={() => setIsCartOpen(true)}
                className="relative bg-[var(--foodie-primary)] hover:bg-[var(--foodie-golden)] text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="mr-2" size={16} />
                Cart
                {cartCount > 0 && (
                  <span className="absolute cart-badge bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
            
            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-4">
              <Button 
                onClick={() => setIsCartOpen(true)}
                variant="outline"
                size="sm"
                className="relative text-white border-white hover:bg-white hover:text-[var(--foodie-dark)]"
              >
                <ShoppingCart size={16} />
                {cartCount > 0 && (
                  <span className="absolute cart-badge bg-red-500 text-white text-xs rounded-full px-1.5">
                    {cartCount}
                  </span>
                )}
              </Button>
              
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-[var(--foodie-dark)]">
                    <Menu size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-lg font-medium hover:text-[var(--foodie-primary)] transition-colors duration-300"
                        onClick={() => {
                          if (item.onClick) item.onClick();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
