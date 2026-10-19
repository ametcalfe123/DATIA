"use client"

import Image from "next/image"

const team = [
  { name: "Jim Callan", role: "Founder/CEO", image: "partner-jim-callan.jpg" },
  { name: "Kurt Dyrli", role: "Editorial Director", image: "partner-kurt-dyrli.jpg" },
  { name: "Steve Bevilacqua", role: "Vice President of Sales", image: "partner-steve-bevilacqua.jpg" },
  { name: "Rachel Davis", role: "Vice President of Sales", image: "partner-rachel-davis.jpg" },
  { name: "Amy Metcalfe", role: "Senior Director, Marketing & Operations", image: "partner-amy-metcalfe.jpg" },
  { name: "Sharon Nelson", role: "Title TBD", image: null },
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
          <h2 id="contact-title">The People Behind the Platform</h2>
          <p className="partner-contact-intro">Meet the team and get in touch to explore your goals and strategy.</p>
        </div>
        <div className="partner-contact-layout">
        <div className="partner-team">
          <div className="partner-team-grid">
            {team.map((person) => (
              <article className="partner-team-person" key={person.name}>
                {person.image ? (
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
        </form>
        </div>
        </div>
      </div>
    </section>
  )
}
