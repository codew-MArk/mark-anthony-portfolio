"use client"

import { useEffect, useState } from "react"
import FloatingImage from "@/components/floating-image"
import CursorShadow from "@/components/cursor-shadow"
import HeroSection from "@/components/hero-section"
import ButtonShowcase from "@/components/button-showcase"
import { useTheme } from "@/components/theme-provider"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
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

      <CursorShadow mousePosition={mousePosition} />

      <div className="relative w-full">
        <HeroSection />
        <FloatingImage mousePosition={mousePosition} />
        <ButtonShowcase />
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
