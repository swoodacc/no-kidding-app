export interface PersonalityQuestion {
  id: string
  category:
    | "openness"
    | "conscientiousness"
    | "extraversion"
    | "agreeableness"
    | "neuroticism"
    | "love_language"
    | "communication"
  question: string
  options: {
    text: string
    score: number
  }[]
}

export const personalityQuestions: PersonalityQuestion[] = [
  // Big Five - Openness
  {
    id: "o1",
    category: "openness",
    question: "I enjoy trying new and unusual experiences",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
  {
    id: "o2",
    category: "openness",
    question: "I have a vivid imagination",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
  {
    id: "o3",
    category: "openness",
    question: "I prefer routine over variety",
    options: [
      { text: "Strongly Disagree", score: 5 },
      { text: "Disagree", score: 4 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 2 },
      { text: "Strongly Agree", score: 1 },
    ],
  },

  // Big Five - Conscientiousness
  {
    id: "c1",
    category: "conscientiousness",
    question: "I am always prepared and organized",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
  {
    id: "c2",
    category: "conscientiousness",
    question: "I often procrastinate on important tasks",
    options: [
      { text: "Strongly Disagree", score: 5 },
      { text: "Disagree", score: 4 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 2 },
      { text: "Strongly Agree", score: 1 },
    ],
  },
  {
    id: "c3",
    category: "conscientiousness",
    question: "I pay attention to details",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },

  // Big Five - Extraversion
  {
    id: "e1",
    category: "extraversion",
    question: "I feel energized when I'm around other people",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
  {
    id: "e2",
    category: "extraversion",
    question: "I prefer quiet, intimate gatherings over large parties",
    options: [
      { text: "Strongly Disagree", score: 5 },
      { text: "Disagree", score: 4 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 2 },
      { text: "Strongly Agree", score: 1 },
    ],
  },
  {
    id: "e3",
    category: "extraversion",
    question: "I often take charge in group situations",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },

  // Big Five - Agreeableness
  {
    id: "a1",
    category: "agreeableness",
    question: "I try to be cooperative and avoid conflict",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
  {
    id: "a2",
    category: "agreeableness",
    question: "I tend to trust people until they give me a reason not to",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
  {
    id: "a3",
    category: "agreeableness",
    question: "I often put others' needs before my own",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },

  // Big Five - Neuroticism
  {
    id: "n1",
    category: "neuroticism",
    question: "I often feel anxious or worried",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
  {
    id: "n2",
    category: "neuroticism",
    question: "I handle stress well and stay calm under pressure",
    options: [
      { text: "Strongly Disagree", score: 5 },
      { text: "Disagree", score: 4 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 2 },
      { text: "Strongly Agree", score: 1 },
    ],
  },
  {
    id: "n3",
    category: "neuroticism",
    question: "My mood changes frequently throughout the day",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },

  // Love Languages
  {
    id: "ll1",
    category: "love_language",
    question: "I feel most loved when my partner gives me their undivided attention",
    options: [
      { text: "Not important", score: 1 },
      { text: "Somewhat important", score: 2 },
      { text: "Important", score: 3 },
      { text: "Very important", score: 4 },
      { text: "Extremely important", score: 5 },
    ],
  },
  {
    id: "ll2",
    category: "love_language",
    question: "Physical touch and affection are essential in a relationship",
    options: [
      { text: "Not important", score: 1 },
      { text: "Somewhat important", score: 2 },
      { text: "Important", score: 3 },
      { text: "Very important", score: 4 },
      { text: "Extremely important", score: 5 },
    ],
  },
  {
    id: "ll3",
    category: "love_language",
    question: "I appreciate when my partner helps me with tasks or responsibilities",
    options: [
      { text: "Not important", score: 1 },
      { text: "Somewhat important", score: 2 },
      { text: "Important", score: 3 },
      { text: "Very important", score: 4 },
      { text: "Extremely important", score: 5 },
    ],
  },
  {
    id: "ll4",
    category: "love_language",
    question: "Thoughtful gifts make me feel special and appreciated",
    options: [
      { text: "Not important", score: 1 },
      { text: "Somewhat important", score: 2 },
      { text: "Important", score: 3 },
      { text: "Very important", score: 4 },
      { text: "Extremely important", score: 5 },
    ],
  },
  {
    id: "ll5",
    category: "love_language",
    question: "Words of affirmation and compliments mean a lot to me",
    options: [
      { text: "Not important", score: 1 },
      { text: "Somewhat important", score: 2 },
      { text: "Important", score: 3 },
      { text: "Very important", score: 4 },
      { text: "Extremely important", score: 5 },
    ],
  },

  // Communication Style
  {
    id: "cs1",
    category: "communication",
    question: "I prefer direct, straightforward communication",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
  {
    id: "cs2",
    category: "communication",
    question: "I need time to process my thoughts before discussing important topics",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
  {
    id: "cs3",
    category: "communication",
    question: "I prefer to resolve conflicts immediately rather than letting them simmer",
    options: [
      { text: "Strongly Disagree", score: 1 },
      { text: "Disagree", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Agree", score: 4 },
      { text: "Strongly Agree", score: 5 },
    ],
  },
]

export interface PersonalityResults {
  bigFive: {
    openness: number
    conscientiousness: number
    extraversion: number
    agreeableness: number
    neuroticism: number
  }
  loveLanguage: {
    qualityTime: number
    physicalTouch: number
    actsOfService: number
    receivingGifts: number
    wordsOfAffirmation: number
    primary: string
  }
  communicationStyle: {
    directness: number
    processingTime: number
    conflictResolution: number
    style: string
  }
}

export function calculatePersonalityResults(answers: Record<string, number>): PersonalityResults {
  // Calculate Big Five scores
  const bigFive = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
  }

  // Count questions per category for averaging
  const categoryCount = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
  }

  personalityQuestions.forEach((question) => {
    const answer = answers[question.id]
    if (
      answer &&
      ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"].includes(question.category)
    ) {
      bigFive[question.category as keyof typeof bigFive] += answer
      categoryCount[question.category as keyof typeof categoryCount]++
    }
  })

  // Average the scores
  Object.keys(bigFive).forEach((key) => {
    const k = key as keyof typeof bigFive
    if (categoryCount[k] > 0) {
      bigFive[k] = Math.round((bigFive[k] / categoryCount[k]) * 20) // Convert to 0-100 scale
    }
  })

  // Calculate Love Language scores
  const loveLanguageScores = {
    qualityTime: answers["ll1"] || 0,
    physicalTouch: answers["ll2"] || 0,
    actsOfService: answers["ll3"] || 0,
    receivingGifts: answers["ll4"] || 0,
    wordsOfAffirmation: answers["ll5"] || 0,
  }

  const primaryLoveLanguage = Object.entries(loveLanguageScores).reduce((a, b) =>
    loveLanguageScores[a[0] as keyof typeof loveLanguageScores] >
    loveLanguageScores[b[0] as keyof typeof loveLanguageScores]
      ? a
      : b,
  )[0]

  // Calculate Communication Style
  const communicationScores = {
    directness: answers["cs1"] || 0,
    processingTime: answers["cs2"] || 0,
    conflictResolution: answers["cs3"] || 0,
  }

  let communicationStyle = "Balanced"
  if (communicationScores.directness >= 4 && communicationScores.conflictResolution >= 4) {
    communicationStyle = "Direct & Immediate"
  } else if (communicationScores.processingTime >= 4 && communicationScores.directness <= 2) {
    communicationStyle = "Thoughtful & Reflective"
  } else if (communicationScores.directness >= 4) {
    communicationStyle = "Direct & Clear"
  } else if (communicationScores.processingTime >= 4) {
    communicationStyle = "Contemplative"
  }

  return {
    bigFive,
    loveLanguage: {
      ...loveLanguageScores,
      primary: primaryLoveLanguage
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim(),
    },
    communicationStyle: {
      ...communicationScores,
      style: communicationStyle,
    },
  }
}

export function getPersonalityCompatibility(results1: PersonalityResults, results2: PersonalityResults): number {
  // Calculate Big Five compatibility (opposites can attract, but some alignment is good)
  const bigFiveCompatibility =
    // Openness - similar levels work well
    ((100 - Math.abs(results1.bigFive.openness - results2.bigFive.openness)) * 0.2 +
      // Conscientiousness - similar levels important
      (100 - Math.abs(results1.bigFive.conscientiousness - results2.bigFive.conscientiousness)) * 0.25 +
      // Extraversion - some difference can be complementary
      Math.max(60, 100 - Math.abs(results1.bigFive.extraversion - results2.bigFive.extraversion) * 0.5) * 0.15 +
      // Agreeableness - similar levels important
      (100 - Math.abs(results1.bigFive.agreeableness - results2.bigFive.agreeableness)) * 0.25 +
      // Neuroticism - lower combined levels better
      Math.max(0, 100 - (results1.bigFive.neuroticism + results2.bigFive.neuroticism) / 2) * 0.15) /
    100

  // Love language compatibility
  const loveLanguageCompatibility = results1.loveLanguage.primary === results2.loveLanguage.primary ? 1 : 0.7

  // Communication style compatibility
  const communicationCompatibility = results1.communicationStyle.style === results2.communicationStyle.style ? 1 : 0.8

  // Weighted overall compatibility
  return Math.round(
    (bigFiveCompatibility * 0.6 + loveLanguageCompatibility * 0.25 + communicationCompatibility * 0.15) * 100,
  )
}
