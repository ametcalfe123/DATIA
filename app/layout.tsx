import type { Metadata, Viewport } from "next"
import { Public_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const GA_MEASUREMENT_ID = "G-0PQJZY54Q3"

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
      <body className={`${publicSans.variable} font-sans antialiased`}>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
