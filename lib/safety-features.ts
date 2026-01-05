export interface SafetyFeature {
  id: string
  name: string
  description: string
  enabled: boolean
  settings?: Record<string, any>
}

export interface DateSafetyPlan {
  id: string
  userId: string
  matchId: string
  dateTime: string
  location: string
  emergencyContacts: EmergencyContact[]
  checkInTimes: string[]
  safetyCode: string
  status: "planned" | "active" | "completed" | "emergency"
  createdAt: string
}

export interface EmergencyContact {
  id: string
  name: string
  phone: string
  relationship: string
  isPrimary: boolean
}

export interface SafetyReport {
  id: string
  reporterId: string
  reportedUserId: string
  type: "harassment" | "inappropriate_content" | "fake_profile" | "safety_concern" | "other"
  description: string
  evidence?: string[]
  status: "pending" | "investigating" | "resolved" | "dismissed"
  createdAt: string
}

// Default safety features
export const defaultSafetyFeatures: SafetyFeature[] = [
  {
    id: "location_sharing",
    name: "Live Location Sharing",
    description: "Share your live location with emergency contacts during dates",
    enabled: false,
    settings: {
      duration: 4, // hours
      autoStop: true,
    },
  },
  {
    id: "check_in_reminders",
    name: "Check-in Reminders",
    description: "Get reminders to check in during dates",
    enabled: true,
    settings: {
      intervals: [60, 120, 180], // minutes
      emergencyTimeout: 240, // minutes before emergency alert
    },
  },
  {
    id: "emergency_contacts",
    name: "Emergency Contacts",
    description: "Set up emergency contacts who can be notified if needed",
    enabled: true,
    settings: {
      maxContacts: 3,
      autoNotify: false,
    },
  },
  {
    id: "safe_word",
    name: "Safe Word System",
    description: "Use a safe word to quickly alert emergency contacts",
    enabled: false,
    settings: {
      safeWord: "",
      triggerActions: ["notify_contacts", "call_emergency"],
    },
  },
  {
    id: "photo_verification",
    name: "Photo Verification",
    description: "Verify your photos to build trust with matches",
    enabled: true,
    settings: {
      required: false,
      autoVerify: false,
    },
  },
  {
    id: "background_check",
    name: "Background Check Integration",
    description: "Optional background checks for enhanced safety",
    enabled: false,
    settings: {
      provider: "checkr",
      shareResults: false,
    },
  },
]

// Generate a unique safety code for dates
export function generateSafetyCode(): string {
  const words = ["apple", "beach", "cloud", "dance", "eagle", "flame", "grape", "house"]
  const numbers = Math.floor(Math.random() * 100)
    .toString()
    .padStart(2, "0")
  const word = words[Math.floor(Math.random() * words.length)]
  return `${word}${numbers}`
}

