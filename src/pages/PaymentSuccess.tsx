
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, ArrowLeft, Mail } from "lucide-react";
import AeroNavbar from "@/components/AeroNavbar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const sessionId = searchParams.get("session_id");
  const reportTitle = searchParams.get("report_title") || "Commercial Aviation Market Analysis";
  const customerEmail = searchParams.get("email") || "customer@example.com";
  const { toast } = useToast();

  const sendReportEmail = async () => {
    setIsSendingEmail(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-report-email', {
        body: {
          email: customerEmail,
          reportTitle: reportTitle,
          sessionId: sessionId
        }
      });

      if (error) throw error;

      setEmailSent(true);
      toast({
        title: "Report Sent!",
        description: `Your commercial report has been sent to ${customerEmail}`,
      });
    } catch (error) {
      console.error('Error sending report:', error);
      toast({
        title: "Email Error",
        description: "Failed to send report. Please contact support.",
        variant: "destructive"
      });
    } finally {
      setIsSendingEmail(false);
    }
  };

  useEffect(() => {
    if (sessionId) {
      // Simulate payment verification
      setTimeout(async () => {
        setPaymentVerified(true);
        setIsVerifying(false);
        toast({
          title: "Payment Successful!",
          description: "Your commercial report purchase has been confirmed.",
        });
        
        // Automatically send the report email after payment verification
        setTimeout(() => {
          sendReportEmail();
        }, 1000);
      }, 2000);
    } else {
      setIsVerifying(false);
    }
  }, [sessionId, toast]);

  if (!sessionId) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AeroNavbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Payment Session Not Found</h1>
          <p className="text-gray-600 mb-6">We couldn't find your payment session.</p>
          <Link to="/commercial-report">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Reports
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AeroNavbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {isVerifying ? (
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
                <CardTitle>Verifying Payment...</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Please wait while we confirm your payment.</p>
              </CardContent>
            </Card>
          ) : paymentVerified ? (
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-2xl text-green-600">Payment Successful!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600">
                  Thank you for your purchase. Your commercial report will be available for download shortly.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Session ID:</strong> {sessionId}
                  </p>
                  <p className="text-sm text-blue-800 mt-1">
                    <strong>Report:</strong> {reportTitle}
                  </p>
                  <p className="text-sm text-blue-800 mt-1">
                    <strong>Email:</strong> {customerEmail}
                  </p>
                </div>

                {/* Email Status */}
                <div className={`p-4 rounded-lg border-2 ${
                  emailSent 
                    ? 'bg-green-50 border-green-200' 
                    : isSendingEmail 
                      ? 'bg-yellow-50 border-yellow-200' 
                      : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center justify-center space-x-2">
                    {isSendingEmail ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
                        <span className="text-sm text-yellow-700">Sending report to your email...</span>
                      </>
                    ) : emailSent ? (
                      <>
                        <Mail className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-700">Report successfully sent to {customerEmail}</span>
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">Preparing to send report...</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-900 hover:bg-blue-950">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                  
                  <Link to="/commercial-report">
                    <Button variant="outline">
                      Browse More Reports
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-red-600">Payment Verification Failed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  We couldn't verify your payment. Please contact support if you believe this is an error.
                </p>
                <Link to="/commercial-report">
                  <Button>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Return to Reports
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
