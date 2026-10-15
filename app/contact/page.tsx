"use client"

import type React from "react"

import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const { isDark } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

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
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
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
          <h1 className={`text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>Get In Touch</h1>
          <p className={`text-xl ${isDark ? "text-purple-200" : "text-slate-600"}`}>
            I'd love to hear from you. Send me a message!
          </p>
        </div>

        {/* Contact Form */}
        <div
          className={`rounded-xl backdrop-blur-sm p-8 ${
            isDark ? "bg-slate-800/50 border border-purple-500/20" : "bg-white/50 border border-purple-200"
          }`}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? "text-green-400" : "text-green-600"}`}>
                Message Sent!
              </h2>
              <p className={isDark ? "text-purple-200" : "text-slate-600"}>
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors ${
                    isDark
                      ? "bg-slate-700 border border-purple-500/30 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none"
                      : "bg-white border border-purple-300 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:outline-none"
                  }`}
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors ${
                    isDark
                      ? "bg-slate-700 border border-purple-500/30 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none"
                      : "bg-white border border-purple-300 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:outline-none"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg transition-colors resize-none ${
                    isDark
                      ? "bg-slate-700 border border-purple-500/30 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none"
                      : "bg-white border border-purple-300 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:outline-none"
                  }`}
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  isDark
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                    : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                }`}
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div
            className={`rounded-lg p-6 ${
              isDark ? "bg-slate-800/50 border border-purple-500/20" : "bg-white/50 border border-purple-200"
            }`}
          >
            <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>Email</h3>
            <p className={isDark ? "text-purple-200" : "text-slate-600"}>bundocmarkanthonyr@gmail.com</p>
          </div>
          <div
            className={`rounded-lg p-6 ${
              isDark ? "bg-slate-800/50 border border-purple-500/20" : "bg-white/50 border border-purple-200"
            }`}
          >
            <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>Phone</h3>
            <p className={isDark ? "text-purple-200" : "text-slate-600"}>+63 (947) 351-6787</p>
          </div>
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
