"use client"

import Image from "next/image"
import Link from "next/link"
import type { MouseEvent } from "react"

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open")
}

const navLinks = [
  { id: "abmxi", label: "Flagship Offering" },
  { id: "services", label: "Marketing Services" },
  { id: "testimonials", label: "Client Success" },
  { id: "about", label: "About" },
]

export function PartnerHeader({ anchorBase = "" }: { anchorBase?: string }) {
  return (
    <header className="site-header partner-header">
      <div className="site-header-inner partner-header-inner">
        <Link className="brand-logo" href="/" aria-label="DATIA home">
          <Image src="/images/datia-ai-logo.png" alt="DATIA AI" width={150} height={40} priority unoptimized />
        </Link>
        <p className="header-tagline"><span aria-hidden="true" />The AI-enabled fusion of data and media</p>
        <nav className="partner-nav" aria-label="Partner page navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`${anchorBase}#${link.id}`}>{link.label}</a>
          ))}
        </nav>
        <a className="button button-red header-cta" href={`${anchorBase}#contact`}>Partner with Us</a>
        <details className="partner-mobile-menu">
          <summary aria-label="Open navigation menu"><span /></summary>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a key={link.id} href={`${anchorBase}#${link.id}`} onClick={closeMobileMenu}>{link.label}</a>
            ))}
            <a className="button button-red" href={`${anchorBase}#contact`} onClick={closeMobileMenu}>Partner with Us</a>
          </nav>
        </details>
      </div>
    </header>
  )
}
