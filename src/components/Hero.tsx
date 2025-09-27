'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown, Code, Smartphone, Brain } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">AI-Powered Mobile</span>
            <br />
            <span className="text-gray-900 dark:text-white">& Cross-Platform</span>
            <br />
            <span className="gradient-text">Architect</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert Front-End Developer specializing in{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">Kotlin/Compose</span>,{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">Flutter</span>, and{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">React Native</span>
            <br />
            with a passion for integrating AI into mobile applications
          </p>

          {/* Tech Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Code className="h-6 w-6" />
              <span className="text-sm font-medium">Native Android</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Smartphone className="h-6 w-6" />
              <span className="text-sm font-medium">Cross-Platform</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Brain className="h-6 w-6" />
              <span className="text-sm font-medium">AI Integration</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>View Projects</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
            </button>
            <a
              href="https://github.com/Moaaz-Ahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Moaaz-Ahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/moaaz-hagag-06969b31a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
            </a>
            <a
              href="mailto:moaazhagag2001@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  )
}
