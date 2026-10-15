"use client"

import Image from "next/image"
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "NEXORA",
    description: "A modern e-commerce storefront with product categories, flash deals, wishlist, and cart.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/image/ecommerce.png",
    imageAlt: "NEXORA e-commerce storefront preview",
    liveDemo: "https://nexora-rose-nu.vercel.app/",
    sourceCode: undefined,
  },
  {
    title: "SketchRoom",
    description:
      "A real-time collaborative drawing board where people join a room and sketch together, with pen, eraser, colors, undo, and PNG export.",
    tags: ["Node.js", "WebSockets", "HTML Canvas"],
    image: "/image/interactiveport.jpg",
    imageAlt: "SketchRoom collaborative workspace preview",
    liveDemo: "PASTE-YOUR-SKETCHROOM-URL-HERE",
    sourceCode: "https://github.com/codew-MArk/sketchroom",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 px-6 py-24 md:px-16 lg:px-24 lg:py-32 scroll-mt-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-purple-400">Selected work</p>
          <h2 className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Projects that make an impact
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            A selection of products and experiments built with thoughtful interactions and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-purple-400/20 bg-slate-950/45 shadow-[0_0_0_rgba(168,85,247,0)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-pink-400/50 hover:shadow-[0_16px_60px_rgba(168,85,247,0.22)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-purple-400/20 bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-purple-500/10" />
                <div className="absolute bottom-5 left-6 flex items-center gap-2 text-sm font-medium text-white/85">
                  <span className="rounded-full border border-white/20 bg-slate-950/50 px-3 py-1 backdrop-blur-sm">Featured project</span>
                </div>
              </div>

              <div className="flex min-h-[290px] flex-col p-6 md:p-7">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  >
                    Live Demo <ExternalLink aria-hidden="true" className="size-4" />
                  </a>
                  {project.sourceCode ? (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-5 py-2.5 text-sm font-semibold text-purple-100 transition hover:border-pink-400 hover:bg-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                    >
                      Source Code <Code2 aria-hidden="true" className="size-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-500"
                    >
                      Source Code <Code2 aria-hidden="true" className="size-4" />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3 text-sm text-purple-300/80">
          <ArrowUpRight aria-hidden="true" className="size-4" />
          <span>Built with curiosity, care, and a little bit of motion.</span>
        </div>
      </div>
    </section>
  )
}

