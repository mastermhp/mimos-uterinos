"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, CalendarIcon, Droplets, Moon, Heart, Activity, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Generate calendar data
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)

    // Day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay()

    // Total days in the month
    const daysInMonth = lastDay.getDate()

    // Calendar array
    const calendarDays = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push({ day: null, date: null })
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)

      // Determine if this day is part of the period (for demo, days 1-5)
      const isPeriod = day >= 1 && day <= 5

      // Determine if this day is ovulation (for demo, days 14-15)
      const isOvulation = day >= 14 && day <= 15

      // Determine if this day is fertile window (for demo, days 11-16)
      const isFertile = day >= 11 && day <= 16 && !isOvulation

      // Determine if this day is PMS (for demo, days 24-28)
      const isPMS = day >= 24 && day <= 28

      calendarDays.push({
        day,
        date,
        isPeriod,
        isOvulation,
        isFertile,
        isPMS,
        hasSymptoms: [3, 8, 12, 17, 22, 26].includes(day),
      })
    }

    return calendarDays
  }

  const calendarDays = generateCalendarDays()

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const formatMonth = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  const isToday = (date) => {
    if (!date) return false
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (date) => {
    if (!date) return false
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Calendar</h1>
          <p className="text-slate-600 dark:text-slate-400">Track your cycle and symptoms</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Month View</SelectItem>
              <SelectItem value="week">Week View</SelectItem>
              <SelectItem value="year">Year View</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
            <Plus className="mr-2 h-4 w-4" />
            Log Symptoms
          </Button>
        </div>
      </div>

      <motion.div
        className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={handlePrevMonth}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-xl font-medium">{formatMonth(currentMonth)}</h2>
          <Button variant="ghost" size="icon" onClick={handleNextMonth}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-7 text-center py-2 border-b border-slate-200 dark:border-slate-700">
          {weekdays.map((day) => (
            <div key={day} className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 text-center">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`py-3 px-1 relative ${
                day.day ? "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50" : ""
              }`}
              onClick={() => day.date && setSelectedDate(day.date)}
            >
              {day.day && (
                <>
                  <div
                    className={`
                      w-10 h-10 mx-auto flex items-center justify-center rounded-full relative
                      ${isToday(day.date) ? "bg-slate-100 dark:bg-slate-700" : ""}
                      ${isSelected(day.date) ? "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 font-medium" : ""}
                    `}
                  >
                    {day.day}

                    {/* Period indicator */}
                    {day.isPeriod && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-red-500 rounded-full" />
                    )}

                    {/* Ovulation indicator */}
                    {day.isOvulation && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-green-500 rounded-full" />
                    )}

                    {/* Fertile window indicator */}
                    {day.isFertile && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-teal-400 rounded-full" />
                    )}

                    {/* PMS indicator */}
                    {day.isPMS && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-yellow-400 rounded-full" />
                    )}
                  </div>

                  {/* Symptom dots */}
                  {day.hasSymptoms && <div className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full" />}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-red-500 rounded-full" />
            <span className="text-xs text-slate-600 dark:text-slate-400">Period</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-green-500 rounded-full" />
            <span className="text-xs text-slate-600 dark:text-slate-400">Ovulation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-teal-400 rounded-full" />
            <span className="text-xs text-slate-600 dark:text-slate-400">Fertile Window</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-yellow-400 rounded-full" />
            <span className="text-xs text-slate-600 dark:text-slate-400">PMS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span className="text-xs text-slate-600 dark:text-slate-400">Symptoms</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-medium">
                    {selectedDate.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {selectedDate.getDate() === 14
                      ? "Ovulation Phase"
                      : selectedDate.getDate() <= 5
                        ? "Menstruation Phase"
                        : selectedDate.getDate() >= 24
                          ? "Luteal Phase (PMS)"
                          : selectedDate.getDate() <= 13
                            ? "Follicular Phase"
                            : "Luteal Phase"}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Add Event
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Droplets className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="font-medium">Hydration Reminder</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Drink more water today</div>
                  </div>
                </div>

                {selectedDate.getDate() === 14 && (
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Heart className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium">Ovulation Day</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Peak fertility today</div>
                    </div>
                  </div>
                )}

                {selectedDate.getDate() <= 5 && (
                  <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium">Period Day {selectedDate.getDate()}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Take it easy today</div>
                    </div>
                  </div>
                )}

                {selectedDate.getDate() >= 24 && (
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                      <Moon className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <div className="font-medium">PMS Phase</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Mood changes may occur</div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Symptom Log</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Mood</div>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Log
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    {["😔", "😐", "🙂", "😊", "😁"].map((emoji, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`w-10 h-10 p-0 ${index === 3 ? "bg-slate-100 dark:bg-slate-700" : ""}`}
                      >
                        <span className="text-lg">{emoji}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Energy</div>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Log
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    {["Very Low", "Low", "Medium", "High", "Very High"].map((level, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`flex-1 text-xs h-8 ${index === 2 ? "bg-slate-100 dark:bg-slate-700" : ""}`}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Symptoms</div>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Log
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {["Cramps", "Headache", "Bloating", "Fatigue", "Acne", "Cravings"].map((symptom, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`text-xs h-8 ${[1, 3].includes(index) ? "bg-slate-100 dark:bg-slate-700" : ""}`}
                      >
                        {symptom}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full mt-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                  Save Log
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
