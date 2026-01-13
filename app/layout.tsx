import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Chatbot from "@/components/chatbot"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ACM Chapter | D J. Sanghvi College of Engineering",
  description:
    "ACM Chapter (Association for Computing Machinery) - Advancing computing as a science and profession. Join our community for events, workshops, and networking.",
  generator: "vraj birje",
  openGraph: {
    title: "ACM Chapter",
    description: "Advancing computing as a science and profession",
    type: "website",
    url: "djsacm.in",
  },
  icons: {
    icon: [
      {
        url: "/logo2.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo2.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo2.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo2.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
