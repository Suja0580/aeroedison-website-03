import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const EnergySector = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/industries" className="inline-flex items-center text-yellow-200 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Energy Sector</h1>
            </div>
            <p className="text-xl leading-relaxed">
              The energy landscape is evolving at an unprecedented pace, with the transition to sustainable energy sources reshaping the industry. We guide energy companies through this transition, helping them build resilient, efficient, and sustainable operations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Renewable energy integration</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Smart grid technologies</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Energy storage solutions</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Demand response and energy efficiency</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Decarbonization strategies</h3>
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
                    <li>• Utility companies</li>
                    <li>• Renewable energy developers</li>
                    <li>• Oil and gas companies transitioning to clean energy</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Energy technology startups</li>
                    <li>• Government energy departments</li>
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
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Strategy Consulting</h3>
                    <h3 className="text-xl font-semibold mb-4">Market Research and Intelligence</h3>
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
                    <h4 className="font-semibold mb-3">Energy Industry ICP:</h4>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Organization: Multinational Energy Corporation</p>
                      <p className="text-sm text-gray-600 mb-2">Size: Fortune 500 company</p>
                      <p className="text-sm text-gray-600 mb-4">Location: Global operations with significant presence in both developed and emerging markets</p>
                      
                      <h5 className="font-semibold mb-2">Challenges:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>– Balancing traditional energy assets with renewable energy investments</li>
                        <li>– Navigating complex and evolving regulatory landscapes across markets</li>
                        <li>– Identifying new business opportunities in the energy transition</li>
                        <li>– Assessing the impact of emerging technologies on existing business models</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2">Goals:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>– Develop long-term energy transition strategy</li>
                        <li>– Identify strategic investment opportunities in clean tech</li>
                        <li>– Understand regulatory trends and their impact on operations</li>
                        <li>– Assess competitive threats from new market entrants</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2">Decision Makers:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>– Chief Strategy Officer</li>
                        <li>– Head of Business Development</li>
                        <li>– VP of Sustainability and Energy Transition</li>
                      </ul>
                      
                      <p className="text-sm font-semibold">Budget: $5-10 million for strategy consulting and market intelligence services annually</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Power Your Energy Transformation</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to navigate the energy transition and build a sustainable, profitable future for your organization.
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Explore Energy Solutions
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

export default EnergySector;
