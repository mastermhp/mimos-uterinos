import DemoModeBanner from "@/app/components/demo-mode-banner"
import Sidebar from "@/app/components/sidebar"

export default function DemoAdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <DemoModeBanner mode="admin" />
      <div className="flex">
        <Sidebar isAdmin={true} />
        <main className="flex-1 pt-16 lg:pt-0">{children}</main>
      </div>
    </div>
  )
}
