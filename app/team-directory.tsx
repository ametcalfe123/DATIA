"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type TeamMember = {
  name: string
  role: string
  image: string
  email: string
  phone?: string
  bio: string
}

const site = "https://www.datia.io"

function MailIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
}

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 3h3l2 5-2 2c1.2 2.2 2.8 3.8 5 5l2-2 5 2v3c0 1.1-.9 2-2 2C10.7 20 4 13.3 4 5c0-1.1.9-2 2-2h1Z" /></svg>
}

export default function TeamDirectory({ people }: { people: TeamMember[] }) {
  const [selectedPerson, setSelectedPerson] = useState<TeamMember | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (selectedPerson && dialog && !dialog.open) dialog.showModal()
  }, [selectedPerson])

  const openBio = (person: TeamMember) => setSelectedPerson(person)

  return (
    <>
      <section className="inner-content-section people-section team-section" aria-labelledby="leadership-title">
        <div className="section-heading">
          <h2 id="leadership-title">Leadership Team</h2>
          <p>Our experienced leadership team brings decades of B2B marketing expertise to every client engagement.</p>
        </div>
        <div className="team-directory-grid">
          {people.map((person) => (
            <article className="team-member-card" key={person.name}>
              <div className="team-member-photo-wrap">
                <Image
                  className="team-member-photo"
                  src={`${site}/images/${person.image}`}
                  alt={person.name}
                  width={96}
                  height={96}
                  unoptimized
                />
                <button className="team-photo-bio" type="button" onClick={() => openBio(person)} aria-label={`View ${person.name}'s bio`}>
                  View Bio
                </button>
              </div>
              <h3>{person.name}</h3>
              <p className="team-member-role">{person.role}</p>
              <div className="team-member-contact">
                <a href={`mailto:${person.email}`} aria-label={`Email ${person.name}`}>
                  <MailIcon />
                  <span>{person.email}</span>
                </a>
                {person.phone && (
                  <a href={`tel:${person.phone.replaceAll(".", "")}`} aria-label={`Call ${person.name}`}>
                    <PhoneIcon />
                    <span>{person.phone}</span>
                  </a>
                )}
              </div>
              <button className="team-member-bio-link" type="button" onClick={() => openBio(person)}>
                Bio
              </button>
            </article>
          ))}
        </div>
      </section>

      <dialog
        className="team-bio-dialog"
        ref={dialogRef}
        aria-labelledby="team-bio-title"
        onClose={() => setSelectedPerson(null)}
      >
        {selectedPerson && (
          <div className="team-bio-content">
            <button className="team-bio-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close biography">
              <span aria-hidden="true">×</span>
            </button>
            <Image
              className="team-bio-photo"
              src={`${site}/images/${selectedPerson.image}`}
              alt=""
              width={112}
              height={112}
              unoptimized
            />
            <h2 id="team-bio-title">{selectedPerson.name}</h2>
            <p className="team-bio-role">{selectedPerson.role}</p>
            <p className="team-bio-copy">{selectedPerson.bio}</p>
            <div className="team-bio-contact">
              <a href={`mailto:${selectedPerson.email}`}>
                <MailIcon />
                {selectedPerson.email}
              </a>
              {selectedPerson.phone && (
                <a href={`tel:${selectedPerson.phone.replaceAll(".", "")}`}>
                  <PhoneIcon />
                  {selectedPerson.phone}
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}

export type { TeamMember }
