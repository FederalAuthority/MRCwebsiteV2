"use client"

import { Button } from "@/components/ui/button-with-contrast"
import { ChevronRight, Users, Shield, Map, Book, MessageSquare } from "lucide-react"
import ServerStats from "@/components/server-stats"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"
import TeamSection from "@/components/team-section"
import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white text-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Michigan Roleplay Community
            </motion.h1>
            <motion.p
              className="text-xl text-white text-center max-w-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience realistic roleplay in a meticulously crafted Michigan environment. Join our community today!
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-zinc-800 text-white hover:bg-zinc-900 hover:text-white">
                Join Our Server
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Server Stats */}
      <section className="bg-zinc-900 py-8">
        <AnimatedSection className="container mx-auto px-4">
          <ServerStats />
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About Our Community</h2>
              <p className="text-zinc-600">
                Michigan Roleplay Community is a premier FiveM server dedicated to providing an immersive and realistic
                roleplay experience set in the Great Lakes State. Our server features custom-built Michigan locations,
                unique jobs, and a dedicated community of roleplayers.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <FeatureCard
                icon={<Users className="h-10 w-10 text-zinc-800" />}
                title="Active Community"
                description="Join hundreds of active players in our growing community with regular events and activities."
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-zinc-800" />}
                title="Dedicated Staff"
                description="Our experienced staff team ensures a fair and enjoyable experience for all players."
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <FeatureCard
                icon={<Map className="h-10 w-10 text-zinc-800" />}
                title="Custom Map"
                description="Explore our meticulously crafted Michigan-inspired map with iconic locations and landmarks."
              />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <FeatureCard
                icon={<Book className="h-10 w-10 text-zinc-800" />}
                title="Unique Jobs"
                description="Choose from a variety of realistic jobs and career paths, each with unique gameplay mechanics."
              />
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10 text-zinc-800" />}
                title="Immersive RP"
                description="Experience deep character development and storytelling in our immersive roleplay environment."
              />
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-zinc-800" />}
                title="Custom Scripts"
                description="Enjoy our custom-developed scripts that enhance the roleplay experience."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <section className="py-16 bg-zinc-100">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">What Our Players Say</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <TestimonialCard
                quote="Michigan RP has the most immersive roleplay experience I've ever had. The community is welcoming and the staff are always helpful."
                author="MichiganGamer23"
                role="Community Member"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <TestimonialCard
                quote="I've been on many RP servers, but none compare to the level of detail and dedication found in Michigan Roleplay Community."
                author="RPEnthusiast"
                role="Police Officer"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <TestimonialCard
                quote="The custom map is incredible! It really feels like you're in Michigan with all the landmarks and attention to detail."
                author="GreatLakesRP"
                role="Business Owner"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Become part of Michigan's premier roleplay experience today. Connect with our community and start your
              roleplay journey!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white">
                Join Discord
              </Button>
              <Button size="lg" className="bg-white hover:bg-zinc-200">
                Server Rules
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white">
                Connect to Server
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
