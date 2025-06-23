
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
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [paypalError, setPaypalError] = useState(false);
  const [paypalLoading, setPaypalLoading] = useState(false);
  const [scriptRetryCount, setScriptRetryCount] = useState(0);
  const { toast } = useToast();

  // Extract numeric value from price string (e.g., "$299" -> "299")
  const numericPrice = price ? price.replace(/[^0-9.]/g, '') : '0';

  const loadPayPalScript = () => {
    console.log('Loading PayPal SDK attempt:', scriptRetryCount + 1);
    
    // Remove any existing PayPal scripts
    const existingScripts = document.querySelectorAll('script[src*="paypal.com/sdk"]');
    existingScripts.forEach(script => script.remove());
    
    // Reset PayPal object
    if (window.paypal) {
      delete window.paypal;
    }

    setPaypalLoading(true);
    setPaypalError(false);
    
    const script = document.createElement('script');
    // Using PayPal's demo client ID for testing
    script.src = 'https://www.paypal.com/sdk/js?client-id=AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R&currency=USD&intent=capture&debug=true';
    script.async = true;
    
    script.onload = () => {
      console.log('PayPal SDK script loaded');
      setPaypalLoading(false);
      
      // Wait a bit for PayPal to initialize
      setTimeout(() => {
        if (window.paypal && window.paypal.Buttons) {
          console.log('PayPal Buttons available');
          setPaypalLoaded(true);
          setPaypalError(false);
          setScriptRetryCount(0);
        } else {
          console.error('PayPal Buttons not available after script load');
          handlePayPalError();
        }
      }, 500);
    };
    
    script.onerror = (error) => {
      console.error('PayPal SDK script failed to load:', error);
      handlePayPalError();
    };
    
    document.head.appendChild(script);
  };

  const handlePayPalError = () => {
    setPaypalLoading(false);
    
    if (scriptRetryCount < 2) {
      console.log('Retrying PayPal script load...');
      setScriptRetryCount(prev => prev + 1);
      setTimeout(() => {
        loadPayPalScript();
      }, 1000);
    } else {
      console.error('PayPal failed to load after retries');
      setPaypalError(true);
      toast({
        title: "PayPal Unavailable",
        description: "PayPal failed to load. Please try refreshing the page or use another payment method.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    loadPayPalScript();
  }, []);

  useEffect(() => {
    if (paypalLoaded && window.paypal && window.paypal.Buttons && paymentMethod === "paypal") {
      console.log('Rendering PayPal buttons...');
      
      const paypalContainer = document.getElementById('paypal-button-container');
      if (paypalContainer) {
        paypalContainer.innerHTML = '';
        
        try {
          window.paypal.Buttons({
            style: {
              layout: 'vertical',
              color: 'blue',
              shape: 'rect',
              label: 'paypal',
              height: 40
            },
            createOrder: (data: any, actions: any) => {
              console.log('Creating PayPal order for:', numericPrice);
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
              console.log('PayPal payment approved:', data.orderID);
              return actions.order.capture().then((details: any) => {
                console.log('Payment captured:', details);
                toast({
                  title: "Payment Successful!",
                  description: `Payment completed successfully. Order ID: ${data.orderID}`,
                });
                navigate("/commercial-report");
              });
            },
            onError: (err: any) => {
              console.error('PayPal payment error:', err);
              toast({
                title: "Payment Error",
                description: "There was an error processing your payment. Please try again.",
                variant: "destructive",
              });
            },
            onCancel: (data: any) => {
              console.log('PayPal payment cancelled');
              toast({
                title: "Payment Cancelled",
                description: "You cancelled the payment process.",
              });
            }
          }).render('#paypal-button-container').then(() => {
            console.log('PayPal buttons rendered successfully');
          }).catch((error: any) => {
            console.error('Error rendering PayPal buttons:', error);
            setPaypalError(true);
          });
        } catch (error) {
          console.error('Error in PayPal button setup:', error);
          setPaypalError(true);
        }
      }
    }
  }, [paypalLoaded, paymentMethod, numericPrice, reportTitle, toast, navigate]);

  const handlePayment = async () => {
    if (paymentMethod === "paypal") {
      return;
    }

    setIsProcessing(true);
    
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

  const retryPayPal = () => {
    setScriptRetryCount(0);
    setPaypalError(false);
    setPaypalLoaded(false);
    loadPayPalScript();
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
                            <p className="mb-3">This could be due to network issues or PayPal service being temporarily down.</p>
                            <Button 
                              onClick={retryPayPal}
                              size="sm"
                              variant="outline"
                              className="text-red-600 border-red-300 hover:bg-red-50"
                            >
                              Try Again
                            </Button>
                          </div>
                        ) : paypalLoading ? (
                          <div className="text-center py-8">
                            <div className="inline-flex items-center space-x-2 text-gray-600">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                              <span>Loading PayPal...</span>
                            </div>
                          </div>
                        ) : paypalLoaded ? (
                          <div className="mt-4">
                            <div id="paypal-button-container" className="min-h-[50px]"></div>
                          </div>
                        ) : (
                          <div className="text-center py-4 text-gray-500">
                            Initializing PayPal...
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
