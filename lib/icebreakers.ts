export interface IcebreakerQuestion {
  id: string
  category: "lifestyle" | "interests" | "values" | "fun" | "deep" | "childfree"
  question: string
  followUp?: string
  tags: string[]
}

export const icebreakerQuestions: IcebreakerQuestion[] = [
  // Childfree specific
  {
    id: "cf1",
    category: "childfree",
    question: "What's your favorite thing about being childfree?",
    followUp: "How has it shaped your life goals?",
    tags: ["childfree", "lifestyle", "values"],
  },
  {
    id: "cf2",
    category: "childfree",
    question: "What's the best way you've spent your free time recently?",
    followUp: "Any spontaneous adventures?",
    tags: ["childfree", "freedom", "activities"],
  },
  {
    id: "cf3",
    category: "childfree",
    question: "How do you usually respond when people ask about your childfree choice?",
    followUp: "Any funny or memorable reactions?",
    tags: ["childfree", "social", "communication"],
  },

  // Lifestyle
  {
    id: "ls1",
    category: "lifestyle",
    question: "What does your ideal weekend look like?",
    followUp: "Any must-have activities?",
    tags: ["lifestyle", "relaxation", "activities"],
  },
  {
    id: "ls2",
    category: "lifestyle",
    question: "Are you more of a morning person or night owl?",
    followUp: "What's your favorite time of day and why?",
    tags: ["lifestyle", "personality", "routine"],
  },
  {
    id: "ls3",
    category: "lifestyle",
    question: "What's your go-to way to unwind after a stressful day?",
    followUp: "Any relaxation rituals?",
    tags: ["lifestyle", "stress", "self-care"],
  },

  // Interests & Hobbies
  {
    id: "in1",
    category: "interests",
    question: "What hobby or interest are you most passionate about?",
    followUp: "How did you get started with it?",
    tags: ["interests", "passion", "hobbies"],
  },
  {
    id: "in2",
    category: "interests",
    question: "What's something new you've learned or tried recently?",
    followUp: "Would you recommend it to others?",
    tags: ["interests", "learning", "growth"],
  },
  {
    id: "in3",
    category: "interests",
    question: "If you could master any skill instantly, what would it be?",
    followUp: "What would you do with that skill?",
    tags: ["interests", "aspirations", "skills"],
  },

  // Values & Deep Questions
  {
    id: "vl1",
    category: "values",
    question: "What's something you believe that most people disagree with?",
    followUp: "How did you come to that belief?",
    tags: ["values", "beliefs", "individuality"],
  },
  {
    id: "vl2",
    category: "values",
    question: "What's the most important lesson life has taught you?",
    followUp: "How has it changed your perspective?",
    tags: ["values", "wisdom", "growth"],
  },
  {
    id: "vl3",
    category: "values",
    question: "What cause or issue do you care most deeply about?",
    followUp: "How do you contribute to it?",
    tags: ["values", "causes", "impact"],
  },

  // Fun & Light
  {
    id: "fn1",
    category: "fun",
    question: "What's your most unpopular food opinion?",
    followUp: "Any foods you absolutely can't stand?",
    tags: ["fun", "food", "opinions"],
  },
  {
    id: "fn2",
    category: "fun",
    question: "If you could have dinner with anyone, living or dead, who would it be?",
    followUp: "What would you want to ask them?",
    tags: ["fun", "imagination", "curiosity"],
  },
  {
    id: "fn3",
    category: "fun",
    question: "What's the weirdest compliment you've ever received?",
    followUp: "Did you take it as a compliment?",
    tags: ["fun", "humor", "social"],
  },

  // Travel & Adventure
  {
    id: "tr1",
    category: "interests",
    question: "What's the most spontaneous trip you've ever taken?",
    followUp: "Any travel disasters that turned into great stories?",
    tags: ["travel", "adventure", "spontaneity"],
  },
  {
    id: "tr2",
    category: "interests",
    question: "If money wasn't an issue, where would you travel first?",
    followUp: "What would you want to experience there?",
    tags: ["travel", "dreams", "adventure"],
  },

  // Career & Ambitions
  {
    id: "cr1",
    category: "lifestyle",
    question: "What's the most rewarding part of your work?",
    followUp: "What motivates you professionally?",
    tags: ["career", "motivation", "fulfillment"],
  },
  {
    id: "cr2",
    category: "lifestyle",
    question: "If you could switch careers tomorrow, what would you do?",
    followUp: "What's stopping you from making that change?",
    tags: ["career", "dreams", "change"],
  },
]

// Function to get personalized icebreakers based on user profiles
export function getPersonalizedIcebreakers(userProfile: any, matchProfile: any, count = 3): IcebreakerQuestion[] {
  const userInterests = userProfile.interests || []
  const matchInterests = matchProfile.interests || []
  const commonInterests = userInterests.filter((interest: string) => matchInterests.includes(interest))

  let relevantQuestions = [...icebreakerQuestions]

  // Prioritize questions based on common interests
  if (commonInterests.includes("Travel")) {
    relevantQuestions = relevantQuestions
      .filter((q) => q.tags.includes("travel") || q.tags.includes("adventure"))
      .concat(relevantQuestions.filter((q) => !q.tags.includes("travel") && !q.tags.includes("adventure")))
  }

  if (commonInterests.includes("Fitness") || commonInterests.includes("Yoga")) {
    relevantQuestions = relevantQuestions
      .filter((q) => q.tags.includes("lifestyle") || q.tags.includes("self-care"))
      .concat(relevantQuestions.filter((q) => !q.tags.includes("lifestyle") && !q.tags.includes("self-care")))
  }

  // Always include some childfree-specific questions
  const childfreeQuestions = relevantQuestions.filter((q) => q.category === "childfree")
  const otherQuestions = relevantQuestions.filter((q) => q.category !== "childfree")

  // Mix childfree and other questions
  const selectedQuestions = [...childfreeQuestions.slice(0, 1), ...otherQuestions.slice(0, count - 1)]

  return selectedQuestions.slice(0, count)
}

// Daily rotating questions
export function getDailyIcebreaker(): IcebreakerQuestion {
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
  const questionIndex = dayOfYear % icebreakerQuestions.length

  return icebreakerQuestions[questionIndex]
}

// Get icebreakers by category
export function getIcebreakersByCategory(category: IcebreakerQuestion["category"]): IcebreakerQuestion[] {
  return icebreakerQuestions.filter((q) => q.category === category)
}

// Random icebreaker selection
export function getRandomIcebreakers(count = 3): IcebreakerQuestion[] {
  const shuffled = [...icebreakerQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
