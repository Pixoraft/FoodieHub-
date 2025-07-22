import { useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "An absolutely incredible dining experience! The attention to detail in every dish is remarkable. Chef Alessandro has created something truly special here. The ambiance is perfect for a romantic evening.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "The wagyu ribeye was absolutely divine! From the moment we walked in, the service was impeccable. This is definitely our new favorite restaurant for special occasions.",
    rating: 5
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Anniversary Celebration",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "FoodieHub exceeded all expectations! The lobster thermidor was a masterpiece, and the wine pairing was spot on. The staff made our anniversary dinner truly memorable.",
    rating: 5
  }
];

declare global {
  interface Window {
    Swiper: any;
  }
}

export default function Testimonials() {
  useEffect(() => {
    const initSwiper = () => {
      if (window.Swiper) {
        new window.Swiper('.testimonials-swiper', {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: '.testimonials-swiper .swiper-pagination',
            clickable: true,
          },
          autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
        });
      }
    };

    if (window.Swiper) {
      initSwiper();
    } else {
      const timer = setTimeout(initSwiper, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="py-20 bg-[var(--foodie-dark)] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-[var(--foodie-primary)]">Guests Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Read reviews from our valued customers who have experienced the magic of FoodieHub
          </p>
        </div>
        
        {/* Testimonials Swiper */}
        <div className="swiper testimonials-swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <div className="glassmorphism rounded-2xl p-8 text-center max-w-2xl mx-auto">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-[var(--foodie-primary)] fill-current" size={20} />
                        ))}
                      </div>
                    </div>
                    <p className="text-lg italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} testimonial`} 
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-300">{testimonial.role}</p>
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
