"use client"

import { useId, useState, type ReactNode } from "react"
import { ArrowRight, ArrowUp, CircleCheck, Star } from "lucide-react"

export type ServiceCardProps = {
  name: string
  category: string
  title: string
  description: string
  action: string
  icon: ReactNode
  whatYouGet: string[]
  howItWorks: string[]
  whyItMatters: string[]
}

export function ServiceCard({
  name,
  category,
  title,
  description,
  action,
  icon,
  whatYouGet,
  howItWorks,
  whyItMatters,
}: ServiceCardProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <article className="offering-card" data-open={open}>
      <div className="offering-icon">{icon}</div>
      <p className="offering-name">{name}</p>
      <h3>{title}</h3>
      <p className="offering-label">{category}</p>
      <p className="offering-description">{description}</p>

      {!open && (
        <button
          type="button"
          className="offering-link"
          aria-expanded={false}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
        >
          {action} <ArrowRight aria-hidden="true" size={15} />
        </button>
      )}

      <div id={panelId} className="offering-details" hidden={!open}>
        <h4 className="offering-details-title">{action}</h4>
        <div className="offering-details-grid">
          <div>
            <h5>What you get</h5>
            <ul>
              {whatYouGet.map((item) => (
                <li key={item}><CircleCheck aria-hidden="true" size={15} />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5>How it works</h5>
            <ul className="offering-dot-list">
              {howItWorks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Why it matters</h5>
            <ul>
              {whyItMatters.map((item) => (
                <li key={item}><Star aria-hidden="true" size={15} />{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="offering-link"
          aria-expanded={true}
          aria-controls={panelId}
          onClick={() => setOpen(false)}
        >
          Hide details <ArrowUp aria-hidden="true" size={15} />
        </button>
      </div>
    </article>
  )
}
