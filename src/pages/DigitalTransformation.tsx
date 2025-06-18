
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/industries" className="inline-flex items-center text-green-200 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                <RotateCcw className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Cross-Industry Digital Transformation</h1>
            </div>
            <p className="text-xl leading-relaxed">
              Digital technologies are revolutionizing business models and operations across all industries. We help organizations leverage these technologies to drive innovation, improve efficiency, and create new value propositions.
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
                  <h3 className="font-semibold mb-2">Internet of Things (IoT) implementation</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Artificial Intelligence and Machine Learning solutions</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Cloud computing and edge computing</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Cybersecurity for connected systems</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Digital twin technology</h3>
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
                    <li>• Manufacturing companies</li>
                    <li>• Logistics and supply chain organizations</li>
                    <li>• Smart cities initiatives</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Healthcare providers</li>
                    <li>• Financial institutions</li>
                  </ul>
                </div>
                <p className="mt-4 text-gray-600">
                  Our cross-sector expertise allows us to bring best practices and innovative solutions from one industry to another, providing our clients with a competitive edge in their digital transformation journey.
                </p>
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
                    <ul className="space-y-2 text-gray-600 mb-6">
                      <li>a. Digital Disruption Readiness Assessments</li>
                      <li>b. Technology Adoption Roadmaps</li>
                      <li>c. Data Monetization Strategies</li>
                      <li>d. Digital Ecosystem Partnership Strategies</li>
                      <li>e. Cybersecurity Threat Intelligence Reports</li>
                      <li>f. AI and Automation Impact Studies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Digital Transformation ICP:</h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Organization: Global Telecommunications Conglomerate</p>
                      <p className="text-sm text-gray-600 mb-2">Size: $50+ billion annual revenue</p>
                      <p className="text-sm text-gray-600 mb-4">Location: Operations across multiple continents</p>
                      
                      <h5 className="font-semibold mb-2">Challenges:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>– Identifying new revenue streams in a saturated market</li>
                        <li>– Assessing the impact of emerging technologies (e.g., 6G, quantum computing)</li>
                        <li>– Navigating data privacy and security regulations across jurisdictions</li>
                        <li>– Competing with tech giants entering the telecom space</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2">Goals:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>– Develop strategies for monetizing 5G and future network technologies</li>
                        <li>– Identify partnership opportunities in the broader digital ecosystem</li>
                        <li>– Understand the evolving regulatory landscape and its strategic implications</li>
                        <li>– Assess potential disruptive threats and opportunities</li>
                      </ul>
                      
                      <h5 className="font-semibold mb-2">Decision Makers:</h5>
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>– Chief Strategy Officer</li>
                        <li>– Head of Innovation</li>
                        <li>– VP of Regulatory Affairs</li>
                      </ul>
                      
                      <p className="text-sm font-semibold">Budget: $15-25 million for strategic initiatives and market intelligence annually</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Accelerate Your Digital Future</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Transform your business with cutting-edge digital technologies and cross-industry best practices.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Begin Digital Transformation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
