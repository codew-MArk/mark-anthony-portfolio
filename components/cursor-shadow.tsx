"use client"

import { useEffect, useRef } from "react"

interface CursorShadowProps {
  mousePosition: { x: number; y: number }
}

export default function CursorShadow({ mousePosition }: CursorShadowProps) {
  const shadowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shadowRef.current) return

    const updateShadow = () => {
      if (shadowRef.current) {
        shadowRef.current.style.left = `${mousePosition.x}px`
        shadowRef.current.style.top = `${mousePosition.y}px`
      }
    }

    updateShadow()
  }, [mousePosition])

  return (
    <>
      {/* Cursor shadow glow effect */}
      <div
        ref={shadowRef}
        className="fixed w-32 h-32 pointer-events-none z-40 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(40px)",
        }}
      />

      {/* Inner cursor dot */}
      <div
        className="fixed w-3 h-3 pointer-events-none z-50 rounded-full"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background: "rgba(139, 92, 246, 0.8)",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
        }}
      />
    </>
  )
}
