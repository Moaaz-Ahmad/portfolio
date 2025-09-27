import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moaaz Ahmad - AI-Powered Mobile & Cross-Platform Developer',
  description: 'Expert Front-End Developer specializing in Kotlin/Compose, Flutter, React Native, and AI integration. 5+ years of experience in modern mobile and cross-platform development.',
  keywords: 'Front-End Developer, Mobile Developer, Kotlin, Jetpack Compose, Flutter, React Native, AI Integration, Cross-Platform Development',
  authors: [{ name: 'Moaaz Ahmad' }],
  openGraph: {
    title: 'Moaaz Ahmad - AI-Powered Mobile & Cross-Platform Developer',
    description: 'Expert Front-End Developer specializing in modern mobile and cross-platform development with AI integration.',
    type: 'website',
    url: 'https://moaaz-ahmad.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moaaz Ahmad - AI-Powered Mobile & Cross-Platform Developer',
    description: 'Expert Front-End Developer specializing in modern mobile and cross-platform development with AI integration.',
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
