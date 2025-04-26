"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    const particles = []
    const particleCount = 50
    const colors = ["#ec4899", "#d946ef", "#a855f7", "#8b5cf6"]

    // Particle class
    class Particle {
      constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = {
          x: (Math.random() - 0.5) * 1,
          y: (Math.random() - 0.5) * 1,
        }
        this.alpha = Math.random()
        this.alphaDirection = Math.random() > 0.5 ? 0.01 : -0.01
      }

      draw() {
        if (!ctx) return

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.fill()
        ctx.globalAlpha = 1
      }

      update() {
        if (!canvas) return

        this.draw()

        // Bounce off edges
        if (
          this.x + this.radius + this.velocity.x > canvas.width / (window.devicePixelRatio || 1) ||
          this.x - this.radius + this.velocity.x < 0
        ) {
          this.velocity.x = -this.velocity.x
        }

        if (
          this.y + this.radius + this.velocity.y > canvas.height / (window.devicePixelRatio || 1) ||
          this.y - this.radius + this.velocity.y < 0
        ) {
          this.velocity.y = -this.velocity.y
        }

        // Update position
        this.x += this.velocity.x
        this.y += this.velocity.y

        // Pulse alpha
        this.alpha += this.alphaDirection
        if (this.alpha <= 0.1 || this.alpha >= 0.9) {
          this.alphaDirection = -this.alphaDirection
        }
      }
    }

    // Initialize particles
    const init = () => {
      if (!canvas) return

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 8 + 2
        const x = Math.random() * (canvas.width / (window.devicePixelRatio || 1) - radius * 2) + radius
        const y = Math.random() * (canvas.height / (window.devicePixelRatio || 1) - radius * 2) + radius
        const color = colors[Math.floor(Math.random() * colors.length)]

        particles.push(new Particle(x, y, radius, color))
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(236, 72, 153, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update particles
      particles.forEach((particle) => particle.update())
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-xl"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))",
            "linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))",
            "linear-gradient(to bottom right, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: "100%", height: "100%" }} />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[280px] h-[560px] bg-white dark:bg-slate-800 rounded-[36px] shadow-xl overflow-hidden border-8 border-slate-200 dark:border-slate-700">
          <div className="absolute top-0 left-0 right-0 h-6 bg-slate-200 dark:bg-slate-700 flex justify-center items-center">
            <div className="w-20 h-4 rounded-full bg-slate-300 dark:bg-slate-600" />
          </div>

          <div className="pt-6 h-full">
            <div className="h-full bg-gradient-to-b from-pink-100 to-purple-100 dark:from-slate-900 dark:to-slate-800 p-3">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3 mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  <div>
                    <div className="h-2.5 w-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
                    <div className="h-2 w-16 bg-slate-100 dark:bg-slate-600 rounded-full mt-1" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div className="h-2.5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3 mb-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="h-2.5 w-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div className="h-2.5 w-12 bg-pink-200 dark:bg-pink-900 rounded-full" />
                </div>

                <div className="h-24 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900/30 dark:to-purple-900/30 rounded-lg mb-2" />

                <div className="flex justify-between">
                  <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div className="h-6 w-16 bg-pink-200 dark:bg-pink-900 rounded-full" />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-2.5 w-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div className="h-2.5 w-12 bg-slate-200 dark:bg-slate-700 rounded-full" />
                </div>

                <div className="flex gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-pink-200 dark:bg-pink-900" />
                  <div className="h-8 w-8 rounded-full bg-purple-200 dark:bg-purple-900" />
                  <div className="h-8 w-8 rounded-full bg-blue-200 dark:bg-blue-900" />
                  <div className="h-8 w-8 rounded-full bg-green-200 dark:bg-green-900" />
                </div>

                <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full mb-2" />
                <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full mb-2" />
                <div className="h-2.5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
