"use client"

import Image from "next/image"
import { useState } from "react"

type Advisor = {
  name: string
  role: string
  image: string
  body: string
}

const site = "https://www.datia.io"

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.2 7.7a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM3.6 9.2h3.2v10.5H3.6V9.2Zm5.2 0h3.1v1.4h.1a3.4 3.4 0 0 1 3.1-1.7c3.3 0 3.9 2.2 3.9 5v5.8h-3.2v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2H8.8V9.2Z" />
    </svg>
  )
}

export default function AdvisorDirectory({ people }: { people: Advisor[] }) {
  const [expandedBios, setExpandedBios] = useState<string[]>([])

  function toggleBio(name: string) {
    setExpandedBios((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name])
  }

  return (
    <section className="inner-content-section advisor-section" aria-labelledby="advisor-heading">
      <div className="section-heading advisor-section-heading">
        <h2 id="advisor-heading">Meet our Expert Collective</h2>
      </div>
      <div className="advisor-grid">
        {people.map((person) => {
          const isExpanded = expandedBios.includes(person.name)
          return (
            <article className="advisor-card" key={person.name}>
              <div className="advisor-card-heading">
                <div className="advisor-photo">
                  <Image src={`${site}/images/${person.image}`} alt={person.name} width={80} height={80} unoptimized />
                  <button type="button" onClick={() => toggleBio(person.name)} aria-label={`${isExpanded ? "Hide" : "Show"} ${person.name}'s full biography`} aria-expanded={isExpanded}>Bio</button>
                </div>
                <div className="advisor-title">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </div>
              <p className={`advisor-bio${isExpanded ? " advisor-bio-expanded" : ""}`}>{person.body}</p>
              <div className="advisor-card-actions">
                <a className="advisor-linkedin" href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(person.name)}`} target="_blank" rel="noreferrer" aria-label={`${person.name} on LinkedIn`}><LinkedInIcon /></a>
                <button type="button" onClick={() => toggleBio(person.name)} aria-expanded={isExpanded}>{isExpanded ? "Show Less" : "Read Full Bio"}</button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
