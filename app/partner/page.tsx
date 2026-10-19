import type { Metadata } from "next"
import Script from "next/script"
import PartnerLanding from "@/components/partner/partner-landing"
import "./partner.css"

export const metadata: Metadata = {
  title: "Partner with DATIA | From Impression to Appointment",
  description:
    "DATIA brings buyer identification, cross-channel engagement, and intent intelligence together in one place, turning insights into action and action into qualified leads.",
  icons: {
    icon: "/partner/favicon.svg",
  },
  openGraph: {
    title: "Partner with DATIA | From Impression to Appointment",
    description:
      "DATIA brings buyer identification, cross-channel engagement, and intent intelligence together in one place, turning insights into action and action into qualified leads.",
    type: "website",
  },
}

export default function PartnerPage() {
  return (
    <>
      {/* Articulat CF (Adobe Fonts) is the brand face; Manrope is the fallback. */}
      <link rel="stylesheet" href="https://use.typekit.net/pky8avy.css" precedence="default" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&display=swap"
        precedence="default"
      />
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/pghthuyp7z.js" strategy="afterInteractive" type="module" />
      <PartnerLanding />
    </>
  )
}
