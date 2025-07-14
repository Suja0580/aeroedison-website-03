import AeroNavbar from "@/components/AeroNavbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/commercial-report")}
            className="mb-6 hover:bg-gray-100"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Commercial Reports
          </Button>
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Digital Products</h2>
              <p className="mb-4">
                We provide digital commercial reports in PDF format. Upon successful payment:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>You will receive immediate access to download the purchased report</li>
                <li>Downloads are available for 30 days from the date of purchase</li>
                <li>Reports are for your personal or business use only</li>
                <li>Redistribution or resale of reports is strictly prohibited</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>All payments are processed securely through Stripe</li>
                <li>Prices are displayed in USD and include all applicable taxes</li>
                <li>Payment must be completed before access to digital products is granted</li>
                <li>We reserve the right to change prices at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="mb-4">
                All content, reports, and materials on this website are protected by copyright and 
                other intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our reports for commercial purposes beyond your own business</li>
                <li>Remove copyright notices or attribution</li>
                <li>Reverse engineer or attempt to extract source data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                AeroEdison Consulting shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of our services or products.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of the 
                jurisdiction in which AeroEdison Consulting operates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                For questions regarding these terms, please contact us at:
                <br />
                Email: info@aeroedison.com
                <br />
                Phone: +919620622877
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;