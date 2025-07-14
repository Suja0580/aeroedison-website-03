import AeroNavbar from "@/components/AeroNavbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const CancellationRefund = () => {
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
          <h1 className="text-4xl font-bold mb-8">Cancellation and Refund Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Digital Products Refund Policy</h2>
              <p className="mb-4">
                Due to the instant delivery nature of our digital products (PDF reports), 
                we have a specific refund policy:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Refunds are available within 7 days of purchase</li>
                <li>Refund requests must be submitted via email with a valid reason</li>
                <li>Once a report has been downloaded, refunds are subject to review</li>
                <li>No refunds are provided after 7 days from the purchase date</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Eligible Refund Reasons</h2>
              <p className="mb-4">Refunds may be granted for the following reasons:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Technical issues preventing download of the purchased report</li>
                <li>Duplicate purchases made by error</li>
                <li>Significant content quality issues with the report</li>
                <li>Incorrect product delivered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Non-Refundable Situations</h2>
              <p className="mb-4">Refunds will not be provided in the following cases:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Change of mind after successful download</li>
                <li>Reports not meeting expectations (content preferences)</li>
                <li>User error in product selection</li>
                <li>Requests made after the 7-day period</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
              <p className="mb-4">To request a refund:</p>
              <ol className="list-decimal pl-6 mb-4">
                <li>Contact us at info@aeroedison.com within 7 days of purchase</li>
                <li>Provide your order number and reason for refund</li>
                <li>Our team will review your request within 2-3 business days</li>
                <li>If approved, refunds will be processed to your original payment method</li>
                <li>Refund processing may take 5-10 business days to appear in your account</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
              <p className="mb-4">
                Since our products are delivered instantly upon payment completion, 
                cancellation is only possible before the payment is processed. 
                Once payment is complete and the download link is provided, 
                the transaction is considered final unless eligible for refund under our policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact for Refunds</h2>
              <p>
                For refund requests or questions about this policy:
                <br />
                Email: info@aeroedison.com
                <br />
                Subject: Refund Request - [Order Number]
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

export default CancellationRefund;