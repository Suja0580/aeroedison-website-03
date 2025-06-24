
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, Target, Award, Globe, Lightbulb, Shield, Star, Zap } from "lucide-react";
import AeroNavbar from "@/components/AeroNavbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Pioneering Integrated Consulting Solutions</h1>
            <p className="text-xl leading-relaxed mb-8">
              AeroEdison Consulting was founded in 2024 with a vision to bridge the gap between traditional 
              industry practices and futuristic technologies. Our team of seasoned experts brings together 
              decades of experience in Aviation, Energy, and Digital Transformation to deliver unparalleled 
              insights and strategies.
            </p>
            
            <div className="mt-12 text-left max-w-3xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Our Mission:</h3>
              <p className="text-lg">
                To empower organizations to navigate complex challenges and seize opportunities through 
                expert guidance, cutting-edge research, and tailored strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Unyielding Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Upholding the highest ethical standards in all our actions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Striving for exceptional quality in our work and deliverables.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Continuously pushing boundaries and embracing new ideas.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Fostering partnerships and teamwork to achieve shared goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Promoting environmentally responsible practices and solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Consulting Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Approach to Consulting</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              At AeroEdison Consulting, we believe in a holistic, client-centric approach:
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deep Understanding</h3>
                  <p className="text-gray-600">Upholding the highest ethical standards in all our actions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-disciplinary Analysis</h3>
                  <p className="text-gray-600">Our team of experts from various fields collaborates to analyze the situation from all angles.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovative Solution Design</h3>
                  <p className="text-gray-600">We leverage our cross-sector expertise to design innovative integrated solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementation Support</h3>
                  <p className="text-gray-600">We don't just advise; we partner with our clients throughout the implementation process.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                  <p className="text-gray-600">We believe in long-term partnerships, continuously monitoring and optimizing our solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets AE Apart Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What Sets AE Apart</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              AeroEdison Consulting distinguishes itself through:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Integrated Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our unique combination of Aviation, Energy, and Digital Transformation knowledge allows us to see connections and opportunities others miss.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Future-Focused Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We don't just solve today's problems; we prepare our clients for tomorrow's challenges and opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Customized Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We recognize that every client is unique, tailoring our solutions to each specific situation rather than offering one-size-fits-all answers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Commitment to Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our solutions always consider environmental impact, helping our clients achieve their goals sustainably.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Continuous Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our dedicated R&D team ensures we're always at the cutting edge of industry trends and technologies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Global Perspective, Local Insight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    While we operate globally, we maintain deep understanding of local markets and regulations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Statement Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold leading-relaxed">
              At AeroEdison Consulting, we're not just consultants – we're partners in your success, committed to driving innovation and excellence in Aviation, Energy, and Digital Transformation.
            </h2>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Purpose and Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    To be the global leader in innovative consulting solutions for Aviation, Energy, and Digital Transformation, driving sustainable growth and technological advancement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    AeroEdison Consulting empowers organizations to navigate complex challenges and seize opportunities in Aviation, Energy, and Digital Transformation through expert guidance, cutting-edge research, and tailored strategies.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    To accelerate the evolution of industries by bridging traditional practices with future technologies, fostering innovation, and promoting sustainable development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-center text-2xl">Values</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Unyielding Integrity:</h4>
                      <p className="text-gray-600 text-sm">Upholding the highest ethical standards in all our actions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Excellence:</h4>
                      <p className="text-gray-600 text-sm">Striving for exceptional quality in our work and deliverables</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Innovation:</h4>
                      <p className="text-gray-600 text-sm">Continuously pushing boundaries and embracing new ideas</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Collaboration:</h4>
                      <p className="text-gray-600 text-sm">Fostering partnerships and teamwork to achieve shared goals</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Sustainability:</h4>
                      <p className="text-gray-600 text-sm">Promoting environmentally responsible practices and solutions</p>
                    </div>
                  </div>
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
