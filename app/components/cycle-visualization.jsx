"use client"

import { useEffect, useRef } from "react"

export default function CycleVisualization({ currentDay }) {
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

    // Draw cycle visualization
    const drawCycle = () => {
      if (!ctx || !canvas) return

      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) / 2.5

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw cycle phases
      const totalDays = 28
      const periodDays = 5
      const follicularDays = 9
      const ovulationDays = 2
      const lutealDays = 12

      const periodAngle = (periodDays / totalDays) * Math.PI * 2
      const follicularAngle = (follicularDays / totalDays) * Math.PI * 2
      const ovulationAngle = (ovulationDays / totalDays) * Math.PI * 2
      const lutealAngle = (lutealDays / totalDays) * Math.PI * 2

      // Draw phases
      let startAngle = -Math.PI / 2 // Start at top (12 o'clock position)

      // Period phase (red)
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + periodAngle)
      ctx.lineTo(centerX, centerY)
      ctx.fillStyle = "rgba(239, 68, 68, 0.2)" // red-500 with opacity
      ctx.fill()
      startAngle += periodAngle

      // Follicular phase (yellow)
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + follicularAngle)
      ctx.lineTo(centerX, centerY)
      ctx.fillStyle = "rgba(250, 204, 21, 0.2)" // yellow-400 with opacity
      ctx.fill()
      startAngle += follicularAngle

      // Ovulation phase (green)
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + ovulationAngle)
      ctx.lineTo(centerX, centerY)
      ctx.fillStyle = "rgba(34, 197, 94, 0.2)" // green-500 with opacity
      ctx.fill()
      startAngle += ovulationAngle

      // Luteal phase (purple)
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + lutealAngle)
      ctx.lineTo(centerX, centerY)
      ctx.fillStyle = "rgba(168, 85, 247, 0.2)" // purple-500 with opacity
      ctx.fill()

      // Draw outer circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(203, 213, 225, 0.5)" // slate-300 with opacity
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw day markers
      for (let i = 0; i < totalDays; i++) {
        const angle = (i / totalDays) * Math.PI * 2 - Math.PI / 2
        const x1 = centerX + (radius - 5) * Math.cos(angle)
        const y1 = centerY + (radius - 5) * Math.sin(angle)
        const x2 = centerX + (radius + 5) * Math.cos(angle)
        const y2 = centerY + (radius + 5) * Math.sin(angle)

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = "rgba(203, 213, 225, 0.5)" // slate-300 with opacity
        ctx.lineWidth = 1
        ctx.stroke()

        // Add day number for every 7th day
        if (i % 7 === 0) {
          const textX = centerX + (radius + 15) * Math.cos(angle)
          const textY = centerY + (radius + 15) * Math.sin(angle)

          ctx.font = "10px sans-serif"
          ctx.fillStyle = "#64748b" // slate-500
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(`Day ${i + 1}`, textX, textY)
        }
      }

      // Draw current day indicator
      const currentDayAngle = ((currentDay - 1) / totalDays) * Math.PI * 2 - Math.PI / 2
      const currentDayX = centerX + radius * Math.cos(currentDayAngle)
      const currentDayY = centerY + radius * Math.sin(currentDayAngle)

      ctx.beginPath()
      ctx.arc(currentDayX, currentDayY, 8, 0, Math.PI * 2)
      ctx.fillStyle = "#ec4899" // pink-500
      ctx.fill()
      ctx.strokeStyle = "white"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw phase labels
      const phaseLabels = [
        { name: "Menstruation", angle: -Math.PI / 2 + periodAngle / 2, color: "#ef4444" },
        { name: "Follicular", angle: -Math.PI / 2 + periodAngle + follicularAngle / 2, color: "#facc15" },
        {
          name: "Ovulation",
          angle: -Math.PI / 2 + periodAngle + follicularAngle + ovulationAngle / 2,
          color: "#22c55e",
        },
        {
          name: "Luteal",
          angle: -Math.PI / 2 + periodAngle + follicularAngle + ovulationAngle + lutealAngle / 2,
          color: "#a855f7",
        },
      ]

      phaseLabels.forEach((label) => {
        const labelRadius = radius * 0.6
        const x = centerX + labelRadius * Math.cos(label.angle)
        const y = centerY + labelRadius * Math.sin(label.angle)

        ctx.font = "12px sans-serif"
        ctx.fillStyle = label.color
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(label.name, x, y)
      })

      // Draw center text
      ctx.font = "bold 16px sans-serif"
      ctx.fillStyle = "#0f172a" // slate-900
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`Day ${currentDay}`, centerX, centerY - 10)

      // Determine current phase
      let currentPhase = ""
      if (currentDay <= periodDays) {
        currentPhase = "Menstruation"
      } else if (currentDay <= periodDays + follicularDays) {
        currentPhase = "Follicular"
      } else if (currentDay <= periodDays + follicularDays + ovulationDays) {
        currentPhase = "Ovulation"
      } else {
        currentPhase = "Luteal"
      }

      ctx.font = "12px sans-serif"
      ctx.fillStyle = "#64748b" // slate-500
      ctx.fillText(currentPhase + " Phase", centerX, centerY + 10)
    }

    drawCycle()

    // Redraw on window resize
    window.addEventListener("resize", drawCycle)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", drawCycle)
    }
  }, [currentDay])

  return (
    <div className="w-full h-full relative">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
