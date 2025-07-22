import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SendReportRequest {
  email: string;
  reportTitle: string;
  sessionId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, reportTitle, sessionId }: SendReportRequest = await req.json();

    console.log(`Sending report "${reportTitle}" to ${email} for session ${sessionId}`);

    const emailResponse = await resend.emails.send({
      from: "AeroEdison Reports <onboarding@resend.dev>",
      to: [email],
      subject: `Your Commercial Report: ${reportTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 24px;">Thank you for your purchase!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Your commercial report is ready for download</p>
          </div>
          
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h2 style="color: #1e40af; margin-top: 0;">Report Details</h2>
            <p><strong>Report:</strong> ${reportTitle}</p>
            <p><strong>Transaction ID:</strong> ${sessionId}</p>
            <p><strong>Delivery Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>
          
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin-top: 0;">Download Your Report</h3>
            <p>Your comprehensive commercial report is attached to this email as a PDF document. This report contains valuable insights and analysis specifically prepared for your business needs.</p>
            
            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin: 15px 0;">
              <p style="margin: 0; color: #1e40af;"><strong>Note:</strong> This report is confidential and intended solely for your business use. Please do not share or distribute without proper authorization.</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; margin: 0;">If you have any questions about your report, please don't hesitate to contact us.</p>
            <p style="color: #64748b; margin: 5px 0 0 0;">Best regards,<br>The AeroEdison Team</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `${reportTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Report.pdf`,
          content: await getReportFromStorage(reportTitle),
          contentType: 'application/pdf'
        }
      ]
    });

    console.log("Report email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      message: "Report sent successfully",
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending report email:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

// Function to retrieve report from Supabase Storage
async function getReportFromStorage(reportTitle: string): Promise<Uint8Array> {
  try {
    console.log(`Retrieving report: ${reportTitle} from storage bucket 'reports'`);
    
    // For testing, use the existing PDF file in storage
    // In production, you would map report titles to actual filenames
    const filename = 'Digital Aviation Readiness_Benchmarking Top OEMs.pdf';
    console.log(`Using existing file: ${filename}`);
    
    // Download the file from Supabase Storage
    const { data, error } = await supabase.storage
      .from('reports')
      .download(filename);
    
    if (error) {
      console.error('Error downloading report from storage:', error);
      throw new Error(`Failed to retrieve report: ${error.message}`);
    }
    
    if (!data) {
      throw new Error(`Report file not found: ${filename}`);
    }
    
    // Convert the blob to Uint8Array
    const arrayBuffer = await data.arrayBuffer();
    return new Uint8Array(arrayBuffer);
    
  } catch (error) {
    console.error('Error in getReportFromStorage:', error);
    throw error;
  }
}

serve(handler);