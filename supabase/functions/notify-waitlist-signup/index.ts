// =====================================================
// VytalCare Waitlist - Admin Notification Edge Function
// =====================================================
// Sends email to admin when new user joins waitlist
// Triggered by Supabase database webhook
// =====================================================

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL");

interface WebhookPayload {
    type: "INSERT" | "UPDATE" | "DELETE";
    table: string;
    record: {
        id: string;
        email: string;
        name?: string;
        created_at: string;
    };
    schema: string;
    old_record: null | any;
}

serve(async (req) => {
    try {
        // Only accept POST requests
        if (req.method !== "POST") {
            return new Response("Method not allowed", { status: 405 });
        }

        // Parse webhook payload
        const payload: WebhookPayload = await req.json();

        // Validate payload
        if (payload.type !== "INSERT" || payload.table !== "leads") {
            return new Response("Ignored: Not a leads insert event", { status: 200 });
        }

        const { email, created_at } = payload.record;

        // Validate environment variables
        if (!RESEND_API_KEY || !ADMIN_EMAIL) {
            console.error("Missing RESEND_API_KEY or ADMIN_EMAIL");
            // Don't block signup - just log and return success
            return new Response("Configuration error (logged)", { status: 200 });
        }

        // Send notification email via Resend
        const emailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "VytalCare Waitlist <onboarding@resend.dev>",
                to: [ADMIN_EMAIL],
                subject: "🎉 New Waitlist Signup",
                html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; }
                .content { background: #f9fafb; padding: 30px; border-radius: 8px; margin-top: 20px; }
                .info-row { display: flex; margin: 15px 0; padding: 15px; background: white; border-radius: 6px; }
                .label { font-weight: 600; color: #6b7280; min-width: 120px; }
                .value { color: #111827; font-weight: 500; }
                .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">New Waitlist Signup</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone just joined your VytalCare waitlist</p>
                </div>
                <div class="content">
                  <div class="info-row">
                    <span class="label">Email:</span>
                    <span class="value">${email}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Joined at:</span>
                    <span class="value">${new Date(created_at).toLocaleString("en-US", {
                    dateStyle: "full",
                    timeStyle: "short",
                })}</span>
                  </div>
                </div>
                <div class="footer">
                  <p>View all signups in your <a href="https://vytalcare.com/admin/waitlist" style="color: #667eea;">admin dashboard</a></p>
                </div>
              </div>
            </body>
          </html>
        `,
            }),
        });

        if (!emailResponse.ok) {
            const error = await emailResponse.text();
            console.error("Resend API error:", error);
            // Don't block signup - just log error
            return new Response("Email send failed (logged)", { status: 200 });
        }

        const result = await emailResponse.json();
        console.log("Email sent successfully:", result);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        // Log error but don't block the signup
        console.error("Edge Function error:", error);
        return new Response(
            JSON.stringify({ error: "Internal error (logged)" }),
            {
                status: 200, // Return 200 to prevent webhook retries
                headers: { "Content-Type": "application/json" },
            }
        );
    }
});
