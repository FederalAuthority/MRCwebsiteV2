"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button-with-contrast"

export default function RulesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-2">Server Rules</h1>
          <p className="text-zinc-600 mb-8">
            To ensure a positive experience for all players, please follow these rules when playing on Michigan Roleplay
            Community.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>General Rules</CardTitle>
              <CardDescription>These rules apply to all players at all times</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">1. Respect All Players</h3>
                <p className="text-sm text-zinc-600">
                  Treat all players with respect. Harassment, discrimination, or bullying of any kind will not be
                  tolerated.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">2. No Metagaming</h3>
                <p className="text-sm text-zinc-600">
                  Using information obtained outside of roleplay (Discord, streams, etc.) in-game is strictly
                  prohibited.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">3. No Powergaming</h3>
                <p className="text-sm text-zinc-600">
                  Forcing scenarios on other players or creating unrealistic situations is not allowed.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">4. Value Your Life</h3>
                <p className="text-sm text-zinc-600">
                  Act as you would in real life when faced with dangerous situations. Your character should fear death.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">5. No Breaking Character</h3>
                <p className="text-sm text-zinc-600">
                  Stay in character at all times. Use appropriate channels for OOC (Out of Character) communication.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Roleplay Guidelines</CardTitle>
              <CardDescription>Follow these guidelines for quality roleplay</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">1. New Life Rule</h3>
                <p className="text-sm text-zinc-600">
                  After your character dies, they forget all events leading up to their death.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">2. Realistic Roleplay</h3>
                <p className="text-sm text-zinc-600">
                  Keep your actions realistic. No superhuman abilities or unrealistic behaviors.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">3. No Random Death Match (RDM)</h3>
                <p className="text-sm text-zinc-600">Killing players without valid roleplay reason is prohibited.</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">4. No Vehicle Death Match (VDM)</h3>
                <p className="text-sm text-zinc-600">
                  Using vehicles as weapons without roleplay justification is not allowed.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">5. Proper Use of /me and /do</h3>
                <p className="text-sm text-zinc-600">
                  Use these commands appropriately to describe actions and ask questions about the environment.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Consequences</CardTitle>
              <CardDescription>Violation of these rules may result in the following</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">1. Warnings</h3>
                <p className="text-sm text-zinc-600">Minor infractions will result in a warning from staff.</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">2. Temporary Ban</h3>
                <p className="text-sm text-zinc-600">Repeated or serious violations may result in a temporary ban.</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">3. Permanent Ban</h3>
                <p className="text-sm text-zinc-600">
                  Severe or continued violations will result in a permanent ban from the server.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">4. Appeals</h3>
                <p className="text-sm text-zinc-600">Ban appeals can be submitted through our Discord server.</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex justify-center">
            <Button className="mr-4">I Understand</Button>
            <Button variant="outline">Join Discord</Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
