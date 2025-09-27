'use client'

import { useEffect, useState } from 'react'
import { 
  Github, 
  ExternalLink, 
  Smartphone, 
  Globe, 
  Brain, 
  Zap,
  Phone,
  Code,
  Database
} from 'lucide-react'

export default function Projects() {
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

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A modern Android Native app built with Kotlin and Jetpack Compose, featuring real-time weather data, location-based forecasts, and beautiful UI with Material Design 3.',
      image: '/api/placeholder/600/400',
      technologies: ['Kotlin', 'Jetpack Compose', 'Weather API', 'Location Services', 'Material Design 3'],
      category: 'Native Android',
      icon: Phone,
      githubUrl: 'https://github.com/Moaaz-Ahmad/WeatherApp',
      demoUrl: 'https://github.com/Moaaz-Ahmad/WeatherApp#demo',
      featured: true
    },
    {
      id: 2,
      title: 'Cross-Platform E-Commerce App',
      description: 'A beautiful Flutter application with React Native alternative, showcasing modern UI/UX design, real-time updates, and seamless cross-platform performance with Firebase integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Material Design 3'],
      category: 'Cross-Platform',
      icon: Globe,
      githubUrl: 'https://github.com/Moaaz-Ahmad/FakeStore-Android',
      demoUrl: 'https://github.com/Moaaz-Ahmad/FakeStore-Android#screenshots',
      featured: true
    },
    {
      id: 3,
      title: 'ML Image Classifier',
      description: 'Flutter app with AI-powered image classification using TensorFlow Lite models for real-time object detection and image recognition with high accuracy.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Dart', 'TensorFlow Lite', 'Camera API', 'ML Models'],
      category: 'Cross-Platform',
      icon: Brain,
      githubUrl: 'https://github.com/Moaaz-Ahmad/ImageClassifier',
      demoUrl: 'https://github.com/Moaaz-Ahmad/ImageClassifier#features',
      featured: true
    },
    {
      id: 4,
      title: 'Modern Banking App',
      description: 'Jetpack Compose Android application with advanced security features, biometric authentication, and AI-powered fraud detection using local ML models.',
      image: '/api/placeholder/600/400',
      technologies: ['Kotlin', 'Jetpack Compose', 'Biometric Auth', 'ML Kit', 'Encryption'],
      category: 'Native Android',
      icon: Smartphone,
      githubUrl: 'https://github.com/Moaaz-Ahmad/modern-banking-app',
      demoUrl: 'https://github.com/Moaaz-Ahmad/modern-banking-app#security-features',
      featured: false
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      description: 'Flutter app with OpenAI and Gemini API integration, featuring voice recognition, text-to-speech, and intelligent conversation management with offline capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'OpenAI API', 'Gemini API', 'Speech Recognition', 'TTS'],
      category: 'AI Integration',
      icon: Zap,
      githubUrl: 'https://github.com/Moaaz-Ahmad/ai-chat-assistant',
      demoUrl: 'https://github.com/Moaaz-Ahmad/ai-chat-assistant#demo-video',
      featured: false
    },
    {
      id: 6,
      title: 'Developer Tools Suite',
      description: 'Comprehensive React Native toolkit for developers, featuring code analysis, API testing, and AI-powered code suggestions with real-time collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'TypeScript', 'Code Analysis', 'API Testing', 'WebSocket'],
      category: 'Developer Tools',
      icon: Code,
      githubUrl: 'https://github.com/Moaaz-Ahmad/developer-tools-suite',
      demoUrl: 'https://github.com/Moaaz-Ahmad/developer-tools-suite#features',
      featured: false
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Native Android':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Cross-Platform':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'AI Integration':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      case 'Developer Tools':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my diverse project portfolio, highlighting expertise in native Android development, 
              cross-platform solutions, and AI integration
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${(index + 3) * 150}ms`
                }}
              >
                {/* Project Image */}
                <div className="relative h-32 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded text-xs hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="h-3 w-3" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1 border border-primary-600 text-primary-600 dark:text-primary-400 rounded text-xs hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors duration-200"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Moaaz-Ahmad?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
