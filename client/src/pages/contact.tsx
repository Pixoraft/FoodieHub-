import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SuccessModal from "@/components/modals/success-modal";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 2000);
  };

  return (
    <>
      <div className="pt-24 pb-20 bg-[var(--background)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--foodie-dark)] mb-4">
              Get In <span className="text-[var(--foodie-primary)]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or want to make a reservation? We'd love to hear from you
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl font-bold text-[var(--foodie-dark)]">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-[var(--foodie-dark)] font-semibold">
                        First Name
                      </Label>
                      <Input 
                        id="firstName"
                        name="firstName" 
                        required 
                        className="mt-2 border-gray-300 focus:border-[var(--foodie-primary)]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-[var(--foodie-dark)] font-semibold">
                        Last Name
                      </Label>
                      <Input 
                        id="lastName"
                        name="lastName" 
                        required 
                        className="mt-2 border-gray-300 focus:border-[var(--foodie-primary)]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[var(--foodie-dark)] font-semibold">
                      Email
                    </Label>
                    <Input 
                      id="email"
                      name="email" 
                      type="email" 
                      required 
                      className="mt-2 border-gray-300 focus:border-[var(--foodie-primary)]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[var(--foodie-dark)] font-semibold">
                      Phone
                    </Label>
                    <Input 
                      id="phone"
                      name="phone" 
                      type="tel" 
                      className="mt-2 border-gray-300 focus:border-[var(--foodie-primary)]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-[var(--foodie-dark)] font-semibold">
                      Message
                    </Label>
                    <Textarea 
                      id="message"
                      name="message" 
                      rows={4} 
                      required 
                      className="mt-2 border-gray-300 focus:border-[var(--foodie-primary)] resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[var(--foodie-primary)] hover:bg-[var(--foodie-golden)] text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {isLoading ? (
                      <div className="loading-spinner mx-auto"></div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl font-bold text-[var(--foodie-dark)]">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foodie-dark)]">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foodie-dark)]">Email</h4>
                      <p className="text-gray-600">hello@foodiehub.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--foodie-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foodie-dark)]">Address</h4>
                      <p className="text-gray-600">
                        123 Culinary Boulevard<br />
                        Downtown District, CD 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl font-bold text-[var(--foodie-dark)]">
                    Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[var(--foodie-dark)]">Monday - Thursday</span>
                      <span className="text-gray-600">5:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[var(--foodie-dark)]">Friday - Saturday</span>
                      <span className="text-gray-600">5:00 PM - 12:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[var(--foodie-dark)]">Sunday</span>
                      <span className="text-gray-600">4:00 PM - 10:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
        message="Thank you for your message! We will get back to you soon."
      />
    </>
  );
}
