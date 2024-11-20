import { Button } from "@/components/ui/button"
import { Calendar, Users, DollarSign } from 'lucide-react'
import Image from "next/image"
import { Card, CardContent } from "../ui/card"

export default function LandingPage() {
  return (
    <main className="h-full bg-white">
      {/* Hero Section */}
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <section className="space-y-6 w-full">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              ¡Organiza tu Sorteo Navideño!
            </h1>
            <p className="text-xl text-gray-600">
              Programa tu intercambio con anticipación y permite que todos se preparen.
            </p>
            <Button size="lg" className="gap-2">
              Crear nuevo sorteo
            </Button>
          </section>
          <section className="relative">
            <div className="aspect-square relative">
              <Image
                src="/landing.svg"
                alt="Christmas Gift Illustration"
                className="object-contain"
                width={500}
                height={500}
              />
            </div>
          </section>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto sm:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2">
            <CardContent className="p-6 space-y-4">
              <Calendar className="w-10 h-10 text-red-600" />
              <h3 className="text-xl font-bold">Organiza con Tiempo</h3>
              <p className="text-gray-600">
                Programa tu intercambio con anticipación y permite que todos se preparen.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-6 space-y-4">
              <Users className="w-10 h-10 text-red-600" />
              <h3 className="text-xl font-bold">Invita Participantes</h3>
              <p className="text-gray-600">
                Programa tu intercambio con anticipación y permite que todos se preparen.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-6 space-y-4">
              <DollarSign className="w-10 h-10 text-red-600" />
              <h3 className="text-xl font-bold">Define Prepuesto</h3>
              <p className="text-gray-600">
                Programa tu intercambio con anticipación y permite que todos se preparen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}