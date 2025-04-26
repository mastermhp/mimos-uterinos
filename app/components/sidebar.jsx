"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  MessageCircle,
  FileText,
  Settings,
  Menu,
  X,
  Activity,
  Heart,
  Sparkles,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Sidebar({ isAdmin = false }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userLinks = [
    {
      name: "Dashboard",
      href: isAdmin ? "/demo/admin/dashboard" : "/demo/user/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Calendar",
      href: isAdmin ? "/demo/admin/calendar" : "/demo/user/calendar",
      icon: Calendar,
    },
    {
      name: "Symptoms",
      href: isAdmin ? "/demo/admin/symptoms" : "/demo/user/symptoms",
      icon: Activity,
    },
    {
      name: "Chat",
      href: isAdmin ? "/demo/admin/chat" : "/demo/user/chat",
      icon: MessageCircle,
    },
    {
      name: "Reports",
      href: isAdmin ? "/demo/admin/reports" : "/demo/user/reports",
      icon: FileText,
    },
    {
      name: "Settings",
      href: isAdmin ? "/demo/admin/settings" : "/demo/user/settings",
      icon: Settings,
    },
  ];

  const adminLinks = [
    {
      name: "Dashboard",
      href: "/demo/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Users",
      href: "/demo/admin/users",
      icon: Heart,
    },
    {
      name: "AI Management",
      href: "/demo/admin/ai-management",
      icon: Sparkles,
    },
    {
      name: "Content",
      href: "/demo/admin/content",
      icon: FileText,
    },
    {
      name: "Notifications",
      href: "/demo/admin/notifications",
      icon: Bell,
    },
    {
      name: "Settings",
      href: "/demo/admin/settings",
      icon: Settings,
    },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white dark:bg-slate-800"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        className="lg:hidden fixed inset-0 z-20 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-64 bg-white dark:bg-slate-800 shadow-xl"
          initial={{ x: "-100%" }}
          animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full ${
                  isAdmin
                    ? "bg-blue-600"
                    : "bg-gradient-to-r from-pink-500 to-purple-600"
                } flex items-center justify-center`}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <Link href="/">
                <span className="font-bold">
                  {isAdmin ? "Admin Panel" : "Mimos Uterinos"}
                </span>
              </Link>
            </div>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors",
                      pathname === link.href &&
                        "bg-slate-100 dark:bg-slate-700/50 text-slate-900 dark:text-white font-medium"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </motion.div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 border-r border-slate-200 dark:border-slate-700 h-screen sticky top-0">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full ${
                isAdmin
                  ? "bg-blue-600"
                  : "bg-gradient-to-r from-pink-500 to-purple-600"
              } flex items-center justify-center`}
            >
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold">
              {isAdmin ? "Admin Panel" : "Mimos Uterinos"}
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors",
                    pathname === link.href &&
                      "bg-slate-100 dark:bg-slate-700/50 text-slate-900 dark:text-white font-medium"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
            <div>
              <div className="font-medium">Jane Doe</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                jane@example.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
