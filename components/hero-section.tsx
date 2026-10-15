"use client"

import Typewriter from "./typewriter"

export default function HeroSection() {
  const roleTexts = ["Software Engineer", "Mid-Level Engineer", "Full Stack Developer", "Creative Developer & Designer"]

  return (
    <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-8 md:px-16 lg:px-24 pb-40">
      <div className="max-w-2xl">
        {/* Greeting */}
        <div className="mb-6 inline-block">
          <span className="text-purple-500 dark:text-purple-400 text-sm font-semibold tracking-widest uppercase">
            Welcome to my portfolio
          </span>
        </div>

        {/* Main heading with gradient */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
            Mark Anthony Bundoc
          </span>
        </h1>

        {/* Subtitle with typewriter animation */}
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed max-w-xl h-16">
          <Typewriter
            texts={roleTexts}
            speed={50}
            delay={2000}
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-300"
          />
        </p>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-20 max-w-lg leading-relaxed">
          I specialize in building interactive web applications with stunning animations and smooth user experiences.
        </p>
      </div>
    </div>
  )
}
