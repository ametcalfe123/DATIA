import { NextResponse } from "next/server"

// Partner page contact form. Configure in Vercel → Settings → Environment Variables:
//   RESEND_API_KEY   (required) Resend API key
//   CONTACT_FORM_TO  (optional) comma-separated recipients, default tcallan@datia.io
//   CONTACT_FORM_FROM (optional) verified sender, default Resend's onboarding address

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set")
    return NextResponse.json({ error: "Contact form is not configured" }, { status: 500 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const { firstName, lastName, email, company, phone, website, message } = body
  const solutions = Array.isArray(body.solutions) ? body.solutions : []

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 })
  }

  const to = (process.env.CONTACT_FORM_TO ?? "tcallan@datia.io").split(",").map((s) => s.trim())
  const from = process.env.CONTACT_FORM_FROM ?? "DATIA Contact Form <onboarding@resend.dev>"
  const name = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`.trim()

  const html = `
    <h2>New Partner Page Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${website ? `<p><strong>Website:</strong> ${escapeHtml(website)}</p>` : ""}
    ${solutions.length ? `<p><strong>Solutions of Interest:</strong> ${solutions.map(escapeHtml).join(", ")}</p>` : ""}
    ${message ? `<p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
    <hr>
    <p><em>Sent from the DATIA partner page contact form.</em></p>
  `

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `New partner inquiry from ${String(firstName ?? "")} ${String(lastName ?? "")}`.trim(),
      html,
    }),
  })

  if (!response.ok) {
    console.error("Contact form: Resend error", response.status, await response.text())
    return NextResponse.json({ error: "Failed to send" }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
