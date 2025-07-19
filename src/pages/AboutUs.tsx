import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, Target, Award, Globe, Lightbulb, Shield, Star, Zap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/b6ae1c25-a7e8-46d2-b61e-9cd45cd4a371.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-blue-600/80 rounded-full flex items-center justify-center mr-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-6xl font-bold text-white">Pioneering Integrated Consulting Solutions</h1>
            </div>
            <div className="space-y-6 max-w-4xl">
              <p className="text-xl leading-relaxed text-gray-200">
                AeroEdison Consulting was founded in 2024 with a vision to bridge the gap between traditional 
                industry practices and futuristic technologies. Our team of seasoned experts brings together 
                decades of experience in Aviation, Energy, and Digital Transformation to deliver unparalleled 
                insights and strategies.
              </p>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission:</h2>
                <p className="text-xl leading-relaxed text-gray-200">
                  To empower organizations to navigate complex challenges and seize opportunities through 
                  expert guidance, cutting-edge research, and tailored strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">Our Values</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Core principles that guide everything we do at AeroEdison Consulting
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Unyielding Integrity</h3>
                  <p className="text-gray-600">
                    Upholding the highest ethical standards in all our actions.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-500"></div>
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    Striving for exceptional quality in our work and deliverables.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-500"></div>
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Continuously pushing boundaries and embracing new ideas.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-orange-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-red-500"></div>
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                  <p className="text-gray-600">
                    Fostering partnerships and teamwork to achieve shared goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-teal-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-cyan-500"></div>
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">Our Approach to Consulting</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              At AeroEdison Consulting, we believe in a holistic, client-centric approach
            </p>
            
            <div className="mb-16 p-8 bg-blue-50 rounded-xl border border-blue-100">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Deep Understanding</h3>
                    <p className="text-gray-700 text-lg">We begin by thoroughly understanding your unique challenges, industry context, and strategic objectives.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Multi-disciplinary Analysis</h3>
                    <p className="text-gray-700 text-lg">Our team of experts from various fields collaborates to analyze the situation from all angles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Innovative Solution Design</h3>
                    <p className="text-gray-700 text-lg">We leverage our cross-sector expertise to design innovative integrated solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Implementation Support</h3>
                    <p className="text-gray-700 text-lg">We don't just advise; we partner with our clients throughout the implementation process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Continuous Improvement</h3>
                    <p className="text-gray-700 text-lg">We believe in long-term partnerships, continuously monitoring and optimizing our solutions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Sets AE Apart */}
            <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">What Sets AE Apart</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              AeroEdison Consulting distinguishes itself through innovative expertise and proven results
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-blue-600">Integrated Expertise</h3>
                      <p className="text-sm text-gray-600 text-lg">Our unique combination of Aviation, Energy, and Digital Transformation knowledge allows us to see connections and opportunities others miss.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-blue-600">Future-Focused Solutions</h3>
                      <p className="text-sm text-gray-600 text-lg">We don't just solve today's problems; we prepare our clients for tomorrow's challenges and opportunities.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-blue-600">Customized Approach</h3>
                      <p className="text-sm text-gray-600 text-lg">We recognize that every client is unique, tailoring our solutions to each specific situation rather than offering one-size-fits-all answers.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-orange-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-red-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-blue-600">Commitment to Sustainability</h3>
                      <p className="text-sm text-gray-600 text-lg">Our solutions always consider environmental impact, helping our clients achieve their goals sustainably.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-red-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-pink-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-blue-600">Continuous Innovation</h3>
                      <p className="text-sm text-gray-600 text-lg">Our dedicated R&D team ensures we're always at the cutting edge of industry trends and technologies.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-teal-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-cyan-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight text-blue-600">Global Perspective, Local Insight</h3>
                      <p className="text-sm text-gray-600 text-lg">While we operate globally, we maintain deep understanding of local markets and regulations.</p>
                    </div>
                  </div>
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
            {/* Vision, Mission, Purpose - Side by Side */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
            </div>

            {/* Values - Centered and Compact */}
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-2xl">Values</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-3 text-center">
                    <p className="text-gray-600">
                      <span className="font-semibold text-blue-600">Unyielding Integrity:</span> Upholding the highest ethical standards in all our actions
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-blue-600">Excellence:</span> Striving for exceptional quality in our work and deliverables
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-blue-600">Innovation:</span> Continuously pushing boundaries and embracing new ideas
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-blue-600">Collaboration:</span> Fostering partnerships and teamwork to achieve shared goals
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-blue-600">Sustainability:</span> Promoting environmentally responsible practices and solutions
                    </p>
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
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600">
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
                <li><Link to="/aviation-sector" className="hover:text-blue-600">Aviation Consulting</Link></li>
                <li><Link to="/energy-sector" className="hover:text-blue-600">Energy Solutions</Link></li>
                <li><Link to="/digital-transformation" className="hover:text-blue-600">Digital Transformation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
                <li><Link to="/commercial-report" className="hover:text-blue-600">Commercial Reports</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>info@aeroedison.com</li>
                <li>+919620622877</li>
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
