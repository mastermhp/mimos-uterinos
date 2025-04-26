"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Users,
  Activity,
  MessageSquare,
  FileText,
  TrendingUp,
  Bell,
  Download,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function AdminDashboardPage() {
  const router = useRouter()
  const [activeUsers, setActiveUsers] = useState(2458)
  const [totalUsers, setTotalUsers] = useState(12750)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Admin Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">Overview of platform metrics and activity</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Active Users</p>
                  <div className="text-2xl font-bold">{activeUsers.toLocaleString()}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="text-green-500 flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>12%</span>
                </div>
                <span className="text-slate-500 dark:text-slate-400 ml-2">vs last month</span>
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
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Total Users</p>
                  <div className="text-2xl font-bold">{totalUsers.toLocaleString()}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="text-green-500 flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>8%</span>
                </div>
                <span className="text-slate-500 dark:text-slate-400 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">AI Interactions</p>
                  <div className="text-2xl font-bold">18,429</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="text-green-500 flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>24%</span>
                </div>
                <span className="text-slate-500 dark:text-slate-400 ml-2">vs last month</span>
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
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Data Points</p>
                  <div className="text-2xl font-bold">1.2M</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="text-green-500 flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>18%</span>
                </div>
                <span className="text-slate-500 dark:text-slate-400 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>New user registrations over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-end justify-between gap-2 pt-8 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-slate-500">
                  <div>1000</div>
                  <div>750</div>
                  <div>500</div>
                  <div>250</div>
                  <div>0</div>
                </div>

                {/* Bars */}
                <div className="flex-1 flex items-end justify-around h-full pl-10">
                  {[
                    { month: "Dec", users: 450 },
                    { month: "Jan", users: 520 },
                    { month: "Feb", users: 580 },
                    { month: "Mar", users: 620 },
                    { month: "Apr", users: 750 },
                    { month: "May", users: 850 },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-12 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md"
                        style={{ height: `${(item.users / 1000) * 100}%` }}
                      />
                      <div className="mt-2 text-xs">{item.month}</div>
                      <div className="text-xs font-medium">{item.users}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Platform Health</CardTitle>
              <CardDescription>System performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">API Response Time</div>
                    <div className="text-sm text-green-500">120ms</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "15%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Server Load</div>
                    <div className="text-sm text-green-500">28%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "28%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Database Performance</div>
                    <div className="text-sm text-green-500">95%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "95%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Error Rate</div>
                    <div className="text-sm text-yellow-500">2.4%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: "2.4%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">AI Response Accuracy</div>
                    <div className="text-sm text-blue-500">92%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "92%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest platform activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">New User Registration</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      15 new users registered in the last hour
                    </div>
                    <div className="text-xs text-slate-500 mt-1">10 minutes ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">AI Interaction Spike</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Unusual increase in AI chat interactions detected
                    </div>
                    <div className="text-xs text-slate-500 mt-1">45 minutes ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Bell className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">System Alert</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Database backup completed successfully
                    </div>
                    <div className="text-xs text-slate-500 mt-1">2 hours ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Activity className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium">Error Rate Increase</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Brief spike in API errors, resolved automatically
                    </div>
                    <div className="text-xs text-slate-500 mt-1">3 hours ago</div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                View All Activities
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Top User Queries</CardTitle>
              <CardDescription>Most common AI assistant questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Period cycle prediction</div>
                    <div className="text-sm text-slate-500">32%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "32%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Symptom analysis</div>
                    <div className="text-sm text-slate-500">28%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "28%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Fertility questions</div>
                    <div className="text-sm text-slate-500">18%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "18%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Nutrition advice</div>
                    <div className="text-sm text-slate-500">12%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "12%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Exercise recommendations</div>
                    <div className="text-sm text-slate-500">10%</div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "10%" }} />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg mt-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-500" />
                  AI Recommendation
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Consider expanding content on nutrition advice during different cycle phases based on user query
                  trends.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3"
                  onClick={() => router.push("/demo/admin/users")}
                >
                  <Users className="mr-2 h-4 w-4 text-blue-600" />
                  <div>
                    <div className="font-medium">Manage Users</div>
                    <div className="text-xs text-slate-500">View and edit user accounts</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3"
                  onClick={() => router.push("/demo/admin/ai-management")}
                >
                  <Sparkles className="mr-2 h-4 w-4 text-purple-600" />
                  <div>
                    <div className="font-medium">AI Management</div>
                    <div className="text-xs text-slate-500">Configure AI assistant settings</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3"
                  onClick={() => router.push("/demo/admin/content")}
                >
                  <FileText className="mr-2 h-4 w-4 text-green-600" />
                  <div>
                    <div className="font-medium">Content Management</div>
                    <div className="text-xs text-slate-500">Update app content and resources</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3"
                  onClick={() => router.push("/demo/admin/notifications")}
                >
                  <Bell className="mr-2 h-4 w-4 text-amber-600" />
                  <div>
                    <div className="font-medium">Send Notifications</div>
                    <div className="text-xs text-slate-500">Create and send user notifications</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3"
                  onClick={() => router.push("/demo/admin/settings")}
                >
                  <TrendingUp className="mr-2 h-4 w-4 text-red-600" />
                  <div>
                    <div className="font-medium">Analytics Dashboard</div>
                    <div className="text-xs text-slate-500">View detailed platform analytics</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
