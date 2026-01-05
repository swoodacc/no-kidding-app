import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Shield, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
        <div className="absolute inset-0 bg-[url('/abstract-warm-texture.jpg')] opacity-5" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-stone-800/80 px-6 py-2 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>{"Join thousands living their best childfree life"}</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight text-balance">
              {"Find Love,"}
              <br />
              {"Without Compromise"}
            </h1>

            <p className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
              {
                "The premium dating platform for people who have chosen a childfree lifestyle. Connect with like-minded individuals who share your values."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-stone-900 hover:bg-stone-800 dark:bg-stone-50 dark:hover:bg-stone-200"
              >
                <Link href="/discover">{"Start Discovering"}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                <Link href="/about">{"Learn More"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{"Why No Kidding?"}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {"A dating experience designed specifically for the childfree community"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center border-2 hover:border-stone-300 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900/20">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{"Like-Minded Community"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Connect with people who share your childfree values and lifestyle choices"}
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-stone-300 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/20">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{"Smart Matching"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Our algorithm connects you with compatible matches based on interests and values"}
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-stone-300 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 dark:bg-stone-800">
                <Shield className="h-8 w-8 text-stone-600 dark:text-stone-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{"Safe & Verified"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Profile verification and safety features to ensure authentic connections"}
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-stone-300 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20">
                <Sparkles className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{"Premium Experience"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Ad-free browsing with advanced features for serious daters"}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 dark:bg-stone-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"Ready to Find Your Match?"}</h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            {"Join thousands of childfree individuals who have found meaningful connections"}
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-stone-900 hover:bg-stone-100">
            <Link href="/discover">{"Get Started Free"}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
