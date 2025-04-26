"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function AnimatedPricing() {
  const [annual, setAnnual] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState(null)

  const plans = [
    {
      name: "Basic",
      price: annual ? "Free" : "Free",
      period: "",
      description: "Essential tracking features",
      features: [
        "Basic cycle tracking",
        "Simple symptom logging",
        "Calendar view",
        "Period predictions",
        "Limited AI insights",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: annual ? "$49.99" : "$4.99",
      period: annual ? "per year" : "per month",
      description: "Advanced tracking & AI insights",
      features: [
        "Advanced cycle analytics",
        "Detailed symptom analysis",
        "Unlimited AI chat with Luna",
        "Personalized health reports",
        "Fertility tracking",
        "Export data for doctors",
      ],
      buttonText: "Try Free for 14 Days",
      popular: true,
      discount: annual ? "Save 17%" : null,
    },
    {
      name: "Family",
      price: annual ? "$99.99" : "$9.99",
      period: annual ? "per year" : "per month",
      description: "Premium for up to 5 users",
      features: [
        "All Premium features",
        "Up to 5 user profiles",
        "Family health insights",
        "Priority support",
        "Early access to new features",
      ],
      buttonText: "Try Free for 14 Days",
      popular: false,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Choose the plan that works best for you
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Label htmlFor="billing-toggle" className={annual ? "text-slate-500" : "font-medium"}>
            Monthly
          </Label>
          <Switch
            id="billing-toggle"
            checked={annual}
            onCheckedChange={setAnnual}
            className="data-[state=checked]:bg-gradient-to-r from-pink-500 to-purple-600"
          />
          <Label htmlFor="billing-toggle" className={!annual ? "text-slate-500" : "font-medium"}>
            Yearly <span className="text-xs text-pink-500 ml-1">Save up to 17%</span>
          </Label>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl overflow-hidden border ${
              plan.popular ? "border-pink-500 dark:border-pink-400" : "border-slate-200 dark:border-slate-700"
            } relative`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            onMouseEnter={() => setHoveredPlan(index)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br opacity-0"
              style={{
                backgroundImage: plan.popular
                  ? "linear-gradient(to bottom right, rgba(236, 72, 153, 0.05), rgba(139, 92, 246, 0.05))"
                  : "linear-gradient(to bottom right, rgba(226, 232, 240, 0.3), rgba(226, 232, 240, 0.1))",
              }}
              animate={{
                opacity: hoveredPlan === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            {plan.popular && (
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 text-sm font-medium relative z-10">
                <Sparkles className="h-4 w-4 inline-block mr-1" />
                Most Popular
              </div>
            )}

            <div className="p-6 bg-white dark:bg-slate-800 relative z-10">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-slate-600 dark:text-slate-400"> {plan.period}</span>}
                {plan.discount && (
                  <span className="ml-2 text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-2 py-0.5 rounded-full">
                    {plan.discount}
                  </span>
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                  >
                    <div
                      className={`mt-1 w-5 h-5 rounded-full ${
                        plan.popular ? "bg-gradient-to-r from-pink-500 to-purple-600" : "bg-slate-200 dark:bg-slate-700"
                      } flex items-center justify-center shrink-0`}
                    >
                      <Check
                        className={`h-3 w-3 ${plan.popular ? "text-white" : "text-slate-700 dark:text-slate-300"}`}
                      />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
