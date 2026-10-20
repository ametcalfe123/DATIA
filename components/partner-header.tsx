"use client"

import Image from "next/image"
import Link from "next/link"
import type { MouseEvent } from "react"

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open")
}

export function PartnerHeader() {
  return (
    <header className="site-header partner-header">
      <div className="site-header-inner partner-header-inner">
        <Link className="brand-logo" href="/" aria-label="DATIA home">
          <Image src="/images/datia-ai-logo.png" alt="DATIA AI" width={150} height={40} priority unoptimized />
        </Link>
        <p className="header-tagline"><span aria-hidden="true" />The AI-enabled fusion of data and media</p>
        <nav className="partner-nav" aria-label="Partner page navigation">
          <a href="#abmxi">Flagship Offering</a>
          <a href="#services">Marketing Services</a>
          <a href="#testimonials">Client Success</a>
          <a href="#about">About</a>
        </nav>
        <a className="button button-red header-cta" href="#contact">Partner with Us</a>
        <details className="partner-mobile-menu">
          <summary aria-label="Open navigation menu"><span /></summary>
          <nav aria-label="Mobile navigation">
            <a href="#abmxi" onClick={closeMobileMenu}>Flagship Offering</a>
            <a href="#services" onClick={closeMobileMenu}>Marketing Services</a>
            <a href="#testimonials" onClick={closeMobileMenu}>Client Success</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a className="button button-red" href="#contact" onClick={closeMobileMenu}>Partner with Us</a>
          </nav>
        </details>
      </div>
    </header>
  )
}
