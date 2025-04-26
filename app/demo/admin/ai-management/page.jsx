"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Save,
  RefreshCw,
  MessageSquare,
  Zap,
  Brain,
  Settings,
  AlertTriangle,
  Plus,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function AIManagementPage() {
  const [isTraining, setIsTraining] = useState(false)
  const [aiSettings, setAiSettings] = useState({
    enablePersonalization: true,
    enableMedicalAdvice: false,
    enableEmotionalSupport: true,
    enableDataCollection: true,
    responseLength: "balanced",
    confidenceThreshold: 0.7,
  })

  const handleTraining = () => {
    setIsTraining(true)
    setTimeout(() => {
      setIsTraining(false)
    }, 3000)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">AI Management</h1>
          <p className="text-slate-600 dark:text-slate-400">Configure and manage Luna AI assistant</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Button variant="outline" size="sm" onClick={handleTraining} disabled={isTraining}>
            {isTraining ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
            {isTraining ? "Training..." : "Train Model"}
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="settings" className="mb-8">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-600" />
                    General Settings
                  </CardTitle>
                  <CardDescription>Configure AI behavior and capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Personalization</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Allow AI to personalize responses based on user history
                        </div>
                      </div>
                      <Switch
                        checked={aiSettings.enablePersonalization}
                        onCheckedChange={(checked) => setAiSettings({ ...aiSettings, enablePersonalization: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Medical Advice</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Allow AI to provide basic medical information
                        </div>
                      </div>
                      <Switch
                        checked={aiSettings.enableMedicalAdvice}
                        onCheckedChange={(checked) => setAiSettings({ ...aiSettings, enableMedicalAdvice: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Emotional Support</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Enable empathetic responses for emotional support
                        </div>
                      </div>
                      <Switch
                        checked={aiSettings.enableEmotionalSupport}
                        onCheckedChange={(checked) => setAiSettings({ ...aiSettings, enableEmotionalSupport: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Data Collection</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Collect anonymized data to improve AI responses
                        </div>
                      </div>
                      <Switch
                        checked={aiSettings.enableDataCollection}
                        onCheckedChange={(checked) => setAiSettings({ ...aiSettings, enableDataCollection: checked })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Response Length</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          variant={aiSettings.responseLength === "concise" ? "default" : "outline"}
                          className={aiSettings.responseLength === "concise" ? "bg-blue-600 hover:bg-blue-700" : ""}
                          onClick={() => setAiSettings({ ...aiSettings, responseLength: "concise" })}
                        >
                          Concise
                        </Button>
                        <Button
                          variant={aiSettings.responseLength === "balanced" ? "default" : "outline"}
                          className={aiSettings.responseLength === "balanced" ? "bg-blue-600 hover:bg-blue-700" : ""}
                          onClick={() => setAiSettings({ ...aiSettings, responseLength: "balanced" })}
                        >
                          Balanced
                        </Button>
                        <Button
                          variant={aiSettings.responseLength === "detailed" ? "default" : "outline"}
                          className={aiSettings.responseLength === "detailed" ? "bg-blue-600 hover:bg-blue-700" : ""}
                          onClick={() => setAiSettings({ ...aiSettings, responseLength: "detailed" })}
                        >
                          Detailed
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Confidence Threshold</Label>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {aiSettings.confidenceThreshold * 100}%
                        </span>
                      </div>
                      <Input
                        type="range"
                        min="0.5"
                        max="0.9"
                        step="0.05"
                        value={aiSettings.confidenceThreshold}
                        onChange={(e) =>
                          setAiSettings({ ...aiSettings, confidenceThreshold: Number.parseFloat(e.target.value) })
                        }
                        className="cursor-pointer"
                      />
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
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    Model Configuration
                  </CardTitle>
                  <CardDescription>Adjust AI model parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Base Model</Label>
                      <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">
                        <option value="gpt-4">GPT-4 (Production)</option>
                        <option value="gpt-3.5">GPT-3.5 (Backup)</option>
                        <option value="custom">Custom Fine-tuned Model</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Temperature</Label>
                      <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-1">
                        <span>More Precise</span>
                        <span>More Creative</span>
                      </div>
                      <Input
                        type="range"
                        min="0.1"
                        max="1.0"
                        step="0.1"
                        defaultValue="0.7"
                        className="cursor-pointer"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Context Window</Label>
                      <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">
                        <option value="8k">8K tokens</option>
                        <option value="16k">16K tokens</option>
                        <option value="32k">32K tokens</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>System Prompt</Label>
                      <Textarea
                        rows={4}
                        defaultValue="You are Luna, an AI health assistant specialized in menstrual health. Provide helpful, accurate information while being empathetic and supportive. Do not provide medical diagnoses or treatment recommendations. Always suggest consulting a healthcare provider for medical concerns."
                      />
                    </div>

                    <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-amber-800 dark:text-amber-400">Important Note</h4>
                          <p className="text-sm text-amber-800/80 dark:text-amber-400/80">
                            Changes to model configuration will be applied to all new conversations. Existing
                            conversations will continue using their original configuration.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Manage the information available to the AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Medical Information</h3>
                        <Switch defaultChecked />
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Basic medical information about menstrual health
                      </p>
                      <div className="mt-2 text-xs text-slate-500">Last updated: 2 days ago</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Nutrition Guidance</h3>
                        <Switch defaultChecked />
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Nutritional advice for different cycle phases
                      </p>
                      <div className="mt-2 text-xs text-slate-500">Last updated: 1 week ago</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Exercise Recommendations</h3>
                        <Switch defaultChecked />
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Exercise guidance tailored to cycle phases
                      </p>
                      <div className="mt-2 text-xs text-slate-500">Last updated: 3 days ago</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Knowledge Base
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Total Interactions</p>
                    <div className="text-2xl font-bold">124,856</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
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

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Response Accuracy</p>
                    <div className="text-2xl font-bold">92.7%</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <div className="text-green-500 flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>3.2%</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Avg. Response Time</p>
                    <div className="text-2xl font-bold">1.2s</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <div className="text-green-500 flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>5%</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">faster than last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI Performance Metrics</CardTitle>
              <CardDescription>Key performance indicators over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-700 rounded-lg">
                <p className="text-slate-500">Performance chart visualization would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>AI Interaction Logs</CardTitle>
              <CardDescription>Recent AI assistant interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">User Query</div>
                      <div className="text-xs text-slate-500">10 minutes ago</div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      "Why am I feeling more tired during my period?"
                    </div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-sm">
                      <div className="font-medium text-xs text-slate-500 mb-1">AI Response:</div>
                      "Feeling tired during your period is common and can be caused by hormonal changes, particularly
                      the drop in estrogen and progesterone. Iron loss from menstrual bleeding can also contribute to
                      fatigue. Try to get extra rest, stay hydrated, and consider iron-rich foods during this time."
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="text-xs text-green-500 flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        High confidence (92%)
                      </div>
                      <div className="text-xs text-slate-500">Response time: 0.8s</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">User Query</div>
                      <div className="text-xs text-slate-500">25 minutes ago</div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      "What foods should I eat during ovulation?"
                    </div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-sm">
                      <div className="font-medium text-xs text-slate-500 mb-1">AI Response:</div>
                      "During ovulation, focus on foods that support hormone balance and egg health. Include plenty of
                      antioxidant-rich foods like berries, leafy greens, and colorful vegetables. Healthy fats from
                      avocados, nuts, and olive oil can support hormone production. Lean proteins and foods rich in B
                      vitamins are also beneficial."
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="text-xs text-green-500 flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        High confidence (95%)
                      </div>
                      <div className="text-xs text-slate-500">Response time: 1.2s</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">User Query</div>
                      <div className="text-xs text-slate-500">1 hour ago</div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      "Can you diagnose my irregular periods?"
                    </div>
                    <div className="mt-2 p-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-sm">
                      <div className="font-medium text-xs text-slate-500 mb-1">AI Response:</div>
                      "I'm not able to provide medical diagnoses. Irregular periods can have many causes, including
                      stress, weight changes, hormonal imbalances, or underlying medical conditions. It's best to
                      consult with a healthcare provider who can properly evaluate your symptoms and medical history."
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="text-xs text-amber-500 flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Medical question detected
                      </div>
                      <div className="text-xs text-slate-500">Response time: 0.9s</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Button variant="outline">View All Logs</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
