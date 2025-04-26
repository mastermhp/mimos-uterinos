"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, Calendar, TrendingUp, FileText, Activity, Heart, Moon, Sun, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useIsMobile } from "@/app/hooks/use-mobile"
// import { useIsMobile } from "@/hooks/use-mobile"

export default function ReportsPage() {
  const [selectedMonth, setSelectedMonth] = useState("May 2025")
  const isMobile = useIsMobile()

  return (
    <div className="p-3 sm:p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-1">Health Reports</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            View insights and trends from your cycle data
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-[140px] sm:w-[180px] text-xs sm:text-sm h-9 sm:h-10">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="May 2025">May 2025</SelectItem>
              <SelectItem value="April 2025">April 2025</SelectItem>
              <SelectItem value="March 2025">March 2025</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xs sm:text-sm h-9 sm:h-10"
            size={isMobile ? "sm" : "default"}
          >
            <Download className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <ScrollArea className="w-full">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full sm:w-auto inline-flex h-9 sm:h-10 mb-6 sm:mb-8">
              <TabsTrigger value="overview" className="text-xs sm:text-sm px-2.5 sm:px-4">
                Overview
              </TabsTrigger>
              <TabsTrigger value="cycle" className="text-xs sm:text-sm px-2.5 sm:px-4">
                Cycle Analysis
              </TabsTrigger>
              <TabsTrigger value="symptoms" className="text-xs sm:text-sm px-2.5 sm:px-4">
                Symptoms
              </TabsTrigger>
              <TabsTrigger value="doctor" className="text-xs sm:text-sm px-2.5 sm:px-4">
                Doctor Report
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader className="pb-2 p-4 sm:p-6">
                      <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
                        Cycle Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            Average Cycle Length
                          </div>
                          <div className="text-xs sm:text-sm font-medium">28 days</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            Average Period Length
                          </div>
                          <div className="text-xs sm:text-sm font-medium">5 days</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Cycle Regularity</div>
                          <div className="text-xs sm:text-sm font-medium text-green-500">High</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Last Period</div>
                          <div className="text-xs sm:text-sm font-medium">May 1, 2025</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            Next Period (Predicted)
                          </div>
                          <div className="text-xs sm:text-sm font-medium">May 29, 2025</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card>
                    <CardHeader className="pb-2 p-4 sm:p-6">
                      <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                        <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                        Symptom Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            Most Common Symptom
                          </div>
                          <div className="text-xs sm:text-sm font-medium">Fatigue</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">PMS Duration</div>
                          <div className="text-xs sm:text-sm font-medium">4 days</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Symptom Severity</div>
                          <div className="text-xs sm:text-sm font-medium text-yellow-500">Moderate</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Mood Pattern</div>
                          <div className="text-xs sm:text-sm font-medium">Stable</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Energy Level</div>
                          <div className="text-xs sm:text-sm font-medium">Varies by phase</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="sm:col-span-2 lg:col-span-1"
                >
                  <Card>
                    <CardHeader className="pb-2 p-4 sm:p-6">
                      <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                        Health Trends
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Sleep Quality</div>
                          <div className="text-xs sm:text-sm font-medium text-green-500">Improving</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Stress Level</div>
                          <div className="text-xs sm:text-sm font-medium text-yellow-500">Moderate</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            Exercise Frequency
                          </div>
                          <div className="text-xs sm:text-sm font-medium">3-4 times/week</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Hydration</div>
                          <div className="text-xs sm:text-sm font-medium text-yellow-500">Needs improvement</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Overall Wellbeing</div>
                          <div className="text-xs sm:text-sm font-medium text-green-500">Good</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="mb-6 sm:mb-8">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg">Monthly Cycle Visualization</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Your cycle phases and key events for {selectedMonth}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="h-[180px] sm:h-[200px] relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-6 sm:h-8 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden flex">
                          <div className="h-full bg-red-400 w-[18%]" title="Menstruation Phase (Days 1-5)" />
                          <div className="h-full bg-yellow-400 w-[28%]" title="Follicular Phase (Days 6-13)" />
                          <div className="h-full bg-green-400 w-[7%]" title="Ovulation Phase (Days 14-15)" />
                          <div className="h-full bg-purple-400 w-[47%]" title="Luteal Phase (Days 16-28)" />
                        </div>
                      </div>

                      <div className="absolute inset-x-0 top-10 sm:top-12 flex justify-between px-2 sm:px-4">
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-slate-400" />
                          <div className="text-[10px] sm:text-xs mt-1 text-slate-600 dark:text-slate-400">Day 1</div>
                          <div className="text-[10px] sm:text-xs text-red-500 font-medium">Period</div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-slate-400" />
                          <div className="text-[10px] sm:text-xs mt-1 text-slate-600 dark:text-slate-400">Day 14</div>
                          <div className="text-[10px] sm:text-xs text-green-500 font-medium">Ovulation</div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-slate-400" />
                          <div className="text-[10px] sm:text-xs mt-1 text-slate-600 dark:text-slate-400">Day 24</div>
                          <div className="text-[10px] sm:text-xs text-yellow-500 font-medium">PMS</div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-slate-400" />
                          <div className="text-[10px] sm:text-xs mt-1 text-slate-600 dark:text-slate-400">Day 28</div>
                          <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Cycle End</div>
                        </div>
                      </div>

                      <div className="absolute bottom-0 inset-x-0 flex justify-around">
                        <div className="text-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto">
                            <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                          </div>
                          <div className="text-[10px] sm:text-xs mt-1 font-medium">Menstruation</div>
                          <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">Days 1-5</div>
                        </div>

                        <div className="text-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mx-auto">
                            <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                          </div>
                          <div className="text-[10px] sm:text-xs mt-1 font-medium">Follicular</div>
                          <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">Days 6-13</div>
                        </div>

                        <div className="text-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                          </div>
                          <div className="text-[10px] sm:text-xs mt-1 font-medium">Ovulation</div>
                          <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">Days 14-15</div>
                        </div>

                        <div className="text-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto">
                            <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
                          </div>
                          <div className="text-[10px] sm:text-xs mt-1 font-medium">Luteal</div>
                          <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">Days 16-28</div>
                        </div>
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
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg">AI Health Recommendations</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Personalized insights based on your cycle data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Droplets className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium">Hydration</div>
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            Your logs show decreased water intake during your luteal phase. Try to increase hydration
                            3-4 days before your period to help reduce bloating and cramps.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium">Sleep</div>
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            Your sleep quality decreases during PMS days. Consider a calming bedtime routine and
                            limiting screen time before bed during days 24-28 of your cycle.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Activity className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium">Exercise</div>
                          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            Your energy levels peak during the follicular phase. This is an ideal time for
                            high-intensity workouts. Consider gentler exercises like yoga during your period.
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="cycle">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg">Cycle Length Analysis</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Your cycle length over the past 6 months
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="h-[250px] sm:h-[300px] flex items-end justify-between gap-1 sm:gap-2 pt-8 relative">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 flex flex-col justify-between text-[10px] sm:text-xs text-slate-500">
                        <div>35</div>
                        <div>30</div>
                        <div>25</div>
                        <div>20</div>
                      </div>

                      {/* Bars */}
                      <div className="flex-1 flex items-end justify-around h-full pl-6 sm:pl-10">
                        {[
                          { month: "Dec", days: 29 },
                          { month: "Jan", days: 28 },
                          { month: "Feb", days: 30 },
                          { month: "Mar", days: 27 },
                          { month: "Apr", days: 28 },
                          { month: "May", days: 28 },
                        ].map((item, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div
                              className="w-8 sm:w-12 bg-gradient-to-t from-pink-500 to-purple-500 rounded-t-md"
                              style={{ height: `${(item.days / 35) * 100}%` }}
                            />
                            <div className="mt-2 text-[10px] sm:text-xs">{item.month}</div>
                            <div className="text-[10px] sm:text-xs font-medium">{item.days}d</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 p-2.5 sm:p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <h4 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">AI Analysis</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        Your cycle length has been relatively consistent over the past 6 months, with an average of 28.3
                        days. This indicates good hormonal balance and regularity.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg">Period Duration</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Your period length over the past 6 months
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="h-[250px] sm:h-[300px] flex items-end justify-between gap-1 sm:gap-2 pt-8 relative">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 flex flex-col justify-between text-[10px] sm:text-xs text-slate-500">
                        <div>7</div>
                        <div>6</div>
                        <div>5</div>
                        <div>4</div>
                        <div>3</div>
                      </div>

                      {/* Bars */}
                      <div className="flex-1 flex items-end justify-around h-full pl-6 sm:pl-10">
                        {[
                          { month: "Dec", days: 5 },
                          { month: "Jan", days: 6 },
                          { month: "Feb", days: 5 },
                          { month: "Mar", days: 5 },
                          { month: "Apr", days: 4 },
                          { month: "May", days: 5 },
                        ].map((item, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div
                              className="w-8 sm:w-12 bg-gradient-to-t from-red-500 to-pink-500 rounded-t-md"
                              style={{ height: `${(item.days / 7) * 100}%` }}
                            />
                            <div className="mt-2 text-[10px] sm:text-xs">{item.month}</div>
                            <div className="text-[10px] sm:text-xs font-medium">{item.days}d</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 p-2.5 sm:p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <h4 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">AI Analysis</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        Your period duration has been stable, averaging 5 days. April showed a slightly shorter period,
                        which may be related to the stress you logged that month.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="symptoms">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg">Symptom Frequency</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Most common symptoms during your cycle
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <div className="text-xs sm:text-sm">Fatigue</div>
                          <div className="text-xs sm:text-sm text-slate-500">85%</div>
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500 rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <div className="text-xs sm:text-sm">Mood Changes</div>
                          <div className="text-xs sm:text-sm text-slate-500">70%</div>
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500 rounded-full" style={{ width: "70%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <div className="text-xs sm:text-sm">Cramps</div>
                          <div className="text-xs sm:text-sm text-slate-500">65%</div>
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500 rounded-full" style={{ width: "65%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <div className="text-xs sm:text-sm">Bloating</div>
                          <div className="text-xs sm:text-sm text-slate-500">60%</div>
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500 rounded-full" style={{ width: "60%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <div className="text-xs sm:text-sm">Headache</div>
                          <div className="text-xs sm:text-sm text-slate-500">45%</div>
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500 rounded-full" style={{ width: "45%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <div className="text-xs sm:text-sm">Breast Tenderness</div>
                          <div className="text-xs sm:text-sm text-slate-500">40%</div>
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500 rounded-full" style={{ width: "40%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 p-2.5 sm:p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <h4 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">AI Analysis</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        Fatigue and mood changes are your most frequent symptoms. These typically appear 2-3 days before
                        your period and during the first 2 days of menstruation.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg">Symptom Timing</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">When symptoms occur in your cycle</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="h-[250px] sm:h-[300px] relative">
                      <div className="absolute inset-0">
                        <div className="w-full h-full flex flex-col">
                          <div className="flex-1 border-b border-slate-200 dark:border-slate-700 relative">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full h-6 sm:h-8 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden flex">
                                <div className="h-full bg-red-400 w-[18%]" />
                                <div className="h-full bg-yellow-400 w-[28%]" />
                                <div className="h-full bg-green-400 w-[7%]" />
                                <div className="h-full bg-purple-400 w-[47%]" />
                              </div>
                            </div>

                            <div
                              className="absolute bottom-2 left-[5%] w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full"
                              title="Cramps"
                            />
                            <div
                              className="absolute bottom-2 left-[10%] w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full"
                              title="Fatigue"
                            />
                            <div
                              className="absolute bottom-2 left-[15%] w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full"
                              title="Headache"
                            />
                            <div
                              className="absolute bottom-2 left-[85%] w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full"
                              title="Mood Changes"
                            />
                            <div
                              className="absolute bottom-2 left-[90%] w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full"
                              title="Bloating"
                            />
                            <div
                              className="absolute bottom-2 left-[95%] w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full"
                              title="Breast Tenderness"
                            />
                          </div>

                          <div className="h-10 sm:h-12 flex justify-between items-center px-2 sm:px-4 text-[10px] sm:text-xs text-slate-500">
                            <div>Day 1</div>
                            <div>Day 7</div>
                            <div>Day 14</div>
                            <div>Day 21</div>
                            <div>Day 28</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 p-2.5 sm:p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <h4 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">AI Analysis</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        Your symptoms cluster at the beginning of your period (days 1-3) and during the late luteal
                        phase (days 25-28). This is a common pattern and suggests normal hormonal fluctuations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="doctor">
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">Doctor Report</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Medical summary for healthcare providers
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="p-3 sm:p-6 border border-slate-200 dark:border-slate-700 rounded-lg mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6">
                      <div>
                        <h3 className="text-base sm:text-xl font-bold mb-1">Menstrual Health Report</h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          Generated on {new Date().toLocaleDateString()}
                        </p>
                      </div>
                      <Button variant="outline" size={isMobile ? "sm" : "default"} className="text-xs sm:text-sm">
                        <Download className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Download PDF
                      </Button>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="text-sm sm:text-lg font-medium mb-2">Patient Information</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                          <div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Name</div>
                            <div className="text-xs sm:text-sm">Jane Doe</div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Date of Birth</div>
                            <div className="text-xs sm:text-sm">January 15, 1995</div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Report Period</div>
                            <div className="text-xs sm:text-sm">December 2024 - May 2025</div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Generated By</div>
                            <div className="text-xs sm:text-sm">Luna AI Health Assistant</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700">
                        <h4 className="text-sm sm:text-lg font-medium mb-2">Cycle Summary</h4>
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                              Average Cycle Length
                            </div>
                            <div className="text-xs sm:text-sm">28.3 days (Range: 27-30 days)</div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                              Average Period Duration
                            </div>
                            <div className="text-xs sm:text-sm">5 days (Range: 4-6 days)</div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                              Cycle Regularity
                            </div>
                            <div className="text-xs sm:text-sm">Regular (Variation 3 days)</div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                              Last Three Periods
                            </div>
                            <div className="text-xs sm:text-sm">May 1, Apr 3, Mar 7</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700">
                        <h4 className="text-sm sm:text-lg font-medium mb-2">Symptom Analysis</h4>
                        <div className="space-y-1 sm:space-y-2">
                          <div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-0.5 sm:mb-1">
                              Primary Symptoms
                            </div>
                            <div className="text-xs sm:text-sm">Fatigue (85%), Mood Changes (70%), Cramps (65%)</div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-0.5 sm:mb-1">
                              Symptom Timing
                            </div>
                            <div className="text-xs sm:text-sm">
                              Primarily during days 1-3 of menstruation and days 25-28 of cycle
                            </div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-0.5 sm:mb-1">
                              Symptom Severity
                            </div>
                            <div className="text-xs sm:text-sm">Moderate (Average intensity: 6/10)</div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-0.5 sm:mb-1">
                              Pain Management
                            </div>
                            <div className="text-xs sm:text-sm">Occasional use of over-the-counter pain relievers</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700">
                        <h4 className="text-sm sm:text-lg font-medium mb-2">Additional Notes</h4>
                        <div className="text-xs sm:text-sm">
                          <p className="mb-2">
                            Patient reports improved energy levels during the follicular phase. Sleep quality decreases
                            during the late luteal phase (days 24-28).
                          </p>
                          <p>
                            No significant changes in cycle length or symptom severity over the past 6 months. Patient
                            has been tracking cycle consistently for 6 months.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xs sm:text-sm"
                      size={isMobile ? "sm" : "default"}
                    >
                      <FileText className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      Generate Full Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </div>
    </div>
  )
}
