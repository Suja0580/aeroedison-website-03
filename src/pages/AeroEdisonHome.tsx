
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Zap, Cpu, Award, Users, ArrowRight, Mail, Phone } from "lucide-react";

const AeroEdisonHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-blue-300">AeroEdison</span> Consulting
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Navigating the Future of Aviation, Energy, and Digital Transformation
            </p>
            <p className="text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
              AeroEdison Consulting delivers cutting-edge solutions at the intersection of Aviation, Energy, and Digital Transformation. 
              Our expert team empowers organizations to overcome challenges, seize opportunities, and drive sustainable growth in rapidly evolving industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                View Reports Marketplace
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in three interconnected domains that shape the future of industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Plane className="h-8 w-8 text-blue-600 mr-3" />
                  <CardTitle className="text-xl">Aviation</CardTitle>
                </div>
                <CardDescription>
                  Strategic insights and market intelligence for connected aircraft solutions, aerospace innovation, and aviation industry transformation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-green-600 mr-3" />
                  <CardTitle className="text-xl">Energy</CardTitle>
                </div>
                <CardDescription>
                  Sustainable energy solutions, renewable technology integration, and energy sector digital transformation strategies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Cpu className="h-8 w-8 text-purple-600 mr-3" />
                  <CardTitle className="text-xl">Digital Transformation</CardTitle>
                </div>
                <CardDescription>
                  Technology roadmaps, digital innovation strategies, and complex IT project management for enterprise transformation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">Experienced professionals driving innovation across industries</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Biju Nanukuttan */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  BN
                </div>
                <CardTitle className="text-2xl text-gray-900">Biju Nanukuttan</CardTitle>
                <div className="flex justify-center gap-2 flex-wrap mt-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Aviation Expert</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">21 USPTO Patents</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">Top 20 Global Influencer</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  20+ years of experience in market intelligence, strategy, product marketing, and GTM for Connected Aircraft Solutions. 
                  Proven track record in business development, M&A, and roadmaps. An innovation champion with 21 USPTO patents (GE Gold Medalist).
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-500"><strong>Education:</strong> M.S. Mechanical Systems Design | MBA Marketing</p>
                  <p className="text-sm text-gray-500"><strong>Credentials:</strong> Executive Program in Aviation Management (IIMB & TBS)</p>
                  <p className="text-sm text-blue-600 font-medium">Top 20 Global Influencers in Market Intelligence</p>
                </div>
              </CardContent>
            </Card>

            {/* Suja B Nanukuttan */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SN
                </div>
                <CardTitle className="text-2xl text-gray-900">Suja B Nanukuttan</CardTitle>
                <div className="flex justify-center gap-2 flex-wrap mt-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">IT Project Management</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">17+ Years Experience</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">PwC Alumni</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Accomplished IT Project Management Professional with 17 years of strategic leadership experience in prestigious global organizations 
                  like IGate and PricewaterhouseCoopers. Proven track record of successfully managing cross-functional teams, implementing innovative solutions, 
                  and delivering mission-critical projects across diverse technology domains.
                </p>
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
      <section className="py-16 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how AeroEdison Consulting can help you navigate the future of your industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
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
