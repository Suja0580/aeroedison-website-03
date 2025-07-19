import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, ArrowLeft, Smartphone, Brain, Cloud, Shield, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen bg-white">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/digital-transformation.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/industries" className="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center mr-6">
                <RotateCcw className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white">Cross-Industry Digital Transformation</h1>
            </div>
            <p className="text-xl leading-relaxed text-gray-200 max-w-3xl">
              Digital technologies are revolutionizing business models and operations across all industries. We help organizations leverage these technologies to drive innovation, improve efficiency, and create new value propositions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gradient-to-br from-digital-secondary to-digital-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-digital-primary">Key Focus Areas</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Transforming industries through innovative digital technologies and strategic expertise
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-digital-secondary/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-digital-primary to-purple-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-digital-primary to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Internet of Things (IoT) implementation</h3>
                      <p className="text-sm text-gray-600">Connecting devices and systems for enhanced operational visibility</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-indigo-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Artificial Intelligence and Machine Learning solutions</h3>
                      <p className="text-sm text-gray-600">Intelligent automation and predictive analytics for business insights</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cloud className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Cloud computing and edge computing</h3>
                      <p className="text-sm text-gray-600">Scalable infrastructure solutions for modern digital operations</p>
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
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Cybersecurity for connected systems</h3>
                      <p className="text-sm text-gray-600">Comprehensive security frameworks for digital transformation initiatives</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-teal-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-green-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Digital twin technology</h3>
                      <p className="text-sm text-gray-600">Virtual replicas for optimized performance and predictive maintenance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* We Work With */}
            <div className="mb-16 p-8 bg-digital-secondary rounded-xl border border-digital-accent">
              <h3 className="text-2xl font-bold mb-6 text-digital-primary">
                We work with:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Manufacturing companies</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Logistics and supply chain organizations</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Smart cities initiatives</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Healthcare providers</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Financial institutions</span>
                    </div>
                  </div>
              </div>
              <p className="mt-6 text-gray-600 text-lg">
                Our cross-sector expertise allows us to bring best practices and innovative solutions from one industry to another, providing our clients with a competitive edge in their digital transformation journey.
              </p>
            </div>

            {/* Core Offerings */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-digital-secondary/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-digital-primary to-purple-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-digital-primary to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <RotateCcw className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-digital-primary">Strategy Consulting</h3>
                      <p className="text-sm text-gray-600 text-lg">Strategic guidance for digital transformation initiatives</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-digital-primary">Market Research and Intelligence</h3>
                      <p className="text-sm text-gray-600 text-lg">Data-driven insights for digital technology adoption</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
              
            <div className="mb-16 p-8 bg-digital-secondary rounded-xl border border-digital-accent">
              <div className="border-t border-digital-accent pt-8">
                <h4 className="font-bold mb-6 text-gray-900 text-lg text-digital-primary">Work Products in Demand:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Digital Disruption Readiness Assessments</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Technology Adoption Roadmaps</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Data Monetization Strategies</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Digital Ecosystem Partnership Strategies</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>Cybersecurity Threat Intelligence Reports</span>
                    </div>
                    <div className="text-gray-700 flex items-start text-lg">
                      <span className="text-digital-primary mr-2">•</span>
                      <span>AI and Automation Impact Studies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Products */}
            <div className="mb-16 p-8 bg-digital-secondary rounded-xl border border-digital-accent">
              <h3 className="text-2xl font-bold mb-6 text-digital-primary">
                Work Products
              </h3>
              
              <p className="text-gray-700 mb-6 font-medium text-lg">
                Work products and ICPs with Strategy and Market Research and Intelligence as core offerings for AeroEdison Consulting (AE).
              </p>
              
              <div className="bg-white/70 p-8 rounded-lg">
                <h4 className="font-bold mb-6 text-gray-900 text-xl">Ideal Customer Profiles (ICPs):</h4>
                
                <div className="bg-gradient-to-br from-digital-secondary to-white p-6 rounded-lg border border-digital-accent">
                  <p className="font-bold mb-2 text-gray-900 text-lg">Organization: Global Telecommunications Conglomerate</p>
                  <p className="text-lg text-gray-600 mb-2">Size: $50+ billion annual revenue</p>
                  <p className="text-lg text-gray-600 mb-6">Location: Operations across multiple continents</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold mb-3 text-gray-800 text-lg">Challenges:</h5>
                      <div className="space-y-2">
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-digital-primary mr-2">•</span>
                          <span>Identifying new revenue streams in a saturated market</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-digital-primary mr-2">•</span>
                          <span>Assessing the impact of emerging technologies (e.g., 6G, quantum computing)</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-digital-primary mr-2">•</span>
                          <span>Navigating data privacy and security regulations across jurisdictions</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-digital-primary mr-2">•</span>
                          <span>Competing with tech giants entering the telecom space</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold mb-3 text-gray-800 text-lg">Goals:</h5>
                      <div className="space-y-2">
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-digital-primary mr-2">•</span>
                          <span>Develop strategies for monetizing 5G and future network technologies</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-digital-primary mr-2">•</span>
                          <span>Identify partnership opportunities in the broader digital ecosystem</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-digital-primary mr-2">•</span>
                          <span>Understand the evolving regulatory landscape and its strategic implications</span>
                        </div>
                        <div className="text-lg text-gray-700 flex items-start">
                          <span className="text-digital-primary mr-2">•</span>
                          <span>Assess potential disruptive threats and opportunities</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-bold mb-3 text-gray-800 text-lg">Decision Makers:</h5>
                    <div className="space-y-1">
                      <div className="text-lg text-gray-700 flex items-start">
                        <span className="text-digital-primary mr-2">•</span>
                        <span>Chief Strategy Officer</span>
                      </div>
                      <div className="text-lg text-gray-700 flex items-start">
                        <span className="text-digital-primary mr-2">•</span>
                        <span>Head of Innovation</span>
                      </div>
                      <div className="text-lg text-gray-700 flex items-start">
                        <span className="text-digital-primary mr-2">•</span>
                        <span>VP of Regulatory Affairs</span>
                      </div>
                    </div>
                    
                    <p className="text-lg font-semibold mt-4 text-gray-800">Budget: $15-25 million for strategic initiatives and market intelligence annually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-digital-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Accelerate Your Digital Future</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Transform your business with cutting-edge digital technologies and cross-industry best practices.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Begin Digital Transformation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;