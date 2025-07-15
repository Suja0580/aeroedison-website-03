import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, ArrowLeft, Navigation, Leaf, Smartphone, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const AviationSector = () => {
  return (
    <div className="min-h-screen bg-white">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/9445ca23-d27e-4b36-aa64-b5e8788061b9.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/industries" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-blue-600/80 rounded-full flex items-center justify-center mr-6">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white">Aviation Sector</h1>
            </div>
            <p className="text-xl leading-relaxed text-gray-200 max-w-3xl">
              The aviation industry is undergoing rapid transformation, driven by technological advancements, changing consumer expectations, and sustainability imperatives. We help aviation businesses navigate these challenges and capitalize on emerging opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">Key Focus Areas</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Transforming aviation through innovative solutions and strategic expertise
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Navigation className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Next-generation air traffic management systems</h3>
                      <p className="text-sm text-gray-600">Advanced navigation and control systems for safer, more efficient airspace management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Sustainable aviation fuels and practices</h3>
                      <p className="text-sm text-gray-600">Eco-friendly solutions driving the future of carbon-neutral aviation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Passenger experience enhancement through digital technologies</h3>
                      <p className="text-sm text-gray-600">Seamless digital journeys from booking to destination</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-orange-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-red-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Unmanned aerial systems (UAS) integration</h3>
                      <p className="text-sm text-gray-600">Seamlessly integrating drones into existing aviation infrastructure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-red-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-pink-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Aviation cybersecurity</h3>
                      <p className="text-sm text-gray-600">Protecting critical aviation systems from emerging digital threats</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* We Work With */}
            <div className="mb-16 p-8 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                We work with:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                        <Plane className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">Airlines</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                        <Navigation className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">Airports</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">Air navigation service providers</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-orange-50/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-red-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">Aircraft manufacturers</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-red-50/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-pink-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">Aviation regulators</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Core Offerings */}
            <div className="mb-16 p-8 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Core Offerings
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start space-x-4 p-6 bg-white/70 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Navigation className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Strategy Consulting</h4>
                    <p className="text-gray-600">Strategic guidance for aviation industry leaders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white/70 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Market Research and Intelligence</h4>
                    <p className="text-gray-600">Data-driven insights for informed decision making</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-blue-100 pt-8">
                <h4 className="font-bold mb-6 text-gray-900 text-lg">Work Products in Demand:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Aviation Market Trend Analysis Reports</span>
                    </div>
                    <div className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Competitive Landscape Assessments</span>
                    </div>
                    <div className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Strategic Growth Plans for Airlines and Airports</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Sustainable Aviation Technology Adoption Strategies</span>
                    </div>
                    <div className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Regulatory Impact Analyses</span>
                    </div>
                    <div className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Future of Air Mobility Studies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Products */}
            <div className="mb-16 p-8 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Work Products
              </h3>
              
              <p className="text-gray-700 mb-6 font-medium">
                Work products and ICPs with Strategy and Market Research and Intelligence as core offerings for AeroEdison Consulting (AE).
              </p>
              
              <div className="bg-white/70 p-8 rounded-lg">
                <h4 className="font-bold mb-6 text-gray-900 text-xl">Ideal Customer Profiles (ICPs):</h4>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                  <p className="font-bold mb-2 text-gray-900 text-lg">Organization: Global Airline Alliance</p>
                  <p className="text-lg text-gray-600 mb-2">Size: Representing 15+ major airlines</p>
                  <p className="text-lg text-gray-600 mb-6">Location: Worldwide operations, headquarters in a major global city</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold mb-3 text-gray-800 text-lg">Challenges:</h5>
                      <ul className="text-lg text-gray-700 space-y-2">
                        <li>– Navigating post-pandemic recovery strategies</li>
                        <li>– Adapting to changing consumer behaviors and expectations</li>
                        <li>– Integrating sustainable practices across member airlines</li>
                        <li>– Harmonizing digital transformation efforts among alliance members</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-bold mb-3 text-gray-800 text-lg">Goals:</h5>
                      <ul className="text-lg text-gray-700 space-y-2">
                        <li>– Develop alliance-wide strategic plans</li>
                        <li>– Identify new market opportunities</li>
                        <li>– Enhance competitive positioning against other alliances and emerging players</li>
                        <li>– Guide sustainable technology adoption across member airlines</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-bold mb-3 text-gray-800 text-lg">Decision Makers:</h5>
                    <ul className="text-lg text-gray-700 space-y-1">
                      <li>– Alliance CEO</li>
                      <li>– Head of Strategy and Business Development</li>
                      <li>– Chief Sustainability Officer</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 bg-blue-100 p-4 rounded border border-blue-200">
                    <p className="text-lg font-bold text-blue-800">Budget: $2-5 million for strategic consulting and market intelligence annually</p>
                  </div>
                </div>
              </div>
            </div>
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
                <li><Link to="/aviation-sector" className="hover:text-blue-400 transition-colors">Aviation Consulting</Link></li>
                <li><Link to="/energy-sector" className="hover:text-blue-400 transition-colors">Energy Solutions</Link></li>
                <li><Link to="/digital-transformation" className="hover:text-blue-400 transition-colors">Digital Transformation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/commercial-report" className="hover:text-blue-400 transition-colors">Commercial Reports</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-400 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>info@aeroedison.com</li>
                <li>+919620622877</li>
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
