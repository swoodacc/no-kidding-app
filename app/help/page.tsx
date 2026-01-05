import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Shield, Heart, Users } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="container max-w-4xl py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-xl text-muted-foreground">Find answers to common questions and get support</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardHeader className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Learn how to set up your profile and start matching</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
            <CardTitle>Matching & Dating</CardTitle>
            <CardDescription>Tips for successful matches and conversations</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
            <CardTitle>Safety & Privacy</CardTitle>
            <CardDescription>Stay safe while meeting new people online</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I create a compelling profile?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use recent, clear photos that show your face</li>
                  <li>Write an authentic bio that reflects your personality</li>
                  <li>Be honest about your childfree lifestyle and reasons</li>
                  <li>Include your interests and hobbies</li>
                  <li>Keep it positive and engaging</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How does the matching algorithm work?</AccordionTrigger>
              <AccordionContent>
                Our algorithm considers several factors:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Your age and location preferences</li>
                  <li>Shared interests and lifestyle choices</li>
                  <li>Compatibility based on your deal-breakers</li>
                  <li>Activity level on the platform</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What should I do if someone makes me uncomfortable?</AccordionTrigger>
              <AccordionContent>
                Your safety is our priority:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Block the user immediately</li>
                  <li>Report the behavior through our reporting system</li>
                  <li>Don't share personal information too quickly</li>
                  <li>Trust your instincts</li>
                  <li>Contact our support team if needed</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How do I delete my account?</AccordionTrigger>
              <AccordionContent>
                To delete your account:
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>Go to Settings → Account</li>
                  <li>Scroll to the bottom and click "Delete Account"</li>
                  <li>Confirm your decision</li>
                  <li>Your profile and data will be permanently removed within 30 days</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Why am I not getting matches?</AccordionTrigger>
              <AccordionContent>
                Try these tips to improve your matching:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Update your photos with recent, high-quality images</li>
                  <li>Expand your distance or age preferences</li>
                  <li>Be more active on the platform</li>
                  <li>Review and update your bio</li>
                  <li>Make sure your preferences aren't too restrictive</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Is No Kidding really for childfree people only?</AccordionTrigger>
              <AccordionContent>
                Yes! No Kidding is specifically designed for people who have chosen a childfree lifestyle. This includes
                people who:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Don't want children now or in the future</li>
                  <li>Have decided against having biological children</li>
                  <li>Are not interested in raising children</li>
                  <li>Want to connect with like-minded individuals</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            Still Need Help?
          </CardTitle>
          <CardDescription>Can't find what you're looking for? Get in touch with our support team.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Email Support</h3>
              <p className="text-sm text-muted-foreground">Get help via email within 24 hours</p>
            </div>
            <Button asChild>
              <a href="mailto:support@nokiddingapp.com">
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Safety Concerns</h3>
              <p className="text-sm text-muted-foreground">Report safety issues immediately</p>
            </div>
            <Button variant="destructive" asChild>
              <a href="mailto:safety@nokiddingapp.com">
                <Shield className="h-4 w-4 mr-2" />
                Report Issue
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
