"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart } from "lucide-react"
import Link from "next/link"
import { mockMatches } from "@/lib/mock-data"

export default function MatchesPage() {
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
              <Link href="/messages">{"Messages"}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/profile">{"Profile"}</Link>
            </Button>
          </div>
        </div>

        {/* Matches Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{"Your Matches"}</h2>
          <p className="text-muted-foreground">
            {mockMatches.length} {mockMatches.length === 1 ? "person" : "people"} {"you've connected with"}
          </p>
        </div>

        {/* Matches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mockMatches.map((match) => (
            <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gradient-to-br from-amber-100 to-rose-100">
                <img
                  src={match.avatar || "/placeholder.svg?height=300&width=300"}
                  alt={match.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 text-xs">
                    <Heart className="h-3 w-3 mr-1 text-rose-500 fill-rose-500" />
                    {"Match"}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-1">
                  {match.name}, {match.age}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{"Matched " + match.matchedAt}</p>
                <Button asChild className="w-full" size="sm">
                  <Link href="/messages">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {"Send Message"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
