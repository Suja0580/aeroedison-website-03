
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const AviationSector = () => {
  return (
    <div className="min-h-screen bg-white">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/industries" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white">Aviation Sector</h1>
            </div>
            <p className="text-xl leading-relaxed text-blue-100 max-w-3xl">
              The aviation industry is undergoing rapid transformation, driven by technological advancements, changing consumer expectations, and sustainability imperatives. We help aviation businesses navigate these challenges and capitalize on emerging opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Key Focus Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800">Next-generation air traffic management systems</h3>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800">Sustainable aviation fuels and practices</h3>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800">Passenger experience enhancement through digital technologies</h3>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800">Unmanned aerial systems (UAS) integration</h3>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800">Aviation cybersecurity</h3>
                </CardContent>
              </Card>
            </div>

            {/* We Work With */}
            <Card className="mb-12 shadow-lg bg-white">
              <CardHeader className="bg-gray-500 text-white">
                <CardTitle>We work with:</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Airlines
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Airports
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Air navigation service providers
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Aircraft manufacturers
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Aviation regulators
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Core Offerings */}
            <Card className="mb-12 shadow-lg bg-white">
              <CardHeader className="bg-gray-500 text-white">
                <CardTitle>Core Offerings</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-l-blue-600">
                    <h3 className="text-xl font-semibold text-gray-900">Strategy Consulting</h3>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-l-blue-600">
                    <h3 className="text-xl font-semibold text-gray-900">Market Research and Intelligence</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Products */}
            <Card className="mb-12 shadow-lg bg-white">
              <CardHeader className="bg-gray-500 text-white">
                <CardTitle>Work Products</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6 font-bold">
                  Work products and ICPs with Strategy and Market Research and Intelligence as core offerings for AeroEdison Consulting (AE).
                </p>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-4 text-gray-900">Work Products in Demand:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Aviation Market Trend Analysis Reports
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Competitive Landscape Assessments
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Strategic Growth Plans for Airlines and Airports
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Sustainable Aviation Technology Adoption Strategies
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Regulatory Impact Analyses
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Future of Air Mobility Studies
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-bold mb-4 text-gray-900">Ideal Customer Profiles (ICPs):</h4>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="font-bold mb-2 text-gray-900">Organization: Global Airline Alliance</p>
                      <p className="text-sm text-gray-600 mb-2">Size: Representing 15+ major airlines</p>
                      <p className="text-sm text-gray-600 mb-6">Location: Worldwide operations, headquarters in a major global city</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold mb-3 text-gray-800">Challenges:</h5>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>– Navigating post-pandemic recovery strategies</li>
                            <li>– Adapting to changing consumer behaviors and expectations</li>
                            <li>– Integrating sustainable practices across member airlines</li>
                            <li>– Harmonizing digital transformation efforts among alliance members</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-bold mb-3 text-gray-800">Goals:</h5>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>– Develop alliance-wide strategic plans</li>
                            <li>– Identify new market opportunities</li>
                            <li>– Enhance competitive positioning against other alliances and emerging players</li>
                            <li>– Guide sustainable technology adoption across member airlines</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h5 className="font-bold mb-3 text-gray-800">Decision Makers:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>– Alliance CEO</li>
                          <li>– Head of Strategy and Business Development</li>
                          <li>– Chief Sustainability Officer</li>
                        </ul>
                      </div>
                      
                      <div className="mt-6 bg-blue-50 p-4 rounded border border-blue-200">
                        <p className="text-sm font-bold text-blue-800">Budget: $2-5 million for strategic consulting and market intelligence annually</p>
                      </div>
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
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Let's discuss how our aviation expertise can help you navigate industry challenges and capitalize on emerging opportunities.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
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
              <p className="text-slate-300 text-sm">
                Navigating the future of Aviation, Energy, and Digital Transformation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-400 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Aviation Consulting</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Energy Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Transformation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-400 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>info@aeroedison.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-sm text-slate-400">
              © 2024 AeroEdison Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AviationSector;
