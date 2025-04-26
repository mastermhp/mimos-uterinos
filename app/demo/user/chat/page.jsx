"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, Lightbulb, Calendar, Activity, FileText, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useIsMobile } from "@/app/hooks/use-mobile"
// import { useIsMobile } from "@/hooks/use-mobile"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "Hi Jane! I'm Luna, your AI health assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])

  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)
  const messagesEndRef = useRef(null)
  const isMobile = useIsMobile()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = {
        "why am i feeling more energetic today?":
          "You're currently in your ovulation phase (around day 14 of your cycle), which is when many women experience a natural energy boost! This is due to rising estrogen levels, which can improve mood and energy. It's a great time to channel this energy into activities you enjoy or tasks that require focus.",
        "what foods should i eat during ovulation?":
          "During ovulation, focus on foods that support hormone balance and egg health. Include plenty of antioxidant-rich foods like berries, leafy greens, and colorful vegetables. Healthy fats from avocados, nuts, and olive oil can support hormone production. Lean proteins and foods rich in B vitamins are also beneficial. Stay hydrated and consider reducing caffeine and alcohol during this time.",
        "how can i track my fertility signs?":
          "To track fertility signs, monitor your basal body temperature (BBT) each morning before getting up, check cervical mucus changes throughout your cycle (it becomes clearer and more stretchy during ovulation), and pay attention to secondary signs like mild cramping or increased libido. Our app can help you record these signs daily and identify patterns over time. Would you like me to explain any of these methods in more detail?",
        "why did my period come 2 days early?":
          "Periods can arrive early for several reasons. Stress is a common cause as it affects hormone levels. Changes in diet, exercise routines, or sleep patterns can also impact your cycle timing. Weight fluctuations and travel can play a role too. If this is unusual for you or happens frequently, it might be worth discussing with your healthcare provider, but occasional variations of a few days are typically normal.",
      }

      const lowercaseInput = input.toLowerCase()
      let responseContent = ""

      // Check if the input matches any predefined responses
      for (const [key, value] of Object.entries(aiResponses)) {
        if (lowercaseInput.includes(key)) {
          responseContent = value
          break
        }
      }

      // Default response if no match
      if (!responseContent) {
        responseContent =
          "I understand you're asking about your menstrual health. Could you provide more details so I can give you a more specific answer? I'm here to help with cycle tracking, symptom analysis, and personalized recommendations."
      }

      const aiMessage = {
        id: Date.now().toString(),
        content: responseContent,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const suggestedQuestions = [
    "Why am I feeling more energetic today?",
    "What foods should I eat during ovulation?",
    "How can I track my fertility signs?",
    "Why did my period come 2 days early?",
  ]

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar)
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      <div className="p-3 sm:p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-base sm:text-lg">Luna AI Assistant</h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Your personal menstrual health companion
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col max-w-7xl mx-auto w-full p-2 sm:p-4 gap-2 sm:gap-4">
        {/* Main chat area */}
        <div className="flex-1 flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
          <div className="flex-1 h-[calc(100vh-220px)] sm:h-[500px] overflow-y-auto p-3 sm:p-4">
            <div className="max-w-3xl mx-auto">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-3 sm:mb-4`}
                  >
                    <div
                      className={`flex gap-2 sm:gap-3 max-w-[85%] sm:max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                    >
                      {message.sender === "ai" ? (
                        <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600">
                            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`p-2.5 sm:p-3 rounded-lg ${
                          message.sender === "user" ? "bg-pink-500 text-white" : "bg-slate-100 dark:bg-slate-700"
                        }`}
                      >
                        <p className="text-xs sm:text-sm">{message.content}</p>
                        <div
                          className={`text-[10px] sm:text-xs mt-1 ${
                            message.sender === "user" ? "text-pink-100" : "text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start mb-3 sm:mb-4"
                  >
                    <div className="flex gap-2 sm:gap-3 max-w-[85%] sm:max-w-[80%]">
                      <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600">
                          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="p-2.5 sm:p-3 rounded-lg bg-slate-100 dark:bg-slate-700">
                        <div className="flex gap-1">
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          />
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          />
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="max-w-3xl mx-auto">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 text-sm sm:text-base"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  disabled={!input.trim() || isTyping}
                  size={isMobile ? "sm" : "default"}
                >
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile sidebar toggle */}
        {isMobile && (
          <Button
            variant="outline"
            onClick={toggleMobileSidebar}
            className="flex items-center justify-center gap-2 w-full mb-1"
            size="sm"
          >
            {showMobileSidebar ? (
              <>
                Hide suggestions <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show suggestions <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        )}

        {/* Sidebar - desktop always visible, mobile conditionally visible */}
        <div
          className={`${isMobile ? (showMobileSidebar ? "block" : "hidden") : "block"} md:w-72 space-y-2 sm:space-y-4`}
        >
          <Card>
            <CardContent className="p-3 sm:p-4">
              <h3 className="font-medium text-sm sm:text-base mb-2 sm:mb-3">Suggested Questions</h3>
              <div className="space-y-1.5 sm:space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-1.5 sm:py-2 px-2.5 sm:px-3 text-xs sm:text-sm"
                    onClick={() => {
                      setInput(question)
                      setTimeout(() => handleSendMessage(), 100)
                      if (isMobile) setShowMobileSidebar(false)
                    }}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4">
              <h3 className="font-medium text-sm sm:text-base mb-2 sm:mb-3">Luna AI Can Help With</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                    <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-pink-500" />
                  </div>
                  <div className="text-xs sm:text-sm">Cycle Predictions</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Activity className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-500" />
                  </div>
                  <div className="text-xs sm:text-sm">Symptom Analysis</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Lightbulb className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
                  </div>
                  <div className="text-xs sm:text-sm">Health Insights</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500" />
                  </div>
                  <div className="text-xs sm:text-sm">Medical Information</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
