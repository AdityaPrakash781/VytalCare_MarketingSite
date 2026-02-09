-- =====================================================
-- VytalCare Waitlist - Supabase Schema Migration
-- =====================================================
-- This keeps the existing 'leads' table minimal
-- Just email collection - no overengineering
-- =====================================================

-- The leads table already exists in shared/schema.ts
-- This migration ensures it's production-ready for Supabase

-- Add RLS (Row Level Security) to leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public insert" ON leads;
DROP POLICY IF EXISTS "Deny public select" ON leads;
DROP POLICY IF EXISTS "Deny public update" ON leads;
DROP POLICY IF EXISTS "Deny public delete" ON leads;

-- Policy 1: Allow anyone to insert (for form submissions)
CREATE POLICY "Allow public insert"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy 2: Deny public read access (admin only via service role)
CREATE POLICY "Deny public select"
  ON leads
  FOR SELECT
  TO public
  USING (false);

-- Policy 3: Deny public updates
CREATE POLICY "Deny public update"
  ON leads
  FOR UPDATE
  TO public
  USING (false);

-- Policy 4: Deny public deletes (admin only via service role)
CREATE POLICY "Deny public delete"
  ON leads
  FOR DELETE
  TO public
  USING (false);

-- Add index on email for fast lookups (duplicate checking)
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Add index on created_at for sorting (most recent first)
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- =====================================================
-- Notes:
-- =====================================================
-- 1. Service role bypasses RLS - use for admin dashboard
-- 2. Public anon key can only INSERT (form submissions)
-- 3. Email uniqueness enforced at schema level
-- 4. Timestamps handled by Drizzle default
-- =====================================================
