// This script sets up email alerts for your monitoring system
// Run this script once to configure your alert settings

import fs from "fs"
import path from "path"

// Default alert configuration
const defaultAlertConfig = {
  enabled: true,
  recipients: ["admin@nokiddingapp.com"],
  thresholds: {
    error_rate: {
      critical: 5, // 5 errors per minute
      warning: 2, // 2 errors per minute
    },
    response_time: {
      critical: 2000, // 2000ms
      warning: 1000, // 1000ms
    },
    database_latency: {
      critical: 1000, // 1000ms
      warning: 500, // 500ms
    },
    memory_usage: {
      critical: 90, // 90%
      warning: 80, // 80%
    },
  },
  cooldown: {
    critical: 15, // minutes between critical alerts
    warning: 60, // minutes between warning alerts
  },
  notification_channels: {
    email: true,
    slack: false,
    sms: false,
  },
  slack_webhook: "",
  sms_numbers: [],
}

// Function to set up alerts
async function setupAlerts() {
  try {
    console.log("Setting up monitoring alerts...")

    // Create config directory if it doesn't exist
    const configDir = path.join(process.cwd(), "config")
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true })
    }

    const configPath = path.join(configDir, "alerts.json")

    // Check if config already exists
    if (fs.existsSync(configPath)) {
      console.log("Alert configuration already exists.")
      const existingConfig = JSON.parse(fs.readFileSync(configPath, "utf8"))
      console.log("Current configuration:")
      console.log(JSON.stringify(existingConfig, null, 2))

      // Ask if user wants to update
      console.log("\nTo update this configuration, edit the file directly at:")
      console.log(configPath)
    } else {
      // Create new config file
      fs.writeFileSync(configPath, JSON.stringify(defaultAlertConfig, null, 2))
      console.log("Created default alert configuration at:")
      console.log(configPath)
      console.log("\nUpdate this file with your preferred alert settings.")
    }

    console.log("\nNext steps:")
    console.log("1. Update the recipients email list in the configuration")
    console.log("2. Set up an email service (like Resend or SendGrid)")
    console.log("3. Configure your Sentry DSN in your environment variables")
    console.log("   NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn")

    return true
  } catch (error) {
    console.error("Error setting up alerts:", error)
    return false
  }
}

// Run the setup
setupAlerts().then((success) => {
  if (success) {
    console.log("\nAlert setup completed successfully!")
  } else {
    console.error("\nAlert setup failed.")
  }
})
