import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  fullName?: unknown;
  phone?: unknown;
  email?: unknown;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();

  // Server-side validation
  if (fullName.length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, DEMO_INBOX } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Book-demo: SMTP env vars are not configured.");
    return NextResponse.json(
      { error: "Email is not configured. Please try again later." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for 465, false for 587/STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = DEMO_INBOX || SMTP_USER;
  const text = `New demo request from the RemedyEngine site

Full name: ${fullName}
Phone:     ${phone}
Email:     ${email}`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0B1F33">
      <h2 style="color:#075E4C;margin:0 0 12px">New demo request</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#4C6473">Full name</td><td style="padding:4px 0"><strong>${escapeHtml(fullName)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#4C6473">Phone</td><td style="padding:4px 0"><strong>${escapeHtml(phone)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#4C6473">Email</td><td style="padding:4px 0"><strong>${escapeHtml(email)}</strong></td></tr>
      </table>
      <p style="color:#4C6473;font-size:13px;margin-top:16px">Sent from the RemedyEngine Book-a-demo form.</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `RemedyEngine Demo Requests <${SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `New demo request from ${fullName}`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Book-demo: failed to send email", err);
    return NextResponse.json(
      { error: "Could not send your request. Please try again." },
      { status: 502 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
