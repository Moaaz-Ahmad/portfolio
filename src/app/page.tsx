'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark', !isDark)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Header onToggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
