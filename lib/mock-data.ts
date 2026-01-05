// Mock user profiles
export const mockProfiles = [
  {
    id: "1",
    name: "Sarah",
    age: 32,
    location: "San Francisco, CA",
    bio: "Adventure seeker, coffee enthusiast, and proud cat mom. Living my best childfree life traveling the world.",
    interests: ["Travel", "Photography", "Hiking", "Wine Tasting"],
    images: ["/woman-mountain-hike.png"],
    occupation: "UX Designer",
    distance: "2 miles away",
    verified: true,
  },
  {
    id: "2",
    name: "Michael",
    age: 35,
    location: "San Francisco, CA",
    bio: "Tech entrepreneur who values freedom and spontaneity. Weekend warrior, foodie, and dog dad.",
    interests: ["Cooking", "Surfing", "Tech", "Live Music"],
    images: ["/man-surfing-beach.jpg"],
    occupation: "Software Engineer",
    distance: "5 miles away",
    verified: true,
  },
  {
    id: "3",
    name: "Jessica",
    age: 29,
    location: "San Francisco, CA",
    bio: "Artist and yoga instructor. Childfree by choice and loving the freedom to create and explore.",
    interests: ["Yoga", "Art", "Meditation", "Vegan Cooking"],
    images: ["/woman-yoga-studio.jpg"],
    occupation: "Yoga Instructor",
    distance: "3 miles away",
    verified: true,
  },
  {
    id: "4",
    name: "David",
    age: 38,
    location: "San Francisco, CA",
    bio: "Finance professional who loves the finer things in life. No kids, no drama, just good times.",
    interests: ["Golf", "Fine Dining", "Travel", "Reading"],
    images: ["/man-city-professional.jpg"],
    occupation: "Financial Analyst",
    distance: "7 miles away",
    verified: false,
  },
  {
    id: "5",
    name: "Emily",
    age: 31,
    location: "San Francisco, CA",
    bio: "Marketing director with a passion for life. Childfree and thriving!",
    interests: ["Running", "Concerts", "Brunch", "Books"],
    images: ["/woman-running-city.jpg"],
    occupation: "Marketing Director",
    distance: "4 miles away",
    verified: true,
  },
]

// Mock conversations
export const mockConversations = [
  {
    id: "1",
    userId: "1",
    name: "Sarah",
    lastMessage: "That sounds amazing! I'd love to check out that new restaurant.",
    timestamp: "2m ago",
    unread: true,
    avatar: "/woman-portrait.png",
  },
  {
    id: "2",
    userId: "2",
    name: "Michael",
    lastMessage: "Thanks for the coffee recommendation!",
    timestamp: "1h ago",
    unread: false,
    avatar: "/thoughtful-man-portrait.png",
  },
  {
    id: "3",
    userId: "3",
    name: "Jessica",
    lastMessage: "See you at the yoga class tomorrow?",
    timestamp: "3h ago",
    unread: true,
    avatar: "/diverse-woman-smiling.png",
  },
]

// Mock matches
export const mockMatches = [
  {
    id: "1",
    name: "Sarah",
    age: 32,
    avatar: "/woman-portrait.png",
    matchedAt: "2 hours ago",
  },
  {
    id: "2",
    name: "Michael",
    age: 35,
    avatar: "/thoughtful-man-portrait.png",
    matchedAt: "1 day ago",
  },
  {
    id: "3",
    name: "Jessica",
    age: 29,
    avatar: "/diverse-woman-smiling.png",
    matchedAt: "2 days ago",
  },
  {
    id: "4",
    name: "David",
    age: 38,
    avatar: "/man-city-professional.jpg",
    matchedAt: "3 days ago",
  },
]

// Mock icebreaker questions
export const mockIcebreakers = [
  "What's your favorite way to spend a free weekend?",
  "If you could travel anywhere tomorrow, where would you go?",
  "What's the best concert you've ever been to?",
  "Coffee or tea?",
  "What's your go-to comfort food?",
]

// Mock user stats
export const mockUserStats = {
  profileViews: 247,
  likes: 89,
  matches: 42,
  messagesReceived: 156,
}

// Mock detailed messages for conversations
export const mockMessages: Record<string, any[]> = {
  "1": [
    {
      id: "1",
      senderId: "1",
      text: "Hey! I noticed we both love hiking. Have you checked out Mount Tamalpais?",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      text: "Yes! I was there last weekend. The views are incredible!",
      timestamp: new Date(Date.now() - 3000000).toISOString(),
      isOwn: true,
    },
    {
      id: "3",
      senderId: "1",
      text: "That sounds amazing! I'd love to check out that new restaurant.",
      timestamp: new Date(Date.now() - 120000).toISOString(),
      isOwn: false,
    },
  ],
  "2": [
    {
      id: "1",
      senderId: "2",
      text: "Hey! Great profile. What kind of coffee do you like?",
      timestamp: new Date(Date.now() - 7200000).toISOString(),
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      text: "I'm a pour-over fan! There's this great place in the Mission District.",
      timestamp: new Date(Date.now() - 6800000).toISOString(),
      isOwn: true,
    },
    {
      id: "3",
      senderId: "2",
      text: "Thanks for the coffee recommendation!",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      isOwn: false,
    },
  ],
  "3": [
    {
      id: "1",
      senderId: "3",
      text: "Hi! I saw you're into yoga too. What style do you practice?",
      timestamp: new Date(Date.now() - 10800000).toISOString(),
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      text: "Mostly vinyasa and yin. How about you?",
      timestamp: new Date(Date.now() - 10000000).toISOString(),
      isOwn: true,
    },
    {
      id: "3",
      senderId: "3",
      text: "See you at the yoga class tomorrow?",
      timestamp: new Date(Date.now() - 10800000).toISOString(),
      isOwn: false,
    },
  ],
}
