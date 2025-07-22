import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/hooks/use-cart";
import { Minus, Plus, Trash2 } from "lucide-react";
import SuccessModal from "./success-modal";
import { useState } from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, updateQuantity, removeFromCart, getCartTotal, generateWhatsAppMessage, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Clear cart after order
    clearCart();
    onClose();
    setShowSuccess(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl font-bold text-[var(--foodie-dark)]">Your Cart</DialogTitle>
          </DialogHeader>
          
          <div className="max-h-96 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--foodie-dark)]">{item.name}</h4>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 p-0"
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 p-0"
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 w-8 h-8 p-0"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-6">
                <span className="font-playfair text-2xl font-bold text-[var(--foodie-dark)]">Total:</span>
                <span className="font-playfair text-2xl font-bold text-[var(--foodie-primary)]">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <Button 
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Order via WhatsApp
              </Button>
              <p className="text-gray-500 text-sm text-center mt-3">
                You'll be redirected to WhatsApp with your order details pre-filled
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Order Sent!"
        message="Your order has been sent via WhatsApp. We will contact you shortly to confirm."
      />
    </>
  );
}
