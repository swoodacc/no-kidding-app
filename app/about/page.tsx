import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/">
            <h1 className="text-3xl font-bold mb-4">{"No Kidding"}</h1>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-balance">
            {"Dating Without Compromise"}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 text-balance leading-relaxed">
            {
              "We believe everyone deserves to find love with someone who shares their values. No Kidding is the premium dating platform designed specifically for the childfree community."
            }
          </p>

          {/* Mission Statement */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{"Our Mission"}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {
                  "In a world where dating apps often fail to account for fundamental lifestyle choices, No Kidding provides a space where childfree individuals can connect authentically without the awkward conversations or deal-breakers."
                }
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {
                  "We're here to help you find meaningful connections with people who share your vision for the future - one that includes freedom, adventure, and partnership, without children."
                }
              </p>
            </CardContent>
          </Card>

          {/* Features List */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Verified childfree community",
              "Advanced compatibility matching",
              "Safe and secure platform",
              "Premium user experience",
              "Active moderation team",
              "Privacy-focused features",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/discover">{"Start Your Journey"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
