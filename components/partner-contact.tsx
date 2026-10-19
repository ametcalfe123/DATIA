"use client"

import Image from "next/image"
import { useRef, useState, type FormEvent } from "react"
import { X } from "lucide-react"

type TeamMember = {
  name: string
  role: string
  image: string | null
  email?: string
  phone?: string
  bio?: string
}

const team: TeamMember[] = [
  {
    name: "Jim Callan",
    role: "Founder/CEO",
    image: "partner-jim-callan.jpg",
    email: "jcallan@datia.io",
    phone: "404.353.5276",
    bio: "Jim Callan is the Founder and CEO of DATIA, bringing over 20 years of experience in B2B marketing and data intelligence. He has a proven track record of building successful marketing technology companies and helping organizations leverage data-driven insights to accelerate growth. Jim's vision for DATIA centers on providing marketing and sales leaders with the intelligence they need to make informed decisions and drive measurable results.",
  },
  {
    name: "Kurt Dyrli",
    role: "Editorial Director",
    image: "partner-kurt-dyrli.jpg",
    email: "kdyrli@datia.io",
    phone: "860.916.5818",
    bio: "Kurt Dyrli serves as Editorial Director at DATIA, overseeing content strategy and thought leadership initiatives. With a background in journalism and content marketing, Kurt ensures that DATIA's messaging resonates with target audiences and effectively communicates the value of data-driven marketing solutions. His expertise in storytelling and content optimization helps clients build stronger brand narratives and engage their prospects more effectively.",
  },
  {
    name: "Steve Bevilacqua",
    role: "Vice President of Sales",
    image: "partner-steve-bevilacqua.jpg",
    email: "sbevilacqua@datia.io",
    phone: "561.523.3820",
    bio: "Steve Bevilacqua serves as Vice President of Sales at DATIA, where he leads the sales organization and drives revenue growth. With extensive experience in B2B sales and a deep understanding of marketing technology solutions, Steve helps clients identify the right strategies to achieve their marketing objectives. His consultative approach and industry expertise make him a trusted advisor to marketing and sales leaders across various industries.",
  },
  {
    name: "Rachel Davis",
    role: "Vice President of Sales",
    image: "partner-rachel-davis.jpg",
    email: "rdavis@datia.io",
    phone: "678.521.7584",
    bio: "Rachel Davis is Vice President of Sales at DATIA, specializing in enterprise client relationships and strategic account management. She brings a wealth of experience in consultative selling and has a proven ability to understand complex client needs and deliver tailored solutions. Rachel's expertise in account-based marketing and lead generation strategies helps clients maximize their marketing ROI and achieve sustainable growth.",
  },
  {
    name: "Amy Metcalfe",
    role: "Senior Director, Marketing & Operations",
    image: "partner-amy-metcalfe.jpg",
    email: "ametcalfe@datia.io",
    phone: "732.236.4215",
    bio: "Amy Metcalfe serves as Senior Director of Marketing & Operations at DATIA, where she oversees marketing strategy execution and operational excellence. With a strong background in marketing operations and process optimization, Amy ensures that DATIA's internal marketing efforts align with client best practices. Her expertise in marketing automation and campaign management helps both DATIA and its clients achieve greater efficiency and effectiveness in their marketing efforts.",
  },
  { name: "Sharon Nelson", role: "Director, Digital Operations", image: null },
]

const solutions = [
  "ABMxi",
  "Targeted Guaranteed Leads (TGL)",
  "Persona-Based Ad Targeting (PUSH)",
  "Content Studio",
  "Research",
  "Web Seminars",
  "BDR Services",
]

