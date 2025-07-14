import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Plane, Zap, Cpu, Award, Users, ArrowRight, Mail, Phone, Star, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";

const AeroEdisonHome = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <AeroNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
                Navigating the Future of 
                <span className="font-semibold text-blue-600"> Aviation, Energy, and Digital Transformation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AeroEdison Consulting delivers cutting-edge solutions at the intersection of three transformative industries. 
                Our expert team empowers organizations to overcome challenges and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Insights
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Commercial aircraft representing aviation consulting excellence"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Our <span className="font-semibold">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in three interconnected domains that shape the future of industry
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">Aviation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Strategic insights and market intelligence for connected aircraft solutions, aerospace innovation, 
                  and aviation industry transformation.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Sustainable energy solutions, renewable technology integration, and energy sector 
                  digital transformation strategies.
                </p>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Technology roadmaps, digital innovation strategies, and complex IT project management 
                  for enterprise transformation.
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-4">
                Latest <span className="font-semibold">Insights</span>
              </h2>
              <p className="text-xl text-gray-600">
                Thought leadership and market intelligence from our experts
              </p>
            </div>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-white">
              View all insights
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg"></div>
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-100">Aviation</Badge>
                <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                  The Future of Connected Aircraft Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Exploring how IoT and AI are transforming aviation operations and passenger experiences.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read more
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg"></div>
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800 hover:bg-green-100">Energy</Badge>
                <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                  Renewable Energy Integration Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Best practices for integrating renewable energy sources into existing infrastructure.
                </p>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  Read more
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 rounded-t-lg"></div>
              <CardHeader>
                <Badge className="w-fit bg-purple-100 text-purple-800 hover:bg-purple-100">Digital</Badge>
                <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                  Enterprise Digital Transformation Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to successfully navigating digital transformation initiatives.
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                  Read more
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Our <span className="font-semibold">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals driving innovation across industries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-semibold mb-4">
                  BN
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">Biju Nanukuttan</CardTitle>
                <div className="flex justify-center gap-2 flex-wrap mt-3">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">Aviation Expert</Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700">21 USPTO Patents</Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">Top 20 Global Influencer</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  20+ years of experience in market intelligence, strategy, product marketing, and GTM for Connected Aircraft Solutions. 
                  Proven track record in business development, M&A, and roadmaps. An innovation champion with 21 USPTO patents (GE Gold Medalist).
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500"><strong>Credentials:</strong> Executive Program in Aviation Management (IIMB & TBS)</p>
                  <p className="text-sm text-blue-600 font-medium">Top 20 Global Influencers in Market Intelligence</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-semibold mb-4">
                  SN
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">Suja B Nanukuttan</CardTitle>
                <div className="flex justify-center gap-2 flex-wrap mt-3">
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">IT Project Management</Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">17+ Years Experience</Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700">PwC Alumni</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Accomplished IT Project Management Professional with 17 years of strategic leadership experience in prestigious global organizations 
                  like IGate and PricewaterhouseCoopers. Proven track record of successfully managing cross-functional teams, implementing innovative solutions, 
                  and delivering mission-critical projects across diverse technology domains.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500"><strong>Expertise:</strong> Strategic Leadership, Technology Implementation, Stakeholder Management</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-4">
            Ready to <span className="font-semibold">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AeroEdison Consulting can help you navigate the future of your industry
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

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 w-8 h-8 rounded flex items-center justify-center text-white mr-3">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AeroEdison</h3>
                  <p className="text-sm text-gray-600">Consulting</p>
                </div>
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

export default AeroEdisonHome;
