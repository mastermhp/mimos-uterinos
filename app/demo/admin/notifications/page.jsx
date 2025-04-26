"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Plus, Send, Clock, Users, Filter, Search, Trash, Edit, CheckCircle, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function NotificationsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const notifications = [
    {
      id: 1,
      title: "New Feature: Symptom Tracking",
      message: "We've added a new symptom tracking feature to help you better monitor your health patterns.",
      audience: "All Users",
      status: "Sent",
      date: "May 15, 2025",
      delivered: 12450,
      opened: 8320,
    },
    {
      id: 2,
      title: "Premium Feature Update",
      message: "New premium features are now available! Check out the enhanced reporting tools.",
      audience: "Premium Users",
      status: "Sent",
      date: "May 10, 2025",
      delivered: 4250,
      opened: 3180,
    },
    {
      id: 3,
      title: "App Maintenance Notice",
      message: "We'll be performing maintenance on May 20th from 2-4am UTC. The app may be temporarily unavailable.",
      audience: "All Users",
      status: "Scheduled",
      date: "May 20, 2025",
      delivered: 0,
      opened: 0,
    },
    {
      id: 4,
      title: "Welcome Back Offer",
      message: "We've missed you! Come back and enjoy 20% off a premium subscription for 3 months.",
      audience: "Inactive Users",
      status: "Draft",
      date: "-",
      delivered: 0,
      opened: 0,
    },
    {
      id: 5,
      title: "Health Tips Newsletter",
      message: "Check out our latest health tips and cycle management strategies in the new newsletter.",
      audience: "All Users",
      status: "Sent",
      date: "May 5, 2025",
      delivered: 12380,
      opened: 7650,
    },
  ]

  const filteredNotifications = searchQuery
    ? notifications.filter(
        (notification) =>
          notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          notification.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
          notification.audience.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : notifications

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Notifications</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage and send notifications to users</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="mr-2 h-4 w-4" />
            Create Notification
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search notifications..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left p-4 font-medium">Title</th>
                      <th className="text-left p-4 font-medium">Audience</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Date</th>
                      <th className="text-left p-4 font-medium">Delivered</th>
                      <th className="text-left p-4 font-medium">Opened</th>
                      <th className="text-right p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredNotifications.map((notification, index) => (
                      <motion.tr
                        key={notification.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-b border-slate-200 dark:border-slate-700"
                      >
                        <td className="p-4">
                          <div className="font-medium">{notification.title}</div>
                          <div className="text-sm text-slate-500 truncate max-w-xs">{notification.message}</div>
                        </td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">{notification.audience}</td>
                        <td className="p-4">
                          <div
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              notification.status === "Sent"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                : notification.status === "Draft"
                                  ? "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                            }`}
                          >
                            {notification.status === "Sent" ? (
                              <CheckCircle className="mr-1 h-3 w-3" />
                            ) : notification.status === "Scheduled" ? (
                              <Clock className="mr-1 h-3 w-3" />
                            ) : (
                              <Edit className="mr-1 h-3 w-3" />
                            )}
                            {notification.status}
                          </div>
                        </td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">{notification.date}</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">
                          {notification.delivered > 0 ? notification.delivered.toLocaleString() : "-"}
                        </td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">
                          {notification.opened > 0 ? (
                            <div>
                              {notification.opened.toLocaleString()}
                              <span className="text-green-500 ml-1">
                                ({Math.round((notification.opened / notification.delivered) * 100)}%)
                              </span>
                            </div>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td className="p-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {notification.status !== "Sent" && (
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                              )}
                              {notification.status === "Draft" && (
                                <DropdownMenuItem>
                                  <Send className="mr-2 h-4 w-4" />
                                  Send Now
                                </DropdownMenuItem>
                              )}
                              {notification.status === "Scheduled" && (
                                <DropdownMenuItem>
                                  <Clock className="mr-2 h-4 w-4" />
                                  Reschedule
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4" />
                                View Analytics
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600 dark:text-red-400">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent">
          <Card>
            <CardContent className="p-6">
              <p>Sent notifications content</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled">
          <Card>
            <CardContent className="p-6">
              <p>Scheduled notifications content</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts">
          <Card>
            <CardContent className="p-6">
              <p>Draft notifications content</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Create New Notification</CardTitle>
          <CardDescription>Send a notification to app users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Notification Title</Label>
              <Input placeholder="Enter notification title" />
            </div>

            <div className="space-y-2">
              <Label>Message</Label>
              <Textarea rows={4} placeholder="Enter notification message" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Target Audience</Label>
                <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">
                  <option value="all">All Users</option>
                  <option value="premium">Premium Users</option>
                  <option value="free">Free Users</option>
                  <option value="inactive">Inactive Users (30+ days)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Delivery Method</Label>
                <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">
                  <option value="push">Push Notification</option>
                  <option value="in-app">In-App Notification</option>
                  <option value="both">Both Push & In-App</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Schedule Delivery</Label>
                <div className="flex items-center">
                  <input type="checkbox" id="schedule" className="mr-2" />
                  <label htmlFor="schedule" className="text-sm">
                    Schedule for later
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" />
                <Input type="time" />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline">Save as Draft</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Bell className="mr-2 h-4 w-4" />
                Send Notification
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
