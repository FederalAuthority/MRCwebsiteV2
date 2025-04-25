"use client"

import { Button } from "@/components/ui/button-with-contrast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Users, MessageSquare, Headphones } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function JoinPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-2">Join Our Server</h1>
          <p className="text-zinc-600 mb-8">
            Follow these steps to join Michigan Roleplay Community and start your roleplay journey.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Tabs defaultValue="new" className="mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="new">New Players</TabsTrigger>
              <TabsTrigger value="existing">Existing Players</TabsTrigger>
            </TabsList>
            <TabsContent value="new">
              <Card>
                <CardHeader>
                  <CardTitle>New to FiveM Roleplay?</CardTitle>
                  <CardDescription>Follow these steps to get started with Michigan Roleplay Community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-100 p-3 rounded-full">
                      <Download className="h-6 w-6 text-zinc-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">1. Install FiveM</h3>
                      <p className="text-zinc-600 mb-2">
                        Download and install FiveM from the official website. You'll need a legal copy of GTA V to play.
                      </p>
                      <Button variant="outline" size="sm">
                        Download FiveM
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-zinc-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">2. Join Our Discord</h3>
                      <p className="text-zinc-600 mb-2">
                        Join our Discord server to connect with the community and stay updated on server news.
                      </p>
                      <Button variant="outline" size="sm">
                        Join Discord
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-100 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-zinc-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">3. Create Your Character</h3>
                      <p className="text-zinc-600 mb-2">
                        Fill out our character application form in Discord. Our staff will review your application.
                      </p>
                      <Button variant="outline" size="sm">
                        Character Application
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-100 p-3 rounded-full">
                      <Headphones className="h-6 w-6 text-zinc-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">4. Connect to the Server</h3>
                      <p className="text-zinc-600 mb-2">
                        Once your application is approved, connect to our server through FiveM using the server IP.
                      </p>
                      <Button className="bg-zinc-800 text-white hover:bg-zinc-900 hover:text-white" size="sm">
                        Connect to Server
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="existing">
              <Card>
                <CardHeader>
                  <CardTitle>Returning to Michigan RP?</CardTitle>
                  <CardDescription>Welcome back! Here's how to reconnect with our community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-zinc-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">1. Rejoin Our Discord</h3>
                      <p className="text-zinc-600 mb-2">
                        Make sure you're still in our Discord server to stay updated on the latest changes.
                      </p>
                      <Button variant="outline" size="sm">
                        Join Discord
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-100 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-zinc-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">2. Check for Updates</h3>
                      <p className="text-zinc-600 mb-2">
                        Review our announcements channel for any important updates or changes to the server.
                      </p>
                      <Button variant="outline" size="sm">
                        Server Updates
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-100 p-3 rounded-full">
                      <Headphones className="h-6 w-6 text-zinc-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">3. Connect to the Server</h3>
                      <p className="text-zinc-600 mb-2">
                        Connect to our server through FiveM using the server IP or by finding us in your favorites.
                      </p>
                      <Button className="bg-zinc-800 text-white hover:bg-zinc-900 hover:text-white" size="sm">
                        Connect to Server
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-zinc-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Server Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Server IP</h3>
                <p className="text-zinc-600">connect play.michiganrp.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Discord</h3>
                <p className="text-zinc-600">discord.gg/michiganrp</p>
              </div>
              <div>
                <h3 className="font-semibold">TeamSpeak</h3>
                <p className="text-zinc-600">ts.michiganrp.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Server Capacity</h3>
                <p className="text-zinc-600">128 Players</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
