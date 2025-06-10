
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Plane, Zap, Cpu, Award, Users, ArrowRight, Mail, Phone, Star, Globe } from "lucide-react";

const AeroEdisonHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-3000"></div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Airplane Image with Enhanced Styling */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Commercial aircraft representing aviation consulting excellence"
                  className="relative w-56 h-36 object-cover rounded-xl shadow-2xl border-2 border-blue-400/50 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 leading-tight relative">
              <span className="inline-block hover:scale-105 transition-transform duration-300">Welcome to</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 animate-pulse">
                AeroEdison
              </span>{" "}
              <span className="inline-block hover:scale-105 transition-transform duration-300">Consulting</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 relative">
              <span className="inline-block animate-fade-in">Navigating the Future of Aviation, Energy, and Digital Transformation</span>
            </p>
            
            <div className="relative bg-gradient-to-r from-blue-800/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-blue-400/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto relative">
                AeroEdison Consulting delivers cutting-edge solutions at the intersection of Aviation, Energy, and Digital Transformation. 
                Our expert team empowers organizations to overcome challenges, seize opportunities, and drive sustainable growth in rapidly evolving industries.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Globe className="mr-2 h-5 w-5" />
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <Star className="mr-2 h-5 w-5" />
                    View Reports Marketplace
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-white/95 backdrop-blur-sm border-blue-200 shadow-xl">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-blue-900">View Reports Marketplace</h4>
                    <p className="text-sm text-gray-600">
                      Access our comprehensive collection of aviation industry reports, market intelligence, and strategic insights.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white/80 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Our Expertise Areas
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in three interconnected domains that shape the future of industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50 hover:scale-105 transform">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">Aviation</CardTitle>
                </div>
                <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Strategic insights and market intelligence for connected aircraft solutions, aerospace innovation, and aviation industry transformation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-green-600 bg-gradient-to-br from-white to-green-50/50 hover:scale-105 transform">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-700 transition-colors">Energy</CardTitle>
                </div>
                <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Sustainable energy solutions, renewable technology integration, and energy sector digital transformation strategies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-purple-600 bg-gradient-to-br from-white to-purple-50/50 hover:scale-105 transform">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-700 transition-colors">Digital Transformation</CardTitle>
                </div>
                <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Technology roadmaps, digital innovation strategies, and complex IT project management for enterprise transformation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Meet Our Leadership Team
              </span>
            </h2>
            <p className="text-lg text-gray-600">Experienced professionals driving innovation across industries</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Biju Nanukuttan */}
            <Card className="group hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50 border-2 border-transparent hover:border-blue-200 transform hover:scale-102">
              <CardHeader className="text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                    BN
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-900 transition-colors">Biju Nanukuttan</CardTitle>
                <div className="flex justify-center gap-2 flex-wrap mt-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 hover:scale-105 transition-transform">Aviation Expert</Badge>
                  <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 hover:scale-105 transition-transform">21 USPTO Patents</Badge>
                  <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 hover:scale-105 transition-transform">Top 20 Global Influencer</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg">
                  <p className="text-gray-600 leading-relaxed">
                    20+ years of experience in market intelligence, strategy, product marketing, and GTM for Connected Aircraft Solutions. 
                    Proven track record in business development, M&A, and roadmaps. An innovation champion with 21 USPTO patents (GE Gold Medalist).
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-500"><strong>Education:</strong> M.S. Mechanical Systems Design | MBA Marketing</p>
                  <p className="text-sm text-gray-500"><strong>Credentials:</strong> Executive Program in Aviation Management (IIMB & TBS)</p>
                  <p className="text-sm text-blue-600 font-medium">Top 20 Global Influencers in Market Intelligence</p>
                </div>
              </CardContent>
            </Card>

            {/* Suja B Nanukuttan */}
            <Card className="group hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50/50 border-2 border-transparent hover:border-purple-200 transform hover:scale-102">
              <CardHeader className="text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                    SN
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-900 transition-colors">Suja B Nanukuttan</CardTitle>
                <div className="flex justify-center gap-2 flex-wrap mt-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 hover:scale-105 transition-transform">IT Project Management</Badge>
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 hover:scale-105 transition-transform">17+ Years Experience</Badge>
                  <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 hover:scale-105 transition-transform">PwC Alumni</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-purple-50 to-transparent p-4 rounded-lg">
                  <p className="text-gray-600 leading-relaxed">
                    Accomplished IT Project Management Professional with 17 years of strategic leadership experience in prestigious global organizations 
                    like IGate and PricewaterhouseCoopers. Proven track record of successfully managing cross-functional teams, implementing innovative solutions, 
                    and delivering mission-critical projects across diverse technology domains.
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-500"><strong>Education:</strong> M.Tech Mathematical Modeling | Executive MBA Project Management</p>
                  <p className="text-sm text-gray-500"><strong>Expertise:</strong> Strategic Leadership, Technology Implementation, Stakeholder Management</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 65%, rgba(255,255,255,0.1) 65.5%, rgba(255,255,255,0.1) 66.5%, transparent 67%), linear-gradient(-45deg, transparent 65%, rgba(255,255,255,0.1) 65.5%, rgba(255,255,255,0.1) 66.5%, transparent 67%)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Ready to Transform Your Business?
            </span>
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how AeroEdison Consulting can help you navigate the future of your industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-white to-blue-50 text-blue-900 hover:from-blue-50 hover:to-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AeroEdisonHome;
