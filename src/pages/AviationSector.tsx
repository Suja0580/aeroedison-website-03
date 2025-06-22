import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const AviationSector = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/industries" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Aviation Sector</h1>
            </div>
            <p className="text-xl leading-relaxed">
              The aviation industry is undergoing rapid transformation, driven by technological advancements, changing consumer expectations, and sustainability imperatives. We help aviation businesses navigate these challenges and capitalize on emerging opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Next-generation air traffic management systems</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Sustainable aviation fuels and practices</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Passenger experience enhancement through digital technologies</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Unmanned aerial systems (UAS) integration</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Aviation cybersecurity</h3>
                </CardContent>
              </Card>
            </div>

            {/* We Work With */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>We work with:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>• Airlines</li>
                    <li>• Airports</li>
                    <li>• Air navigation service providers</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Aircraft manufacturers</li>
                    <li>• Aviation regulators</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Core Offerings */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Core Offerings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Strategy Consulting</h3>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Market Research and Intelligence</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Products */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Work Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Work products and ICPs with Strategy and Market Research and Intelligence as core offerings for AeroEdison Consulting (AE).
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Work Products in Demand:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Aviation Market Trend Analysis Reports</li>
                      <li>• Competitive Landscape Assessments</li>
                      <li>• Strategic Growth Plans for Airlines and Airports</li>
                      <li>• Sustainable Aviation Technology Adoption Strategies</li>
                      <li>• Regulatory Impact Analyses</li>
                      <li>• Future of Air Mobility Studies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Ideal Customer Profiles (ICPs):</h4>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="font-semibold mb-2">Organization: Global Airline Alliance</p>
                      <p className="text-sm text-gray-600 mb-2">Size: Representing 15+ major airlines</p>
                      <p className="text-sm text-gray-600 mb-4">Location: Worldwide operations, headquarters in a major global city</p>
                      
                      <h5 className="font-semibold mb-2">Challenges:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>– Navigating post-pandemic recovery strategies</li>
                        <li>– Adapting to changing consumer behaviors and expectations</li>
                        <li>– Integrating sustainable practices across member airlines</li>
                        <li>– Harmonizing digital transformation efforts among alliance members</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2">Goals:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>– Develop alliance-wide strategic plans</li>
                        <li>– Identify new market opportunities</li>
                        <li>– Enhance competitive positioning against other alliances and emerging players</li>
                        <li>– Guide sustainable technology adoption across member airlines</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2">Decision Makers:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>– Alliance CEO</li>
                        <li>– Head of Strategy and Business Development</li>
                        <li>– Chief Sustainability Officer</li>
                      </ul>
                      
                      <p className="text-sm font-semibold">Budget: $2-5 million for strategic consulting and market intelligence annually</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Aviation Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our aviation expertise can help you navigate industry challenges and capitalize on emerging opportunities.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule a Consultation
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

export default AviationSector;
