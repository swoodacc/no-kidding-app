import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-4xl py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms of Service</CardTitle>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By creating an account or using No Kidding ("the Service"), you agree to these Terms of Service ("Terms").
            If you don't agree, please don't use our service.
          </p>

          <h2>2. Eligibility</h2>
          <ul>
            <li>You must be at least 18 years old</li>
            <li>You must be legally able to enter into contracts</li>
            <li>You must not be prohibited from using our service under applicable laws</li>
            <li>You can only have one account</li>
          </ul>

          <h2>3. Account Responsibilities</h2>

          <h3>Your Account</h3>
          <ul>
            <li>Provide accurate, current information</li>
            <li>Keep your login credentials secure</li>
            <li>Notify us immediately of unauthorized access</li>
            <li>You're responsible for all activity on your account</li>
          </ul>

          <h3>Profile Content</h3>
          <ul>
            <li>Use only your own photos</li>
            <li>Provide truthful information about yourself</li>
            <li>Don't impersonate others</li>
            <li>Keep content appropriate and legal</li>
          </ul>

          <h2>4. Prohibited Conduct</h2>
          <p>You agree NOT to:</p>
          <ul>
            <li>
              <strong>Harassment:</strong> Harass, abuse, or harm other users
            </li>
            <li>
              <strong>Spam:</strong> Send unsolicited promotional content
            </li>
            <li>
              <strong>Fraud:</strong> Misrepresent yourself or engage in fraudulent activity
            </li>
            <li>
              <strong>Illegal Content:</strong> Share illegal, harmful, or inappropriate content
            </li>
            <li>
              <strong>Minors:</strong> Contact or attempt to contact anyone under 18
            </li>
            <li>
              <strong>Commercial Use:</strong> Use the service for commercial purposes without permission
            </li>
            <li>
              <strong>System Abuse:</strong> Attempt to hack, disrupt, or reverse engineer our service
            </li>
            <li>
              <strong>Data Mining:</strong> Scrape or collect user data
            </li>
          </ul>

          <h2>5. Content and Intellectual Property</h2>

          <h3>Your Content</h3>
          <ul>
            <li>You retain ownership of content you post</li>
            <li>You grant us license to use your content to provide our service</li>
            <li>You're responsible for ensuring you have rights to content you post</li>
          </ul>

          <h3>Our Content</h3>
          <ul>
            <li>We own our platform, features, and technology</li>
            <li>You may not copy, modify, or distribute our content</li>
            <li>Our trademarks and logos are protected</li>
          </ul>

          <h2>6. Privacy and Data</h2>
          <p>
            Your privacy is important to us. Please review our{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            to understand how we collect, use, and protect your information.
          </p>

          <h2>7. Safety and Reporting</h2>

          <h3>Your Safety</h3>
          <ul>
            <li>Always meet in public places for first dates</li>
            <li>Tell someone about your plans</li>
            <li>Trust your instincts</li>
            <li>Report suspicious behavior immediately</li>
          </ul>

          <h3>Reporting</h3>
          <p>Report violations of these terms or safety concerns to: safety@nokiddingapp.com</p>

          <h2>8. Subscription and Payments</h2>
          <ul>
            <li>Some features may require payment</li>
            <li>Subscriptions auto-renew unless cancelled</li>
            <li>Refunds are handled according to our refund policy</li>
            <li>Price changes will be communicated in advance</li>
          </ul>

          <h2>9. Termination</h2>

          <h3>By You</h3>
          <p>You can delete your account anytime through your settings.</p>

          <h3>By Us</h3>
          <p>We may suspend or terminate accounts that violate these terms, with or without notice.</p>

          <h2>10. Disclaimers</h2>
          <ul>
            <li>
              <strong>No Guarantees:</strong> We don't guarantee you'll find matches or relationships
            </li>
            <li>
              <strong>User Responsibility:</strong> We're not responsible for user behavior or content
            </li>
            <li>
              <strong>Service Availability:</strong> Service may be interrupted for maintenance or technical issues
            </li>
            <li>
              <strong>Third-Party Links:</strong> We're not responsible for external websites or services
            </li>
          </ul>

          <h2>11. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, No Kidding is not liable for:</p>
          <ul>
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of profits, data, or business opportunities</li>
            <li>Actions or conduct of other users</li>
            <li>Any damages exceeding the amount you paid us in the last 12 months</li>
          </ul>

          <h2>12. Indemnification</h2>
          <p>
            You agree to defend and hold us harmless from claims arising from your use of the service or violation of
            these terms.
          </p>

          <h2>13. Dispute Resolution</h2>
          <ul>
            <li>
              <strong>Governing Law:</strong> These terms are governed by [Your State/Country] law
            </li>
            <li>
              <strong>Arbitration:</strong> Disputes will be resolved through binding arbitration
            </li>
            <li>
              <strong>Class Action Waiver:</strong> You waive the right to participate in class actions
            </li>
          </ul>

          <h2>14. Changes to Terms</h2>
          <p>
            We may update these terms. Significant changes will be communicated via email or app notification. Continued
            use constitutes acceptance.
          </p>

          <h2>15. Contact Information</h2>
          <p>Questions about these terms? Contact us at:</p>
          <ul>
            <li>Email: legal@nokiddingapp.com</li>
            <li>Address: [Your Business Address]</li>
          </ul>

          <div className="mt-8 p-4 bg-amber-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Important Safety Reminder</h3>
            <p>
              Online dating involves meeting strangers. Always prioritize your safety, meet in public places, and trust
              your instincts. Report any concerning behavior immediately.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
