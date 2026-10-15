"use client"

import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { useState, useEffect } from "react"

export default function ProjectsPage() {
  const { isDark } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
  {
    id: 1,
    image: "public\image\ecommerce.png", // Add this
    title: "Interactive Portfolio",
    description: "A stunning portfolio with floating animations, cursor tracking, and theme switching.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Real-time messaging app with user authentication, notifications, and message history.",
      technologies: ["React", "Firebase", "Socket.io", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "Collaborative task management with drag-and-drop, real-time updates, and team features.",
      technologies: ["Next.js", "React", "MongoDB", "WebSockets"],
      link: "#",
    },
  ]

  if (!mounted) return null

  return (
    <main className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-white"}`}>
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
              : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
          }`}
        />
        {/* Animated blobs */}
        <div
          className={`absolute top-0 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${
            isDark ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${
            isDark ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute -bottom-8 left-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 ${
            isDark ? "bg-pink-500" : "bg-pink-400"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className={`inline-block mb-8 px-4 py-2 rounded-lg transition-colors ${
              isDark
                ? "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                : "bg-purple-200 text-purple-700 hover:bg-purple-300"
            }`}
          >
            ← Back to Home
          </Link>
          <h1 className={`text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>My Projects</h1>
          <p className={`text-xl ${isDark ? "text-purple-200" : "text-slate-600"}`}>
            Explore my latest work and creative projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50"
                  : "bg-white/50 border border-purple-200 hover:border-purple-400"
              }`}
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 ${
                  isDark
                    ? "bg-gradient-to-br from-purple-600 to-blue-600"
                    : "bg-gradient-to-br from-purple-400 to-blue-400"
                } flex items-center justify-center text-white text-4xl font-bold`}
              >
                {project.id}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDark ? "text-purple-200" : "text-slate-600"}`}>{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark ? "bg-purple-500/30 text-purple-200" : "bg-purple-200 text-purple-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className={`inline-block px-4 py-2 rounded-lg font-semibold transition-all ${
                    isDark
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-purple-500 text-white hover:bg-purple-600"
                  }`}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  )
}
