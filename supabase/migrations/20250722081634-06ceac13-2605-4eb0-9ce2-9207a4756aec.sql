-- Check if storage bucket exists and create if needed
INSERT INTO storage.buckets (id, name, public) 
VALUES ('reports', 'reports', false)
ON CONFLICT (id) DO NOTHING;

-- Create policy to allow authenticated users to upload files
CREATE POLICY "Allow authenticated users to upload reports" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'reports' AND auth.role() = 'authenticated');

-- Create policy to allow authenticated users to view files  
CREATE POLICY "Allow authenticated users to view reports" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'reports' AND auth.role() = 'authenticated');

-- Create policy to allow public access to view files (if needed)
CREATE POLICY "Allow public access to view reports" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'reports');