"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, Crown, Zap, Star } from "lucide-react"
import { subscriptionTiers, type SubscriptionTier } from "@/lib/subscription"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  currentTier?: string
  onSubscribe: (tierId: string, interval: "month" | "year") => void
}

export function SubscriptionModal({ isOpen, onClose, currentTier = "free", onSubscribe }: SubscriptionModalProps) {
  const [billingInterval, setBillingInterval] = useState<"month" | "year">("month")
  const [selectedTier, setSelectedTier] = useState<string>("")

  const getYearlyPrice = (monthlyPrice: number) => {
    return monthlyPrice * 12 * 0.8 // 20% discount for yearly
  }

  const getTierIcon = (tierId: string) => {
    switch (tierId) {
      case "premium":
        return <Crown className="h-5 w-5" />
      case "elite":
        return <Star className="h-5 w-5" />
      default:
        return <Zap className="h-5 w-5" />
    }
  }

  const handleSubscribe = (tier: SubscriptionTier) => {
    if (tier.id === "free") return
    setSelectedTier(tier.id)
    onSubscribe(tier.id, billingInterval)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Choose Your Plan</DialogTitle>
          <DialogDescription>Unlock premium features and find your perfect match faster</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={billingInterval === "month" ? "font-medium" : "text-muted-foreground"}>Monthly</span>
            <Switch
              checked={billingInterval === "year"}
              onCheckedChange={(checked) => setBillingInterval(checked ? "year" : "month")}
            />
            <span className={billingInterval === "year" ? "font-medium" : "text-muted-foreground"}>Yearly</span>
            {billingInterval === "year" && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Save 20%
              </Badge>
            )}
          </div>

          {/* Subscription Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionTiers.map((tier) => {
              const isCurrentTier = tier.id === currentTier
              const price = billingInterval === "year" ? getYearlyPrice(tier.price) : tier.price
              const displayPrice = billingInterval === "year" ? price / 12 : price

              return (
                <Card
                  key={tier.id}
                  className={`relative ${
                    tier.popular ? "border-primary shadow-lg scale-105" : ""
                  } ${isCurrentTier ? "border-green-500" : ""}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}

                  {isCurrentTier && (
                    <div className="absolute -top-3 right-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Current Plan
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      {getTierIcon(tier.id)}
                      <CardTitle className="ml-2">{tier.name}</CardTitle>
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold">
                        ${displayPrice.toFixed(2)}
                        <span className="text-lg font-normal text-muted-foreground">
                          /{billingInterval === "year" ? "mo" : "month"}
                        </span>
                      </div>
                      {billingInterval === "year" && tier.price > 0 && (
                        <div className="text-sm text-muted-foreground">${price.toFixed(2)} billed annually</div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Limits Display */}
                    <div className="mt-4 pt-4 border-t space-y-2">
                      <div className="text-sm font-medium">Daily Limits:</div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>Likes: {tier.limits.dailyLikes === -1 ? "Unlimited" : tier.limits.dailyLikes}</div>
                        <div>Super Likes: {tier.limits.superLikes === -1 ? "Unlimited" : tier.limits.superLikes}</div>
                        <div>Boosts: {tier.limits.boosts === -1 ? "Unlimited" : `${tier.limits.boosts}/month`}</div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={tier.id === "free" ? "outline" : "default"}
                      disabled={isCurrentTier || selectedTier === tier.id}
                      onClick={() => handleSubscribe(tier)}
                    >
                      {isCurrentTier
                        ? "Current Plan"
                        : selectedTier === tier.id
                          ? "Processing..."
                          : tier.id === "free"
                            ? "Free Forever"
                            : `Upgrade to ${tier.name}`}
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          {/* Feature Comparison */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Feature</th>
                    <th className="text-center p-2">Free</th>
                    <th className="text-center p-2">Premium</th>
                    <th className="text-center p-2">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Daily Likes</td>
                    <td className="text-center p-2">10</td>
                    <td className="text-center p-2">Unlimited</td>
                    <td className="text-center p-2">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">See Who Liked You</td>
                    <td className="text-center p-2">❌</td>
                    <td className="text-center p-2">✅</td>
                    <td className="text-center p-2">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Advanced Filters</td>
                    <td className="text-center p-2">❌</td>
                    <td className="text-center p-2">✅</td>
                    <td className="text-center p-2">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Video Calls</td>
                    <td className="text-center p-2">❌</td>
                    <td className="text-center p-2">❌</td>
                    <td className="text-center p-2">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Profile Boosts</td>
                    <td className="text-center p-2">0</td>
                    <td className="text-center p-2">1/month</td>
                    <td className="text-center p-2">4/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