// Create a safety plan for a date
export function createDateSafetyPlan(
  userId: string,
  matchId: string,
  dateTime: string,
  location: string,
  emergencyContacts: EmergencyContact[],
): DateSafetyPlan {
  const checkInTimes = []
  const dateStart = new Date(dateTime)

  // Create check-in times every hour for 4 hours
  for (let i = 1; i <= 4; i++) {
    const checkInTime = new Date(dateStart.getTime() + i * 60 * 60 * 1000)
    checkInTimes.push(checkInTime.toISOString())
  }

  return {
    id: `safety_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    matchId,
    dateTime,
    location,
    emergencyContacts,
    checkInTimes,
    safetyCode: generateSafetyCode(),
    status: "planned",
    createdAt: new Date().toISOString(),
  }
}

// Safety tips for different scenarios
export const safetyTips = {
  firstDate: [
    "Meet in a public place with lots of people around",
    "Tell a friend or family member where you're going and when",
    "Arrange your own transportation to and from the date",
    "Keep your phone charged and easily accessible",
    "Trust your instincts - if something feels off, leave",
    "Don't leave your drink unattended",
    "Stay sober enough to make good decisions",
    "Have an exit strategy planned",
  ],
  onlineChat: [
    "Don't share personal information too quickly",
    "Be cautious of people who ask for money",
    "Watch for inconsistencies in their stories",
    "Don't send intimate photos",
    "Report suspicious or inappropriate behavior",
    "Take your time getting to know someone",
    "Video chat before meeting in person",
    "Trust your gut feelings",
  ],
  videoCall: [
    "Choose a neutral background",
    "Ensure good lighting so you can see each other clearly",
    "Have the call in a private space",
    "Be aware of what's visible in your background",
    "End the call if you feel uncomfortable",
    "Don't share screen or personal information",
    "Keep the conversation appropriate",
    "Report any inappropriate behavior",
  ],
  meetingUp: [
    "Choose a busy, public location",
    "Meet during daylight hours if possible",
    "Bring a friend or meet in a group setting",
    "Have your own transportation",
    "Set a time limit for the first meeting",
    "Stay in public areas",
    "Don't go to their home or invite them to yours",
    "Let someone know your plans",
  ],
}

// Analyze message content for potential safety concerns
export function analyzeSafetyRisk(message: string): {
  riskLevel: "low" | "medium" | "high"
  concerns: string[]
  suggestions: string[]
} {
  const concerns: string[] = []
  const suggestions: string[] = []
  let riskLevel: "low" | "medium" | "high" = "low"

  // Check for financial requests
  if (/money|cash|loan|financial|emergency|help.*pay|send.*\$/.test(message.toLowerCase())) {
    concerns.push("Financial request detected")
    suggestions.push("Never send money to someone you haven't met in person")
    riskLevel = "high"
  }

  // Check for immediate meeting requests
  if (/meet.*tonight|come over|my place|your place|right now/.test(message.toLowerCase())) {
    concerns.push("Immediate meeting request")
    suggestions.push("Take time to get to know someone before meeting")
    riskLevel = "medium"
  }

  // Check for personal information requests
  if (/address|home|work|phone.*number|social.*security|bank/.test(message.toLowerCase())) {
    concerns.push("Personal information request")
    suggestions.push("Keep personal information private until you build trust")
    riskLevel = "medium"
  }

  // Check for inappropriate content
  if (/explicit|sexual|nude|naked/.test(message.toLowerCase())) {
    concerns.push("Inappropriate content")
    suggestions.push("Report inappropriate messages")
    riskLevel = "high"
  }

  // Check for pressure tactics
  if (/you should|you need to|you have to|don't tell/.test(message.toLowerCase())) {
    concerns.push("Potential pressure tactics")
    suggestions.push("Be wary of anyone who pressures you")
    riskLevel = "medium"
  }

  return { riskLevel, concerns, suggestions }
}

// Emergency response actions
export async function triggerEmergencyResponse(
  safetyPlan: DateSafetyPlan,
  triggerType: "safe_word" | "missed_checkin" | "manual",
): Promise<boolean> {
  try {
    // Notify emergency contacts
    for (const contact of safetyPlan.emergencyContacts) {
      await sendEmergencyNotification(contact, safetyPlan, triggerType)
    }

    // Update safety plan status
    safetyPlan.status = "emergency"

    // Log the emergency trigger
    console.log(`Emergency triggered for safety plan ${safetyPlan.id}`, {
      triggerType,
      userId: safetyPlan.userId,
      location: safetyPlan.location,
      timestamp: new Date().toISOString(),
    })

    return true
  } catch (error) {
    console.error("Failed to trigger emergency response:", error)
    return false
  }
}

// Send emergency notification
async function sendEmergencyNotification(
  contact: EmergencyContact,
  safetyPlan: DateSafetyPlan,
  triggerType: string,
): Promise<void> {
  const message = `EMERGENCY ALERT: Your emergency contact may need help. Last known location: ${safetyPlan.location}. Safety code: ${safetyPlan.safetyCode}. Please check on them immediately.`

  // In a real implementation, you would integrate with SMS/email services
  console.log(`Emergency notification sent to ${contact.name} (${contact.phone}):`, message)

  // You could integrate with services like Twilio for SMS
  // await sendSMS(contact.phone, message)

  // Or send email notifications
  // await sendEmail(contact.email, 'Emergency Alert', message)
}
