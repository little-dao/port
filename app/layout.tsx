import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/scroll-progress"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Howard Zhu | Quant | Developer | Finance",
  description: "Personal portfolio of Howard Zhu, an aspiring Quant, Developer, and Finance professional.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body className={`${inter.className} font-sans`}>
        <ScrollProgress />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
