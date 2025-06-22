
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Smartphone } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reportTitle: string;
  price: string;
}

const PaymentDialog = ({ open, onOpenChange, reportTitle, price }: PaymentDialogProps) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: `Your purchase of "${reportTitle}" has been processed.`,
      });
      setIsProcessing(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-sm text-gray-900">{reportTitle}</h4>
            <p className="text-lg font-bold text-blue-900">{price}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Select Payment Method</h4>
            
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              {/* Card Payment */}
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="cursor-pointer flex items-center space-x-2">
                      <CreditCard className="h-5 w-5" />
                      <span>Credit/Debit Card</span>
                    </Label>
                  </div>
                </CardHeader>
                {paymentMethod === "card" && (
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Input placeholder="Card Number" />
                      <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="MM/YY" />
                        <Input placeholder="CVV" />
                      </div>
                      <Input placeholder="Cardholder Name" />
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* PayPal */}
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="cursor-pointer flex items-center space-x-2">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">P</span>
                      </div>
                      <span>PayPal</span>
                    </Label>
                  </div>
                </CardHeader>
                {paymentMethod === "paypal" && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600">
                      You will be redirected to PayPal to complete your payment.
                    </p>
                  </CardContent>
                )}
              </Card>

              {/* UPI */}
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="cursor-pointer flex items-center space-x-2">
                      <Smartphone className="h-5 w-5" />
                      <span>UPI Payment</span>
                    </Label>
                  </div>
                </CardHeader>
                {paymentMethod === "upi" && (
                  <CardContent className="pt-0">
                    <Input placeholder="Enter UPI ID (e.g., user@paytm)" />
                  </CardContent>
                )}
              </Card>
            </RadioGroup>
          </div>

          <Button 
            onClick={handlePayment} 
            className="w-full bg-blue-900 hover:bg-blue-950"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : `Pay ${price}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
