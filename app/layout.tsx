import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Betelhem Ashenafi | Full-Stack Developer',
  description:
    'Portfolio of Betelhem Ashenafi — Full-Stack Developer & Software Engineer specializing in React, Next.js, Node.js and scalable web applications.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Software Engineer'],
  authors: [{ name: 'Betelhem Ashenafi' }],
  openGraph: {
    title: 'Betelhem Ashenafi | Full-Stack Developer',
    description: 'Building beautiful, functional and scalable web experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {/* Animated background blobs */}
        <div className="bg-blobs" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        {children}
      </body>
    </html>
  )
}
