"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Award, Heart } from "lucide-react"
import StaffCard from "@/components/staff-card"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button-with-contrast"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-2">About Michigan Roleplay Community</h1>
          <p className="text-zinc-600 mb-8">Learn about our server's history, our team, and what makes us unique.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-zinc-600 mb-4">
              Michigan Roleplay Community was founded in 2021 by a group of passionate roleplayers who wanted to create
              an immersive FiveM experience set in the Great Lakes State. What started as a small server with just a few
              players has grown into one of the most respected roleplay communities.
            </p>
            <p className="text-zinc-600 mb-4">
              Our server features custom-built Michigan locations, including recreations of Detroit, Grand Rapids, and
              other iconic Michigan landmarks. We pride ourselves on our attention to detail and commitment to realistic
              roleplay.
            </p>
            <p className="text-zinc-600">
              Today, Michigan Roleplay Community hosts hundreds of active players and continues to grow and evolve with
              regular updates and events.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Michigan Roleplay Community"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-10 w-10 text-zinc-800 mb-2" />
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p className="text-zinc-600">Active Players</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Calendar className="h-10 w-10 text-zinc-800 mb-2" />
                  <h3 className="text-2xl font-bold">2+ Years</h3>
                  <p className="text-zinc-600">Server History</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Award className="h-10 w-10 text-zinc-800 mb-2" />
                  <h3 className="text-2xl font-bold">20+</h3>
                  <p className="text-zinc-600">Custom Jobs</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Heart className="h-10 w-10 text-zinc-800 mb-2" />
                  <h3 className="text-2xl font-bold">100%</h3>
                  <p className="text-zinc-600">Community Focused</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <h2 className="text-2xl font-bold mb-6">What Makes Us Unique</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={0.5}>
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Custom Michigan Map</h3>
              <p className="text-zinc-600">
                Our server features a meticulously crafted map with iconic Michigan locations, landmarks, and scenery.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Realistic Economy</h3>
              <p className="text-zinc-600">
                Experience a balanced and realistic economy with meaningful progression and opportunities.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.7}>
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Custom Scripts</h3>
              <p className="text-zinc-600">
                Enjoy unique gameplay features with our custom-developed scripts and systems.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.8}>
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Active Community</h3>
              <p className="text-zinc-600">
                Join a welcoming and active community with regular events, activities, and roleplay opportunities.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.9}>
          <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatedSection delay={1.0}>
            <StaffCard
              name="John Doe"
              role="Server Owner"
              image="/placeholder.svg?height=200&width=200"
              discord="JohnDoe#1234"
            />
          </AnimatedSection>
          <AnimatedSection delay={1.1}>
            <StaffCard
              name="Jane Smith"
              role="Lead Administrator"
              image="/placeholder.svg?height=200&width=200"
              discord="JaneSmith#5678"
            />
          </AnimatedSection>
          <AnimatedSection delay={1.2}>
            <StaffCard
              name="Mike Johnson"
              role="Head Developer"
              image="/placeholder.svg?height=200&width=200"
              discord="MikeJ#9012"
            />
          </AnimatedSection>
          <AnimatedSection delay={1.3}>
            <StaffCard
              name="Sarah Williams"
              role="Community Manager"
              image="/placeholder.svg?height=200&width=200"
              discord="SarahW#3456"
            />
          </AnimatedSection>
          <AnimatedSection delay={1.4}>
            <StaffCard
              name="David Brown"
              role="Lead Moderator"
              image="/placeholder.svg?height=200&width=200"
              discord="DavidB#7890"
            />
          </AnimatedSection>
          <AnimatedSection delay={1.5}>
            <StaffCard
              name="Emily Davis"
              role="Event Coordinator"
              image="/placeholder.svg?height=200&width=200"
              discord="EmilyD#1234"
            />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={1.6}>
          <div className="bg-zinc-100 p-6 rounded-lg border border-zinc-200">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-zinc-600 mb-4">
              We're always looking for dedicated individuals to join our staff team. If you're passionate about roleplay
              and want to help our community grow, consider applying for a staff position.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-white">
                Moderator
              </Badge>
              <Badge variant="outline" className="bg-white">
                Developer
              </Badge>
              <Badge variant="outline" className="bg-white">
                Event Coordinator
              </Badge>
              <Badge variant="outline" className="bg-white">
                Support Staff
              </Badge>
            </div>
            <p className="text-sm text-zinc-500 mb-4">
              Applications are reviewed on a regular basis. Join our Discord server to learn more about available
              positions and how to apply.
            </p>
            <Button>Apply Now</Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
