
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Plane, Zap, Cpu, Award, Users, ArrowRight, Mail, Phone, Star, Globe, ChevronRight } from "lucide-react";
import AeroNavbar from "@/components/AeroNavbar";

const AeroEdisonHome = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <AeroNavbar />

      {/* Hero Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Navigating the Future of 
              <span className="block text-blue-600 font-normal mt-2">Aviation, Energy, and Digital Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              AeroEdison Consulting delivers cutting-edge solutions at the intersection of three transformative industries. 
              Our expert team empowers organizations to overcome challenges and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-base">
                View Insights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-none">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Commercial aircraft representing aviation consulting excellence"
              className="w-full h-96 lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              We specialize in three interconnected domains that shape the future of industry
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 lg:p-12">
              <div className="mb-8">
                <Plane className="h-8 w-8 text-blue-600 mb-6" />
                <h3 className="text-2xl font-light text-gray-900 mb-4">Aviation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Strategic insights and market intelligence for connected aircraft solutions, aerospace innovation, 
                  and aviation industry transformation.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12">
              <div className="mb-8">
                <Zap className="h-8 w-8 text-green-600 mb-6" />
                <h3 className="text-2xl font-light text-gray-900 mb-4">Energy</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Sustainable energy solutions, renewable technology integration, and energy sector 
                  digital transformation strategies.
                </p>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12">
              <div className="mb-8">
                <Cpu className="h-8 w-8 text-purple-600 mb-6" />
                <h3 className="text-2xl font-light text-gray-900 mb-4">Digital Transformation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Technology roadmaps, digital innovation strategies, and complex IT project management 
                  for enterprise transformation.
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals driving innovation across industries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-8 lg:p-12">
              <div className="mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-light mb-6">
                  BN
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-2">Biju Nanukuttan</h3>
                <div className="flex gap-2 flex-wrap mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">Aviation Expert</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs">21 USPTO Patents</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">Top 20 Global Influencer</Badge>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  20+ years of experience in market intelligence, strategy, product marketing, and GTM for Connected Aircraft Solutions. 
                  Proven track record in business development, M&A, and roadmaps. An innovation champion with 21 USPTO patents (GE Gold Medalist).
                </p>
                <p className="text-sm text-gray-500">Executive Program in Aviation Management (IIMB & TBS)</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12">
              <div className="mb-8">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-light mb-6">
                  SN
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-2">Suja B Nanukuttan</h3>
                <div className="flex gap-2 flex-wrap mb-6">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">IT Project Management</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs">17+ Years Experience</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">PwC Alumni</Badge>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Accomplished IT Project Management Professional with 17 years of strategic leadership experience in prestigious global organizations 
                  like IGate and PricewaterhouseCoopers. Proven track record of successfully managing cross-functional teams, implementing innovative solutions, 
                  and delivering mission-critical projects across diverse technology domains.
                </p>
                <p className="text-sm text-gray-500">Strategic Leadership, Technology Implementation, Stakeholder Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-600">
                Thought leadership and market intelligence from our experts
              </p>
            </div>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white hidden lg:flex">
              View all insights
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white">
              <div className="h-64 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Aviation</Badge>
                <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
                  The Future of Connected Aircraft Solutions
                </h3>
                <p className="text-gray-600 mb-6">
                  Exploring how IoT and AI are transforming aviation operations and passenger experiences.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white">
              <div className="h-64 bg-gradient-to-r from-green-500 to-green-600"></div>
              <div className="p-8">
                <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Energy</Badge>
                <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
                  Renewable Energy Integration Strategies
                </h3>
                <p className="text-gray-600 mb-6">
                  Best practices for integrating renewable energy sources into existing infrastructure.
                </p>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white">
              <div className="h-64 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="p-8">
                <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Digital</Badge>
                <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
                  Enterprise Digital Transformation Roadmap
                </h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive guide to successfully navigating digital transformation initiatives.
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how AeroEdison Consulting can help you navigate the future of your industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-base">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-base">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 w-10 h-10 rounded flex items-center justify-center text-white mr-3">
                  <Plane className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900">AeroEdison</h3>
                  <p className="text-sm text-gray-600">Consulting</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Navigating the future of Aviation, Energy, and Digital Transformation.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Aviation Consulting</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Energy Solutions</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Digital Transformation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>info@aeroedison.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
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
