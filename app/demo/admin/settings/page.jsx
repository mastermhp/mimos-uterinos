"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Save, Database, Shield, Globe, Zap, Server, RefreshCw, AlertTriangle, Trash, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminSettingsPage() {
  const [isBackupRunning, setIsBackupRunning] = useState(false)
  const [generalSettings, setGeneralSettings] = useState({
    enableRegistration: true,
    enablePasswordReset: true,
    enableDarkMode: true,
    enableAnalytics: true,
    maintenanceMode: false,
  })

  const handleBackup = () => {
    setIsBackupRunning(true)
    setTimeout(() => {
      setIsBackupRunning(false)
    }, 3000)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Admin Settings</h1>
          <p className="text-slate-600 dark:text-slate-400">Configure system settings and preferences</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="mb-8">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    General Settings
                  </CardTitle>
                  <CardDescription>Configure basic application settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">User Registration</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Allow new users to register</div>
                      </div>
                      <Switch
                        checked={generalSettings.enableRegistration}
                        onCheckedChange={(checked) =>
                          setGeneralSettings({ ...generalSettings, enableRegistration: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Password Reset</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Allow users to reset their passwords
                        </div>
                      </div>
                      <Switch
                        checked={generalSettings.enablePasswordReset}
                        onCheckedChange={(checked) =>
                          setGeneralSettings({ ...generalSettings, enablePasswordReset: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Dark Mode</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Enable dark mode option for users
                        </div>
                      </div>
                      <Switch
                        checked={generalSettings.enableDarkMode}
                        onCheckedChange={(checked) =>
                          setGeneralSettings({ ...generalSettings, enableDarkMode: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Analytics</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Collect anonymous usage data</div>
                      </div>
                      <Switch
                        checked={generalSettings.enableAnalytics}
                        onCheckedChange={(checked) =>
                          setGeneralSettings({ ...generalSettings, enableAnalytics: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Maintenance Mode</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Put the application in maintenance mode
                        </div>
                      </div>
                      <Switch
                        checked={generalSettings.maintenanceMode}
                        onCheckedChange={(checked) =>
                          setGeneralSettings({ ...generalSettings, maintenanceMode: checked })
                        }
                      />
                    </div>

                    {generalSettings.maintenanceMode && (
                      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-amber-800 dark:text-amber-400">Warning</h4>
                            <p className="text-sm text-amber-800/80 dark:text-amber-400/80">
                              Enabling maintenance mode will prevent users from accessing the application. Only
                              administrators will have access.
                            </p>
                          </div>
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
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Performance Settings
                  </CardTitle>
                  <CardDescription>Configure application performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Cache Duration (minutes)</Label>
                      <Input type="number" defaultValue="60" />
                    </div>

                    <div className="space-y-2">
                      <Label>Maximum Upload Size (MB)</Label>
                      <Input type="number" defaultValue="10" />
                    </div>

                    <div className="space-y-2">
                      <Label>Request Timeout (seconds)</Label>
                      <Input type="number" defaultValue="30" />
                    </div>

                    <div className="space-y-2">
                      <Label>Maximum Concurrent Requests</Label>
                      <Input type="number" defaultValue="100" />
                    </div>

                    <div className="space-y-2">
                      <Label>Rate Limiting (requests per minute)</Label>
                      <Input type="number" defaultValue="60" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure security options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Minimum Password Length</Label>
                    <Input type="number" defaultValue="8" />
                  </div>

                  <div className="space-y-2">
                    <Label>Password Expiry (days)</Label>
                    <Input type="number" defaultValue="90" />
                  </div>

                  <div className="space-y-2">
                    <Label>Failed Login Attempts Before Lockout</Label>
                    <Input type="number" defaultValue="5" />
                  </div>

                  <div className="space-y-2">
                    <Label>Account Lockout Duration (minutes)</Label>
                    <Input type="number" defaultValue="30" />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Require 2FA for admin accounts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">HTTPS Only</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Force all connections to use HTTPS
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Content Security Policy</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Enable strict Content Security Policy
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Session Timeout</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Automatically log out inactive users
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" />
                Database Settings
              </CardTitle>
              <CardDescription>Configure database options and maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Database Host</Label>
                    <Input defaultValue="localhost" />
                  </div>

                  <div className="space-y-2">
                    <Label>Database Port</Label>
                    <Input defaultValue="5432" />
                  </div>

                  <div className="space-y-2">
                    <Label>Database Name</Label>
                    <Input defaultValue="cyclesync_production" />
                  </div>

                  <div className="space-y-2">
                    <Label>Database User</Label>
                    <Input defaultValue="admin" type="password" />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="font-medium">Database Maintenance</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Automatic Backups</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Schedule regular database backups
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label>Backup Frequency</Label>
                    <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>Backup Retention (days)</Label>
                    <Input type="number" defaultValue="30" />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <Button variant="outline" onClick={handleBackup} disabled={isBackupRunning}>
                      {isBackupRunning ? (
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Database className="mr-2 h-4 w-4" />
                      )}
                      {isBackupRunning ? "Backing up..." : "Backup Now"}
                    </Button>

                    <Button variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Optimize Database
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-blue-600" />
                API Settings
              </CardTitle>
              <CardDescription>Configure API access and keys</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Enable API Access</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Allow external applications to access the API
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>API Rate Limit (requests per minute)</Label>
                  <Input type="number" defaultValue="100" />
                </div>

                <div className="space-y-2">
                  <Label>API Key Expiration (days)</Label>
                  <Input type="number" defaultValue="365" />
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">API Key</div>
                    <Button variant="outline" size="sm">
                      Regenerate
                    </Button>
                  </div>
                  <div className="font-mono text-sm bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700">
                    sk_live_51NzGxRCkM8iYt7hJQYuGgPzX2DlWEqazBJhT9KvR7mN
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    Last generated: May 10, 2025 • Expires: May 10, 2026
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="font-medium">Allowed Origins</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input defaultValue="https://example.com" className="flex-1" />
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input defaultValue="https://app.example.com" className="flex-1" />
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Origin
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
