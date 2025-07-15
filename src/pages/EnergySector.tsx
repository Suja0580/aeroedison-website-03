import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowLeft, Battery, Grid3x3, Leaf, Thermometer, Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const EnergySector = () => {
  return (
    <div className="min-h-screen bg-white">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/74a29bb6-522a-40c1-b736-b9b5f0874e3c.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/industries" className="inline-flex items-center text-yellow-200 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-yellow-600/80 rounded-full flex items-center justify-center mr-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white">Energy Sector</h1>
            </div>
            <p className="text-xl leading-relaxed text-gray-200 max-w-3xl">
              The energy landscape is evolving at an unprecedented pace, with the transition to sustainable energy sources reshaping the industry. We guide energy companies through this transition, helping them build resilient, efficient, and sustainable operations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-yellow-600">Key Focus Areas</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Powering the future through innovative energy solutions and strategic expertise
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-yellow-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-orange-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Renewable energy integration</h3>
                      <p className="text-sm text-gray-600">Seamlessly integrating solar, wind, and other renewables into the grid</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Grid3x3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Smart grid technologies</h3>
                      <p className="text-sm text-gray-600">Advanced grid infrastructure for intelligent energy distribution</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Battery className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Energy storage solutions</h3>
                      <p className="text-sm text-gray-600">Next-generation battery and storage technologies for grid stability</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Thermometer className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Demand response and energy efficiency</h3>
                      <p className="text-sm text-gray-600">Optimizing energy consumption through intelligent demand management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-teal-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-cyan-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Recycle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Decarbonization strategies</h3>
                      <p className="text-sm text-gray-600">Comprehensive pathways to achieve carbon neutrality</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* We Work With */}
            <div className="mb-16 p-8 bg-yellow-50 rounded-xl border border-yellow-100">
              <h3 className="text-2xl font-bold mb-6 text-yellow-600">
                We work with:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Utility companies</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Renewable energy developers</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Oil and gas companies transitioning to clean energy</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Energy technology startups</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Government energy departments</span>
                    </div>
                  </div>
              </div>
            </div>

            {/* Core Offerings */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-yellow-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-orange-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-yellow-600">Strategy Consulting</h3>
                      <p className="text-sm text-gray-600 text-lg">Strategic guidance for energy industry leaders</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Grid3x3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-yellow-600">Market Research and Intelligence</h3>
                      <p className="text-sm text-gray-600 text-lg">Data-driven insights for informed decision making</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
              
            <div className="mb-16 p-8 bg-yellow-50 rounded-xl border border-yellow-100">
              <div className="border-t border-yellow-100 pt-8">
                <h4 className="font-bold mb-6 text-gray-900 text-lg text-yellow-600">Work Products in Demand:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Energy Market Trend Analysis Reports</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Competitive Landscape Assessments</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Strategic Growth Plans for Energy Companies</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Renewable Energy Technology Adoption Strategies</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Regulatory Impact Analyses</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Future of Energy Transition Studies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Products */}
            <div className="mb-16 p-8 bg-yellow-50 rounded-xl border border-yellow-100">
              <h3 className="text-2xl font-bold mb-6 text-yellow-600">
                Work Products
              </h3>
              
              <p className="text-gray-700 mb-6 font-medium text-lg">
                Work products and ICPs with Strategy and Market Research and Intelligence as core offerings for AeroEdison Consulting (AE).
              </p>
              
              <div className="bg-white/70 p-8 rounded-lg">
                <h4 className="font-bold mb-6 text-gray-900 text-xl">Ideal Customer Profiles (ICPs):</h4>
                
                <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-lg border border-yellow-100">
                  <p className="font-bold mb-2 text-gray-900 text-lg">Organization: Multinational Energy Corporation</p>
                  <p className="text-lg text-gray-600 mb-2">Size: Fortune 500 company</p>
                  <p className="text-lg text-gray-600 mb-6">Location: Global operations with significant presence in both developed and emerging markets</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold mb-3 text-gray-800 text-lg">Challenges:</h5>
                      <div className="space-y-2">
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Balancing traditional energy assets with renewable energy investments</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Navigating complex and evolving regulatory landscapes across markets</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Identifying new business opportunities in the energy transition</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Assessing the impact of emerging technologies on existing business models</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold mb-3 text-gray-800 text-lg">Goals:</h5>
                      <div className="space-y-2">
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Develop long-term energy transition strategy</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Identify strategic investment opportunities in clean tech</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Understand regulatory trends and their impact on operations</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Assess competitive threats from new market entrants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-bold mb-3 text-gray-800 text-lg">Decision Makers:</h5>
                    <div className="space-y-1">
                      <div className="text-lg text-gray-700 flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Chief Strategy Officer</span>
                      </div>
                      <div className="text-lg text-gray-700 flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>Head of Business Development</span>
                      </div>
                      <div className="text-lg text-gray-700 flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>VP of Sustainability and Energy Transition</span>
                      </div>
                    </div>
                    
                    <p className="text-lg font-bold text-gray-900 mt-4">Budget: $5-10 million for strategy consulting and market intelligence services annually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Power Your Energy Transformation</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Partner with us to navigate the energy transition and build a sustainable, profitable future for your organization.
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Explore Energy Solutions
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/9db9cc1e-f920-4f2b-9645-75af25c39acf.png" 
                  alt="AeroEdison Logo" 
                  className="h-10 mr-3"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Navigating the future of Aviation, Energy, and Digital Transformation.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="/aviation-sector" className="hover:text-yellow-600 transition-colors">Aviation Consulting</Link></li>
                <li><Link to="/energy-sector" className="hover:text-yellow-600 transition-colors">Energy Solutions</Link></li>
                <li><Link to="/digital-transformation" className="hover:text-yellow-600 transition-colors">Digital Transformation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="/about" className="hover:text-yellow-600 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-600 transition-colors">Contact Us</Link></li>
                <li><Link to="/commercial-report" className="hover:text-yellow-600 transition-colors">Commercial Reports</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-600">
                <li>info@aeroedison.com</li>
                <li>+919620622877</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 AeroEdison Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnergySector;
