import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Download } from "lucide-react";
import AeroNavbar from "@/components/AeroNavbar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CommercialReport = () => {
  const [processingPayment, setProcessingPayment] = useState<string | null>(null);
  const { toast } = useToast();

  const handleBuyNow = async (title: string, price: string) => {
    setProcessingPayment(title);
    
    try {
      // Extract numeric value from price string for Stripe
      const priceAmount = parseFloat(price.replace(/[^0-9.]/g, ''));
      
      console.log('Calling create-payment function with:', { reportTitle: title, price, priceAmount });
      
      // Call the payment edge function using Supabase functions invoke
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          reportTitle: title,
          price: price,
          priceAmount: priceAmount,
          customerEmail: null
        },
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to create payment session');
      }

      console.log('Payment function response:', data);

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      } else {
        throw new Error('No checkout URL received');
      }

    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: error instanceof Error ? error.message : "Failed to initiate payment",
        variant: "destructive",
      });
    } finally {
      setProcessingPayment(null);
    }
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
                      <Button 
                        className="w-full bg-blue-900 hover:bg-blue-950"
                        onClick={() => handleBuyNow(report.title, report.price)}
                        disabled={processingPayment === report.title}
                      >
                        {processingPayment === report.title ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Buy Now (Guest Checkout)
                          </>
                        )}
                      </Button>
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
