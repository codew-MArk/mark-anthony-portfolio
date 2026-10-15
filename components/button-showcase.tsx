"use client"

import { useState } from "react"
import Link from "next/link"

export default function ButtonShowcase() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const handleResumeDownload = () => {
    const resumeContent = `
MARK ANTHONY BUNDOC
Creative Developer & Designer

CONTACT
Email: bundocmarkanthonyr@gmail.com
Phone: +63 947-351-6787
Portfolio: yourportfolio.com

PROFESSIONAL SUMMARY
Creative Developer & Designer crafting beautiful digital experiences with modern technologies.
I specialize in building interactive web applications with stunning animations and smooth user experiences.

SKILLS
- Frontend Development: React, Next.js, TypeScript
- UI/UX Design: Figma, Tailwind CSS
- Animations: Framer Motion, CSS Animations
- Web Technologies: HTML, CSS, JavaScript
- Tools: Git, VS Code, Webpack

EXPERIENCE
Senior Developer | Tech Company (2022 - Present)
- Developed interactive web applications with React and Next.js
- Created stunning animations and smooth user experiences
- Led frontend development for multiple projects

Developer | Design Studio (2020 - 2022)
- Built responsive websites and applications
- Collaborated with designers on UI/UX implementation
- Optimized performance and user experience

EDUCATION
Bachelor of Science in Computer Science
University Name (2020)

PROJECTS
- Interactive Portfolio Website
- E-commerce Platform with Animations
- Real-time Collaboration Tool
    `

    const element = document.createElement("a")
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(resumeContent))
    element.setAttribute("download", "Mark_Anthony_Bundoc_Resume.txt")
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const buttons = [
    { id: "view-work", label: "View My Work", icon: "→", href: "/projects" },
    { id: "contact", label: "Get In Touch", icon: "✉", href: "/contact" },
    { id: "resume", label: "Download Resume", icon: "↓", action: handleResumeDownload },
  ]

  return (
    <div className="absolute bottom-20 left-8 md:left-16 lg:left-24 z-20 flex flex-wrap gap-4">
      {buttons.map((button) => {
        const content = (
          <div
            onMouseEnter={() => setHoveredButton(button.id)}
            onMouseLeave={() => setHoveredButton(null)}
            className="relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden group transition-all duration-300"
            style={{
              background:
                hoveredButton === button.id
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  : "rgba(139, 92, 246, 0.2)",
              color: hoveredButton === button.id ? "#ffffff" : "#c4b5fd",
              border: "2px solid rgba(139, 92, 246, 0.5)",
              boxShadow:
                hoveredButton === button.id
                  ? "0 0 30px rgba(139, 92, 246, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)"
                  : "0 0 15px rgba(139, 92, 246, 0.2)",
              transform: hoveredButton === button.id ? "scale(1.05)" : "scale(1)",
              cursor: "pointer",
            }}
          >
            {/* Animated background on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                animation: hoveredButton === button.id ? "slideIn 0.6s ease-in-out" : "none",
              }}
            />

            {/* Button content */}
            <span className="relative flex items-center gap-2">
              {button.label}
              <span className="text-xl">{button.icon}</span>
            </span>

            <style jsx>{`
              @keyframes slideIn {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
            `}</style>
          </div>
        )

        if (button.href) {
          return (
            <Link key={button.id} href={button.href}>
              {content}
            </Link>
          )
        }

        return (
          <button
            key={button.id}
            onClick={button.action}
            type="button"
            className="w-full"
            style={{ padding: 0, border: "none", background: "none" }}
          >
            {content}
          </button>
        )
      })}
    </div>
  )
}
