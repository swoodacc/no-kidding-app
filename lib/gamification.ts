export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: "profile" | "social" | "engagement" | "milestone"
  points: number
  requirement: {
    type: "count" | "streak" | "completion" | "time_based"
    target: number
    metric: string
  }
  rarity: "common" | "rare" | "epic" | "legendary"
  unlocked?: boolean
  unlockedAt?: string
}

export const achievements: Achievement[] = [
  // Profile Achievements
  {
    id: "profile_complete",
    title: "Profile Perfectionist",
    description: "Complete your profile with all sections filled out",
    icon: "✨",
    category: "profile",
    points: 100,
    requirement: {
      type: "completion",
      target: 100,
      metric: "profile_completion",
    },
    rarity: "common",
  },
  {
    id: "photo_verified",
    title: "Authentic You",
    description: "Get your photos verified",
    icon: "✅",
    category: "profile",
    points: 150,
    requirement: {
      type: "completion",
      target: 1,
      metric: "photo_verification",
    },
    rarity: "rare",
  },
  {
    id: "video_profile",
    title: "Star Quality",
    description: "Add a video profile to showcase your personality",
    icon: "🎬",
    category: "profile",
    points: 200,
    requirement: {
      type: "completion",
      target: 1,
      metric: "video_profile",
    },
    rarity: "rare",
  },

  // Social Achievements
  {
    id: "first_match",
    title: "Perfect Match",
    description: "Get your first match",
    icon: "💕",
    category: "social",
    points: 50,
    requirement: {
      type: "count",
      target: 1,
      metric: "matches",
    },
    rarity: "common",
  },
  {
    id: "match_maker",
    title: "Match Maker",
    description: "Get 10 matches",
    icon: "💖",
    category: "social",
    points: 300,
    requirement: {
      type: "count",
      target: 10,
      metric: "matches",
    },
    rarity: "rare",
  },
  {
    id: "social_butterfly",
    title: "Social Butterfly",
    description: "Get 50 matches",
    icon: "🦋",
    category: "social",
    points: 1000,
    requirement: {
      type: "count",
      target: 50,
      metric: "matches",
    },
    rarity: "epic",
  },
  {
    id: "conversation_starter",
    title: "Conversation Starter",
    description: "Send your first message",
    icon: "💬",
    category: "social",
    points: 25,
    requirement: {
      type: "count",
      target: 1,
      metric: "messages_sent",
    },
    rarity: "common",
  },
  {
    id: "chatty_cathy",
    title: "Great Conversationalist",
    description: "Send 100 messages",
    icon: "🗣️",
    category: "social",
    points: 500,
    requirement: {
      type: "count",
      target: 100,
      metric: "messages_sent",
    },
    rarity: "rare",
  },

  // Engagement Achievements
  {
    id: "daily_user",
    title: "Daily Devotee",
    description: "Log in for 7 consecutive days",
    icon: "📅",
    category: "engagement",
    points: 200,
    requirement: {
      type: "streak",
      target: 7,
      metric: "daily_login",
    },
    rarity: "rare",
  },
  {
    id: "weekly_warrior",
    title: "Weekly Warrior",
    description: "Log in for 30 consecutive days",
    icon: "🏆",
    category: "engagement",
    points: 750,
    requirement: {
      type: "streak",
      target: 30,
      metric: "daily_login",
    },
    rarity: "epic",
  },
  {
    id: "personality_guru",
    title: "Self-Aware",
    description: "Complete the personality assessment",
    icon: "🧠",
    category: "engagement",
    points: 300,
    requirement: {
      type: "completion",
      target: 1,
      metric: "personality_assessment",
    },
    rarity: "rare",
  },

  // Milestone Achievements
  {
    id: "early_adopter",
    title: "Early Adopter",
    description: "Join No Kidding in its first month",
    icon: "🚀",
    category: "milestone",
    points: 500,
    requirement: {
      type: "time_based",
      target: 30,
      metric: "days_since_launch",
    },
    rarity: "legendary",
  },
  {
    id: "one_month",
    title: "One Month Strong",
    description: "Be active for one month",
    icon: "📆",
    category: "milestone",
    points: 400,
    requirement: {
      type: "time_based",
      target: 30,
      metric: "days_active",
    },
    rarity: "rare",
  },
  {
    id: "childfree_champion",
    title: "Childfree Champion",
    description: "Help build the childfree community",
    icon: "🌟",
    category: "milestone",
    points: 1000,
    requirement: {
      type: "count",
      target: 5,
      metric: "successful_dates",
    },
    rarity: "legendary",
  },
]

export interface UserStats {
  userId: string
  totalPoints: number
  level: number
  achievements: string[]
  stats: {
    profileCompletion: number
    matches: number
    messagesSent: number
    messagesReceived: number
    dailyLoginStreak: number
    totalDaysActive: number
    photoVerified: boolean
    videoProfile: boolean
    personalityAssessment: boolean
    successfulDates: number
  }
  lastUpdated: string
}

