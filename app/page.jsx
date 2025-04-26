"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import SimplifiedHero3D from "./components/simplified-hero-3d"
import AnimatedFeatures from "./components/animated-features";
import AnimatedTestimonials from "./components/animated-testimonials";
import AnimatedPricing from "./components/animated-pricing";
import SimplifiedHero3D from "./components/hero-3d-animation";
import { useIsMobile } from "./hooks/use-mobile";
// import { useIsMobile } from "@/hooks/use-mobile"

export default function LandingPage() {
  const [showDemoOptions, setShowDemoOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "AI-Powered Cycle Tracking",
      description:
        "Predict your cycle with precision using our advanced AI that learns from your unique patterns.",
      icon: "Calendar",
      gradientFrom: "#ec489920",
      gradientTo: "#d946ef20",
    },
    {
      title: "Symptom Analysis",
      description:
        "Log symptoms and get AI insights on patterns, triggers, and personalized recommendations.",
      icon: "Activity",
      gradientFrom: "#a855f720",
      gradientTo: "#8b5cf620",
    },
    {
      title: "Smart Health Reports",
      description:
        "Generate comprehensive health reports with AI analysis of your cycle data.",
      icon: "FileText",
      gradientFrom: "#3b82f620",
      gradientTo: "#2563eb20",
    },
    {
      title: "Luna AI Chat Assistant",
      description:
        "Chat with Luna, your personal AI health coach for instant answers and advice.",
      icon: "MessageCircle",
      gradientFrom: "#10b98120",
      gradientTo: "#05966920",
    },
    {
      title: "Fertility Insights",
      description:
        "Track ovulation and fertile windows with AI predictions based on your data.",
      icon: "Heart",
      gradientFrom: "#ef444420",
      gradientTo: "#b9181820",
    },
    {
      title: "Doctor Mode",
      description:
        "Generate medical-grade reports to share with healthcare providers.",
      icon: "Stethoscope",
      gradientFrom: "#14b8a620",
      gradientTo: "#0d948420",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl">Mimos Uterinos</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="#features"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <div className="flex flex-col gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button variant="outline" className="w-full">
                        Log In
                      </Button>
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        {/* Hero Section with 3D Animation */}
        <section className="pt-20 sm:pt-24 md:pt-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mt-20 mb-4 sm:mb-8 md:mb-0">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Understand Your Cycle <br className="hidden md:block" />
                Like Never Before
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Track your cycle, understand your body, and get personalized
                insights with our AI-powered menstrual health assistant.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/signup" className="w-full sm:w-auto">
                  <Button
                    size={isMobile ? "default" : "lg"}
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size={isMobile ? "default" : "lg"}
                  onClick={() => setShowDemoOptions(!showDemoOptions)}
                  className={`w-full sm:w-auto ${
                    showDemoOptions ? "border-pink-500 text-pink-500" : ""
                  }`}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Try Demo
                </Button>
              </motion.div>

              {showDemoOptions && (
                <motion.div
                  className="mb-6 sm:mb-8 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-[280px] sm:max-w-md w-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-medium mb-3">Choose Demo Mode:</h3>
                  <div className="space-y-2">
                    <Link href="/demo/user">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        User Demo
                      </Button>
                    </Link>
                    <Link href="/demo/admin">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Check className="mr-2 h-4 w-4 text-blue-500" />
                        Admin Panel Demo
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            {/* 3D Hero Animation */}
            <SimplifiedHero3D />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/3 left-0 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-pink-500/10 -translate-x-1/2" />
          <div className="absolute top-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-purple-500/10 translate-x-1/3" />
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 sm:py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50 relative"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Powerful Features
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our app combines advanced AI technology with intuitive design to
                provide a comprehensive menstrual health experience.
              </motion.p>
            </div>

            <AnimatedFeatures features={features} />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-20 md:py-32">
          <AnimatedTestimonials />
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-16 sm:py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50"
        >
          <AnimatedPricing />
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-600/5" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Start Your Health Journey Today
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of users who are taking control of their
                menstrual health with our AI-powered app.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              >
                <Link href="/signup" className="w-full sm:w-auto">
                  <Button
                    size={isMobile ? "default" : "lg"}
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size={isMobile ? "default" : "lg"}
                    className="w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Decorative sparkles */}
          <div className="absolute top-20 left-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-pink-500/30 animate-pulse" />
          <div className="absolute top-40 right-20 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-purple-500/30 animate-pulse" />
          <div className="absolute bottom-20 left-1/4 w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-pink-500/30 animate-pulse" />
          <div className="absolute bottom-40 right-1/3 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500/30 animate-pulse" />
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <span className="font-bold text-sm sm:text-base">
                  Mimos Uterinos
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                AI-powered menstrual health tracking for a better understanding
                of your body.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Product
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Company
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Legal
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Mimos Uterinos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
