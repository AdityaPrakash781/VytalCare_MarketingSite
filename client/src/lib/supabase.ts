// =====================================================
// Supabase Client - Client-side (Public Anon Key)
// =====================================================
// Safe for frontend - Limited to public RLS policies
// Can only INSERT into leads table
// =====================================================

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        "Missing Supabase credentials. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY"
    );
}

// Public client - RLS policies enforced
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our leads table
export interface Lead {
    id: string;
    email: string;
    name: string | null;
    created_at: string;
}
