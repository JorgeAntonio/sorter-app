/* eslint-disable @next/next/no-img-element */
import { prizesApi } from "@/app/api"
import CardItem from "@/components/card-item"

export default async function PrizesList() {
  const data = await prizesApi.getPrizes({})
  // const onlyShowPrizesWithImage = data.filter(prize => prize.imagen)

  return (
    <main className="container mx-auto">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Lista de premios</h2>
        <div className="grid grid-cols-2 gap-4">
          {data.map((prize) => (
            <div key={prize.id}>
              <CardItem prize={prize} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
