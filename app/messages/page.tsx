"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Search } from "lucide-react"
import Link from "next/link"
import { mockConversations } from "@/lib/mock-data"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [messageText, setMessageText] = useState("")

  const mockMessages = [
    {
      id: "1",
      sender: selectedConversation.name,
      text: "Hey! I saw you're into hiking too. Have you done any trails recently?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: "2",
      sender: "You",
      text: "Yes! I just did Mount Tam last weekend. The views were incredible!",
      timestamp: "10:35 AM",
      isOwn: true,
    },
    {
      id: "3",
      sender: selectedConversation.name,
      text: selectedConversation.lastMessage,
      timestamp: "10:40 AM",
      isOwn: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      <div className="container py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <h1 className="text-2xl font-bold">{"No Kidding"}</h1>
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/discover">{"Discover"}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/matches">{"Matches"}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/profile">{"Profile"}</Link>
            </Button>
          </div>
        </div>

        {/* Messages Layout */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Conversations List */}
          <Card className="lg:col-span-1 h-[calc(100vh-200px)] overflow-hidden">
            <CardContent className="p-4">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-3">{"Messages"}</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search conversations..." className="pl-9" />
                </div>
              </div>

              <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-340px)]">
                {mockConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedConversation.id === conversation.id ? "bg-accent" : "hover:bg-accent/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={conversation.avatar || "/placeholder.svg?height=40&width=40"}
                        alt={conversation.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold truncate">{conversation.name}</h3>
                          {conversation.unread && (
                            <Badge
                              variant="destructive"
                              className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                            >
                              {"!"}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Message Thread */}
          <Card className="lg:col-span-2 h-[calc(100vh-200px)] overflow-hidden flex flex-col">
            {/* Thread Header */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-3">
                <img
                  src={selectedConversation.avatar || "/placeholder.svg?height=40&width=40"}
                  alt={selectedConversation.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{selectedConversation.name}</h3>
                  <p className="text-sm text-muted-foreground">{"Active now"}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {mockMessages.map((message) => (
                <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                      message.isOwn ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setMessageText("")
                    }
                  }}
                />
                <Button size="icon" onClick={() => setMessageText("")}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
