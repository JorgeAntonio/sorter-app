'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ListFilter } from 'lucide-react'
import Link from "next/link"

export default function RaffleGrid() {
  return (
    <div className="container mx-auto py-4 space-y-6">
      <div className="flex justify-between items-center">
        <Tabs defaultValue="rifas" className="w-auto">
          <TabsList>
            <TabsTrigger value="rifas" className="text-green-600 data-[state=active]:text-green-600">Rifas</TabsTrigger>
            <TabsTrigger value="parrilladas">Parrilladas</TabsTrigger>
            <TabsTrigger value="kermes">Kermes</TabsTrigger>
            <TabsTrigger value="bingo">Bingo</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-sm">
            <Calendar className="mr-2 h-4 w-4" />
            Fecha
          </Button>
          <Button variant="outline" size="sm" className="text-sm">
            <ListFilter className="mr-2 h-4 w-4" />
            Ver todos
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="pb-2">
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-[200px] aspect-square">
                    {/* Snow Globe */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-50 to-gray-100 border-8 border-gray-200 overflow-hidden">
                      {/* Snow effect */}
                      <div className="absolute inset-0 opacity-50">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-snowfall"
                            style={{
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 5}s`,
                              top: `${Math.random() * 100}%`
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Christmas Tree */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <div className="relative w-20 h-24">
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-slate-600 rounded-lg transform rotate-45" />
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rotate-45 z-10" />
                        </div>
                      </div>

                      {/* String Lights */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24">
                        <div className="flex justify-between">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-red-500 rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Base */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-white">Merry Christmas</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl mb-2">Aspect Ratio</CardTitle>
              <p className="text-sm text-muted-foreground">
                Displays content within a desired ratio.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-4">
              <div className="flex gap-4 text-sm">
                <Link href="#" className="text-blue-500 hover:underline">
                  Radix UI
                </Link>
                <Link href="#" className="text-blue-500 hover:underline">
                  API Reference
                </Link>
              </div>
              <Button variant="destructive" className="w-full">
                Participar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <style jsx global>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        .animate-snowfall {
          animation: snowfall 3s linear infinite;
        }
      `}</style>
    </div>
  )
}