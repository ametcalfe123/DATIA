import { Resend } from "resend"

export const runtime = "nodejs"

const RECIPIENTS = [
  "rdavis@datia.io",
  "ametcalfe@datiak12.io",
  "sbevilacqua@datia.io",
  "terry@datiak12.io",
]

const ALLOWED_SOLUTIONS = new Set([
  "ABMxi",
  "Targeted Guaranteed Leads (TGL)",
  "Persona-Based Ad Targeting (PUSH)",
  "Content Studio",
  "Research",
  "Web Seminars",
  "BDR Services",
])

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DOMAIN_PATTERN = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

type PartnerContactPayload = {
  firstName: string
  lastName: string
  title: string
  email: string
  phone: string
  company: string
  website: string
  solutions: string[]
  message: string
}

function cleanField(value: unknown, maxLength: number) {
  if (typeof value !== "string") return ""
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, maxLength)
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }
    return entities[character]
  })
}

function parsePayload(value: unknown): PartnerContactPayload | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null

  const body = value as Record<string, unknown>
  const firstName = cleanField(body.firstName, 100)
  const lastName = cleanField(body.lastName, 100)
  const title = cleanField(body.title, 150)
  const email = cleanField(body.email, 254).toLowerCase()
  const company = cleanField(body.company, 200)
  const phone = cleanField(body.phone, 80)
  const website = cleanField(body.website, 500)
  const message = cleanField(body.message, 5000)
  const rawSolutions = Array.isArray(body.solutions) ? body.solutions : []

  if (!firstName || !lastName || !company || !EMAIL_PATTERN.test(email)) return null
  if (rawSolutions.length > ALLOWED_SOLUTIONS.size) return null
  if (rawSolutions.some((solution) => typeof solution !== "string" || !ALLOWED_SOLUTIONS.has(solution))) return null

  return {
    firstName,
    lastName,
    title,
    email,
    company,
    phone,
    website,
    message,
    solutions: [...new Set(rawSolutions as string[])],
  }
}

export async function POST(request: Request) {
  const idempotencyKey = request.headers.get("Idempotency-Key") ?? ""
  if (!UUID_PATTERN.test(idempotencyKey)) {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }

  const rawBody = await request.text()
  if (rawBody.length > 16_000) {
    return Response.json({ error: "The form submission is too large." }, { status: 413 })
  }

  let body: unknown
  try {
    body = JSON.parse(rawBody)
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 })
  }

  const submission = parsePayload(body)
  if (!submission) {
    return Response.json({ error: "Please check the required fields and try again." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const senderDomain = process.env.RESEND_EMAIL_DOMAIN?.trim()
  if (!apiKey || !senderDomain || !DOMAIN_PATTERN.test(senderDomain)) {
    console.error("[partner-contact] Email delivery configuration is unavailable.")
    return Response.json({ error: "Email delivery is temporarily unavailable." }, { status: 503 })
  }

  const resend = new Resend(apiKey)
  const fullName = `${submission.firstName} ${submission.lastName}`
  const rows = [
    ["Name", fullName],
    ["Title", submission.title || "-"],
    ["Email", submission.email],
    ["Phone", submission.phone || "-"],
    ["Company", submission.company],
    ["Website", submission.website || "-"],
    ["Solutions of interest", submission.solutions.join(", ") || "-"],
    ["Message", submission.message || "-"],
  ]
  const htmlRows = rows
    .map(([label, content]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(content).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")
  const textBody = rows.map(([label, content]) => `${label}: ${content || "-"}`).join("\n\n")

  const { data, error } = await resend.emails.send(
    {
      from: `DATIA Partner Form <no-reply@${senderDomain}>`,
      to: RECIPIENTS,
      replyTo: submission.email,
      subject: `New DATIA partner inquiry from ${fullName}`,
      text: textBody,
      html: `<h2>New DATIA partner inquiry</h2><table cellpadding="8" cellspacing="0">${htmlRows}</table>`,
    },
    { idempotencyKey: `partner-contact/${idempotencyKey}` },
  )

  if (error) {
    console.error("[partner-contact] Resend rejected a form submission:", error.message)
    return Response.json({ error: "Your message could not be sent. Please try again." }, { status: 502 })
  }

  return Response.json({ success: true, id: data?.id })
}
