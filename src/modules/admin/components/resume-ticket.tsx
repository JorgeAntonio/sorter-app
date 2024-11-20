'use client'

import { useEffect, useState } from 'react'
import { CalendarClock, Edit2, Link2 } from 'lucide-react'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const ResumeTicket = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 3,
    minutes: 42,
    seconds: 51
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        if (current.seconds > 0) {
          return { ...current, seconds: current.seconds - 1 }
        } else if (current.minutes > 0) {
          return { ...current, minutes: current.minutes - 1, seconds: 59 }
        } else if (current.hours > 0) {
          return { ...current, hours: current.hours - 1, minutes: 59, seconds: 59 }
        } else if (current.days > 0) {
          return { ...current, days: current.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return current
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">332</h1>
          <div className="flex items-center text-muted-foreground">
            <CalendarClock className="w-4 h-4 mr-2" />
            28/11/2024, 2:50:00 p.m.
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Edit2 className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { value: timeLeft.days, label: 'DÍAS' },
          { value: timeLeft.hours, label: 'HORAS' },
          { value: timeLeft.minutes, label: 'MINUTOS' },
          { value: timeLeft.seconds, label: 'SEGUNDOS' }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-4 text-center border"
          >
            <div className="text-3xl font-bold text-blue-600">{item.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
        0 tickets pagados
      </Badge>

      <div className="space-y-4">
        {[
          { name: 'iPhone 15 Pro', status: 'Esperando fecha del sorteo' },
          { name: 'MacBook Air M2', status: 'Esperando fecha del sorteo' }
        ].map((prize, index) => (
          <Card key={index}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="space-y-1">
                <h3 className="font-semibold">{prize.name}</h3>
                <p className="text-sm text-muted-foreground">{prize.status}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Link2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}