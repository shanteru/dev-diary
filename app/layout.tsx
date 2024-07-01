import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvider"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chantelle's Dev Diary",
  description: "My documented journey as developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="prose-xl mx-auto w-full max-w-4xl px-4 dark:prose-invert md:px-0">
            <Header />
            <main>{children}</main>
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
