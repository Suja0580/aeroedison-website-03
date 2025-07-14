import AeroNavbar from "@/components/AeroNavbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const ShippingDelivery = () => {
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
          <h1 className="text-4xl font-bold mb-8">Digital Delivery Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Digital Product Delivery</h2>
              <p className="mb-4">
                All our products are digital commercial reports delivered electronically. 
                No physical shipping is involved in our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Instant Delivery Process</h2>
              <p className="mb-4">Upon successful payment completion:</p>
              <ol className="list-decimal pl-6 mb-4">
                <li>You will be redirected to a success page with download instructions</li>
                <li>A confirmation email will be sent to your registered email address</li>
                <li>The email will contain secure download links for your purchased reports</li>
                <li>Downloads are available immediately after payment confirmation</li>
                <li>No waiting time or processing delays</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Download Specifications</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>File Format:</strong> PDF (Portable Document Format)</li>
                <li><strong>Download Limit:</strong> 3 downloads per purchased report</li>
                <li><strong>Access Period:</strong> 30 days from purchase date</li>
                <li><strong>File Size:</strong> Typically 2-10 MB per report</li>
                <li><strong>Compatibility:</strong> All devices with PDF readers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technical Requirements</h2>
              <p className="mb-4">To access your digital reports, you need:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Internet connection for initial download</li>
                <li>PDF reader software (Adobe Reader, browser PDF viewer, etc.)</li>
                <li>Email access to receive download links</li>
                <li>Device storage space for saving files</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Delivery Issues</h2>
              <p className="mb-4">If you experience problems with delivery:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Check your email spam/junk folder for delivery emails</li>
                <li>Ensure your internet connection is stable</li>
                <li>Verify that your browser allows file downloads</li>
                <li>Contact support if download links are not working</li>
                <li>We provide technical support for download issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Lost Download Access</h2>
              <p className="mb-4">
                If you lose access to your download links within the 30-day period:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact our support team with your order details</li>
                <li>We can resend download links to your email</li>
                <li>Provide proof of purchase (order number or email confirmation)</li>
                <li>Additional download attempts may be granted on a case-by-case basis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Security and Privacy</h2>
              <p className="mb-4">
                Our digital delivery system ensures:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Secure encrypted download links</li>
                <li>Time-limited access for security</li>
                <li>No unauthorized distribution</li>
                <li>Protection of your personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Support Contact</h2>
              <p>
                For delivery-related questions or technical support:
                <br />
                Email: info@aeroedison.com
                <br />
                Subject: Delivery Support - [Order Number]
                <br />
                Phone: +919620622877
                <br />
                Response Time: Within 24 hours during business days
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDelivery;