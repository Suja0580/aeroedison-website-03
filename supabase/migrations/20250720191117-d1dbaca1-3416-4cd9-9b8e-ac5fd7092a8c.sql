-- Create storage bucket for reports
INSERT INTO storage.buckets (id, name, public) VALUES ('reports', 'reports', false);

-- Create policies for report access
CREATE POLICY "Authenticated users can view reports" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'reports' AND auth.role() = 'authenticated');

-- Allow service role to manage reports (for uploading via admin)
CREATE POLICY "Service role can manage reports" 
ON storage.objects 
FOR ALL 
USING (bucket_id = 'reports' AND auth.jwt() ->> 'role' = 'service_role');