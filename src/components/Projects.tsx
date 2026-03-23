'use client'

import { useEffect, useState } from 'react'
import { 
  Github, 
  ExternalLink, 
  Smartphone, 
  Globe, 
  Database, 
  Server,
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
      title: 'Real-Time Chat & Notifications',
      description: 'End-to-end chat experience with authentication, message persistence, and real-time updates powered by WebSockets.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'React', 'Node.js', 'WebSockets', 'PostgreSQL', 'JWT Auth'],
      category: 'Full-Stack',
      icon: Server,
      githubUrl: 'https://github.com/Moaaz-Ahmad',
      demoUrl: 'https://moaaz-ahmad.dev',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Admin Dashboard (API-first)',
      description: 'An admin-focused experience with a REST API, role-based access control, and database-backed workflows.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'React', 'Node.js', 'REST APIs', 'PostgreSQL', 'RBAC'],
      category: 'Full-Stack',
      icon: Globe,
      githubUrl: 'https://github.com/Moaaz-Ahmad',
      demoUrl: 'https://moaaz-ahmad.dev',
      featured: true
    },
    {
      id: 3,
      title: 'Secure File Upload API',
      description: 'A secure upload pipeline using signed URLs, background processing, and an API-first backend design.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'REST APIs', 'Signed URLs', 'Queues', 'PostgreSQL', 'Docker'],
      category: 'Backend',
      icon: Database,
      githubUrl: 'https://github.com/Moaaz-Ahmad',
      demoUrl: 'https://moaaz-ahmad.dev',
      featured: true
    },
    {
      id: 4,
      title: 'Mobile App that Consumes Backend APIs',
      description: 'An Android/Kotlin UI that integrates with REST endpoints, handles authentication, and maintains a smooth offline/online UX.',
      image: '/api/placeholder/600/400',
      technologies: ['Kotlin', 'Jetpack Compose', 'REST APIs', 'Auth (JWT)', 'Material Design 3'],
      category: 'Mobile + Backend',
      icon: Smartphone,
      githubUrl: 'https://github.com/Moaaz-Ahmad',
      demoUrl: 'https://moaaz-ahmad.dev',
      featured: false
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'Backend':
        return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400'
      case 'Mobile + Backend':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
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
              A curated selection of full-stack projects across frontend UI, backend APIs, and data/auth layers.
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
