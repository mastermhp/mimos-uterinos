"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  Activity,
  FileText,
  MessageCircle,
  Heart,
  Stethoscope,
  Sparkles,
  Brain,
  Bell,
  LineChart,
} from "lucide-react"

export default function FeatureCard({ title, description, icon, delay = 0 }) {
  const getIcon = () => {
    switch (icon) {
      case "Calendar":
        return <Calendar className="h-6 w-6 text-pink-500" />
      case "Activity":
        return <Activity className="h-6 w-6 text-purple-500" />
      case "FileText":
        return <FileText className="h-6 w-6 text-blue-500" />
      case "MessageCircle":
        return <MessageCircle className="h-6 w-6 text-green-500" />
      case "Heart":
        return <Heart className="h-6 w-6 text-red-500" />
      case "Stethoscope":
        return <Stethoscope className="h-6 w-6 text-teal-500" />
      case "Sparkles":
        return <Sparkles className="h-6 w-6 text-amber-500" />
      case "Brain":
        return <Brain className="h-6 w-6 text-indigo-500" />
      case "Bell":
        return <Bell className="h-6 w-6 text-rose-500" />
      case "LineChart":
        return <LineChart className="h-6 w-6 text-cyan-500" />
      default:
        return <Sparkles className="h-6 w-6 text-pink-500" />
    }
  }

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + delay }}
    >
      <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </motion.div>
  )
}
