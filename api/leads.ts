// =====================================================
// Vercel Serverless Function: POST /api/leads
// =====================================================
// Public endpoint — waitlist email signup
// Inserts into Supabase "leads" table
// =====================================================

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only accept POST
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email, name } = req.body || {};

    // Basic validation
    if (!email || typeof email !== "string") {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        const { data, error } = await supabase
            .from("leads")
            .insert({ email, name: name || null })
            .select()
            .single();

        if (error) {
            // Handle duplicate email (Postgres unique violation)
            if (error.code === "23505") {
                return res
                    .status(409)
                    .json({ error: "This email is already on the waitlist" });
            }
            console.error("Supabase insert error:", error);
            return res
                .status(500)
                .json({ error: `Failed to add to waitlist: ${error.message}` });
        }

        return res.status(201).json(data);
    } catch (err: any) {
        console.error("Unexpected error:", err);
        return res.status(500).json({ error: err.message || "Failed to save lead" });
    }
}
