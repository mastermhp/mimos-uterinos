"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Plus,
  Search,
  Calendar,
  ArrowRight,
  Activity,
  Heart,
  Thermometer,
  Droplets,
  Moon,
  Brain,
  Utensils,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export default function SymptomsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const commonSymptoms = [
    { name: "Cramps", icon: Activity, color: "text-red-500", bgColor: "bg-red-100 dark:bg-red-900/30" },
    { name: "Headache", icon: Brain, color: "text-purple-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
    { name: "Fatigue", icon: Moon, color: "text-indigo-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
    { name: "Bloating", icon: Droplets, color: "text-blue-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
    { name: "Mood Swings", icon: Heart, color: "text-pink-500", bgColor: "bg-pink-100 dark:bg-pink-900/30" },
    {
      name: "Temperature",
      icon: Thermometer,
      color: "text-orange-500",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    { name: "Appetite", icon: Utensils, color: "text-green-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  ]

  const recentSymptoms = [
    { name: "Fatigue", date: "May 15", intensity: "Moderate", notes: "Felt tired throughout the day" },
    { name: "Headache", date: "May 14", intensity: "Mild", notes: "Slight pain in the afternoon" },
    { name: "Cramps", date: "May 5", intensity: "Severe", notes: "Needed pain medication" },
    { name: "Bloating", date: "May 4", intensity: "Moderate", notes: "Uncomfortable after meals" },
  ]

  const filteredSymptoms = searchQuery
    ? commonSymptoms.filter((symptom) => symptom.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : commonSymptoms

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Symptoms Tracker</h1>
          <p className="text-slate-600 dark:text-slate-400">Monitor and log your symptoms throughout your cycle</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Button variant="outline" size="sm" onClick={() => router.push("/demo/user/calendar")}>
            <Calendar className="mr-2 h-4 w-4" />
            View Calendar
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            Log New Symptom
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search symptoms..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="all">All Symptoms</TabsTrigger>
          <TabsTrigger value="recent">Recent Logs</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSymptoms.map((symptom, index) => (
              <motion.div
                key={symptom.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full ${symptom.bgColor} flex items-center justify-center`}>
                        <symptom.icon className={`h-5 w-5 ${symptom.color}`} />
                      </div>
                      <div>
                        <h3 className="font-medium">{symptom.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Tap to log</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: filteredSymptoms.length * 0.05 }}
            >
              <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto">
                      <Plus className="h-5 w-5 text-slate-500" />
                    </div>
                    <h3 className="font-medium mt-2">Custom Symptom</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Add your own</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="recent">
          <div className="space-y-4">
            {recentSymptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          <Activity className="h-5 w-5 text-pink-500" />
                        </div>
                        <div>
                          <div className="font-medium">{symptom.name}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">{symptom.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-medium ${
                            symptom.intensity === "Severe"
                              ? "text-red-500"
                              : symptom.intensity === "Moderate"
                                ? "text-yellow-500"
                                : "text-green-500"
                          }`}
                        >
                          {symptom.intensity}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{symptom.notes}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <div className="flex justify-center mt-6">
              <Button variant="outline">
                View All Logs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Symptom Trends</CardTitle>
              <CardDescription>Analysis of your symptoms over the past 3 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Symptom Frequency</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">Fatigue</div>
                        <div className="text-sm text-slate-500">85%</div>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">Headache</div>
                        <div className="text-sm text-slate-500">65%</div>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: "65%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">Cramps</div>
                        <div className="text-sm text-slate-500">60%</div>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: "60%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">Bloating</div>
                        <div className="text-sm text-slate-500">45%</div>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: "45%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Symptom Intensity by Cycle Phase</h3>
                  <div className="h-[200px] relative">
                    <div className="absolute inset-0">
                      <div className="w-full h-full flex flex-col">
                        <div className="flex-1 border-b border-slate-200 dark:border-slate-700 relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full h-8 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden flex">
                              <div className="h-full bg-red-400 w-[18%]" />
                              <div className="h-full bg-yellow-400 w-[28%]" />
                              <div className="h-full bg-green-400 w-[7%]" />
                              <div className="h-full bg-purple-400 w-[47%]" />
                            </div>
                          </div>

                          <div
                            className="absolute bottom-2 left-[5%] w-4 h-4 bg-pink-500 rounded-full"
                            title="Cramps"
                          />
                          <div
                            className="absolute bottom-2 left-[10%] w-4 h-4 bg-pink-500 rounded-full"
                            title="Fatigue"
                          />
                          <div
                            className="absolute bottom-2 left-[15%] w-4 h-4 bg-pink-500 rounded-full"
                            title="Headache"
                          />
                          <div
                            className="absolute bottom-2 left-[85%] w-4 h-4 bg-pink-500 rounded-full"
                            title="Mood Swings"
                          />
                          <div
                            className="absolute bottom-2 left-[90%] w-4 h-4 bg-pink-500 rounded-full"
                            title="Bloating"
                          />
                        </div>

                        <div className="h-12 flex justify-between items-center px-4 text-xs text-slate-500">
                          <div>Menstruation</div>
                          <div>Follicular</div>
                          <div>Ovulation</div>
                          <div>Luteal</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <h4 className="font-medium mb-2">AI Insights</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Your symptoms are most intense during the first 3 days of menstruation and the last 4 days of your
                    luteal phase. Consider tracking your hydration and sleep during these periods to identify potential
                    correlations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Log a New Symptom</CardTitle>
          <CardDescription>Record your symptoms to track patterns over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Symptom Type</label>
                <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">
                  <option value="">Select a symptom</option>
                  {commonSymptoms.map((symptom) => (
                    <option key={symptom.name} value={symptom.name}>
                      {symptom.name}
                    </option>
                  ))}
                  <option value="custom">Add Custom Symptom</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Intensity</label>
                <div className="flex gap-2">
                  {["Mild", "Moderate", "Severe"].map((level) => (
                    <Button key={level} variant="outline" className={`flex-1 text-xs h-8`}>
                      {level}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Date</label>
                <Input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Notes</label>
                <textarea
                  className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950 min-h-[120px]"
                  placeholder="Add any additional details about this symptom..."
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Related Factors</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Stress", "Poor Sleep", "Diet", "Exercise", "Medication", "Weather"].map((factor) => (
                    <Button key={factor} variant="outline" className="text-xs h-8 justify-start">
                      {factor}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button variant="outline" className="mr-2">
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
              Save Symptom
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
