import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/landing-page/navigation";
import Footer from "@/components/landing-page/footer";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title:{
    default: 'Savvy Group of Companies',
    template: "%s - Savvy Group of Companies "

  } ,
    
  description: 'Savvy Group of Companies offers a diverse range of services, including construction, coffee shops, modern bars, and mineral mining, tailored to meet your needs.',

  verification: {
    google: 'U-hjDn3pC_bniCFhLPOYbIemB-Q47B-2v_yxhG5wMJE',
    
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
