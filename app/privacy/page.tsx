import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <h2>1. Information We Collect</h2>

          <h3>Personal Information You Provide</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> Email address, password, first name, last name
            </li>
            <li>
              <strong>Profile Information:</strong> Birth date, gender, location, bio, interests, lifestyle preferences
            </li>
            <li>
              <strong>Photos:</strong> Profile pictures and other images you upload
            </li>
            <li>
              <strong>Communications:</strong> Messages you send and receive through our platform
            </li>
            <li>
              <strong>Preferences:</strong> Your matching preferences and deal-breakers
            </li>
          </ul>

          <h3>Information We Collect Automatically</h3>
          <ul>
            <li>
              <strong>Usage Data:</strong> How you interact with our service, features used, time spent
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating system, browser type
            </li>
            <li>
              <strong>Location Data:</strong> General location for matching purposes (with your consent)
            </li>
            <li>
              <strong>Log Data:</strong> IP address, access times, pages viewed
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide and maintain our dating service</li>
            <li>Create and manage your account</li>
            <li>Show your profile to potential matches</li>
            <li>Facilitate connections and communications</li>
            <li>Improve our matching algorithm</li>
            <li>Send you important updates about our service</li>
            <li>Ensure safety and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>

          <h3>With Other Users</h3>
          <p>
            Your profile information (except email and full location) is visible to other users for matching purposes.
          </p>

          <h3>We Do NOT Sell Your Data</h3>
          <p>We never sell, rent, or trade your personal information to third parties for marketing purposes.</p>

          <h3>Limited Sharing</h3>
          <p>We may share information only in these specific circumstances:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Trusted partners who help us operate our service (hosting, analytics)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect safety
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of merger or acquisition (with notice to you)
            </li>
          </ul>

          <h2>4. Data Security</h2>
          <ul>
            <li>We use industry-standard encryption to protect your data</li>
            <li>Passwords are securely hashed and never stored in plain text</li>
            <li>Regular security audits and updates</li>
            <li>Limited access to personal data by our team</li>
          </ul>

          <h2>5. Your Rights and Choices</h2>

          <h3>Account Control</h3>
          <ul>
            <li>
              <strong>Access:</strong> View and download your personal data
            </li>
            <li>
              <strong>Update:</strong> Modify your profile and preferences anytime
            </li>
            <li>
              <strong>Delete:</strong> Permanently delete your account and data
            </li>
            <li>
              <strong>Restrict:</strong> Limit how we process your information
            </li>
          </ul>

          <h3>Communication Preferences</h3>
          <ul>
            <li>Opt out of promotional emails (account-related emails will continue)</li>
            <li>Control push notifications in your device settings</li>
          </ul>

          <h2>6. Data Retention</h2>
          <ul>
            <li>
              <strong>Active Accounts:</strong> We keep your data while your account is active
            </li>
            <li>
              <strong>Deleted Accounts:</strong> Most data is deleted within 30 days of account deletion
            </li>
            <li>
              <strong>Legal Requirements:</strong> Some data may be retained longer for legal compliance
            </li>
            <li>
              <strong>Safety:</strong> Information related to safety issues may be retained longer
            </li>
          </ul>

          <h2>7. International Users</h2>
          <p>
            If you're outside the United States, your information may be transferred to and processed in the US. We
            ensure appropriate safeguards are in place.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our service is only for users 18 and older. We do not knowingly collect information from anyone under 18.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this privacy policy. We'll notify you of significant changes via email or app notification.
          </p>

          <h2>10. Contact Us</h2>
          <p>Questions about this privacy policy? Contact us at:</p>
          <ul>
            <li>Email: privacy@nokiddingapp.com</li>
            <li>Address: [Your Business Address]</li>
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">For EU Users (GDPR)</h3>
            <p>Under GDPR, you have additional rights including:</p>
            <ul>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to lodge a complaint with supervisory authorities</li>
            </ul>
            <p>
              Our lawful basis for processing is typically your consent or legitimate interests in providing our
              service.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
