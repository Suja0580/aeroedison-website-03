
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award, Globe, Lightbulb, Shield } from "lucide-react";
import AeroNavbar from "@/components/AeroNavbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About AeroEdison</h1>
            <p className="text-xl leading-relaxed mb-8">
              Leading the future of aviation, energy, and digital transformation through innovative 
              consulting solutions and cutting-edge technology expertise.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div>Global Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2009, AeroEdison emerged from a vision to revolutionize how organizations 
                  approach complex challenges in aviation, energy, and digital transformation. What started 
                  as a boutique consulting firm has evolved into a global leader in strategic consulting.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey began when our founders recognized the gap between traditional consulting 
                  approaches and the rapidly evolving technological landscape. Today, we serve Fortune 500 
                  companies, government agencies, and innovative startups across six continents.
                </p>
                <p className="text-gray-600">
                  With deep industry expertise and a commitment to innovation, we've helped organizations 
                  navigate digital transformations, optimize operations, and achieve sustainable growth 
                  in an increasingly complex world.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <div className="font-semibold">2009</div>
                      <div className="text-sm text-gray-600">Company founded</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <div className="font-semibold">2015</div>
                      <div className="text-sm text-gray-600">Expanded to energy sector</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <div className="font-semibold">2020</div>
                      <div className="text-sm text-gray-600">Digital transformation division launched</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <div className="font-semibold">2024</div>
                      <div className="text-sm text-gray-600">Global expansion completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We push boundaries and embrace cutting-edge technologies to deliver 
                    solutions that transform industries.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Trust & Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We build lasting partnerships through transparency, reliability, 
                    and unwavering commitment to our clients' success.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Global Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We're committed to creating sustainable solutions that benefit 
                    organizations and communities worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
            <p className="text-gray-600 mb-12">
              We combine deep industry expertise with data-driven insights to deliver 
              transformative solutions that drive measurable results.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Analyze</h3>
                <p className="text-sm text-gray-600">Deep dive into your challenges and opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Strategize</h3>
                <p className="text-sm text-gray-600">Develop tailored solutions and roadmaps</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Implement</h3>
                <p className="text-sm text-gray-600">Execute solutions with precision and care</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Optimize</h3>
                <p className="text-sm text-gray-600">Continuously improve and scale results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Leadership Team</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Our experienced leadership team brings together decades of expertise from top-tier 
              consulting firms, technology companies, and industry leaders.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle>Executive Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Strategic visionaries with proven track records in scaling consulting 
                    businesses and driving organizational transformation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Former McKinsey & BCG partners</li>
                    <li>• 20+ years industry experience</li>
                    <li>• Global market expertise</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle>Technical Directors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Deep technical expertise across aviation, energy, and digital 
                    transformation domains.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• PhD-level technical expertise</li>
                    <li>• Industry certifications</li>
                    <li>• Research & development focus</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-12 w-12 text-purple-600" />
                  </div>
                  <CardTitle>Practice Leaders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Specialized consultants who lead our core practice areas and 
                    client engagement teams.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sector specialization</li>
                    <li>• Client relationship management</li>
                    <li>• Delivery excellence</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join the leading organizations that trust AeroEdison to navigate complex challenges 
            and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>
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

export default AboutUs;
