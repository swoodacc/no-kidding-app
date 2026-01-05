export interface SubscriptionTier {
  id: string
  name: string
  price: number
  interval: "month" | "year"
  features: string[]
  limits: {
    dailyLikes: number
    superLikes: number
    boosts: number
    rewinds: number
  }
  popular?: boolean
}

export const subscriptionTiers: SubscriptionTier[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    interval: "month",
    features: ["Basic matching", "Send messages to matches", "View profiles", "Basic filters"],
    limits: {
      dailyLikes: 10,
      superLikes: 0,
      boosts: 0,
      rewinds: 0,
    },
  },
  {
    id: "premium",
    name: "Premium",
    price: 19.99,
    interval: "month",
    features: [
      "Unlimited likes",
      "See who liked you",
      "Advanced filters",
      "Read receipts",
      "Priority matching",
      "Rewind last swipe",
    ],
    limits: {
      dailyLikes: -1, // unlimited
      superLikes: 5,
      boosts: 1,
      rewinds: 5,
    },
    popular: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: 39.99,
    interval: "month",
    features: [
      "All Premium features",
      "Video calls",
      "Profile boost (2x visibility)",
      "Unlimited super likes",
      "Priority customer support",
      "Advanced compatibility insights",
      "Exclusive events access",
    ],
    limits: {
      dailyLikes: -1,
      superLikes: -1,
      boosts: 4,
      rewinds: -1,
    },
  },
]

export interface UserSubscription {
  userId: string
  tierId: string
  status: "active" | "canceled" | "expired"
  currentPeriodStart: string
  currentPeriodEnd: string
  cancelAtPeriodEnd: boolean
  stripeSubscriptionId?: string
}

// Check if user has access to a feature
export function hasFeatureAccess(subscription: UserSubscription | null, feature: string): boolean {
  if (!subscription || subscription.status !== "active") {
    const freeTier = subscriptionTiers.find((t) => t.id === "free")
    return freeTier?.features.includes(feature) || false
  }

  const tier = subscriptionTiers.find((t) => t.id === subscription.tierId)
  return tier?.features.includes(feature) || false
}

// Check daily limits
export function checkDailyLimit(
  subscription: UserSubscription | null,
  limitType: keyof SubscriptionTier["limits"],
  currentUsage: number,
): { allowed: boolean; remaining: number } {
  const tier =
    subscription && subscription.status === "active"
      ? subscriptionTiers.find((t) => t.id === subscription.tierId)
      : subscriptionTiers.find((t) => t.id === "free")

  if (!tier) {
    return { allowed: false, remaining: 0 }
  }

  const limit = tier.limits[limitType]

  if (limit === -1) {
    return { allowed: true, remaining: -1 } // unlimited
  }

  const remaining = Math.max(0, limit - currentUsage)
  return {
    allowed: remaining > 0,
    remaining,
  }
}
