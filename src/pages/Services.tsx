
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Zap, Monitor, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Our <span className="text-blue-300">Services</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive consulting solutions at the intersection of Aviation, Energy, and Digital Transformation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                At AeroEdison Consulting, we offer comprehensive consulting solutions at the intersection of Aviation, Energy, and Digital Transformation. Our integrated approach allows us to deliver innovative strategies that drive efficiency, sustainability, and growth for our clients.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Service Areas</h2>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {/* Aviation Consulting */}
              <Card className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-16 h-16 rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Plane className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-blue-800">Aviation Consulting</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Optimizing operations, enhancing safety, and driving innovation in the aviation sector.
                  </p>
                  <Button variant="outline" className="group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Energy Consulting */}
              <Card className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-r from-green-600 to-green-800 w-16 h-16 rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-green-800">Energy Consulting</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Guiding the transition to sustainable energy solutions and improving energy efficiency.
                  </p>
                  <Button variant="outline" className="group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Digital Transformation Consulting */}
              <Card className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-16 h-16 rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-purple-800">Digital Transformation Consulting</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Leveraging cutting-edge technologies to revolutionize business processes and customer experiences.
                  </p>
                  <Button variant="outline" className="group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our integrated consulting approach can drive innovation and growth for your organization.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
