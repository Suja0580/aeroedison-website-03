import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Clock, Send, Plane } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import AeroNavbar from "@/components/AeroNavbar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: values
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <AeroNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              Get in <span className="font-semibold text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Let's discuss how AeroEdison Consulting can help you navigate the future of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Contact <span className="font-semibold">Information</span>
              </h2>
              
              <div className="space-y-8">
                <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Email Us</CardTitle>
                        <CardDescription>Send us a message anytime</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-medium">info@aeroedison.com</p>
                    <p className="text-gray-600 text-sm mt-1">We typically respond within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Call Us</CardTitle>
                        <CardDescription>Speak with our experts</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-medium">+919620622877</p>
                    <p className="text-gray-600 text-sm mt-1">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Visit Us</CardTitle>
                        <CardDescription>Office Address</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-medium">B-20, 3rd Cross, Anugraha Layout,</p>
                    <p className="text-gray-900 font-medium">Kodigehalli Main Road, Near Hoodi Railway Station, Bangalore-560048</p>
                    <p className="text-gray-600 text-sm mt-1">By appointment only</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Business Hours</CardTitle>
                        <CardDescription>When we're available</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="text-gray-900 font-medium">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-gray-900 font-medium">Saturday: 10:00 AM - 2:00 PM IST</p>
                      <p className="text-gray-900 font-medium">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Send us a <span className="font-semibold">Message</span>
              </h2>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help you?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project, requirements, or any questions you have..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                        <Send className="mr-2 h-5 w-5" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-4">
            Ready to Start Your <span className="font-semibold">Transformation Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts and discover how we can help accelerate your business growth.
          </p>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            <Phone className="mr-2 h-5 w-5" />
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
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
                <li><Link to="/commercial-report" className="hover:text-blue-600">Commercial Reports</Link></li>
                <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
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

export default ContactUs;
