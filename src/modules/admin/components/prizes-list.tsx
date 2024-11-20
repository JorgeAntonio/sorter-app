/* eslint-disable @next/next/no-img-element */
import { prizesApi } from "@/app/api"
import CardItem from "@/components/card-item"

export default async function PrizesList() {
  const data = await prizesApi.getPrizes({})
  const onlyShowPrizesWithImage = data.filter(prize => prize.imagen)

  return (
    <main className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl font-bold">Lista de premios</h2>
        <div className="flex gap-4">
            {onlyShowPrizesWithImage.map((prize) => (
                <div key={prize.id}>
                  <CardItem prize={prize} />
                </div>
            ))}
        </div>
    </main>
  )
}
