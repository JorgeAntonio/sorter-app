/* eslint-disable @next/next/no-img-element */
import { prizesApi } from "@/app/api"
import CardItem from "@/components/card-item"

export default async function PrizesList() {
  const data = await prizesApi.getPrizes({})
  const onlyShowPrizesWithImage = data.filter(prize => prize.imagen)

  return (
    <main className="w-full">
        <h2 className="text-2xl font-bold">Lista de premios</h2>
        <div className="flex flex-col space-y-4">
            {onlyShowPrizesWithImage.map((prize) => (
                <div key={prize.id} className="flex flex-wrap gap-4 items-center">
                  <CardItem prize={prize} />
                    {/* <img 
                      src={prize.imagen || '/no-image.png'}
                      alt={prize.nombre} 
                      className="w-20 h-20 rounded-lg"
                    />
                    <div>
                        <h3 className="text-lg font-bold">{prize.nombre}</h3>
                        <p>{prize.descripcion}</p>
                    </div> */}
                </div>
            ))}
        </div>
    </main>
  )
}
