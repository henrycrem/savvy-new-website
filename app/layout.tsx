import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
// import Navigation from "@/components/landing-page/navigation"
// import Footer from "@/components/landing-page/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Savvy Group of Companies",
    template: "%s - Savvy Group of Companies",
  },
  description:
    "Savvy Group of Companies offers a diverse range of services, including construction, coffee shops, modern bars, and mineral mining, tailored to meet your needs.",
  keywords: ["construction", "coffee shops", "bars", "mineral mining", "business services"],
  authors: [{ name: "Savvy Group of Companies" }],
  creator: "Savvy Group of Companies",
  publisher: "Savvy Group of Companies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.savvygroupofcompanies.com",
    siteName: "Savvy Group of Companies",
    title: "Savvy Group of Companies",
    description:
      "Savvy Group of Companies offers a diverse range of services, including construction, coffee shops, modern bars, and mineral mining, tailored to meet your needs.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 631,
        alt: "Savvy Group of Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savvy Group of Companies",
    description:
      "Savvy Group of Companies offers a diverse range of services, including construction, coffee shops, modern bars, and mineral mining, tailored to meet your needs.",
    images: ["/opengraph-image.png"],
  },
  verification: {
    google: "U-hjDn3pC_bniCFhLPOYbIemB-Q47B-2v_yxhG5wMJE",
  },
  metadataBase: new URL("https://www.savvygroupofcompanies.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Navigation /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
