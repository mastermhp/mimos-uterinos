"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Lock, User, Moon, Sun, Palette, Globe, CreditCard, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const router = useRouter()
  const [name, setName] = useState("Jane Doe")
  const [email, setEmail] = useState("jane@example.com")
  const [notifications, setNotifications] = useState({
    periodReminders: true,
    ovulationAlerts: true,
    symptomReminders: false,
    weeklyInsights: true,
    appUpdates: false,
  })

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Settings</h1>
        <p className="text-slate-600 dark:text-slate-400">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="account" className="mb-8">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-pink-500" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" defaultValue="1995-01-15" />
                    </div>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-pink-500" />
                    Security
                  </CardTitle>
                  <CardDescription>Manage your password and security settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      Update Password
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-500">
                  <LogOut className="h-5 w-5" />
                  Account Actions
                </CardTitle>
                <CardDescription>Manage your account status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <div>
                      <div className="font-medium">Download Your Data</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Get a copy of all your health data and logs
                      </div>
                    </div>
                    <Button variant="outline">Download</Button>
                  </div>

                  <div className="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <div>
                      <div className="font-medium">Delete Account</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Permanently delete your account and all data
                      </div>
                    </div>
                    <Button variant="destructive">Delete</Button>
                  </div>

                  <div className="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <div>
                      <div className="font-medium">Log Out</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Sign out of your account on this device
                      </div>
                    </div>
                    <Button variant="outline" onClick={handleLogout}>
                      Log Out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="notifications">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-pink-500" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Choose which notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Period Reminders</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Get notified 2 days before your predicted period
                      </div>
                    </div>
                    <Switch
                      checked={notifications.periodReminders}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, periodReminders: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Ovulation Alerts</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Get notified during your fertile window
                      </div>
                    </div>
                    <Switch
                      checked={notifications.ovulationAlerts}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, ovulationAlerts: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Symptom Logging Reminders</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Daily reminders to log your symptoms
                      </div>
                    </div>
                    <Switch
                      checked={notifications.symptomReminders}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, symptomReminders: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Weekly Health Insights</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Receive weekly AI-generated health insights
                      </div>
                    </div>
                    <Switch
                      checked={notifications.weeklyInsights}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyInsights: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">App Updates & News</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Stay informed about new features and updates
                      </div>
                    </div>
                    <Switch
                      checked={notifications.appUpdates}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, appUpdates: checked })}
                    />
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="appearance">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-pink-500" />
                  Appearance Settings
                </CardTitle>
                <CardDescription>Customize how the app looks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 cursor-pointer bg-white">
                        <div className="flex justify-center mb-2">
                          <Sun className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div className="text-center text-sm font-medium">Light</div>
                      </div>

                      <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 cursor-pointer bg-slate-900">
                        <div className="flex justify-center mb-2">
                          <Moon className="h-6 w-6 text-slate-400" />
                        </div>
                        <div className="text-center text-sm font-medium text-white">Dark</div>
                      </div>

                      <div className="border border-pink-200 dark:border-pink-800 rounded-lg p-4 cursor-pointer bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 ring-2 ring-pink-500">
                        <div className="flex justify-center mb-2">
                          <div className="flex">
                            <Sun className="h-6 w-6 text-yellow-500" />
                            <Moon className="h-6 w-6 text-slate-400 -ml-2" />
                          </div>
                        </div>
                        <div className="text-center text-sm font-medium">System</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Color Scheme</h3>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="border border-pink-200 dark:border-pink-800 rounded-lg p-2 cursor-pointer ring-2 ring-pink-500">
                        <div className="h-12 rounded bg-gradient-to-r from-pink-500 to-purple-600" />
                      </div>

                      <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-2 cursor-pointer">
                        <div className="h-12 rounded bg-gradient-to-r from-blue-500 to-teal-500" />
                      </div>

                      <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-2 cursor-pointer">
                        <div className="h-12 rounded bg-gradient-to-r from-orange-500 to-red-500" />
                      </div>

                      <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-2 cursor-pointer">
                        <div className="h-12 rounded bg-gradient-to-r from-green-500 to-emerald-500" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Language</h3>
                    <div className="flex items-center space-x-4">
                      <Globe className="h-5 w-5 text-slate-500" />
                      <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="ja">日本語</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="subscription">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-pink-500" />
                  Subscription Plan
                </CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent>{/* Subscription content here */}</CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
