"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Brain, Heart, MessageCircle, ArrowLeft, ArrowRight } from "lucide-react"
import {
  personalityQuestions,
  calculatePersonalityResults,
  type PersonalityResults,
} from "@/lib/personality-assessment"

interface PersonalityAssessmentProps {
  onComplete: (results: PersonalityResults) => void
  onClose: () => void
}

export function PersonalityAssessment({ onComplete, onClose }: PersonalityAssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<PersonalityResults | null>(null)

  const progress = ((currentQuestion + 1) / personalityQuestions.length) * 100

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }))
  }

  const handleNext = () => {
    if (currentQuestion < personalityQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      // Calculate results
      const personalityResults = calculatePersonalityResults(answers)
      setResults(personalityResults)
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleComplete = () => {
    if (results) {
      onComplete(results)
    }
  }

  const getCurrentCategoryIcon = () => {
    const category = personalityQuestions[currentQuestion]?.category
    switch (category) {
      case "love_language":
        return <Heart className="h-5 w-5" />
      case "communication":
        return <MessageCircle className="h-5 w-5" />
      default:
        return <Brain className="h-5 w-5" />
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "openness":
        return "Openness to Experience"
      case "conscientiousness":
        return "Conscientiousness"
      case "extraversion":
        return "Extraversion"
      case "agreeableness":
        return "Agreeableness"
      case "neuroticism":
        return "Emotional Stability"
      case "love_language":
        return "Love Languages"
      case "communication":
        return "Communication Style"
      default:
        return "Personality"
    }
  }

  if (showResults && results) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="h-6 w-6 mr-2" />
            Your Personality Profile
          </CardTitle>
          <CardDescription>Here's what we learned about your personality and relationship preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Big Five Results */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Personality Traits (Big Five)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(results.bigFive).map(([trait, score]) => (
                <div key={trait} className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="capitalize">{trait.replace(/([A-Z])/g, " $1").trim()}</Label>
                    <span className="text-sm font-medium">{score}%</span>
                  </div>
                  <Progress value={score} className="h-2" />
                  <p className="text-xs text-muted-foreground">{getTraitDescription(trait, score)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Love Language Results */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Love Language Profile</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="font-medium">Primary Love Language:</span>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  {results.loveLanguage.primary}
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(results.loveLanguage)
                  .filter(([key]) => key !== "primary")
                  .map(([language, score]) => (
                    <div key={language} className="space-y-2">
                      <div className="flex justify-between">
                        <Label className="capitalize">{language.replace(/([A-Z])/g, " $1").trim()}</Label>
                        <span className="text-sm font-medium">{score}/5</span>
                      </div>
                      <Progress value={(score / 5) * 100} className="h-2" />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Communication Style Results */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Communication Style</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Your Style:</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {results.communicationStyle.style}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {getCommunicationStyleDescription(results.communicationStyle.style)}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <Button variant="outline" onClick={onClose}>
              Skip for Now
            </Button>
            <Button onClick={handleComplete}>Save Profile & Continue</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const currentQ = personalityQuestions[currentQuestion]
  const currentAnswer = answers[currentQ?.id]

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getCurrentCategoryIcon()}
            <div>
              <CardTitle>Personality Assessment</CardTitle>
              <CardDescription>
                {getCategoryName(currentQ?.category)} • Question {currentQuestion + 1} of {personalityQuestions.length}
              </CardDescription>
            </div>
          </div>
          <Badge variant="outline">{Math.round(progress)}% Complete</Badge>
        </div>
        <Progress value={progress} className="mt-4" />
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium leading-relaxed">{currentQ?.question}</h3>

          <RadioGroup
            value={currentAnswer?.toString()}
            onValueChange={(value) => handleAnswer(currentQ.id, Number.parseInt(value))}
          >
            {currentQ?.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option.score.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-between pt-6 border-t">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <Button onClick={handleNext} disabled={!currentAnswer}>
            {currentQuestion === personalityQuestions.length - 1 ? "See Results" : "Next"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Helper functions for descriptions
function getTraitDescription(trait: string, score: number): string {
  const descriptions: Record<string, Record<string, string>> = {
    openness: {
      low: "You prefer familiar experiences and traditional approaches",
      medium: "You balance new experiences with familiar routines",
      high: "You love exploring new ideas and creative experiences",
    },
    conscientiousness: {
      low: "You prefer flexibility and spontaneity in your approach",
      medium: "You balance organization with adaptability",
      high: "You are highly organized and goal-oriented",
    },
    extraversion: {
      low: "You recharge through quiet time and prefer intimate settings",
      medium: "You enjoy both social time and solitude",
      high: "You gain energy from social interactions and group activities",
    },
    agreeableness: {
      low: "You value honesty and direct communication over harmony",
      medium: "You balance cooperation with standing your ground",
      high: "You prioritize harmony and helping others",
    },
    neuroticism: {
      low: "You handle stress well and maintain emotional stability",
      medium: "You experience normal levels of stress and emotion",
      high: "You may be more sensitive to stress and emotional changes",
    },
  }

  const level = score < 40 ? "low" : score < 70 ? "medium" : "high"
  return descriptions[trait]?.[level] || ""
}

function getCommunicationStyleDescription(style: string): string {
  const descriptions: Record<string, string> = {
    "Direct & Immediate": "You prefer clear, straightforward communication and like to address issues right away.",
    "Thoughtful & Reflective": "You like to think things through before speaking and prefer deeper conversations.",
    "Direct & Clear": "You communicate clearly and honestly, valuing transparency in relationships.",
    Contemplative: "You prefer to process information before responding and value meaningful dialogue.",
    Balanced: "You adapt your communication style based on the situation and person.",
  }

  return descriptions[style] || "You have a unique communication style that adapts to different situations."
}
