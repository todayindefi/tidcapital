import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendContactEmail } from "./mailer";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

// Simple per-IP limit so the form can't be used to flood the inbox
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recentSubmissions.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_LIMIT) {
    recentSubmissions.set(ip, hits);
    return true;
  }
  hits.push(now);
  recentSubmissions.set(ip, hits);
  return false;
}

const contactRequestSchema = insertContactInquirySchema.extend({
  name: z.string().min(1).max(200),
  company: z.string().max(200).nullish(),
  email: z.string().email().max(200),
  inquiryType: z.string().min(1).max(100),
  aum: z.string().max(100).nullish(),
  message: z.string().min(1).max(5000),
  // honeypot: hidden field real users never fill in
  website: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission: emailed to CONTACT_TO
  app.post("/api/contact", async (req, res) => {
    try {
      const { website, ...inquiry } = contactRequestSchema.parse(req.body);

      if (website) {
        // bot filled the honeypot; pretend it worked
        return res.json({ success: true });
      }

      const ip = (req.headers["cf-connecting-ip"] as string) || req.ip || "unknown";
      if (isRateLimited(ip)) {
        return res.status(429).json({
          success: false,
          message: "Too many submissions, please try again later",
        });
      }

      await sendContactEmail(inquiry);
      res.json({ success: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Could not send your message, please email info@todayindefi.com directly"
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
