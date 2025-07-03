import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Lightbulb, Settings, ArrowRight, CheckCircle } from "lucide-react";
import AeroNavbar from "@/components/AeroNavbar";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16" style={{backgroundImage: 'url(/lovable-uploads/74a29bb6-522a-40c1-b736-b9b5f0874e3c.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-blue-600/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl leading-relaxed">
                At AeroEdison Consulting, we offer comprehensive consulting solutions at the intersection of Aviation, Energy, and Digital Transformation. Our integrated approach allows us to deliver innovative strategies that drive efficiency, sustainability, and growth for our clients.
              </p>
            </div>
          </div>
        </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Core Service Areas</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Aviation Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Optimizing operations, enhancing safety, and driving innovation in the aviation sector.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Market entry and expansion strategies
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Competitive positioning and differentiation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Portfolio optimization and restructuring
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Sustainability and ESG strategy development
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Energy Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Guiding the transition to sustainable energy solutions and improving energy efficiency.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Industry trend analysis and forecasting
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Competitive landscape assessments
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Customer behavior and preference studies
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Regulatory impact analysis
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Settings className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Digital Transformation Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Leveraging cutting-edge technologies to revolutionize business processes and customer experiences.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Process optimization and automation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Performance management systems
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Cost reduction and efficiency programs
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Quality management and compliance
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
            <p className="text-lg text-gray-600 mb-12">
              We follow a proven methodology that combines industry expertise with innovative thinking to deliver measurable results.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Assess</h3>
                <p className="text-sm text-gray-600">Understand current state and identify opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Strategize</h3>
                <p className="text-sm text-gray-600">Develop tailored solutions and roadmaps</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Implement</h3>
                <p className="text-sm text-gray-600">Execute solutions with precision and agility</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Optimize</h3>
                <p className="text-sm text-gray-600">Monitor performance and drive continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help transform your business and drive sustainable growth.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
