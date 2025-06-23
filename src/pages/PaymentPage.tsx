
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Smartphone, ArrowLeft } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import AeroNavbar from "@/components/AeroNavbar";

declare global {
  interface Window {
    paypal?: any;
  }
}

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reportTitle, price } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paypalReady, setPaypalReady] = useState(false);
  const [paypalError, setPaypalError] = useState(false);
  const { toast } = useToast();

  // Extract numeric value from price string (e.g., "$299" -> "299")
  const numericPrice = price ? price.replace(/[^0-9.]/g, '') : '0';

  useEffect(() => {
    // Only load PayPal if it's not already loaded
    if (window.paypal) {
      console.log('PayPal already loaded');
      setPaypalReady(true);
      return;
    }

    console.log('Loading PayPal SDK...');
    const script = document.createElement('script');
    
    // Use PayPal's official test client ID that should work reliably
    script.src = 'https://www.paypal.com/sdk/js?client-id=sb&currency=USD&intent=capture';
    script.async = true;
    
    script.onload = () => {
      console.log('PayPal SDK loaded successfully');
      if (window.paypal?.Buttons) {
        setPaypalReady(true);
        setPaypalError(false);
      } else {
        console.error('PayPal Buttons not available');
        setPaypalError(true);
      }
    };
    
    script.onerror = () => {
      console.error('Failed to load PayPal SDK');
      setPaypalError(true);
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      const scripts = document.querySelectorAll('script[src*="paypal.com"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  useEffect(() => {
    if (paypalReady && paymentMethod === "paypal" && window.paypal?.Buttons) {
      console.log('Initializing PayPal buttons...');
      
      const container = document.getElementById('paypal-button-container');
      if (container) {
        // Clear any existing buttons
        container.innerHTML = '';
        
        try {
          window.paypal.Buttons({
            style: {
              layout: 'vertical',
              color: 'blue',
              shape: 'rect',
              label: 'paypal'
            },
            createOrder: (data: any, actions: any) => {
              console.log('Creating PayPal order...');
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: numericPrice,
                    currency_code: 'USD'
                  },
                  description: reportTitle || 'Commercial Report Purchase'
                }]
              });
            },
            onApprove: (data: any, actions: any) => {
              console.log('PayPal payment approved');
              return actions.order.capture().then(() => {
                toast({
                  title: "Payment Successful!",
                  description: "Your PayPal payment has been processed successfully.",
                });
                navigate("/commercial-report");
              });
            },
            onError: (err: any) => {
              console.error('PayPal error:', err);
              toast({
                title: "Payment Error",
                description: "There was an error processing your PayPal payment.",
                variant: "destructive",
              });
            },
            onCancel: () => {
              console.log('PayPal payment cancelled');
              toast({
                title: "Payment Cancelled",
                description: "PayPal payment was cancelled.",
              });
            }
          }).render('#paypal-button-container');
        } catch (error) {
          console.error('Error rendering PayPal buttons:', error);
          setPaypalError(true);
        }
      }
    }
  }, [paypalReady, paymentMethod, numericPrice, reportTitle, toast, navigate]);

  const handlePayment = async () => {
    if (paymentMethod === "paypal") {
      return; // PayPal handles its own flow
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: `Your purchase of "${reportTitle}" has been processed.`,
      });
      setIsProcessing(false);
      navigate("/commercial-report");
    }, 2000);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!reportTitle || !price) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AeroNavbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Payment Information Missing</h1>
          <Button onClick={() => navigate("/commercial-report")}>
            Return to Reports
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={handleGoBack}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h1>
          </div>

          {/* Order Summary */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sm text-gray-900">{reportTitle}</h4>
                <p className="text-2xl font-bold text-blue-900 mt-2">{price}</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Select Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  {/* Card Payment */}
                  <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="cursor-pointer flex items-center space-x-2">
                          <CreditCard className="h-5 w-5" />
                          <span>Credit/Debit Card</span>
                        </Label>
                      </div>
                    </CardHeader>
                    {paymentMethod === "card" && (
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          <Input placeholder="Card Number" maxLength={19} />
                          <div className="grid grid-cols-2 gap-3">
                            <Input placeholder="MM/YY" maxLength={5} />
                            <Input placeholder="CVV" maxLength={4} />
                          </div>
                          <Input placeholder="Cardholder Name" />
                        </div>
                      </CardContent>
                    )}
                  </Card>

                  {/* PayPal */}
                  <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="cursor-pointer flex items-center space-x-2">
                          <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                          <span>PayPal</span>
                        </Label>
                      </div>
                    </CardHeader>
                    {paymentMethod === "paypal" && (
                      <CardContent className="pt-0">
                        {paypalError ? (
                          <div className="text-red-600 text-sm bg-red-50 p-4 rounded border border-red-200">
                            <p className="font-medium mb-2">PayPal is currently unavailable</p>
                            <p className="mb-3">This could be due to network issues or browser restrictions.</p>
                            <Button 
                              onClick={() => window.location.reload()}
                              size="sm"
                              variant="outline"
                              className="text-red-600 border-red-300 hover:bg-red-50"
                            >
                              Refresh Page
                            </Button>
                          </div>
                        ) : !paypalReady ? (
                          <div className="text-center py-8">
                            <div className="inline-flex items-center space-x-2 text-gray-600">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                              <span>Loading PayPal...</span>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-4">
                            <div id="paypal-button-container" className="min-h-[50px]"></div>
                          </div>
                        )}
                      </CardContent>
                    )}
                  </Card>

                  {/* UPI */}
                  <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="cursor-pointer flex items-center space-x-2">
                          <Smartphone className="h-5 w-5" />
                          <span>UPI Payment</span>
                        </Label>
                      </div>
                    </CardHeader>
                    {paymentMethod === "upi" && (
                      <CardContent className="pt-0">
                        <Input placeholder="Enter UPI ID (e.g., user@paytm)" />
                      </CardContent>
                    )}
                  </Card>
                </RadioGroup>

                {paymentMethod !== "paypal" && (
                  <Button 
                    onClick={handlePayment} 
                    className="w-full bg-blue-900 hover:bg-blue-950 mt-6"
                    disabled={isProcessing}
                    size="lg"
                  >
                    {isProcessing ? "Processing..." : `Pay ${price}`}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
