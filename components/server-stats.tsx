"use client"

import { useState, useEffect } from "react"
import { Users, Clock, Calendar } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface ServerData {
  online: number
  max: number
  uptime: string
  nextEvent: string
}

export default function ServerStats() {
  const [serverData, setServerData] = useState<ServerData>({
    online: 0,
    max: 128,
    uptime: "99.8%",
    nextEvent: "2 Days",
  })
  const [loading, setLoading] = useState(true)

  // Fetch server data
  useEffect(() => {
    const fetchServerData = async () => {
      try {
        setLoading(true)
        // In a real implementation, you would fetch this data from your FiveM server API
        // Example: const response = await fetch('https://yourapi.com/fivem-server-status')

        // For demonstration, we'll simulate an API response with random player count
        // that changes every 30 seconds
        const mockApiCall = () => {
          const randomPlayers = Math.floor(Math.random() * 80) + 20
          setServerData((prev) => ({
            ...prev,
            online: randomPlayers,
          }))
          setLoading(false)
        }

        mockApiCall()

        // Refresh player count every 30 seconds
        const interval = setInterval(mockApiCall, 30000)

        return () => clearInterval(interval)
      } catch (error) {
        console.error("Failed to fetch server data:", error)
        setLoading(false)
      }
    }

    fetchServerData()
  }, [])

  // Calculate percentage for progress bar
  const playerPercentage = Math.round((serverData.online / serverData.max) * 100)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-zinc-800 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <Users className="h-8 w-8 text-white mr-4" />
          <div>
            <p className="text-sm text-zinc-400">NOT WORKING</p>
            <div className="flex items-baseline">
              <p className="text-xl font-bold text-white">{loading ? "Loading..." : serverData.online}</p>
              <p className="text-sm text-zinc-400 ml-1">/{serverData.max}</p>
            </div>
          </div>
        </div>
        <Progress value={playerPercentage} className="h-2 bg-zinc-700" />
        <p className="text-xs text-zinc-500 mt-1 text-right">{playerPercentage}% Capacity</p>
      </div>
      <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
        <Clock className="h-8 w-8 text-white mr-4" />
        <div>
          <p className="text-sm text-zinc-400">NOT WORKING</p>
          <p className="text-xl font-bold text-white">{serverData.uptime}</p>
        </div>
      </div>
      <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
        <Calendar className="h-8 w-8 text-white mr-4" />
        <div>
          <p className="text-sm text-zinc-400">NOT WORKING</p>
          <p className="text-xl font-bold text-white">{serverData.nextEvent}</p>
        </div>
      </div>
    </div>
  )
}
