CREATE TABLE public.playbook_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'hero',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.playbook_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe" ON public.playbook_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "No public reads" ON public.playbook_subscribers
  FOR SELECT USING (false);