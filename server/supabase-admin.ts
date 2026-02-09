// =====================================================
// Supabase Client - Server-side with Service Role
// =====================================================
// USE ONLY ON SERVER - Has full database access
// Bypasses RLS policies for admin operations
// =====================================================

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
        "Missing Supabase credentials. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY"
    );
}

// Admin client with service role key - bypasses RLS
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

// Types for our leads table
export interface Lead {
    id: string;
    email: string;
    name: string | null;
    created_at: string;
}
