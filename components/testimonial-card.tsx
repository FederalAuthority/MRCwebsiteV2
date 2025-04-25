import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-zinc-300 mb-4" />
        <p className="text-zinc-600 mb-4">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-zinc-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
