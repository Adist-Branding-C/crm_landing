require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const PORT = process.env.PORT || 5000;
const EMAIL_TO = process.env.DEMO_REQUEST_TO || "nithinbalakrishnan569@gmail.com";


// --- Debug: confirm env vars are actually loading ---
console.log("---- SMTP Config Loaded ----");
console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
console.log("SMTP_SECURE:", process.env.SMTP_SECURE);
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "(set, hidden)" : "MISSING");
console.log("DEMO_REQUEST_TO:", EMAIL_TO);
console.log("-----------------------------");

const allowedOrigins = (
  process.env.CORS_ORIGIN || "http://localhost:3000,http://localhost:3001"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

const REQUIRED_FIELDS = ["name", "phone", "email", "company", "teamSize"];

const FIELD_LABELS = {
  name: "Full Name",
  phone: "Phone",
  email: "Email",
  company: "Company Name",
  teamSize: "Team Size",
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const buildEmailHtml = (data) => {
  const rows = REQUIRED_FIELDS.map(
    (field) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eee;">${FIELD_LABELS[field]}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(data[field])}</td>
      </tr>`
  ).join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#1a1a1a;">New Demo Request</h2>
      <p style="color:#666;">A visitor requested a free product demo.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #eee;">
        ${rows}
      </table>
      <p style="color:#999;font-size:12px;margin-top:16px;">Sent from the Leadist website demo form.</p>
    </div>`;
};

// Only fall back to jsonTransport (fake/no-op sender) if SMTP_HOST is truly missing
const transporter = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : nodemailer.createTransport({ jsonTransport: true });

// Verify SMTP connection/auth at startup so bad credentials fail loudly, not silently
if (process.env.SMTP_HOST) {
  transporter.verify((err, success) => {
    if (err) {
      console.error("❌ SMTP verification FAILED:", err.message);
      console.error(
        "   -> Check SMTP_HOST/SMTP_PORT/SMTP_SECURE match your provider, and SMTP_USER/SMTP_PASS are correct."
      );
    } else {
      console.log("✅ SMTP verified — ready to send emails");
    }
  });
} else {
  console.warn(
    "⚠️  SMTP_HOST not set — using jsonTransport (emails will NOT actually be sent, just logged)."
  );
}

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/demo-request", async (req, res) => {
  try {
    const data = req.body || {};

    const missing = REQUIRED_FIELDS.filter((field) => {
      const value = data[field];
      return value === undefined || value === null || String(value).trim() === "";
    });

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
        fields: missing,
      });
    }

    const info = await transporter.sendMail({
      from: `"Leadist Website" <${process.env.SMTP_USER || "no-reply@localhost"}>`,
      to: EMAIL_TO,
      replyTo: data.email,
      subject: `New Demo Request - ${data.company}`,
      html: buildEmailHtml(data),
    });

    console.log("✅ Email send attempt result:", info.messageId || info);

    return res.status(200).json({
      success: true,
      message: "Demo request received. We will get back to you soon.",
    });
  } catch (error) {
    console.error("❌ Failed to process demo request:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Demo request backend listening on http://localhost:${PORT}`);
});