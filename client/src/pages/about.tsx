import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MapPin, Clock } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Elegant dining room with modern decor and ambient lighting"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Private dining area with luxury seating and elegant table setting"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Sophisticated bar area with premium spirits and mood lighting"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Restaurant entrance with welcoming ambiance and modern design"
  }
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Chef Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--foodie-dark)] mb-6">
              Meet Chef <span className="text-[var(--foodie-primary)]">Alessandro</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              With over 15 years of culinary excellence, Chef Alessandro brings passion and innovation to every dish. 
              Trained in the finest kitchens of Europe, he combines traditional techniques with modern creativity.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              "Cooking is not just about feeding the body, it's about nourishing the soul. Every ingredient tells a story, 
              and every dish is a chapter in our culinary journey."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-1 bg-[var(--foodie-primary)]"></div>
              <span className="text-lg font-semibold text-[var(--foodie-dark)]">Executive Chef & Owner</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Chef Alessandro in professional kitchen attire" 
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Restaurant Gallery */}
        <div className="mb-16" id="gallery">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-[var(--foodie-dark)] mb-12">
            Our <span className="text-[var(--foodie-primary)]">Space</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Location Information */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden" id="location">
          <div className="p-8 lg:p-12">
            <h2 className="font-playfair text-3xl font-bold text-[var(--foodie-dark)] mb-6 text-center">Visit Us</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foodie-dark)]">Address</h4>
                      <p className="text-gray-600">123 Culinary Boulevard, Downtown District</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foodie-dark)]">Opening Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Mon-Thu: 5:00 PM - 11:00 PM</p>
                        <p>Fri-Sat: 5:00 PM - 12:00 AM</p>
                        <p>Sun: 4:00 PM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-80 bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 text-[var(--foodie-primary)]" size={48} />
                    <p className="text-lg">Interactive Map</p>
                    <p className="text-sm">Google Maps integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-full p-0">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
