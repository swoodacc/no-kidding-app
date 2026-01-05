import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, Phone, MapPin, Eye, MessageSquare } from "lucide-react"

export default function SafetyPage() {
  return (
    <div className="container max-w-4xl py-10">
      <div className="text-center mb-10">
        <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl font-bold mb-4">Your Safety Matters</h1>
        <p className="text-xl text-muted-foreground">Essential tips for safe online dating and meeting new people</p>
      </div>

      <Alert className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Emergency:</strong> If you're in immediate danger, contact local emergency services (911 in the US)
          immediately.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Online Safety
            </CardTitle>
            <CardDescription>Stay safe while chatting and getting to know someone</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Keep personal information private until you build trust</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Don't share your full name, address, or workplace initially</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Be cautious of people who ask for money or financial information</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Trust your instincts - if something feels off, it probably is</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Report and block users who make you uncomfortable</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Meeting in Person
            </CardTitle>
            <CardDescription>Essential guidelines for your first date</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Always meet in a public place with lots of people around</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Tell a friend or family member where you're going and when</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Arrange your own transportation to and from the date</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Keep your phone charged and easily accessible</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">Don't leave your drink unattended</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Eye className="h-5 w-5 mr-2" />
            Red Flags to Watch For
          </CardTitle>
          <CardDescription>Warning signs that someone might not be trustworthy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Communication Red Flags</h4>
              <ul className="space-y-2 text-sm">
                <li>• Refuses to video chat or talk on the phone</li>
                <li>• Asks for money, gifts, or financial information</li>
                <li>• Pressures you to move off the platform quickly</li>
                <li>• Uses overly romantic language very early</li>
                <li>• Stories don't add up or change over time</li>
                <li>• Becomes angry when you set boundaries</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Profile Red Flags</h4>
              <ul className="space-y-2 text-sm">
                <li>• Very few photos or photos that look professional</li>
                <li>• Vague or minimal profile information</li>
                <li>• Claims to be traveling or living abroad</li>
                <li>• Photos don't match their described age</li>
                <li>• Mentions being widowed with children (on a childfree app)</li>
                <li>• Profile seems too good to be true</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            Emergency Resources
          </CardTitle>
          <CardDescription>Important contacts and resources for your safety</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-red-600">Emergency Services</h4>
                <p className="text-sm text-muted-foreground">For immediate danger</p>
                <p className="font-mono text-lg">911 (US)</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">National Domestic Violence Hotline</h4>
                <p className="text-sm text-muted-foreground">24/7 confidential support</p>
                <p className="font-mono">1-800-799-7233</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Crisis Text Line</h4>
                <p className="text-sm text-muted-foreground">Text-based crisis support</p>
                <p className="font-mono">Text HOME to 741741</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">No Kidding Safety Team</h4>
                <p className="text-sm text-muted-foreground">Report safety concerns</p>
                <p className="font-mono">safety@nokiddingapp.com</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reporting and Blocking</CardTitle>
          <CardDescription>How to report concerning behavior and protect yourself</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">When to Report Someone</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Harassment, threats, or abusive language</li>
                <li>• Requests for money or financial information</li>
                <li>• Inappropriate or explicit content</li>
                <li>• Suspected fake profiles or catfishing</li>
                <li>• Any behavior that makes you feel unsafe</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <a href="mailto:safety@nokiddingapp.com">Report a Safety Concern</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/help">View Help Center</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
