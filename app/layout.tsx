import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Portfolio | Modern & Elegant',
  description: 'A modern and elegant portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="bg-mesh" />
          {children}
        </ThemeProvider>
      </body>

    </html>
  )
}

