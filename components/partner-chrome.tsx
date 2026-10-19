import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type PartnerAdvisor = { name: string; role: string; image?: string; crop?: boolean }

const advisors: PartnerAdvisor[] = [
  { name: "Jason McKenna", role: "VP of Global Educational Strategy, VEX Robotics", image: "jason-mckenna.jpg" },
  { name: "Dr. Robert Avossa", role: "Former Superintendent, Palm Beach County Schools", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-19%20at%2010.20.57%E2%80%AFAM-BXn17sMS60g7Ale73ow4D13hntdvDO.png", crop: true },
  { name: "Randall Dennis", role: "Market Leader, Convergint", image: "randall-dennis.jpg" },
  { name: "Kathy Hurley", role: "Principal Consultant, Kathy Hurley Consulting", image: "kathy-hurley.jpg" },
  { name: "Terry Arsenault", role: "Founder, Vyne", image: "terry-arsenault.png" },
  { name: "Tom Fowler", role: "B2B media publisher since 1978", image: "tom-fowler.jpg" },
]

export function PartnerFooter() {
  return (
    <footer className="site-footer partner-footer">
      <div className="partner-advisors">
        <p>Advisory Board</p>
        <div className="partner-advisor-grid">
          {advisors.map((advisor) => (
            <div className="partner-advisor" key={advisor.name}>
              {advisor.image ? advisor.crop ? (
                <span className="partner-advisor-crop">
                  <Image src={advisor.image} alt="" width={746} height={610} className="partner-advisor-crop-image" unoptimized loading="lazy" />
                </span>
              ) : (
                <Image src={`/images/${advisor.image}`} alt="" width={52} height={52} unoptimized loading="lazy" />
              ) : (
                <span className="partner-advisor-initials" aria-hidden="true">RA</span>
              )}
              <strong>{advisor.name}</strong>
              <span>{advisor.role}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="partner-footer-main">
        <div className="partner-footer-brand">
          <Link className="brand-logo" href="/" aria-label="DATIA home">
            <Image src="/images/datia-ai-logo-white.png" alt="DATIA AI" width={150} height={40} unoptimized />
          </Link>
          <p>Insights born from data.</p>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#abmxi">Account-Based Marketing Intelligence (ABMxi)</a>
          <a href="#services">Targeted Guaranteed Leads (TGL)</a>
          <a href="#services">Persona-Based Ad Targeting (PUSH)</a>
          <a href="#services">Content Studio</a>
          <a href="#services">Research</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#abmxi">Flagship Offering</a>
          <a href="#services">Marketing Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#about">About</a>
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
        <nav aria-label="Legal links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  )
}
