"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Activity, FileText, MessageCircle, Heart, Stethoscope, Sparkles, Brain, Bell, LineChart } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const iconComponents = {
  Calendar,
  Activity,
  FileText,
  MessageCircle,
  Heart,
  Stethoscope,
  Sparkles,
  Brain,
  Bell,
  LineChart
}

const iconColors = {
  Calendar: "text-pink-500",
  Activity: "text-purple-500",
  FileText: "text-blue-500",
  MessageCircle: "text-green-500",
  Heart: "text-red-500",
  Stethoscope: "text-teal-500",
  Sparkles: "text-amber-500",
  Brain: "text-indigo-500",
  Bell: "text-rose-500",
  LineChart: "text-cyan-500"
}

const bgColors = {
  Calendar: "bg-pink-100 dark:bg-pink-900/30",
  Activity: "bg-purple-100 dark:bg-purple-900/30",
  FileText: "bg-blue-100 dark:bg-blue-900/30",
  MessageCircle: "bg-green-100 dark:bg-green-900/30",
  Heart: "bg-red-100 dark:bg-red-900/30",
  Stethoscope: "bg-teal-100 dark:bg-teal-900/30",
  Sparkles: "bg-amber-100 dark:bg-amber-900/30",
  Brain: "bg-indigo-100 dark:bg-indigo-900/30",
  Bell: "bg-rose-100 dark:bg-rose-900/30",
  LineChart: "bg-cyan-100 dark:bg-cyan-900/30"
}

export default function AnimatedFeatures({ features }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => {
        const Icon = iconComponents[feature.icon]
        const isHovered = hoveredIndex === index
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <motion.div 
                  className={`w-16 h-16 rounded-2xl ${bgColors[feature.icon]} flex items-center justify-center mb-6`}
                  animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className={`h-8 w-8 ${iconColors[feature.icon]}`} />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold mb-3"
                  animate={{ 
                    x: isHovered ? 5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-slate-600 dark:text-slate-400"
                  animate={{ 
                    opacity: isHovered ? 1 : 0.8,
                  }}
                >
                  {feature.description}
                </motion.p>
              </CardContent>
              
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br opacity-0"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom right, ${feature.gradientFrom || "#ec489920"}, ${feature.gradientTo || "#8b5cf620"})` 
                }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Animated particles */}
              {isHovered && (
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 rounded-full ${iconColors[feature.icon].replace("text-", "bg-")}`}
                      initial={{ 
                        x: "50%", 
                        y: "50%",
                        opacity: 0 
                      }}
                      animate={{ 
                        x: `${50 + (Math.random() * 40 - 20)}%`, 
                        y: `${50 + (Math.random() * 40 - 20)}%`,
                        opacity: [0, 0.8, 0] 
                      }}
                      transition={{ 
                        duration: 1.5 + Math.random(),
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
