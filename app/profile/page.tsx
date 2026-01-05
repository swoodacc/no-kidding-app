"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Settings, Heart, Eye, MessageCircle, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import { mockUserStats } from "@/lib/mock-data"

export default function ProfilePage() {
  const userProfile = {
    name: "Alex Johnson",
    age: 33,
    location: "San Francisco, CA",
    occupation: "Product Designer",
    bio: "Passionate about design, travel, and living life on my own terms. Childfree by choice and loving every minute of it. Always up for spontaneous adventures and deep conversations over coffee.",
    interests: ["Design", "Travel", "Photography", "Coffee", "Hiking", "Art Museums"],
    images: ["/placeholder.svg?height=400&width=400"],
    verified: true,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      <div className="container py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <h1 className="text-2xl font-bold">{"No Kidding"}</h1>
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/discover">{"Discover"}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/matches">{"Matches"}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/messages">{"Messages"}</Link>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={userProfile.images[0] || "/placeholder.svg"}
                    alt="Profile"
                    className="w-48 h-48 rounded-2xl object-cover"
                  />
                  {userProfile.verified && (
                    <div className="absolute -top-2 -right-2">
                      <Badge className="bg-blue-500 text-white flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        {"Verified"}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold mb-1">
                        {userProfile.name}, {userProfile.age}
                      </h2>
                      <p className="text-muted-foreground">{userProfile.location}</p>
                      <p className="text-sm text-muted-foreground">{userProfile.occupation}</p>
                    </div>
                    <Button variant="outline" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm leading-relaxed">{userProfile.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-2">{"Interests"}</h3>
                    <div className="flex flex-wrap gap-2">
                      {userProfile.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Eye className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold mb-1">{mockUserStats.profileViews}</div>
                <div className="text-sm text-muted-foreground">{"Profile Views"}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 mx-auto mb-2 text-rose-500" />
                <div className="text-2xl font-bold mb-1">{mockUserStats.likes}</div>
                <div className="text-sm text-muted-foreground">{"Likes Received"}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-amber-500" />
                <div className="text-2xl font-bold mb-1">{mockUserStats.matches}</div>
                <div className="text-sm text-muted-foreground">{"Total Matches"}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold mb-1">{mockUserStats.messagesReceived}</div>
                <div className="text-sm text-muted-foreground">{"Messages"}</div>
              </CardContent>
            </Card>
          </div>

          {/* Premium CTA */}
          <Card className="bg-gradient-to-br from-amber-500 to-rose-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{"Upgrade to Premium"}</h3>
                  <p className="text-white/90 mb-4">
                    {"Get unlimited likes, see who liked you, and access exclusive features"}
                  </p>
                  <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-100">
                    {"Unlock Premium"}
                  </Button>
                </div>
                <Star className="h-24 w-24 text-white/20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
