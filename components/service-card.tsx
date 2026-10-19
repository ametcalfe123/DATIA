"use client"

import { useId, useRef, useState, type ReactNode } from "react"
import { ArrowRight, ArrowUp, CircleCheck, Star, X } from "lucide-react"

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
  popup?: boolean
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
  popup = false,
}: ServiceCardProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const dialogRef = useRef<HTMLDialogElement>(null)

  const details = (
    <>
      <h4 className="offering-details-title" id={`${panelId}-title`}>{action}</h4>
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
        aria-controls={panelId}
        onClick={() => popup ? dialogRef.current?.close() : setOpen(false)}
      >
        {popup ? "Close" : "Hide details"} {popup ? <X aria-hidden="true" size={15} /> : <ArrowUp aria-hidden="true" size={15} />}
      </button>
    </>
  )

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
          aria-haspopup={popup ? "dialog" : undefined}
          aria-expanded={popup ? undefined : false}
          aria-controls={panelId}
          onClick={() => {
            if (popup) {
              dialogRef.current?.showModal()
              setOpen(true)
            } else {
              setOpen(true)
            }
          }}
        >
          {action} <ArrowRight aria-hidden="true" size={15} />
        </button>
      )}

      {popup ? (
        <dialog
          ref={dialogRef}
          id={panelId}
          className="offering-dialog"
          aria-labelledby={`${panelId}-title`}
          onClose={() => setOpen(false)}
        >
          <div className="offering-details offering-dialog-details">{details}</div>
        </dialog>
      ) : (
        <div id={panelId} className="offering-details" hidden={!open}>
          {details}
        </div>
      )}
    </article>
  )
}
