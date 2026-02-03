import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    const result = insertLeadSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: fromZodError(result.error).message });
    }

    try {
      const lead = await storage.createLead(result.data);
      res.status(201).json(lead);
    } catch (err) {
      res.status(500).json({ error: "Failed to save lead" });
    }
  });

  return httpServer;
}

