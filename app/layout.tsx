import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "No Kidding - Childfree Dating App",
  description: "Connect with like-minded individuals who have chosen a childfree lifestyle",
  keywords: "childfree, dating, relationships, no kids, child-free",
  authors: [{ name: "No Kidding Team" }],
  openGraph: {
    title: "No Kidding - Childfree Dating App",
    description: "Connect with like-minded individuals who have chosen a childfree lifestyle",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
