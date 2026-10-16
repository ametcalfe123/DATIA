import type { Metadata, Viewport } from "next"
import { Public_Sans } from "next/font/google"
import "./globals.css"

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" })

export const metadata: Metadata = {
  title: "DATIA | Prospect Intelligence Platforms",
  description: "The AI-enabled fusion of data and media. DATIA brings buyer identification, cross-channel engagement, and intent intelligence together.",
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
