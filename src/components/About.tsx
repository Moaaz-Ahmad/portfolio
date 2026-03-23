'use client'

import { useEffect, useState } from 'react'
import { Code2, Smartphone, Database, Zap } from 'lucide-react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const highlights = [
    {
      icon: Code2,
      title: 'Frontend & UI Engineering',
      description: 'TypeScript and modern React/Next.js patterns for fast, accessible user interfaces'
    },
    {
      icon: Database,
      title: 'Backend APIs & Data',
      description: 'REST APIs, authentication, and database-driven applications that scale reliably'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Apps',
      description: 'Kotlin/Compose and Flutter for end-to-end mobile experiences'
    },
    {
      icon: Zap,
      title: 'Modern UI/UX',
      description: 'Design systems, performance optimization, and accessible components'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With over <span className="text-primary-600 dark:text-primary-400 font-semibold">5+ years of experience</span> in
                front-end and full-stack development, I build modern, high-performance interfaces and dependable backend services.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I connect the product experience to the underlying architecture—API design, authentication, and data modeling—
                so features feel smooth on the UI and stay consistent across the backend.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I care about shipping clean code, measurable performance improvements, and maintainable systems—whether the app runs on web or mobile.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">FS</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Focus</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-4">
                      <highlight.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
