-- Create a simple function to get Razorpay configuration
CREATE OR REPLACE FUNCTION get_razorpay_key()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- This is a placeholder function
  -- In production, you should return the actual key from your secrets
  RETURN 'rzp_test_1DP5mmOlF5G5ag';
END;
$$;