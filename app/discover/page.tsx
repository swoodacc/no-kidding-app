"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, X, Star, MapPin, Briefcase, CheckCircle } from "lucide-react"
import Link from "next/link"
import { mockProfiles } from "@/lib/mock-data"

export default function DiscoverPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentProfile = mockProfiles[currentIndex]

  const handleLike = () => {
    nextProfile()
  }

  const handlePass = () => {
    nextProfile()
  }

  const nextProfile = () => {
    if (currentIndex < mockProfiles.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      // Loop back to start for demo
      setCurrentIndex(0)
    }
  }

  if (!currentProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
        <div className="container py-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">No more profiles to show</h2>
            <p className="text-muted-foreground mb-6">Check back later for new matches!</p>
            <Button onClick={() => setCurrentIndex(0)}>Start Over</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      <div className="container py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              No Kidding
            </h1>
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/matches">Matches</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/messages">Messages</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/profile">Profile</Link>
            </Button>
          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-lg mx-auto">
          <Card className="overflow-hidden shadow-2xl border-2">
            {/* Profile Image */}
            <div className="relative h-[500px] bg-gradient-to-br from-amber-100 to-rose-100">
              {currentProfile.images && currentProfile.images.length > 0 ? (
                <img
                  src={currentProfile.images[0] || "/placeholder.svg"}
                  alt={`${currentProfile.name}'s profile`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-6xl">👤</div>
              )}

              {/* Verification Badge */}
              {currentProfile.verified && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500 text-white flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </Badge>
                </div>
              )}

              {/* Distance */}
              <div className="absolute bottom-4 right-4">
                <Badge variant="secondary" className="bg-black/60 text-white backdrop-blur-sm">
                  {currentProfile.distance}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              {/* Basic Info */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold mb-2">
                  {currentProfile.name}, {currentProfile.age}
                </h2>
                <div className="flex flex-col gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{currentProfile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{currentProfile.occupation}</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <p className="text-sm leading-relaxed">{currentProfile.bio}</p>
              </div>

              {/* Interests */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProfile.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center items-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full w-16 h-16 border-2 hover:border-red-500 hover:text-red-500 bg-transparent"
                  onClick={handlePass}
                >
                  <X className="h-7 w-7" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full w-14 h-14 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                  onClick={() => {
                    alert("Super Like! 💙")
                    nextProfile()
                  }}
                >
                  <Star className="h-6 w-6" />
                </Button>

                <Button
                  size="lg"
                  className="rounded-full w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg"
                  onClick={handleLike}
                >
                  <Heart className="h-8 w-8" />
                </Button>
              </div>

              <div className="flex justify-center items-center gap-4 mt-2">
                <span className="text-xs text-muted-foreground w-16 text-center">Pass</span>
                <span className="text-xs text-muted-foreground w-14 text-center">Super</span>
                <span className="text-xs text-muted-foreground w-20 text-center">Like</span>
              </div>
            </CardContent>
          </Card>

          {/* Progress Indicator */}
          <div className="text-center mt-4 text-sm text-muted-foreground">
            {currentIndex + 1} of {mockProfiles.length}
          </div>
        </div>
      </div>
    </div>
  )
}
