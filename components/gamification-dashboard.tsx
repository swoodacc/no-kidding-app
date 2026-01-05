"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Star, Target, TrendingUp, Award, Crown } from "lucide-react"
import {
  calculateLevel,
  getPointsForNextLevel,
  getAchievementProgress,
  type UserStats,
  type Achievement,
} from "@/lib/gamification"

interface GamificationDashboardProps {
  userStats: UserStats
  onAchievementClick?: (achievement: Achievement) => void
}

export function GamificationDashboard({ userStats, onAchievementClick }: GamificationDashboardProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const currentLevel = calculateLevel(userStats.totalPoints)
  const pointsForNext = getPointsForNextLevel(userStats.totalPoints)
  const achievementProgress = getAchievementProgress(userStats)

  const unlockedAchievements = achievementProgress.filter((a) => a.unlocked)
  const inProgressAchievements = achievementProgress.filter((a) => !a.unlocked && a.progress > 0)
  const availableAchievements = achievementProgress.filter((a) => !a.unlocked && a.progress === 0)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-800 border-gray-300"
      case "rare":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "epic":
        return "bg-purple-100 text-purple-800 border-purple-300"
      case "legendary":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getLevelIcon = (level: number) => {
    if (level >= 8) return <Crown className="h-5 w-5 text-yellow-500" />
    if (level >= 5) return <Trophy className="h-5 w-5 text-purple-500" />
    if (level >= 3) return <Award className="h-5 w-5 text-blue-500" />
    return <Star className="h-5 w-5 text-green-500" />
  }

  const filteredAchievements =
    selectedCategory === "all"
      ? achievementProgress
      : achievementProgress.filter((a) => a.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Level and Points Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              {getLevelIcon(currentLevel)}
              <span className="ml-2">Level {currentLevel}</span>
            </CardTitle>
            <CardDescription>Your current level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress to Level {currentLevel + 1}</span>
                <span>{pointsForNext > 0 ? `${pointsForNext} points needed` : "Max level!"}</span>
              </div>
              {pointsForNext > 0 && (
                <Progress
                  value={pointsForNext > 0 ? ((userStats.totalPoints % 1000) / 1000) * 100 : 100}
                  className="h-2"
                />
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <TrendingUp className="h-5 w-5 mr-2" />
              {userStats.totalPoints.toLocaleString()} Points
            </CardTitle>
            <CardDescription>Total points earned</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">#{Math.floor(Math.random() * 1000) + 1}</div>
            <p className="text-sm text-muted-foreground">Global ranking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Trophy className="h-5 w-5 mr-2" />
              {unlockedAchievements.length} Achievements
            </CardTitle>
            <CardDescription>Unlocked achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-1">
              {["common", "rare", "epic", "legendary"].map((rarity) => {
                const count = unlockedAchievements.filter((a) => a.rarity === rarity).length
                return (
                  <Badge key={rarity} variant="outline" className={`text-xs ${getRarityColor(rarity)}`}>
                    {count}
                  </Badge>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Achievements
          </CardTitle>
          <CardDescription>Track your progress and unlock rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="in-progress">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="in-progress">In Progress ({inProgressAchievements.length})</TabsTrigger>
              <TabsTrigger value="unlocked">Unlocked ({unlockedAchievements.length})</TabsTrigger>
              <TabsTrigger value="available">Available ({availableAchievements.length})</TabsTrigger>
              <TabsTrigger value="all">All ({achievementProgress.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="in-progress" className="space-y-4">
              {inProgressAchievements.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Target className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No achievements in progress</p>
                  <p className="text-sm">Complete your profile to start earning achievements!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {inProgressAchievements.map((achievement) => (
                    <AchievementCard key={achievement.id} achievement={achievement} onClick={onAchievementClick} />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="unlocked" className="space-y-4">
              {unlockedAchievements.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Trophy className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No achievements unlocked yet</p>
                  <p className="text-sm">Start using the app to earn your first achievement!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {unlockedAchievements.map((achievement) => (
                    <AchievementCard key={achievement.id} achievement={achievement} onClick={onAchievementClick} />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="available" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableAchievements.map((achievement) => (
                  <AchievementCard key={achievement.id} achievement={achievement} onClick={onAchievementClick} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievementProgress.map((achievement) => (
                  <AchievementCard key={achievement.id} achievement={achievement} onClick={onAchievementClick} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

interface AchievementCardProps {
  achievement: Achievement & { progress: number }
  onClick?: (achievement: Achievement) => void
}

function AchievementCard({ achievement, onClick }: AchievementCardProps) {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "border-gray-300 bg-gray-50"
      case "rare":
        return "border-blue-300 bg-blue-50"
      case "epic":
        return "border-purple-300 bg-purple-50"
      case "legendary":
        return "border-yellow-300 bg-yellow-50"
      default:
        return "border-gray-300 bg-gray-50"
    }
  }

  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-md ${getRarityColor(achievement.rarity)} ${
        achievement.unlocked ? "opacity-100" : "opacity-75"
      }`}
      onClick={() => onClick?.(achievement)}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">{achievement.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium truncate">{achievement.title}</h4>
              <Badge variant="outline" className={`text-xs ${getRarityColor(achievement.rarity)}`}>
                {achievement.points} pts
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>

            {achievement.unlocked ? (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✅ Unlocked
              </Badge>
            ) : (
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Progress</span>
                  <span>{achievement.progress}%</span>
                </div>
                <Progress value={achievement.progress} className="h-1" />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
