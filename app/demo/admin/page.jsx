"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DemoAdminRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/demo/admin/dashboard")
  }, [router])

  return null
}
