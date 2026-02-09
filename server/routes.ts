import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "../shared/schema";
import { fromZodError } from "zod-validation-error";
import { requireAuth } from "./middleware/auth";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Public endpoint - Create lead (form submission)
  app.post("/api/leads", async (req, res) => {
    const result = insertLeadSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: fromZodError(result.error).message });
    }

    try {
      const lead = await storage.createLead(result.data);
      res.status(201).json(lead);
    } catch (err: any) {
      // User-friendly error for duplicates
      const statusCode = err.message.includes("already on the waitlist") ? 409 : 500;
      res.status(statusCode).json({ error: err.message || "Failed to save lead" });
    }
  });

  // Admin endpoints - Protected with basic auth
  app.get("/api/admin/leads", requireAuth, async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to fetch leads" });
    }
  });

  app.delete("/api/admin/leads/:id", requireAuth, async (req, res) => {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      await storage.deleteLead(id);
      res.status(204).send();
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to delete lead" });
    }
  });

  return httpServer;
}


