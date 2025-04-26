"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarIcon, Droplets, Moon, Pill, Sparkles, ArrowRight, TrendingUp, Heart, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"
import CycleVisualization from "@/app/components/cycle-visualization"

export default function DemoUserDashboardPage() {
  const router = useRouter()
  const [cycleDay, setCycleDay] = useState(14)
  const [cyclePhase, setCyclePhase] = useState("Ovulation")

  // Simulated data
  const currentDate = new Date()
  const nextPeriodDate = new Date()
  nextPeriodDate.setDate(currentDate.getDate() + 14)

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const insights = [
    {
      title: "Hydration",
      description: "Drink more water today",
      icon: Droplets,
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Sleep",
      description: "Try to sleep earlier tonight",
      icon: Moon,
      color: "text-indigo-500",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
      title: "Nutrition",
      description: "Increase iron intake",
      icon: Pill,
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Good morning, Jane</h1>
          <p className="text-slate-600 dark:text-slate-400">Here's your health overview for today</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Button variant="outline" size="sm" onClick={() => router.push("/demo/user/calendar")}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            Calendar
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            onClick={() => router.push("/demo/user/chat")}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Ask Luna AI
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          className="col-span-1 md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Cycle Overview</CardTitle>
              <CardDescription>
                Day {cycleDay} of 28 • {cyclePhase} Phase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <CycleVisualization currentDay={cycleDay} />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Next period in</div>
                  <div className="text-lg font-medium">14 days ({formatDate(nextPeriodDate)})</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => router.push("/demo/user/calendar")}>
                  View calendar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Today's Log</CardTitle>
              <CardDescription>Track your symptoms and mood</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Energy</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">70%</div>
                  </div>
                  <Progress value={70} className="h-2 bg-slate-200 dark:bg-slate-700" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Mood</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">85%</div>
                  </div>
                  <Progress value={85} className="h-2 bg-slate-200 dark:bg-slate-700" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Sleep</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">60%</div>
                  </div>
                  <Progress value={60} className="h-2 bg-slate-200 dark:bg-slate-700" />
                </div>

                <Button className="w-full mt-4" variant="outline" onClick={() => router.push("/demo/user/symptoms")}>
                  Log today
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">AI Insights for Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full ${insight.bgColor} flex items-center justify-center`}>
                      <insight.icon className={`h-5 w-5 ${insight.color}`} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{insight.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{insight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Health Trends</CardTitle>
              <CardDescription>Your last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-pink-500" />
                    </div>
                    <div>
                      <div className="font-medium">Cycle Regularity</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Improved by 15%</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => router.push("/demo/user/reports")}>
                    View
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-medium">Symptom Intensity</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Decreased by 8%</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => router.push("/demo/user/reports")}>
                    View
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Activity className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium">Sleep Quality</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Stable</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => router.push("/demo/user/reports")}>
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>AI Chat</CardTitle>
                <CardDescription>Ask Luna about your health</CardDescription>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <div className="flex gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shrink-0">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mb-1">Luna AI</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Hi Jane! You're in your ovulation phase today. This is a good time to monitor your fertility signs
                      if you're tracking them. Need any specific advice?
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2"
                  onClick={() => router.push("/demo/user/chat")}
                >
                  Why am I feeling more energetic today?
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2"
                  onClick={() => router.push("/demo/user/chat")}
                >
                  What foods should I eat during ovulation?
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2"
                  onClick={() => router.push("/demo/user/chat")}
                >
                  How can I track my fertility signs?
                </Button>
              </div>

              <Button
                className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                onClick={() => router.push("/demo/user/chat")}
              >
                Chat with Luna
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
