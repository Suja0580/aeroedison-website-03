import { useState, useEffect, useRef } from "react";
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
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [upiId, setUpiId] = useState("");
  const { toast } = useToast();
  const paypalContainerRef = useRef<HTMLDivElement>(null);
  const paypalInitialized = useRef(false);

  // Extract numeric value from price string
  const numericPrice = price ? price.replace(/[^0-9.]/g, '') : '0';

  // Load PayPal SDK only once
  useEffect(() => {
    if (window.paypal || paypalLoaded) {
      console.log('PayPal already available');
      setPaypalLoaded(true);
      return;
    }

    console.log('Loading PayPal SDK...');
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=sb&currency=USD';
    script.async = true;
    
    script.onload = () => {
      console.log('PayPal SDK loaded');
      setPaypalLoaded(true);
    };
    
    script.onerror = () => {
      console.error('PayPal SDK failed to load');
    };
    
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Initialize PayPal buttons when needed
  useEffect(() => {
    if (!paypalLoaded || 
        !window.paypal || 
        paymentMethod !== "paypal" || 
        !paypalContainerRef.current ||
        paypalInitialized.current) {
      return;
    }

    console.log('Initializing PayPal buttons...');
    paypalInitialized.current = true;

    window.paypal.Buttons({
      createOrder: (data: any, actions: any) => {
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
      }
    }).render(paypalContainerRef.current);
  }, [paypalLoaded, paymentMethod]);

  // Reset PayPal when switching away
  useEffect(() => {
    if (paymentMethod !== "paypal" && paypalInitialized.current) {
      paypalInitialized.current = false;
      if (paypalContainerRef.current) {
        paypalContainerRef.current.innerHTML = '';
      }
    }
  }, [paymentMethod]);

  const generateUPILink = (app: string, upiId?: string) => {
    const merchantUPI = upiId || "merchant@paytm"; // Default merchant UPI ID
    const amount = numericPrice;
    const note = `Payment for ${reportTitle}`;
    
    switch (app) {
      case 'gpay':
        return `tez://upi/pay?pa=${merchantUPI}&pn=Merchant&am=${amount}&tn=${encodeURIComponent(note)}`;
      case 'phonepe':
        return `phonepe://pay?pa=${merchantUPI}&pn=Merchant&am=${amount}&tn=${encodeURIComponent(note)}`;
      case 'amazonpay':
        return `https://pay.amazon.in/upi/pay?pa=${merchantUPI}&pn=Merchant&am=${amount}&tn=${encodeURIComponent(note)}`;
      case 'paytm':
        return `paytmmp://pay?pa=${merchantUPI}&pn=Merchant&am=${amount}&tn=${encodeURIComponent(note)}`;
      default:
        return `upi://pay?pa=${merchantUPI}&pn=Merchant&am=${amount}&tn=${encodeURIComponent(note)}`;
    }
  };

  const handleUPIPayment = (app?: string) => {
    const upiLink = app ? generateUPILink(app, upiId) : generateUPILink('default', upiId);
    
    // Try to open the UPI app
    window.open(upiLink, '_self');
    
    // Simulate payment processing after a delay
    setTimeout(() => {
      toast({
        title: "Payment Initiated",
        description: `Please complete the payment in your ${app ? app.toUpperCase() : 'UPI'} app.`,
      });
      setIsProcessing(true);
      
      // Simulate payment completion
      setTimeout(() => {
        toast({
          title: "Payment Successful!",
          description: `Your UPI payment has been processed successfully.`,
        });
        setIsProcessing(false);
        navigate("/commercial-report");
      }, 3000);
    }, 1000);
  };

  const handlePayment = async () => {
    if (paymentMethod === "paypal") {
      return; // PayPal handles its own flow
    }

    if (paymentMethod === "upi") {
      handleUPIPayment();
      return;
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
                        {!paypalLoaded ? (
                          <div className="text-center py-8">
                            <div className="inline-flex items-center space-x-2 text-gray-600">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                              <span>Loading PayPal...</span>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-4">
                            <div ref={paypalContainerRef} className="min-h-[50px]"></div>
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
                        <div className="space-y-4">
                          <Input 
                            placeholder="Enter UPI ID (optional - for custom payments)" 
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                          />
                          
                          <div className="space-y-3">
                            <p className="text-sm font-medium text-gray-700">Pay with your favorite UPI app:</p>
                            <div className="grid grid-cols-2 gap-3">
                              <Button
                                variant="outline"
                                onClick={() => handleUPIPayment('gpay')}
                                disabled={isProcessing}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-5 h-5 bg-blue-500 rounded"></div>
                                <span>Google Pay</span>
                              </Button>
                              
                              <Button
                                variant="outline"
                                onClick={() => handleUPIPayment('phonepe')}
                                disabled={isProcessing}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-5 h-5 bg-purple-600 rounded"></div>
                                <span>PhonePe</span>
                              </Button>
                              
                              <Button
                                variant="outline"
                                onClick={() => handleUPIPayment('amazonpay')}
                                disabled={isProcessing}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-5 h-5 bg-orange-500 rounded"></div>
                                <span>Amazon Pay</span>
                              </Button>
                              
                              <Button
                                variant="outline"
                                onClick={() => handleUPIPayment('paytm')}
                                disabled={isProcessing}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-5 h-5 bg-blue-700 rounded"></div>
                                <span>Paytm</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </RadioGroup>

                {(paymentMethod !== "paypal" && paymentMethod !== "upi") && (
                  <Button 
                    onClick={handlePayment} 
                    className="w-full bg-blue-900 hover:bg-blue-950 mt-6"
                    disabled={isProcessing}
                    size="lg"
                  >
                    {isProcessing ? "Processing..." : `Pay ${price}`}
                  </Button>
                )}

                {paymentMethod === "upi" && (
                  <Button 
                    onClick={handlePayment} 
                    className="w-full bg-blue-900 hover:bg-blue-950 mt-6"
                    disabled={isProcessing}
                    size="lg"
                  >
                    {isProcessing ? "Processing..." : `Pay ${price} via UPI`}
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
