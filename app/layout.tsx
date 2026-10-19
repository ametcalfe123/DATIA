import type { Metadata, Viewport } from "next"
import { Public_Sans } from "next/font/google"
import "./globals.css"

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" })

export const metadata: Metadata = {
  title: { default: "DATIA AI | B2B Marketing Intelligence & Services", template: "%s | DATIA AI" },
  description: "DATIA combines buyer intelligence, cross-channel media, and lead generation to help B2B teams turn engagement into qualified pipeline.",
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="bg-background" lang="en">
      <body className={`${publicSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
