import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Download } from "lucide-react";
import AeroNavbar from "@/components/AeroNavbar";
import { useToast } from "@/hooks/use-toast";

// Declare global types for payment gateways
declare global {
  interface Window {
    paypal?: any;
    Razorpay?: any;
  }
}

const CommercialReport = () => {
  const [processingPayment, setProcessingPayment] = useState<string | null>(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const { toast } = useToast();

  // Load PayPal SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R&currency=USD';
    script.async = true;
    script.onload = () => setPaypalLoaded(true);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="paypal.com/sdk"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Load Razorpay SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handlePayPalPayment = (title: string, price: string) => {
    setProcessingPayment(title);
    const priceAmount = parseFloat(price.replace(/[^0-9.]/g, ''));

    if (!window.paypal || !paypalLoaded) {
      toast({
        title: "PayPal Error",
        description: "PayPal SDK not loaded. Please try again.",
        variant: "destructive",
      });
      setProcessingPayment(null);
      return;
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
          setProcessingPayment(null);
        });
      },
      onError: function(err: any) {
        console.error('PayPal error:', err);
        toast({
          title: "Payment Error",
          description: "PayPal payment failed. Please try again.",
          variant: "destructive",
        });
        setProcessingPayment(null);
      },
      onCancel: function(data: any) {
        toast({
          title: "Payment Cancelled",
          description: "Your payment was cancelled.",
        });
        setProcessingPayment(null);
      }
    };

    // Create PayPal buttons and render directly
    window.paypal.Buttons(paypalButtonsConfig).render(`#paypal-button-container-${title.replace(/[^a-zA-Z0-9]/g, '')}`).catch((err: any) => {
      console.error('PayPal render error:', err);
      toast({
        title: "PayPal Error",
        description: "Failed to initialize PayPal. Please try again.",
        variant: "destructive",
      });
      setProcessingPayment(null);
    });
  };

  const handleRazorpayPayment = (title: string, price: string) => {
    setProcessingPayment(title);
    const priceAmount = parseFloat(price.replace(/[^0-9.]/g, '')) * 100; // Convert to paise

    if (!window.Razorpay) {
      toast({
        title: "Razorpay Error",
        description: "Razorpay SDK not loaded. Please try again.",
        variant: "destructive",
      });
      setProcessingPayment(null);
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
        setProcessingPayment(null);
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
          setProcessingPayment(null);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const reports = [
    {
      title: "India's MRO Growth Opportunity – 2025 Outlook",
      description: "Comprehensive analysis of India's Maintenance, Repair, and Overhaul market opportunities for 2025.",
      price: "$0.50"
    },
    {
      title: "eVTOL Regulatory & Market Landscape",
      description: "In-depth analysis of electric Vertical Take-Off and Landing aircraft regulations and market dynamics.",
      price: "$0.50"
    },
    {
      title: "Hydrogen Strategy India: Policy, Players, and Investments",
      description: "Strategic overview of India's hydrogen economy including policy framework, key players, and investment landscape.",
      price: "$0.50"
    },
    {
      title: "Digital Aviation Readiness – Benchmarking Top OEMs",
      description: "Benchmarking study of digital transformation readiness across leading Original Equipment Manufacturers.",
      price: "$0.50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Commercial Reports</h1>
            <p className="text-xl leading-relaxed">
              Access Deep Market Insights. Download Commercial Reports.
            </p>
            <p className="text-sm mt-4 bg-blue-800 bg-opacity-50 px-4 py-2 rounded-lg inline-block">
              🎯 Guest checkout enabled for easy testing - no login required!
            </p>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {reports.map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{report.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {report.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-blue-900">{report.price}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Preview Link
                      </Button>
                      
                      {/* PayPal Payment Button */}
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => handlePayPalPayment(report.title, report.price)}
                        disabled={processingPayment === report.title || !paypalLoaded}
                      >
                        {processingPayment === report.title ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Pay with PayPal {report.price}
                          </>
                        )}
                      </Button>

                      {/* Razorpay Payment Button */}
                      <Button 
                        className="w-full bg-blue-800 hover:bg-blue-900"
                        onClick={() => handleRazorpayPayment(report.title, report.price)}
                        disabled={processingPayment === report.title || !razorpayLoaded}
                      >
                        {processingPayment === report.title ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Pay with Razorpay {report.price}
                          </>
                        )}
                      </Button>

                      {/* PayPal Button Container */}
                      <div id={`paypal-button-container-${report.title.replace(/[^a-zA-Z0-9]/g, '')}`} style={{ minHeight: '0px' }}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Research?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get tailored market insights and strategic analysis specific to your business needs.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Contact Our Research Team
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/9db9cc1e-f920-4f2b-9645-75af25c39acf.png" 
                  alt="AeroEdison Logo" 
                  className="h-8 mr-3"
                />
              </div>
              <p className="text-gray-600 text-sm">
                Navigating the future of Aviation, Energy, and Digital Transformation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Aviation Consulting</a></li>
                <li><a href="#" className="hover:text-blue-600">Energy Solutions</a></li>
                <li><a href="#" className="hover:text-blue-600">Digital Transformation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Our Team</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>info@aeroedison.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © 2024 AeroEdison Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommercialReport;
