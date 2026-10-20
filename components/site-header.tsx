import Image from "next/image"
import Link from "next/link"

type SiteHeaderProps = {
  variant?: "home" | "partner"
}

const homeLinks = [
  ["Our Story", "#our-story"],
  ["Services", "#services"],
  ["Meet the Team", "#team"],
  ["Advisory Board", "#advisory-board"],
  ["Client Success", "#trusted-by"],
] as const

const partnerLinks = [
  ["Flagship Offering", "#flagship"],
  ["Marketing Services", "#marketing-services"],
  ["Client Success", "#testimonials"],
  ["About", "#about"],
] as const

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  const isPartner = variant === "partner"
  const links = isPartner ? partnerLinks : homeLinks

  return (
    <header className={`site-header ${isPartner ? "site-header-partner" : "site-header-home"}`}>
      <div className="site-header-inner">
        <Link className="site-logo" href="/" aria-label="DATIA AI home">
          <Image
            src="/images/datia-ai-logo.png"
            alt="DATIA AI"
            width={2092}
            height={640}
            priority
            sizes={isPartner ? "110px" : "172px"}
          />
        </Link>
        {isPartner && <p className="partner-header-tagline">THE AI-ENABLED FUSION OF DATA AND MEDIA</p>}
        <nav aria-label="Main navigation" className="site-nav">
          {links.map(([label, href]) => (
            <Link href={href} key={label}>{label}</Link>
          ))}
          <Link className="site-nav-cta" href={isPartner ? "#contact" : "/#contact"}>Partner with Us</Link>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  const markets = ["Education", "Government", "HR", "Financial Services", "Retail", "Healthcare", "Technology", "Cybersecurity/Identity"]

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/" aria-label="DATIA AI home">
            <Image src="/images/datia-ai-logo-white.png" alt="DATIA AI" width={2092} height={640} sizes="172px" />
          </Link>
          <p>A sales and marketing intelligence company offering enhanced lead generation and media services that integrate intent data and AI-driven insights.</p>
        </div>
        <div className="site-footer-markets">
          <h2>Markets Served</h2>
          <ul>{markets.map((market) => <li key={market}>{market}</li>)}</ul>
        </div>
        <nav className="site-footer-links" aria-label="Footer navigation">
          <Link href="#our-story">Our Story</Link>
          <Link href="#team">Meet the Team</Link>
          <Link href="#advisory-board">Advisory Board</Link>
          <Link href="#trusted-by">Client Success</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>
      <div className="site-footer-bottom">© 2025. All rights reserved.</div>
    </footer>
  )
}
