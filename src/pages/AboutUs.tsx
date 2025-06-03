
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, Leaf, Award, Globe, Cog } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              About <span className="text-blue-300">AeroEdison</span> Consulting
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Pioneering the Future of Aviation, Energy, and Digital Transformation
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Pioneering Integrated Consulting Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pioneering Integrated Consulting Solutions</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                AeroEdison Consulting was founded in 2024 with a vision to bridge the gap between traditional industry practices and futuristic technologies. Our team of seasoned experts brings together decades of experience in Aviation, Energy, and Digital Transformation to deliver unparalleled insights and strategies.
              </p>
              <Card className="bg-blue-50 border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Target className="h-6 w-6 text-blue-600 mr-3" />
                    <CardTitle className="text-xl text-blue-800">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To empower organizations to navigate complex challenges and seize opportunities through expert guidance, cutting-edge research, and tailored strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Award className="h-6 w-6 text-blue-600 mr-3" />
                    <CardTitle className="text-lg">Unyielding Integrity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Upholding the highest ethical standards in all our actions.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Target className="h-6 w-6 text-green-600 mr-3" />
                    <CardTitle className="text-lg">Excellence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Striving for exceptional quality in our work and deliverables.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Lightbulb className="h-6 w-6 text-yellow-600 mr-3" />
                    <CardTitle className="text-lg">Innovation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Continuously pushing boundaries and embracing new ideas.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Users className="h-6 w-6 text-purple-600 mr-3" />
                    <CardTitle className="text-lg">Collaboration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Fostering partnerships and teamwork to achieve shared goals.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Leaf className="h-6 w-6 text-green-600 mr-3" />
                    <CardTitle className="text-lg">Sustainability</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Promoting environmentally responsible practices and solutions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Approach to Consulting */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach to Consulting</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              At AeroEdison Consulting, we believe in a holistic, client-centric approach:
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 mt-1">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Understanding</h3>
                  <p className="text-gray-600">Upholding the highest ethical standards in all our actions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4 mt-1">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-disciplinary Analysis</h3>
                  <p className="text-gray-600">Our team of experts from various fields collaborates to analyze the situation from all angles.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 rounded-full p-3 mr-4 mt-1">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative Solution Design</h3>
                  <p className="text-gray-600">We leverage our cross-sector expertise to design innovative integrated solutions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-3 mr-4 mt-1">
                  <Cog className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Support</h3>
                  <p className="text-gray-600">We don't just advise; we partner with our clients throughout the implementation process.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 mt-1">
                  <ArrowRight className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
                  <p className="text-gray-600">We believe in long-term partnerships, continuously monitoring and optimizing our solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What Sets AE Apart */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Sets AE Apart</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              AeroEdison Consulting distinguishes itself through:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Integrated Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our unique combination of Aviation, Energy, and Digital Transformation knowledge allows us to see connections and opportunities others miss.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Future-Focused Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">We don't just solve today's problems; we prepare our clients for tomorrow's challenges and opportunities.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Customized Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">We recognize that every client is unique, tailoring our solutions to each specific situation rather than offering one-size-fits-all answers.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Commitment to Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our solutions always consider environmental impact, helping our clients achieve their goals sustainably.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Continuous Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our dedicated R&D team ensures we're always at the cutting edge of industry trends and technologies.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Global Perspective, Local Insight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">While we operate globally, we maintain deep understanding of local markets and regulations.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Vision, Mission, Purpose */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl mb-8 text-blue-100">
              At AeroEdison Consulting, we're not just consultants – we're partners in your success, committed to driving innovation and excellence in Aviation, Energy, and Digital Transformation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-blue-300" />
                  </div>
                  <CardTitle className="text-xl text-center">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">To be the global leader in innovative consulting solutions for Aviation, Energy, and Digital Transformation, driving sustainable growth and technological advancement.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-blue-300" />
                  </div>
                  <CardTitle className="text-xl text-center">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">AeroEdison Consulting empowers organizations to navigate complex challenges and seize opportunities in Aviation, Energy, and Digital Transformation through expert guidance, cutting-edge research, and tailored strategies.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-blue-300" />
                  </div>
                  <CardTitle className="text-xl text-center">Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">To accelerate the evolution of industries by bridging traditional practices with future technologies, fostering innovation, and promoting sustainable development.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
