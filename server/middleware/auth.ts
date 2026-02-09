// =====================================================
// Basic Auth Middleware for Admin Routes
// =====================================================
// Simple password protection for internal admin dashboard
// Production-safe for phase 1
// =====================================================

import type { Request, Response, NextFunction } from "express";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!ADMIN_PASSWORD) {
    console.warn("⚠️  WARNING: ADMIN_PASSWORD not set - admin routes unprotected");
}

/**
 * Basic authentication middleware
 * Expects Authorization header: "Bearer <password>"
 */
export function requireAuth(req: Request, res: Response, next: NextFunction) {
    // Skip auth if no password set (development only)
    if (!ADMIN_PASSWORD) {
        console.warn("Auth bypassed - no ADMIN_PASSWORD set");
        return next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            error: "Unauthorized",
            message: "Missing or invalid Authorization header",
        });
    }

    const password = authHeader.substring(7); // Remove "Bearer " prefix

    if (password !== ADMIN_PASSWORD) {
        return res.status(401).json({
            error: "Unauthorized",
            message: "Invalid password",
        });
    }

    // Valid password - proceed
    next();
}
