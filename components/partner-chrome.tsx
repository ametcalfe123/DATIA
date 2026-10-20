import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PartnerAdvisors } from "@/components/partner-advisors"

export function PartnerFooter() {
  return (
    <footer className="site-footer partner-footer">
      <PartnerAdvisors />
      <div className="partner-footer-main">
        <div className="partner-footer-brand">
          <Link className="brand-logo" href="/" aria-label="DATIA home">
            <Image src="/images/datia-ai-logo-white.png" alt="DATIA AI" width={150} height={40} unoptimized />
          </Link>
          <p>Insights born from data.</p>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#abmxi">Flagship Offering</a>
          <a href="#services">Marketing Services</a>
          <a href="#testimonials">Trusted By</a>
          <a href="#about">About</a>
          <Link className="partner-footer-privacy" href="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <a href="#contact">Partner with Us</a>
          <a href="https://www.linkedin.com/company/datia-ai/" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight aria-hidden="true" size={13} />
          </a>
        </div>
      </div>
      <div className="partner-footer-bottom">
        <small>© {new Date().getFullYear()} DATIA AI. All rights reserved.</small>
      </div>
    </footer>
  )
}
