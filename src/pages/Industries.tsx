
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Plane, Zap, RotateCcw, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const Industries = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl leading-relaxed">
              At AeroEdison, we specialize in delivering strategic, data-driven, and future-ready consulting services across industries where innovation, complexity, and scale are non-negotiable. Our sector expertise ensures that each solution is grounded in industry insight — not just theory.
            </p>
            
            {/* Dropdown Navigation */}
            <div className="mt-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Explore Our Sectors
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-white">
                  <DropdownMenuItem 
                    onClick={() => handleNavigate("/aviation-sector")}
                    className="cursor-pointer hover:bg-blue-50"
                  >
                    <Plane className="mr-2 h-4 w-4" />
                    Aviation Sector
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigate("/energy-sector")}
                    className="cursor-pointer hover:bg-blue-50"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Energy Sector
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigate("/digital-transformation")}
                    className="cursor-pointer hover:bg-blue-50"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Cross-Industry Digital Transformation
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Aviation Sector */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNavigate("/aviation-sector")}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">✈️ Aviation Sector</CardTitle>
                <p className="text-lg font-semibold text-blue-600">Transforming turbulence into opportunity.</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The aviation industry is navigating rapid changes — from post-pandemic recovery and fluctuating fuel prices to digital passenger expectations and sustainability mandates. We partner with airlines, airports, and aviation services to:
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Streamline operational efficiency through data-led decision frameworks</li>
                  <li>• Design digital passenger journeys and loyalty ecosystems</li>
                  <li>• Implement predictive maintenance and fleet optimization tools</li>
                  <li>• Drive ESG strategy and carbon footprint reductions</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Case Insight:</strong> Helped a regional airline reduce ground time by 17% using turnaround optimization analytics.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Energy Sector */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNavigate("/energy-sector")}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl">⚡ Energy Sector</CardTitle>
                <p className="text-lg font-semibold text-yellow-600">Empowering the energy evolution.</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  With global shifts toward renewables, grid decentralization, and climate-focused regulation, energy players must rethink their core business models. We work with utilities, oil & gas, and renewable operators to:
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Navigate the energy transition through portfolio strategy and M&A</li>
                  <li>• Leverage AI for demand forecasting and asset performance</li>
                  <li>• Build regulatory-ready sustainability reporting platforms</li>
                  <li>• Design digital command centers for real-time grid visibility</li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Case Insight:</strong> Enabled a solar utility to cut forecasting error by 28% via AI-based demand modeling.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Digital Transformation */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNavigate("/digital-transformation")}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">🔄 Cross-Industry Digital Transformation</CardTitle>
                <p className="text-lg font-semibold text-green-600">Digitizing value chains. Humanizing experience.</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We help large enterprises across sectors embed digital capabilities that are business-outcome focused, not just tech-for-tech's-sake. Our cross-sector approach combines agile delivery, scalable architectures, and behavioral change:
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Define digital operating models and transformation roadmaps</li>
                  <li>• Drive enterprise agility through OKRs, squads, and lean governance</li>
                  <li>• Modernize legacy systems to cloud-native platforms</li>
                  <li>• Upskill internal teams through digital capability academies</li>
                </ul>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Case Insight:</strong> Co-created a digital transformation office for a $2B conglomerate across 5 business units.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">🤝 Let's Partner for Impact</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Whether you're scaling green energy, reimagining air travel, or driving multi-sector digital change — our consultants, technologists, and strategists are ready to help you lead with clarity.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Your Transformation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
