"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Plus, Edit, Trash, Eye, Search, Filter, ImageIcon, FileUp, MoreHorizontal, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContentManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const articles = [
    {
      id: 1,
      title: "Understanding Your Menstrual Cycle",
      category: "Education",
      status: "Published",
      author: "Dr. Sarah Johnson",
      date: "May 10, 2025",
      views: 1245,
    },
    {
      id: 2,
      title: "Nutrition Tips for Each Cycle Phase",
      category: "Nutrition",
      status: "Published",
      author: "Emma Williams, RD",
      date: "May 5, 2025",
      views: 982,
    },
    {
      id: 3,
      title: "Managing PMS Symptoms Naturally",
      category: "Wellness",
      status: "Draft",
      author: "Dr. Lisa Taylor",
      date: "May 2, 2025",
      views: 0,
    },
    {
      id: 4,
      title: "Exercise Recommendations Throughout Your Cycle",
      category: "Fitness",
      status: "Published",
      author: "Michael Brown, PT",
      date: "Apr 28, 2025",
      views: 756,
    },
    {
      id: 5,
      title: "Understanding Hormonal Imbalances",
      category: "Education",
      status: "Review",
      author: "Dr. Sarah Johnson",
      date: "Apr 25, 2025",
      views: 0,
    },
  ]

  const filteredArticles = searchQuery
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.author.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : articles

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Content Management</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage articles, resources, and media</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="mr-2 h-4 w-4" />
            Create Content
          </Button>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search content..."
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

      <Tabs defaultValue="articles" className="mb-8">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="articles">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left p-4 font-medium">Title</th>
                      <th className="text-left p-4 font-medium">Category</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Author</th>
                      <th className="text-left p-4 font-medium">Date</th>
                      <th className="text-left p-4 font-medium">Views</th>
                      <th className="text-right p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredArticles.map((article, index) => (
                      <motion.tr
                        key={article.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-b border-slate-200 dark:border-slate-700"
                      >
                        <td className="p-4">
                          <div className="font-medium">{article.title}</div>
                        </td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">{article.category}</td>
                        <td className="p-4">
                          <div
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              article.status === "Published"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                : article.status === "Draft"
                                  ? "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                            }`}
                          >
                            {article.status}
                          </div>
                        </td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">{article.author}</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">{article.date}</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">{article.views}</td>
                        <td className="p-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                Preview
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
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

        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 dark:text-red-400">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <h3 className="font-medium mb-1">Cycle Tracking Guide</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  PDF guide for tracking menstrual cycles
                </p>
                <div className="text-xs text-slate-500">Downloads: 1,245</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 dark:text-red-400">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <h3 className="font-medium mb-1">Nutrition Cheat Sheet</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Printable nutrition guide for each cycle phase
                </p>
                <div className="text-xs text-slate-500">Downloads: 982</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 dark:text-red-400">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <h3 className="font-medium mb-1">Symptom Tracker Template</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Printable template for tracking symptoms
                </p>
                <div className="text-xs text-slate-500">Downloads: 756</div>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto">
                    <Plus className="h-5 w-5 text-slate-500" />
                  </div>
                  <h3 className="font-medium mt-2">Add New Resource</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Upload a new resource</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="media">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center mb-3">
                  <ImageIcon className="h-8 w-8 text-slate-400" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">cycle-phases.jpg</div>
                    <div className="text-xs text-slate-500">512KB</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center mb-3">
                  <ImageIcon className="h-8 w-8 text-slate-400" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">nutrition-guide.png</div>
                    <div className="text-xs text-slate-500">728KB</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center mb-3">
                  <ImageIcon className="h-8 w-8 text-slate-400" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">exercise-tips.jpg</div>
                    <div className="text-xs text-slate-500">412KB</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardContent className="p-4 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto">
                    <FileUp className="h-5 w-5 text-slate-500" />
                  </div>
                  <div className="text-sm font-medium mt-2">Upload Media</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Create Notification</CardTitle>
              <CardDescription>Send notifications to app users</CardDescription>
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

                <div className="space-y-2">
                  <Label>Target Audience</Label>
                  <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">
                    <option value="all">All Users</option>
                    <option value="premium">Premium Users</option>
                    <option value="free">Free Users</option>
                    <option value="inactive">Inactive Users</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Schedule</Label>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input type="date" />
                    </div>
                    <div className="flex-1">
                      <Input type="time" />
                    </div>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
