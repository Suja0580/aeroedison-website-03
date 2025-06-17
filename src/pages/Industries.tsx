
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Plane, Zap, Monitor, ChevronDown, ArrowRight, CheckCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="bg-blue-600 w-8 h-8 rounded flex items-center justify-center text-white mr-3">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">AeroEdison</h1>
                  <p className="text-xs text-gray-600">Consulting</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                  Industries <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link to="/aviation-sector" className="flex items-center px-4 py-2 hover:bg-gray-50">
                      <Plane className="mr-2 h-4 w-4" />
                      Aviation Sector
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/energy-sector" className="flex items-center px-4 py-2 hover:bg-gray-50">
                      <Zap className="mr-2 h-4 w-4" />
                      Energy Sector
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/digital-transformation" className="flex items-center px-4 py-2 hover:bg-gray-50">
                      <Monitor className="mr-2 h-4 w-4" />
                      Cross-Industry Digital Transformation
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
            Industries <span className="font-semibold text-blue-600">We Serve</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At AeroEdison, we specialize in delivering strategic, data-driven, and future-ready consulting services 
            across industries where innovation, complexity, and scale are non-negotiable. Our sector expertise ensures 
            that each solution is grounded in industry insight — not just theory.
          </p>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Aviation Sector */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Plane className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✈️</span>
                  <CardTitle className="text-2xl font-semibold text-gray-900">Aviation Sector</CardTitle>
                </div>
                <CardDescription className="text-lg font-medium text-blue-600 mb-4">
                  Transforming turbulence into opportunity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The aviation industry is navigating rapid changes — from post-pandemic recovery and fluctuating fuel prices 
                  to digital passenger expectations and sustainability mandates. We partner with airlines, airports, and aviation 
                  services to streamline operations and drive innovation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Streamline operational efficiency through data-led decision frameworks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Design digital passenger journeys and loyalty ecosystems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Implement predictive maintenance and fleet optimization tools</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Drive ESG strategy and carbon footprint reductions</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-blue-800 font-medium">
                    <strong>Case Insight:</strong> Helped a regional airline reduce ground time by 17% using turnaround optimization analytics.
                  </p>
                </div>
                <Link to="/aviation-sector">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Explore Aviation Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Energy Sector */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">⚡</span>
                  <CardTitle className="text-2xl font-semibold text-gray-900">Energy Sector</CardTitle>
                </div>
                <CardDescription className="text-lg font-medium text-green-600 mb-4">
                  Empowering the energy evolution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With global shifts toward renewables, grid decentralization, and climate-focused regulation, energy players 
                  must rethink their core business models. We work with utilities, oil & gas, and renewable operators to 
                  navigate the energy transition.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Navigate the energy transition through portfolio strategy and M&A</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Leverage AI for demand forecasting and asset performance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Build regulatory-ready sustainability reporting platforms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Design digital command centers for real-time grid visibility</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-green-800 font-medium">
                    <strong>Case Insight:</strong> Enabled a solar utility to cut forecasting error by 28% via AI-based demand modeling.
                  </p>
                </div>
                <Link to="/energy-sector">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Explore Energy Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Digital Transformation */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🔄</span>
                  <CardTitle className="text-2xl font-semibold text-gray-900">Cross-Industry Digital Transformation</CardTitle>
                </div>
                <CardDescription className="text-lg font-medium text-purple-600 mb-4">
                  Digitizing value chains. Humanizing experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We help large enterprises across sectors embed digital capabilities that are business-outcome focused, 
                  not just tech-for-tech's-sake. Our cross-sector approach combines agile delivery, scalable architectures, 
                  and behavioral change.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Define digital operating models and transformation roadmaps</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Drive enterprise agility through OKRs, squads, and lean governance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Modernize legacy systems to cloud-native platforms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Upskill internal teams through digital capability academies</span>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-purple-800 font-medium">
                    <strong>Case Insight:</strong> Co-created a digital transformation office for a $2B conglomerate across 5 business units.
                  </p>
                </div>
                <Link to="/digital-transformation">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Explore Digital Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl">🤝</span>
            <h2 className="text-4xl font-light text-white">
              Let's <span className="font-semibold">Partner for Impact</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're scaling green energy, reimagining air travel, or driving multi-sector digital change — 
            our consultants, technologists, and strategists are ready to help you lead with clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
