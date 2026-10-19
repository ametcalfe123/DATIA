"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const team = [
  { name: "Jim Callan", role: "Founder/CEO", image: "partner-jim-callan.jpg" },
  { name: "Steve Bevilacqua", role: "Vice President of Sales", image: "partner-steve-bevilacqua.jpg" },
  { name: "Rachel Davis", role: "Vice President of Sales", image: "partner-rachel-davis.jpg" },
  { name: "Kurt Dyrli", role: "Editorial Director", image: "partner-kurt-dyrli.jpg" },
  { name: "Dana Jackson", role: "Fractional Head of Research", image: "partner-dana-jackson.jpg" },
  { name: "Amy Metcalfe", role: "Senior Director, Marketing & Operations", image: "partner-amy-metcalfe.jpg" },
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
  return (
    <section className="partner-contact-section" id="contact" aria-labelledby="contact-title">
      <div className="partner-contact-content">
        <div className="partner-contact-heading">
          <h2 id="contact-title">Talk to the DATIA team</h2>
          <p>Tell us what you&apos;re working on and which services you&apos;re interested in.</p>
        </div>
        <div className="partner-team">
          <p className="eyebrow">The people behind the platform</p>
          <h3>Meet the team</h3>
          <div className="partner-team-grid">
            {team.map((person) => (
              <article className="partner-team-person" key={person.name}>
                <Image src={`/images/${person.image}`} alt={person.name} width={140} height={140} unoptimized loading="lazy" />
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </article>
            ))}
          </div>
        </div>
        <form className="partner-contact-form" onSubmit={(event) => event.preventDefault()}>
          <div className="partner-form-grid">
            <label>First name<input name="firstName" type="text" autoComplete="given-name" required /></label>
            <label>Last name<input name="lastName" type="text" autoComplete="family-name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
            <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
            <label>Company name<input name="company" type="text" autoComplete="organization" required /></label>
            <label>Website<input name="website" type="url" autoComplete="url" /></label>
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
          <button className="button button-red" type="submit">Partner with Us <ArrowRight aria-hidden="true" size={17} /></button>
        </form>
      </div>
    </section>
  )
}
