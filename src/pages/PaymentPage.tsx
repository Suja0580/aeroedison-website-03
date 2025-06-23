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
  const [paypalReady, setPaypalReady] = useState(false);
  const [paypalError, setPaypalError] = useState(false);
  const [paypalLoading, setPaypalLoading] = useState(false);
  const [upiId, setUpiId] = useState("");
  const { toast } = useToast();
  const paypalContainerRef = useRef<HTMLDivElement>(null);
  const initializationAttempts = useRef(0);

  // Extract numeric value from price string
  const numericPrice = price ? price.replace(/[^0-9.]/g, '') : '0';

  // Load PayPal SDK with improved error handling and retry logic
  useEffect(() => {
    const loadPayPalSDK = () => {
      setPaypalReady(false);
      setPaypalError(false);
      setPaypalLoading(true);
      initializationAttempts.current = 0;

      // Check if PayPal is already loaded and functional
      if (window.paypal && typeof window.paypal.Buttons === 'function') {
        console.log('PayPal SDK already loaded and ready');
        setPaypalReady(true);
        setPaypalLoading(false);
        return;
      }

      // Remove existing script to ensure clean reload
      const existingScript = document.querySelector('script[src*="paypal.com/sdk"]');
      if (existingScript) {
        existingScript.remove();
        // Wait a bit for cleanup
        setTimeout(() => continueLoading(), 100);
      } else {
        continueLoading();
      }

      function continueLoading() {
        console.log('Loading PayPal SDK...');
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R&currency=USD&disable-funding=credit,card';
        script.async = true;
        
        script.onload = () => {
          console.log('PayPal SDK script loaded successfully');
          checkPayPalReady();
        };
        
        script.onerror = (error) => {
          console.error('Failed to load PayPal SDK:', error);
          setPaypalError(true);
          setPaypalLoading(false);
        };
        
        document.head.appendChild(script);
      }

      // Improved initialization check with exponential backoff
      const checkPayPalReady = () => {
        const maxAttempts = 100; // Increased from 30 to 100
        const baseDelay = 100;
        
        const attemptInitialization = (attemptNumber = 0) => {
          if (attemptNumber >= maxAttempts) {
            console.error('PayPal SDK initialization timeout after', maxAttempts, 'attempts');
            setPaypalError(true);
            setPaypalLoading(false);
            return;
          }

          console.log(`PayPal initialization attempt ${attemptNumber + 1}/${maxAttempts}`);
          
          if (window.paypal && typeof window.paypal.Buttons === 'function') {
            // Additional check to ensure PayPal is truly ready
            try {
              // Test if we can create a button config (without rendering)
              const testConfig = {
                createOrder: () => Promise.resolve('test'),
                onApprove: () => Promise.resolve(),
              };
              
              if (typeof window.paypal.Buttons === 'function') {
                console.log('PayPal Buttons function is available and functional');
                setPaypalReady(true);
                setPaypalLoading(false);
                initializationAttempts.current = attemptNumber + 1;
                return;
              }
            } catch (error) {
              console.log('PayPal not fully ready yet, retrying...', error);
            }
          }

          // Exponential backoff with jitter
          const delay = Math.min(baseDelay * Math.pow(1.2, attemptNumber), 2000);
          const jitter = Math.random() * 100;
          setTimeout(() => attemptInitialization(attemptNumber + 1), delay + jitter);
        };

        attemptInitialization();
      };
    };

    loadPayPalSDK();
  }, []);

  // Render PayPal buttons when ready with improved error handling
  useEffect(() => {
    if (!paypalReady || paymentMethod !== "paypal" || !paypalContainerRef.current || paypalError) {
      return;
    }

    // Clear previous buttons
    paypalContainerRef.current.innerHTML = '';

    console.log('Rendering PayPal buttons with amount:', numericPrice);
    
    try {
      const paypalButtonsComponent = window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
          height: 40
        },
        createOrder: function(data: any, actions: any) {
          console.log('Creating PayPal order for amount:', numericPrice);
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
        onApprove: function(data: any, actions: any) {
          console.log('PayPal payment approved');
          return actions.order.capture().then(function(details: any) {
            console.log('Payment captured:', details);
            toast({
              title: "Payment Successful!",
              description: "Your PayPal payment has been processed successfully.",
            });
            navigate("/commercial-report");
          });
        },
        onError: function(err: any) {
          console.error('PayPal error:', err);
          setPaypalError(true);
          toast({
            title: "Payment Error",
            description: "PayPal payment failed. Please try another payment method.",
            variant: "destructive",
          });
        },
        onCancel: function(data: any) {
          console.log('Payment cancelled');
          toast({
            title: "Payment Cancelled",
            description: "Your payment was cancelled.",
          });
        }
      });

      paypalButtonsComponent.render(paypalContainerRef.current).catch((error: any) => {
        console.error('Error rendering PayPal buttons:', error);
        setPaypalError(true);
      });
    } catch (error) {
      console.error('Error creating PayPal buttons:', error);
      setPaypalError(true);
    }
  }, [paypalReady, paymentMethod, numericPrice, reportTitle, toast, navigate]);

  // Retry PayPal loading function
  const retryPayPal = () => {
    console.log('Retrying PayPal initialization...');
    setPaypalError(false);
    setPaypalReady(false);
    
    // Force reload by removing and re-adding the script
    const existingScript = document.querySelector('script[src*="paypal.com/sdk"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Trigger re-initialization
    setTimeout(() => {
      const event = new Event('paypal-retry');
      window.dispatchEvent(event);
    }, 500);
  };

  // Listen for retry events
  useEffect(() => {
    const handleRetry = () => {
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R&currency=USD&disable-funding=credit,card';
      script.async = true;
      
      script.onload = () => {
        setPaypalLoading(true);
        setTimeout(() => {
          if (window.paypal && typeof window.paypal.Buttons === 'function') {
            setPaypalReady(true);
            setPaypalLoading(false);
          }
        }, 1000);
      };
      
      document.head.appendChild(script);
    };

    window.addEventListener('paypal-retry', handleRetry);
    return () => window.removeEventListener('paypal-retry', handleRetry);
  }, []);

  const generateUPILink = (app: string, upiId?: string) => {
    const merchantUPI = upiId || "merchant@paytm";
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
    
    window.open(upiLink, '_self');
    
    setTimeout(() => {
      toast({
        title: "Payment Initiated",
        description: `Please complete the payment in your ${app ? app.toUpperCase() : 'UPI'} app.`,
      });
      setIsProcessing(true);
      
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
    if (paymentMethod === "paypal" || paymentMethod === "upi") {
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

                  {/* PayPal - Improved UI with retry functionality */}
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
                          <div className="text-center py-8">
                            <div className="text-red-600 mb-4">
                              <p className="font-medium">PayPal initialization failed</p>
                              <p className="text-sm mb-4">Please try reloading PayPal or use another payment method</p>
                              <Button 
                                onClick={retryPayPal}
                                variant="outline"
                                size="sm"
                                className="mr-2"
                              >
                                Retry PayPal
                              </Button>
                            </div>
                          </div>
                        ) : paypalLoading || !paypalReady ? (
                          <div className="text-center py-8">
                            <div className="inline-flex items-center space-x-2 text-gray-600">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                              <span>
                                {paypalLoading ? 'Initializing PayPal...' : 'Loading PayPal...'}
                                {initializationAttempts.current > 0 && (
                                  <span className="text-xs ml-1">
                                    (attempt {initializationAttempts.current})
                                  </span>
                                )}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-4">
                            <div ref={paypalContainerRef} className="min-h-[100px] w-full"></div>
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
