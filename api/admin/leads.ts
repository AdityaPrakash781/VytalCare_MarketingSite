// =====================================================
// Vercel Serverless Function: /api/admin/leads
// =====================================================
// Protected admin endpoints:
//   GET  /api/admin/leads       — list all leads
//   DELETE /api/admin/leads?id= — delete a lead by ID
// Auth: Bearer token matching ADMIN_PASSWORD env var
// =====================================================

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
});

function checkAuth(req: VercelRequest, res: VercelResponse): boolean {
    if (!ADMIN_PASSWORD) {
        // No password set — block access in production
        res.status(500).json({ error: "ADMIN_PASSWORD not configured" });
        return false;
    }

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({
            error: "Unauthorized",
            message: "Missing or invalid Authorization header",
        });
        return false;
    }

    const password = authHeader.substring(7);
    if (password !== ADMIN_PASSWORD) {
        res.status(401).json({
            error: "Unauthorized",
            message: "Invalid password",
        });
        return false;
    }

    return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Auth check for all methods
    if (!checkAuth(req, res)) return;

    // GET — list all leads
    if (req.method === "GET") {
        try {
            const { data, error } = await supabase
                .from("leads")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                return res
                    .status(500)
                    .json({ error: `Failed to fetch leads: ${error.message}` });
            }

            return res.status(200).json(data);
        } catch (err: any) {
            return res
                .status(500)
                .json({ error: err.message || "Failed to fetch leads" });
        }
    }

    // DELETE — delete a lead by ID (query param)
    if (req.method === "DELETE") {
        const id = req.query.id as string;
        if (!id) {
            return res.status(400).json({ error: "Missing 'id' query parameter" });
        }

        try {
            const { error } = await supabase.from("leads").delete().eq("id", id);

            if (error) {
                return res
                    .status(500)
                    .json({ error: `Failed to delete lead: ${error.message}` });
            }

            return res.status(204).send(undefined);
        } catch (err: any) {
            return res
                .status(500)
                .json({ error: err.message || "Failed to delete lead" });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
}
