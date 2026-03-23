import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moaaz Ahmad - Full-Stack Developer',
  description: 'Full-stack developer building production-grade web apps and APIs with Next.js, Node.js, and modern data/auth patterns. 5+ years of experience shipping scalable products.',
  keywords: 'Full-Stack Developer, Next.js, React, Node.js, REST APIs, Authentication, PostgreSQL, TypeScript, Frontend, Backend, Cross-Platform Development',
  authors: [{ name: 'Moaaz Ahmad' }],
  openGraph: {
    title: 'Moaaz Ahmad - Full-Stack Developer',
    description: 'Full-stack developer building production-grade web apps and APIs with Next.js, Node.js, and modern data/auth patterns.',
    type: 'website',
    url: 'https://moaaz-ahmad.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moaaz Ahmad - Full-Stack Developer',
    description: 'Full-stack developer building production-grade web apps and APIs with Next.js, Node.js, and modern data/auth patterns.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
