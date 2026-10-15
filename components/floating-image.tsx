"use client"

import { useEffect, useState } from "react"

interface FloatingImageProps {
  mousePosition: { x: number; y: number }
}

export default function FloatingImage({ mousePosition }: FloatingImageProps) {
  const [offset, setOffset] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.02
      // Wave motion: sine wave for smooth floating effect
      setOffset(Math.sin(time) * 20)
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
      <div
        className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl"
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {!imageLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700">
            <div className="text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-white text-sm font-semibold">Add Your Photo</p>
              <p className="text-purple-100 text-xs mt-2">Place image in public/images/profile.jpg</p>
            </div>
          </div>
        )}

        <img
          src="/image/profile.jpg"
          alt="Your Name"
          className={`w-full h-full object-cover ${imageLoaded ? "block" : "hidden"}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            console.log("[v0] Image not found at /image/profile.jpg - using placeholder")
            setImageLoaded(false)
          }}
        />

        {/* Animated border glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
            animation: "shimmer 3s infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes shimmer {
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
}
