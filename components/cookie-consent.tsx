"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-lg">
            <Cookie className="h-5 w-5 mr-2" />
            Cookie Consent
          </CardTitle>
          <CardDescription>
            We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-sm text-muted-foreground">
            By clicking "Accept", you consent to our use of cookies. You can manage your preferences in our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button onClick={acceptCookies} size="sm" className="flex-1">
            Accept
          </Button>
          <Button onClick={declineCookies} variant="outline" size="sm" className="flex-1">
            Decline
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
