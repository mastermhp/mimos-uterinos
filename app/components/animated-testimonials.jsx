"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Instructor",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Mimos Uterinos has completely transformed how I understand my body. The AI insights help me plan my workouts around my cycle, and I've never felt more in tune with my hormonal changes.",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Software Engineer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "As someone with PCOS, tracking my cycle has always been challenging. The AI predictions in Mimos Uterinos are remarkably accurate, and the symptom analysis has helped me identify triggers I never noticed before.",
    initials: "EC",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Healthcare Professional",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "I recommend Mimos Uterinos to all my patients. The detailed reports make it easy to discuss cycle patterns during appointments, and the AI insights provide valuable context for symptom management.",
    initials: "JW",
  },
]

export default function AnimatedTestimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative overflow-hidden py-12">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-pink-500/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/10 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 relative">
                <div className="absolute top-6 left-6 text-pink-500/20 dark:text-pink-500/10">
                  <Quote size={60} />
                </div>

                <div className="relative">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 relative z-10">
                    "{testimonials[current].content}"
                  </p>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage
                        src={testimonials[current].avatar || "/placeholder.svg"}
                        alt={testimonials[current].name}
                      />
                      <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                        {testimonials[current].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">{testimonials[current].name}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{testimonials[current].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  current === index ? "bg-gradient-to-r from-pink-500 to-purple-600" : "bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" onClick={next} className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
