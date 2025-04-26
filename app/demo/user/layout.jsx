import DemoModeBanner from "@/app/components/demo-mode-banner";
import Sidebar from "@/app/components/sidebar";

export default function DemoUserLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <DemoModeBanner mode="user" />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pt-16 lg:pt-0">{children}</main>
      </div>
    </div>
  );
}
