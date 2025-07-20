import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError && validateEmail(value)) {
      setEmailError("");
    }
  };

  const checkEmailBeforePayment = (): boolean => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handlePayPalPayment = () => {
    if (!checkEmailBeforePayment()) {
      return;
    }

    const priceAmount = parseFloat(price.replace(/[^0-9.]/g, ''));

    if (!window.paypal || !paypalLoaded) {
      toast({
        title: "PayPal Error",
        description: "PayPal SDK not loaded. Please try again.",
        variant: "destructive",
      });
      return;
    }

    // Set payment method first to show the container
    setPaymentMethod('paypal');

    // Use setTimeout to ensure DOM is updated
    setTimeout(() => {
      // Clear any existing PayPal buttons
      const container = document.getElementById('modal-paypal-container');
      if (!container) {
        toast({
          title: "PayPal Error",
          description: "PayPal container not found. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      container.innerHTML = '';

      const paypalButtonsConfig = {
        createOrder: function(data: any, actions: any) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: priceAmount.toString(),
                currency_code: 'INR'
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
            // Redirect to success page with payment details
            const successUrl = `/payment-success?session_id=${data.orderID}&report_title=${encodeURIComponent(title)}&email=${encodeURIComponent(email)}`;
            window.location.href = successUrl;
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
    }, 100);
  };

  const handleRazorpayPayment = async () => {
    if (!checkEmailBeforePayment()) {
      return;
    }

    // Extract numeric value from "Rs. 100" format
    const priceAmount = parseFloat(price.replace(/[^0-9.]/g, ''));
    const amountInPaise = Math.round(priceAmount * 100); // Convert to paise

    console.log('Price:', price, 'Extracted amount:', priceAmount, 'Amount in paise:', amountInPaise);

    if (!window.Razorpay) {
      toast({
        title: "Razorpay Error",
        description: "Razorpay SDK not loaded. Please try again.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Get Razorpay key from edge function using supabase client
      const { data, error } = await supabase.functions.invoke('get-razorpay-config');
      
      if (error) {
        throw new Error(error.message || 'Failed to get Razorpay configuration');
      }
      
      const { key } = data;

      const options = {
        key: key,
        amount: amountInPaise,
        currency: 'INR',
        name: 'AeroEdison Consulting',
        description: title,
        image: '/lovable-uploads/9db9cc1e-f920-4f2b-9645-75af25c39acf.png',
        handler: function (response: any) {
          toast({
            title: "Payment Successful!",
            description: `Your Razorpay payment for "${title}" has been processed.`,
          });
          // Redirect to success page with payment details
          const successUrl = `/payment-success?session_id=${response.razorpay_payment_id}&report_title=${encodeURIComponent(title)}&email=${encodeURIComponent(email)}`;
          window.location.href = successUrl;
          onClose();
        },
        prefill: {
          name: 'Guest User',
          email: email,
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
    } catch (error) {
      console.error('Razorpay configuration error:', error);
      toast({
        title: "Razorpay Error",
        description: "Failed to initialize Razorpay. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Reset payment method and email when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPaymentMethod(null);
      setEmail("");
      setEmailError("");
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

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                className={`pl-10 ${emailError ? 'border-red-500' : ''}`}
              />
            </div>
            {emailError && (
              <p className="text-sm text-red-500">{emailError}</p>
            )}
            <p className="text-xs text-gray-500">
              The report will be sent to this email address after payment
            </p>
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