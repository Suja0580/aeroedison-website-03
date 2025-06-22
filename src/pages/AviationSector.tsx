
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const AviationSector = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/industries" className="inline-flex items-center text-blue-200 hover:text-sky-100 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-sky-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-6 border border-sky-300/20">
                <Plane className="h-8 w-8 text-sky-100" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-sky-100 bg-clip-text text-transparent">Aviation Sector</h1>
            </div>
            <p className="text-xl leading-relaxed text-sky-50">
              The aviation industry is undergoing rapid transformation, driven by technological advancements, changing consumer expectations, and sustainability imperatives. We help aviation businesses navigate these challenges and capitalize on emerging opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gradient-to-b from-slate-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Key Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300 hover:border-l-sky-500 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-blue-800">Next-generation air traffic management systems</h3>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-sky-500 hover:shadow-lg transition-all duration-300 hover:border-l-blue-500 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-blue-800">Sustainable aviation fuels and practices</h3>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-cyan-500 hover:shadow-lg transition-all duration-300 hover:border-l-sky-500 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-blue-800">Passenger experience enhancement through digital technologies</h3>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-indigo-500 hover:shadow-lg transition-all duration-300 hover:border-l-blue-500 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-blue-800">Unmanned aerial systems (UAS) integration</h3>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-all duration-300 hover:border-l-sky-500 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-blue-800">Aviation cybersecurity</h3>
                </CardContent>
              </Card>
            </div>

            {/* We Work With */}
            <Card className="mb-12 border-t-4 border-t-sky-500 bg-gradient-to-br from-blue-50 to-sky-50 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-sky-600 text-white">
                <CardTitle className="text-white">We work with:</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center text-blue-800"><span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>Airlines</li>
                    <li className="flex items-center text-blue-800"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Airports</li>
                    <li className="flex items-center text-blue-800"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>Air navigation service providers</li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center text-blue-800"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Aircraft manufacturers</li>
                    <li className="flex items-center text-blue-800"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Aviation regulators</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Core Offerings */}
            <Card className="mb-12 border-t-4 border-t-blue-600 bg-gradient-to-br from-sky-50 to-blue-50 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-sky-600 to-blue-600 text-white">
                <CardTitle className="text-white">Core Offerings</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                    <h3 className="text-xl font-semibold mb-4 text-blue-900">Strategy Consulting</h3>
                  </div>
                  <div className="p-4 bg-sky-50 rounded-lg border-l-4 border-l-sky-500">
                    <h3 className="text-xl font-semibold mb-4 text-blue-900">Market Research and Intelligence</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Products */}
            <Card className="mb-12 border-t-4 border-t-cyan-500 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                <CardTitle className="text-white">Work Products</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-blue-700 mb-6 font-medium">
                  Work products and ICPs with Strategy and Market Research and Intelligence as core offerings for AeroEdison Consulting (AE).
                </p>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                    <h4 className="font-semibold mb-3 text-blue-900">Work Products in Demand:</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center"><span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>Aviation Market Trend Analysis Reports</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Competitive Landscape Assessments</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>Strategic Growth Plans for Airlines and Airports</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Sustainable Aviation Technology Adoption Strategies</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Regulatory Impact Analyses</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-sky-600 rounded-full mr-3"></span>Future of Air Mobility Studies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-6 rounded-lg border border-sky-200 shadow-sm">
                    <h4 className="font-semibold mb-3 text-blue-900">Ideal Customer Profiles (ICPs):</h4>
                    
                    <div className="bg-white/80 p-4 rounded-lg border border-blue-200 shadow-sm">
                      <p className="font-semibold mb-2 text-blue-900">Organization: Global Airline Alliance</p>
                      <p className="text-sm text-blue-700 mb-2">Size: Representing 15+ major airlines</p>
                      <p className="text-sm text-blue-700 mb-4">Location: Worldwide operations, headquarters in a major global city</p>
                      
                      <h5 className="font-semibold mb-2 text-blue-800">Challenges:</h5>
                      <ul className="text-sm text-blue-700 space-y-1 mb-4">
                        <li className="flex items-start"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>Navigating post-pandemic recovery strategies</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>Adapting to changing consumer behaviors and expectations</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>Integrating sustainable practices across member airlines</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>Harmonizing digital transformation efforts among alliance members</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2 text-blue-800">Goals:</h5>
                      <ul className="text-sm text-blue-700 space-y-1 mb-4">
                        <li className="flex items-start"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>Develop alliance-wide strategic plans</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>Identify new market opportunities</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>Enhance competitive positioning against other alliances and emerging players</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>Guide sustainable technology adoption across member airlines</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2 text-blue-800">Decision Makers:</h5>
                      <ul className="text-sm text-blue-700 space-y-1 mb-4">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Alliance CEO</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Head of Strategy and Business Development</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Chief Sustainability Officer</li>
                      </ul>
                      
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded border border-green-200">
                        <p className="text-sm font-semibold text-green-800">Budget: $2-5 million for strategic consulting and market intelligence annually</p>
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
      <section className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Aviation Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-sky-100">
            Let's discuss how our aviation expertise can help you navigate industry challenges and capitalize on emerging opportunities.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-sky-50 hover:text-blue-800 transition-all duration-300 shadow-lg">
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
              <h4 className="font-semibold text-sky-400 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Aviation Consulting</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Energy Solutions</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Digital Transformation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sky-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="/about" className="hover:text-sky-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sky-400 mb-4">Contact</h4>
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
