import { Link } from "wouter";
import { Utensils } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--foodie-dark)] text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center">
                <Utensils className="text-white" size={20} />
              </div>
              <span className="font-playfair text-2xl font-bold">FoodieHub</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience culinary excellence where every dish tells a story of passion, tradition, and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[var(--foodie-primary)] transition-colors duration-300">Home</Link></li>
              <li><Link href="/menu" className="text-gray-300 hover:text-[var(--foodie-primary)] transition-colors duration-300">Menu</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[var(--foodie-primary)] transition-colors duration-300">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[var(--foodie-primary)] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[var(--foodie-primary)] transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--foodie-primary)] transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--foodie-primary)] transition-colors duration-300">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--foodie-primary)] transition-colors duration-300">Allergen Information</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center hover:bg-[var(--foodie-golden)] transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center hover:bg-[var(--foodie-golden)] transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center hover:bg-[var(--foodie-golden)] transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center hover:bg-[var(--foodie-golden)] transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-youtube text-white"></i>
              </a>
            </div>
            <p className="text-gray-300 text-sm">Stay updated with our latest dishes and events</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 FoodieHub. All rights reserved. | Designed with ❤️ by Pixoraft
          </p>
        </div>
      </div>
    </footer>
  );
}