export function PartnerContact() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null)

  const openBio = (member: TeamMember) => {
    setActiveMember(member)
    dialogRef.current?.showModal()
  }

  const closeBio = () => dialogRef.current?.close()

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const field = (key: string) => String(data.get(key) ?? "").trim()
    const selectedSolutions = data.getAll("solutions").map(String)

    setStatus("sending")
    try {
      const response = await fetch("/api/partner-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": crypto.randomUUID(),
        },
        body: JSON.stringify({
          firstName: field("firstName"),
          lastName: field("lastName"),
          email: field("email"),
          phone: field("phone"),
          company: field("company"),
          website: field("website"),
          solutions: selectedSolutions,
          message: field("message"),
        }),
      })
      if (!response.ok) throw new Error("Send failed")
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="partner-contact-section" id="contact" aria-labelledby="contact-title">
      <div className="partner-contact-content">
        <div className="partner-contact-heading">
          <h2 id="contact-title">The People Behind the Platform</h2>
          <p className="partner-contact-intro">Meet the team and get in touch to explore your goals and strategy.</p>
        </div>
        <div className="partner-contact-layout">
        <div className="partner-team">
          <div className="partner-team-grid">
            {team.map((person) => (
              <article className="partner-team-person" key={person.name}>
                {person.image && person.bio ? (
                  <button
                    type="button"
                    className="partner-team-photo-button"
                    onClick={() => openBio(person)}
                    aria-label={`View bio for ${person.name}`}
                    aria-haspopup="dialog"
                  >
                    <Image src={`/images/${person.image}`} alt="" width={140} height={140} unoptimized loading="lazy" />
                  </button>
                ) : person.image ? (
                  <Image src={`/images/${person.image}`} alt={person.name} width={140} height={140} unoptimized loading="lazy" />
                ) : (
                  <div className="partner-team-placeholder" role="img" aria-label={`${person.name} headshot coming soon`}>
                    Coming soon
                  </div>
                )}
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="partner-contact-main">
        <form className="partner-contact-form" onSubmit={handleSubmit}>
          <div className="partner-form-grid">
            <label>First name<input name="firstName" type="text" autoComplete="given-name" required /></label>
            <label>Last name<input name="lastName" type="text" autoComplete="family-name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
            <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
            <label>Company name<input name="company" type="text" autoComplete="organization" required /></label>
            <label>Website<input name="website" type="text" inputMode="url" autoComplete="url" maxLength={500} placeholder="www.example.com" /></label>
          </div>
          <fieldset className="partner-solutions">
            <legend>Solutions of Interest</legend>
            <div className="partner-solution-row">
              {solutions.map((solution) => (
                <label key={solution}><input type="checkbox" name="solutions" value={solution} /><span>{solution}</span></label>
              ))}
            </div>
          </fieldset>
          <label className="partner-message">Message<textarea name="message" rows={4} /></label>
          <div className="partner-form-actions">
            <button type="submit" className="partner-send-button" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            <p className="partner-form-status" role="status" aria-live="polite">
              {status === "sent" && "Thanks! Your message has been sent. We'll be in touch soon."}
              {status === "error" && "Something went wrong. Please try again or email ametcalfe@datiak12.io."}
            </p>
          </div>
        </form>
        </div>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="partner-bio-dialog"
        aria-labelledby="partner-bio-name"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeBio()
        }}
      >
        {activeMember && (
          <div className="partner-bio-card">
            <button type="button" className="partner-bio-close" onClick={closeBio} aria-label="Close bio">
              <X aria-hidden="true" />
            </button>
            {activeMember.image && (
              <Image
                className="partner-bio-photo"
                src={`/images/${activeMember.image}`}
                alt={activeMember.name}
                width={160}
                height={160}
                unoptimized
              />
            )}
            <h3 id="partner-bio-name">{activeMember.name}</h3>
            <p className="partner-bio-role">{activeMember.role}</p>
            <div className="partner-bio-contact">
              {activeMember.email && <a href={`mailto:${activeMember.email}`}>{activeMember.email}</a>}
              {activeMember.phone && <a href={`tel:${activeMember.phone.replace(/\./g, "")}`}>{activeMember.phone}</a>}
            </div>
            <p className="partner-bio-text">{activeMember.bio}</p>
          </div>
        )}
      </dialog>
    </section>
  )
}
