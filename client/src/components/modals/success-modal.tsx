import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function SuccessModal({ 
  isOpen, 
  onClose, 
  title = "Success!", 
  message = "Your action was completed successfully." 
}: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h3 className="font-playfair text-2xl font-bold text-[var(--foodie-dark)] mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{message}</p>
          <Button 
            onClick={onClose}
            className="bg-[var(--foodie-primary)] hover:bg-[var(--foodie-golden)] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
