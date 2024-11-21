import { sortersApi } from "@/app/api"
import { SorterCard } from "./sorter-card"

export default async function SorterList() {
  const data = await sortersApi.getSorters({})

  return (
    <main className="w-full">
        <h2 className="text-2xl font-bold">Listado de sorteos creados</h2>
        <div className="flex flex-col gap-4 py-4">
            {data.map((sorter) => (
                <div key={sorter.id}>
                  <SorterCard sorter={sorter} />
                </div>
            ))}
        </div>
    </main>
  )
}
