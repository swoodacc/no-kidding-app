"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Phone, MapPin, AlertTriangle, CheckCircle, Plus, Trash2, Eye, MessageSquare } from "lucide-react"
import { safetyTips, type EmergencyContact, type DateSafetyPlan, type SafetyFeature } from "@/lib/safety-features"

interface SafetyDashboardProps {
  emergencyContacts: EmergencyContact[]
  safetyFeatures: SafetyFeature[]
  activeSafetyPlans: DateSafetyPlan[]
  onUpdateContacts: (contacts: EmergencyContact[]) => void
  onUpdateFeatures: (features: SafetyFeature[]) => void
  onCreateSafetyPlan: (plan: Omit<DateSafetyPlan, "id" | "createdAt">) => void
}

export function SafetyDashboard({
  emergencyContacts,
  safetyFeatures,
  activeSafetyPlans,
  onUpdateContacts,
  onUpdateFeatures,
  onCreateSafetyPlan,
}: SafetyDashboardProps) {
  const [newContact, setNewContact] = useState<Partial<EmergencyContact>>({
    name: "",
    phone: "",
    relationship: "",
    isPrimary: false,
  })
  const [showAddContact, setShowAddContact] = useState(false)

  const handleAddContact = () => {
    if (newContact.name && newContact.phone && newContact.relationship) {
      const contact: EmergencyContact = {
        id: `contact_${Date.now()}`,
        name: newContact.name,
        phone: newContact.phone,
        relationship: newContact.relationship,
        isPrimary: emergencyContacts.length === 0, // First contact is primary
      }

      onUpdateContacts([...emergencyContacts, contact])
      setNewContact({ name: "", phone: "", relationship: "", isPrimary: false })
      setShowAddContact(false)
    }
  }

  const handleRemoveContact = (contactId: string) => {
    onUpdateContacts(emergencyContacts.filter((c) => c.id !== contactId))
  }

  const handleToggleFeature = (featureId: string, enabled: boolean) => {
    const updatedFeatures = safetyFeatures.map((feature) =>
      feature.id === featureId ? { ...feature, enabled } : feature,
    )
    onUpdateFeatures(updatedFeatures)
  }

  const getStatusColor = (status: DateSafetyPlan["status"]) => {
    switch (status) {
      case "planned":
        return "bg-blue-100 text-blue-800"
      case "active":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      case "emergency":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Safety Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Shield className="h-5 w-5 mr-2 text-green-500" />
              Safety Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {Math.round((safetyFeatures.filter((f) => f.enabled).length / safetyFeatures.length) * 100)}%
            </div>
            <p className="text-sm text-muted-foreground">
              {safetyFeatures.filter((f) => f.enabled).length} of {safetyFeatures.length} features enabled
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Phone className="h-5 w-5 mr-2 text-blue-500" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{emergencyContacts.length}</div>
            <p className="text-sm text-muted-foreground">Contacts ready to help</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <MapPin className="h-5 w-5 mr-2 text-purple-500" />
              Active Plans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeSafetyPlans.filter((p) => p.status === "active").length}</div>
            <p className="text-sm text-muted-foreground">Safety plans in progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Safety Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Safety Center
          </CardTitle>
          <CardDescription>Manage your safety settings and emergency contacts</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="contacts">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="contacts">Emergency Contacts</TabsTrigger>
              <TabsTrigger value="features">Safety Features</TabsTrigger>
              <TabsTrigger value="plans">Safety Plans</TabsTrigger>
              <TabsTrigger value="tips">Safety Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="contacts" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Your Emergency Contacts</h3>
                <Button onClick={() => setShowAddContact(true)} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Contact
                </Button>
              </div>

              {emergencyContacts.length === 0 ? (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    You haven't added any emergency contacts yet. Add at least one contact who can be notified in case
                    of emergency.
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="space-y-3">
                  {emergencyContacts.map((contact) => (
                    <Card key={contact.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium flex items-center">
                              {contact.name}
                              {contact.isPrimary && (
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  Primary
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {contact.phone} • {contact.relationship}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => handleRemoveContact(contact.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {showAddContact && (
                <Card className="p-4 border-dashed">
                  <div className="space-y-4">
                    <h4 className="font-medium">Add Emergency Contact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-name">Name</Label>
                        <Input
                          id="contact-name"
                          value={newContact.name || ""}
                          onChange={(e) => setNewContact((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="Contact name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-phone">Phone Number</Label>
                        <Input
                          id="contact-phone"
                          value={newContact.phone || ""}
                          onChange={(e) => setNewContact((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="contact-relationship">Relationship</Label>
                      <Input
                        id="contact-relationship"
                        value={newContact.relationship || ""}
                        onChange={(e) => setNewContact((prev) => ({ ...prev, relationship: e.target.value }))}
                        placeholder="e.g., Friend, Family, Partner"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setShowAddContact(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddContact}>Add Contact</Button>
                    </div>
                  </div>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <h3 className="text-lg font-medium">Safety Features</h3>
              <div className="space-y-4">
                {safetyFeatures.map((feature) => (
                  <Card key={feature.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{feature.name}</h4>
                          {feature.enabled && <CheckCircle className="h-4 w-4 text-green-500" />}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                      </div>
                      <Switch
                        checked={feature.enabled}
                        onCheckedChange={(enabled) => handleToggleFeature(feature.id, enabled)}
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="plans" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Safety Plans</h3>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Plan
                </Button>
              </div>

              {activeSafetyPlans.length === 0 ? (
                <Alert>
                  <MapPin className="h-4 w-4" />
                  <AlertDescription>
                    No active safety plans. Create a safety plan before your next date for added security.
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="space-y-3">
                  {activeSafetyPlans.map((plan) => (
                    <Card key={plan.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{plan.location}</div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(plan.dateTime).toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(plan.status)}>{plan.status}</Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="tips" className="space-y-4">
              <h3 className="text-lg font-medium">Safety Tips</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">First Date Safety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {safetyTips.firstDate.slice(0, 4).map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Online Chat Safety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {safetyTips.onlineChat.slice(0, 4).map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <MessageSquare className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Video Call Safety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {safetyTips.videoCall.slice(0, 4).map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <Eye className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Meeting Up Safety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {safetyTips.meetingUp.slice(0, 4).map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <MapPin className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Remember:</strong> Trust your instincts. If something doesn't feel right, it's okay to leave
                  or end the conversation. Your safety is the top priority.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
