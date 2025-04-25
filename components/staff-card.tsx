import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface StaffCardProps {
  name: string
  role: string
  image: string
  discord: string
}

export default function StaffCard({ name, role, image, discord }: StaffCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-zinc-600 mb-2">{role}</p>
          <p className="text-sm text-zinc-500">{discord}</p>
        </div>
      </CardContent>
    </Card>
  )
}
