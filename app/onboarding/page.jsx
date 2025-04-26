"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    birthDate: "",
    cycleLength: 28,
    periodLength: 5,
    lastPeriodDate: "",
    symptoms: [],
    trackingGoal: "",
  })

  const totalSteps = 5
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // In a real app, you would save the onboarding data here
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const updateFormData = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  const toggleSymptom = (symptom) => {
    if (formData.symptoms.includes(symptom)) {
      updateFormData(
        "symptoms",
        formData.symptoms.filter((s) => s !== symptom),
      )
    } else {
      updateFormData("symptoms", [...formData.symptoms, symptom])
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
          >
            {step === 1 && (
              <div>
                <h1 className="text-2xl font-bold mb-2">Welcome to Mimos Uterinos</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Let's set up your profile to personalize your experience. This will help our AI provide more accurate
                  predictions and insights.
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Date of Birth</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => updateFormData("birthDate", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h1 className="text-2xl font-bold mb-2">Your Cycle Information</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Tell us about your typical cycle to help us make accurate predictions.
                </p>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Average Cycle Length (days)</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[formData.cycleLength]}
                        min={21}
                        max={35}
                        step={1}
                        onValueChange={(value) => updateFormData("cycleLength", value[0])}
                        className="flex-1"
                      />
                      <span className="font-medium w-8 text-center">{formData.cycleLength}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      The average cycle is 28 days, but it can range from 21 to 35 days
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Average Period Length (days)</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[formData.periodLength]}
                        min={2}
                        max={10}
                        step={1}
                        onValueChange={(value) => updateFormData("periodLength", value[0])}
                        className="flex-1"
                      />
                      <span className="font-medium w-8 text-center">{formData.periodLength}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h1 className="text-2xl font-bold mb-2">Last Period Start Date</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  This helps us calculate your current cycle phase and make predictions.
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastPeriodDate">When did your last period start?</Label>
                    <Input
                      id="lastPeriodDate"
                      type="date"
                      value={formData.lastPeriodDate}
                      onChange={(e) => updateFormData("lastPeriodDate", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h1 className="text-2xl font-bold mb-2">Common Symptoms</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Select the symptoms you commonly experience during your cycle.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Cramps",
                    "Headache",
                    "Bloating",
                    "Fatigue",
                    "Mood Swings",
                    "Breast Tenderness",
                    "Acne",
                    "Back Pain",
                    "Cravings",
                    "Insomnia",
                  ].map((symptom) => (
                    <Button
                      key={symptom}
                      type="button"
                      variant={formData.symptoms.includes(symptom) ? "default" : "outline"}
                      className={
                        formData.symptoms.includes(symptom)
                          ? "bg-pink-500 hover:bg-pink-600 text-white justify-start"
                          : "justify-start"
                      }
                      onClick={() => toggleSymptom(symptom)}
                    >
                      {formData.symptoms.includes(symptom) && <Check className="mr-2 h-4 w-4" />}
                      {symptom}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h1 className="text-2xl font-bold mb-2">Your Goal</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  What's your primary reason for using Mimos Uterinos?
                </p>

                <RadioGroup
                  value={formData.trackingGoal}
                  onValueChange={(value) => updateFormData("trackingGoal", value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                    <RadioGroupItem value="track_health" id="track_health" />
                    <Label htmlFor="track_health" className="flex-1 cursor-pointer">
                      Track my menstrual health
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                    <RadioGroupItem value="plan_pregnancy" id="plan_pregnancy" />
                    <Label htmlFor="plan_pregnancy" className="flex-1 cursor-pointer">
                      Plan or avoid pregnancy
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                    <RadioGroupItem value="manage_symptoms" id="manage_symptoms" />
                    <Label htmlFor="manage_symptoms" className="flex-1 cursor-pointer">
                      Manage symptoms and pain
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                    <RadioGroupItem value="understand_body" id="understand_body" />
                    <Label htmlFor="understand_body" className="flex-1 cursor-pointer">
                      Better understand my body
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={handleBack}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              <Button
                type="button"
                onClick={handleNext}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              >
                {step === totalSteps ? "Finish Setup" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
