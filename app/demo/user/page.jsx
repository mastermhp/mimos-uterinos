"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DemoUserRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/demo/user/dashboard")
  }, [router])

  return null
}
