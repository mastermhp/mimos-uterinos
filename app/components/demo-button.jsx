"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function DemoButton({ setShowDemoOptions, showDemoOptions }) {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => setShowDemoOptions(!showDemoOptions)}
      className={showDemoOptions ? "border-pink-500 text-pink-500" : ""}
    >
      <Play className="mr-2 h-4 w-4" />
      Try Demo
    </Button>
  )
}
