"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DemoModeBanner({ mode }) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-0 left-0 right-0 z-50 p-2 ${mode === "admin" ? "bg-blue-600" : "bg-pink-600"}`}
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <Info className="h-4 w-4" />
              <span className="text-sm font-medium">
                {mode === "admin" ? "Admin Panel Demo Mode" : "User Demo Mode"} - No data will be saved
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="link" className="text-white text-xs p-0 h-auto">
                  Exit Demo
                </Button>
              </Link>
              {mode === "user" && (
                <Link href="/demo/admin">
                  <Button variant="link" className="text-white text-xs p-0 h-auto">
                    Try Admin Demo
                  </Button>
                </Link>
              )}
              {mode === "admin" && (
                <Link href="/demo/user">
                  <Button variant="link" className="text-white text-xs p-0 h-auto">
                    Try User Demo
                  </Button>
                </Link>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
                onClick={() => setIsVisible(false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
