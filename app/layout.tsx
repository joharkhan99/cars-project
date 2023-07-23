import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Website',
  description: 'Best cars for booking and sale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar /> {/* Navbar component */}
        {children}
        <Footer /> {/* Footer component */}
        </body>
    </html>
  )
}
