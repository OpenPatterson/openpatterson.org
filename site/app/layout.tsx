import type React from "react"
import "@/app/globals.css"
import { Inter, Space_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { header } from "@/components/header"
import { footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Open Patterson - Nonprofit Software Studio",
  description:
    "A volunteer-run nonprofit software studio working with local governments and pushing civic tech initiatives.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {header()}
          {children}
          {footer()}
        </ThemeProvider>
      </body>
    </html>
  )
}
