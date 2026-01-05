"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, X } from "lucide-react"

interface AdvancedSearchFilters {
  ageRange: [number, number]
  distance: number
  education: string[]
  occupation: string[]
  lifestyle: {
    exercise: string[]
    drinking: string[]
    smoking: string[]
  }
  interests: string[]
  recentlyActive: boolean
  hasPhotos: boolean
  verified: boolean
}

const educationOptions = [
  "High School",
  "Trade School",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Professional Certification",
  "Self-taught",
]

const occupationCategories = [
  "Technology",
  "Healthcare",
  "Education",
  "Finance",
  "Creative Arts",
  "Business",
  "Science",
  "Engineering",
  "Legal",
  "Marketing",
  "Consulting",
  "Entrepreneurship",
  "Non-profit",
  "Government",
  "Other",
]

const exerciseOptions = ["Daily", "Regularly", "Sometimes", "Never"]
const drinkingOptions = ["Never", "Socially", "Regularly"]
const smokingOptions = ["Never", "Socially", "Regularly"]

const interestOptions = [
  "Travel",
  "Reading",
  "Hiking",
  "Cooking",
  "Photography",
  "Yoga",
  "Art",
  "Music",
  "Movies",
  "Gaming",
  "Fitness",
  "Writing",
  "Dancing",
  "Cycling",
  "Meditation",
  "Volunteering",
  "Gardening",
  "Technology",
  "Fashion",
  "Sports",
  "Wine Tasting",
  "Theater",
  "Museums",
  "Concerts",
  "Festivals",
  "Camping",
  "Rock Climbing",
  "Swimming",
  "Running",
  "Skiing",
  "Surfing",
]

function AdvancedSearch({
  onSearch,
  onClose,
}: {
  onSearch: (filters: AdvancedSearchFilters) => void
  onClose: () => void
}) {
  const [filters, setFilters] = useState<AdvancedSearchFilters>({
    ageRange: [25, 45],
    distance: 50,
    education: [],
    occupation: [],
    lifestyle: {
      exercise: [],
      drinking: [],
      smoking: [],
    },
    interests: [],
    recentlyActive: false,
    hasPhotos: true,
    verified: false,
  })

  const handleInterestToggle = (interest: string) => {
    setFilters((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleEducationToggle = (education: string) => {
    setFilters((prev) => ({
      ...prev,
      education: prev.education.includes(education)
        ? prev.education.filter((e) => e !== education)
        : [...prev.education, education],
    }))
  }

  const handleOccupationToggle = (occupation: string) => {
    setFilters((prev) => ({
      ...prev,
      occupation: prev.occupation.includes(occupation)
        ? prev.occupation.filter((o) => o !== occupation)
        : [...prev.occupation, occupation],
    }))
  }

  const handleLifestyleToggle = (category: keyof typeof filters.lifestyle, value: string) => {
    setFilters((prev) => ({
      ...prev,
      lifestyle: {
        ...prev.lifestyle,
        [category]: prev.lifestyle[category].includes(value)
          ? prev.lifestyle[category].filter((v) => v !== value)
          : [...prev.lifestyle[category], value],
      },
    }))
  }

  const clearAllFilters = () => {
    setFilters({
      ageRange: [25, 45],
      distance: 50,
      education: [],
      occupation: [],
      lifestyle: {
        exercise: [],
        drinking: [],
        smoking: [],
      },
      interests: [],
      recentlyActive: false,
      hasPhotos: true,
      verified: false,
    })
  }

  const getActiveFilterCount = () => {
    let count = 0
    if (filters.education.length > 0) count++
    if (filters.occupation.length > 0) count++
    if (filters.lifestyle.exercise.length > 0) count++
    if (filters.lifestyle.drinking.length > 0) count++
    if (filters.lifestyle.smoking.length > 0) count++
    if (filters.interests.length > 0) count++
    if (filters.recentlyActive) count++
    if (filters.verified) count++
    return count
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Advanced Search
            </CardTitle>
            <CardDescription>
              Find your perfect match with detailed filters
              {getActiveFilterCount() > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {getActiveFilterCount()} active filters
                </Badge>
              )}
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>
                  Age Range: {filters.ageRange[0]} - {filters.ageRange[1]}
                </Label>
                <Slider
                  value={filters.ageRange}
                  onValueChange={(value) => setFilters((prev) => ({ ...prev, ageRange: value as [number, number] }))}
                  min={18}
                  max={65}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Distance: {filters.distance} miles</Label>
                <Slider
                  value={[filters.distance]}
                  onValueChange={(value) => setFilters((prev) => ({ ...prev, distance: value[0] }))}
                  min={5}
                  max={200}
                  step={5}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Education Level</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {educationOptions.map((education) => (
                    <div key={education} className="flex items-center space-x-2">
                      <Checkbox
                        id={education}
                        checked={filters.education.includes(education)}
                        onCheckedChange={() => handleEducationToggle(education)}
                      />
                      <Label htmlFor={education} className="text-sm">
                        {education}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Occupation Category</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {occupationCategories.map((occupation) => (
                    <div key={occupation} className="flex items-center space-x-2">
                      <Checkbox
                        id={occupation}
                        checked={filters.occupation.includes(occupation)}
                        onCheckedChange={() => handleOccupationToggle(occupation)}
                      />
                      <Label htmlFor={occupation} className="text-sm">
                        {occupation}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lifestyle" className="space-y-6">
            <div className="space-y-6">
              <div>
                <Label>Exercise Habits</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exerciseOptions.map((option) => (
                    <Badge
                      key={option}
                      variant={filters.lifestyle.exercise.includes(option) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleLifestyleToggle("exercise", option)}
                    >
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label>Drinking Habits</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {drinkingOptions.map((option) => (
                    <Badge
                      key={option}
                      variant={filters.lifestyle.drinking.includes(option) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleLifestyleToggle("drinking", option)}
                    >
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label>Smoking Habits</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {smokingOptions.map((option) => (
                    <Badge
                      key={option}
                      variant={filters.lifestyle.smoking.includes(option) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleLifestyleToggle("smoking", option)}
                    >
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="interests" className="space-y-6">
            <div>
              <Label>Interests & Hobbies</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {interestOptions.map((interest) => (
                  <Badge
                    key={interest}
                    variant={filters.interests.includes(interest) ? "default" : "outline"}
                    className="cursor-pointer justify-center py-2"
                    onClick={() => handleInterestToggle(interest)}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="recently-active">Recently Active (within 7 days)</Label>
                <Switch
                  id="recently-active"
                  checked={filters.recentlyActive}
                  onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, recentlyActive: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="has-photos">Has Profile Photos</Label>
                <Switch
                  id="has-photos"
                  checked={filters.hasPhotos}
                  onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, hasPhotos: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="verified">Verified Profiles Only</Label>
                <Switch
                  id="verified"
                  checked={filters.verified}
                  onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, verified: checked }))}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-6 pt-6 border-t">
          <Button variant="outline" onClick={clearAllFilters}>
            Clear All Filters
          </Button>
          <div className="space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => onSearch(filters)}>
              <Search className="h-4 w-4 mr-2" />
              Search Matches
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdvancedSearch
