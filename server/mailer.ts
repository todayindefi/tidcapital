import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import type { InsertContactInquiry } from "@shared/schema";

// In production the password comes from a systemd credential (root-only file
// passed via LoadCredential), not from .env
function smtpPassword(): string | undefined {
  const dir = process.env.CREDENTIALS_DIRECTORY;
  if (dir) {
    const file = path.join(dir, "smtp_pass");
    if (fs.existsSync(file)) return fs.readFileSync(file, "utf-8").trim();
  }
  return process.env.SMTP_PASS;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465", 10),
  secure: (process.env.SMTP_PORT || "465") === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: smtpPassword(),
  },
});

export async function sendContactEmail(inquiry: InsertContactInquiry) {
  if (!process.env.SMTP_HOST) {
    throw new Error("SMTP_HOST is not configured");
  }

  const lines = [
    `Name: ${inquiry.name}`,
    `Company: ${inquiry.company || "-"}`,
    `Email: ${inquiry.email}`,
    `Inquiry type: ${inquiry.inquiryType}`,
    `AUM: ${inquiry.aum || "-"}`,
    "",
    inquiry.message,
  ];

  await transporter.sendMail({
    from: process.env.CONTACT_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_TO || "info@todayindefi.com",
    replyTo: inquiry.email,
    subject: `TID Capital inquiry: ${inquiry.inquiryType} from ${inquiry.name}`,
    text: lines.join("\n"),
  });
}
