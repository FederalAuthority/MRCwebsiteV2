"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button-with-contrast"
import { Github, Twitter, Linkedin } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  social: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

export default function TeamSection() {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Sample team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Nick",
      role: "Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Founder of Michigan Roleplay Community, he has a small brain",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      id: 2,
      name: "Maxx",
      role: "Co Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "N/A",
      social: {
        twitter: "https://twitter.com",
      },
    },
    {
      id: 3,
      name: "Stabz",
      role: "Assistant Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "The smart one, ig?",
      social: {
        github: "https://github.com",
      },
    },
    {
      id: 4,
      name: "N/A",
      role: "Community Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Organizes community events and manages our Discord server.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 5,
      name: "N/A",
      role: "Event Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Plans and executes exciting in-game events for our community.",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
  ]

  // Check if section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-zinc-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The dedicated individuals who make Michigan Roleplay Community possible. Our team works tirelessly to create
            the best roleplay experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-zinc-600 text-sm mb-2">{member.role}</p>
                  <p className="text-zinc-600 text-sm mb-3 line-clamp-2">{member.bio}</p>
                  <div className="flex gap-2">
                    {member.social.twitter && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      </Button>
                    )}
                    {member.social.github && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
