import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Declare global types for payment gateways
declare global {
  interface Window {
    paypal?: any;
    Razorpay?: any;
  }
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  price: string;
  paypalLoaded: boolean;
  razorpayLoaded: boolean;
}

const PaymentModal = ({ isOpen, onClose, title, price, paypalLoaded, razorpayLoaded }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const { toast } = useToast();

  const handlePayPalPayment = () => {
    const priceAmount = parseFloat(price.replace(/[^0-9.]/g, ''));

    if (!window.paypal || !paypalLoaded) {
      toast({
        title: "PayPal Error",
        description: "PayPal SDK not loaded. Please try again.",
        variant: "destructive",
      });
      return;
    }

    // Clear any existing PayPal buttons
    const container = document.getElementById('modal-paypal-container');
    if (container) {
      container.innerHTML = '';
    }

    const paypalButtonsConfig = {
      createOrder: function(data: any, actions: any) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: priceAmount.toString(),
              currency_code: 'USD'
            },
            description: title
          }]
        });
      },
      onApprove: function(data: any, actions: any) {
        return actions.order.capture().then(function(details: any) {
          toast({
            title: "Payment Successful!",
            description: `Your PayPal payment for "${title}" has been processed.`,
          });
          onClose();
        });
      },
      onError: function(err: any) {
        console.error('PayPal error:', err);
        toast({
          title: "Payment Error",
          description: "PayPal payment failed. Please try again.",
          variant: "destructive",
        });
      },
      onCancel: function(data: any) {
        toast({
          title: "Payment Cancelled",
          description: "Your payment was cancelled.",
        });
      }
    };

    // Render PayPal buttons
    window.paypal.Buttons(paypalButtonsConfig).render('#modal-paypal-container').catch((err: any) => {
      console.error('PayPal render error:', err);
      toast({
        title: "PayPal Error",
        description: "Failed to initialize PayPal. Please try again.",
        variant: "destructive",
      });
    });

    setPaymentMethod('paypal');
  };

  const handleRazorpayPayment = () => {
    const priceAmount = parseFloat(price.replace(/[^0-9.]/g, '')) * 100; // Convert to paise

    if (!window.Razorpay) {
      toast({
        title: "Razorpay Error",
        description: "Razorpay SDK not loaded. Please try again.",
        variant: "destructive",
      });
      return;
    }

    const options = {
      key: 'rzp_test_1DP5mmOlF5G5ag', // Test key - replace with your actual key
      amount: Math.round(priceAmount),
      currency: 'USD',
      name: 'AeroEdison Consulting',
      description: title,
      image: '/lovable-uploads/9db9cc1e-f920-4f2b-9645-75af25c39acf.png',
      handler: function (response: any) {
        toast({
          title: "Payment Successful!",
          description: `Your Razorpay payment for "${title}" has been processed.`,
        });
        onClose();
      },
      prefill: {
        name: 'Guest User',
        email: 'guest@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#1e3a8a'
      },
      modal: {
        ondismiss: function() {
          toast({
            title: "Payment Cancelled",
            description: "Your payment was cancelled.",
          });
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Reset payment method when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPaymentMethod(null);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose Payment Method</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-2xl font-bold text-blue-900">{price}</p>
          </div>

          {paymentMethod === null && (
            <div className="space-y-3">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 h-12"
                onClick={handlePayPalPayment}
                disabled={!paypalLoaded}
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Pay with PayPal
              </Button>

              <Button
                className="w-full bg-blue-800 hover:bg-blue-900 h-12"
                onClick={handleRazorpayPayment}
                disabled={!razorpayLoaded}
              >
                <Wallet className="h-5 w-5 mr-2" />
                Pay with Razorpay
              </Button>
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div>
              <p className="text-sm text-gray-600 mb-3 text-center">Complete your payment with PayPal:</p>
              <div id="modal-paypal-container"></div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;