// Calculate user level based on points
export function calculateLevel(points: number): number {
  // Level progression: 0-99 (Level 1), 100-299 (Level 2), 300-599 (Level 3), etc.
  if (points < 100) return 1
  if (points < 300) return 2
  if (points < 600) return 3
  if (points < 1000) return 4
  if (points < 1500) return 5
  if (points < 2100) return 6
  if (points < 2800) return 7
  if (points < 3600) return 8
  if (points < 4500) return 9
  return 10 // Max level
}

// Get points needed for next level
export function getPointsForNextLevel(currentPoints: number): number {
  const currentLevel = calculateLevel(currentPoints)
  const levelThresholds = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500]

  if (currentLevel >= 10) return 0 // Max level reached

  return levelThresholds[currentLevel] - currentPoints
}

// Check which achievements a user has unlocked
export function checkAchievements(userStats: UserStats): Achievement[] {
  const newAchievements: Achievement[] = []

  achievements.forEach((achievement) => {
    // Skip if already unlocked
    if (userStats.achievements.includes(achievement.id)) return

    let unlocked = false

    switch (achievement.requirement.type) {
      case "count":
        const statValue = getStatValue(userStats.stats, achievement.requirement.metric)
        unlocked = statValue >= achievement.requirement.target
        break

      case "completion":
        if (achievement.requirement.metric === "profile_completion") {
          unlocked = userStats.stats.profileCompletion >= achievement.requirement.target
        } else if (achievement.requirement.metric === "photo_verification") {
          unlocked = userStats.stats.photoVerified
        } else if (achievement.requirement.metric === "video_profile") {
          unlocked = userStats.stats.videoProfile
        } else if (achievement.requirement.metric === "personality_assessment") {
          unlocked = userStats.stats.personalityAssessment
        }
        break

      case "streak":
        if (achievement.requirement.metric === "daily_login") {
          unlocked = userStats.stats.dailyLoginStreak >= achievement.requirement.target
        }
        break

      case "time_based":
        if (achievement.requirement.metric === "days_active") {
          unlocked = userStats.stats.totalDaysActive >= achievement.requirement.target
        }
        break
    }

    if (unlocked) {
      newAchievements.push({
        ...achievement,
        unlocked: true,
        unlockedAt: new Date().toISOString(),
      })
    }
  })

  return newAchievements
}

// Helper function to get stat value by metric name
function getStatValue(stats: UserStats["stats"], metric: string): number {
  switch (metric) {
    case "matches":
      return stats.matches
    case "messages_sent":
      return stats.messagesSent
    case "successful_dates":
      return stats.successfulDates
    default:
      return 0
  }
}

// Update user stats and check for new achievements
export function updateUserStats(
  currentStats: UserStats,
  updates: Partial<UserStats["stats"]>,
): { updatedStats: UserStats; newAchievements: Achievement[] } {
  const updatedStats: UserStats = {
    ...currentStats,
    stats: {
      ...currentStats.stats,
      ...updates,
    },
    lastUpdated: new Date().toISOString(),
  }

  // Check for new achievements
  const newAchievements = checkAchievements(updatedStats)

  // Add points for new achievements
  const achievementPoints = newAchievements.reduce((total, achievement) => total + achievement.points, 0)
  updatedStats.totalPoints += achievementPoints
  updatedStats.level = calculateLevel(updatedStats.totalPoints)

  // Add new achievement IDs to user's achievements
  updatedStats.achievements = [...updatedStats.achievements, ...newAchievements.map((a) => a.id)]

  return { updatedStats, newAchievements }
}

// Get user's progress towards achievements
export function getAchievementProgress(userStats: UserStats): Array<Achievement & { progress: number }> {
  return achievements.map((achievement) => {
    const isUnlocked = userStats.achievements.includes(achievement.id)
    let progress = 0

    if (!isUnlocked) {
      switch (achievement.requirement.type) {
        case "count":
          const statValue = getStatValue(userStats.stats, achievement.requirement.metric)
          progress = Math.min(100, (statValue / achievement.requirement.target) * 100)
          break

        case "completion":
          if (achievement.requirement.metric === "profile_completion") {
            progress = userStats.stats.profileCompletion
          } else {
            progress = 0 // Binary completion achievements
          }
          break

        case "streak":
          if (achievement.requirement.metric === "daily_login") {
            progress = Math.min(100, (userStats.stats.dailyLoginStreak / achievement.requirement.target) * 100)
          }
          break

        case "time_based":
          if (achievement.requirement.metric === "days_active") {
            progress = Math.min(100, (userStats.stats.totalDaysActive / achievement.requirement.target) * 100)
          }
          break
      }
    } else {
      progress = 100
    }

    return {
      ...achievement,
      progress: Math.round(progress),
      unlocked: isUnlocked,
    }
  })
}
