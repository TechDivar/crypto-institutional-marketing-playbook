INSERT INTO storage.buckets (id, name, public) VALUES ('playbook-assets', 'playbook-assets', true);

CREATE POLICY "Public can read playbook assets" ON storage.objects FOR SELECT USING (bucket_id = 'playbook-assets');