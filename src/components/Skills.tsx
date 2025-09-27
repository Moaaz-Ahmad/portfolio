'use client'

import { useEffect, useState } from 'react'
import { 
  Code, 
  Smartphone, 
  Brain, 
  Database, 
  GitBranch, 
  Zap,
  Android,
  Globe,
  Cpu,
  Layers
} from 'lucide-react'

export default function Skills() {
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

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Kotlin', level: 95 },
        { name: 'Dart', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 }
      ]
    },
    {
      title: 'Native Frameworks',
      icon: Android,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Jetpack Compose', level: 95 },
        { name: 'Android SDK', level: 90 },
        { name: 'Material Design', level: 85 },
        { name: 'Android Architecture', level: 88 }
      ]
    },
    {
      title: 'Cross-Platform',
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Flutter', level: 92 },
        { name: 'React Native', level: 85 },
        { name: 'Dart/Flutter', level: 90 },
        { name: 'Expo', level: 80 }
      ]
    },
    {
      title: 'AI & Data',
      icon: Brain,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'TensorFlow Lite', level: 85 },
        { name: 'OpenAI API', level: 90 },
        { name: 'Gemini API', level: 85 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'Local AI Models', level: 80 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: GitBranch,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'VS Code', level: 90 }
      ]
    },
    {
      title: 'UI/UX',
      icon: Layers,
      color: 'from-indigo-500 to-indigo-600',
      skills: [
        { name: 'Material Design', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Accessibility', level: 85 },
        { name: 'Performance Optimization', level: 88 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across mobile development, 
              cross-platform solutions, and AI integration
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning & Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I stay at the forefront of technology by continuously exploring new frameworks, 
                AI capabilities, and development methodologies. My passion for learning drives me to 
                implement cutting-edge solutions that push the boundaries of what's possible in mobile development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
