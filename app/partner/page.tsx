import type { Metadata } from "next"
import { PartnerFooter } from "@/components/partner-chrome"
import { PartnerHeader } from "@/components/partner-header"
import {
  AbmSection,
  AboutSection,
  PartnerHero,
  ServicesSection,
  TrustedSection,
} from "@/components/partner-content"
import { PartnerContact } from "@/components/partner-contact"

export const metadata: Metadata = {
  title: { absolute: "Partner with DATIA | ABM & Marketing Services" },
  description: "Turn buyer intelligence into qualified leads with DATIA's account-based marketing, demand generation, content, research, and media services.",
}

export default function PartnerPage() {
  return (
    <main className="partner-page">
      <PartnerHeader />
      <PartnerHero />
      <AbmSection />
      <ServicesSection />
      <TrustedSection />
      <AboutSection />
      <PartnerContact />
      <PartnerFooter />
    </main>
  )
}
