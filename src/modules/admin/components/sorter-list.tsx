import { sortersApi } from "@/app/api"

export default async function SorterList() {
  const data = await sortersApi.getSorters({})

  return (
    <main className="w-full">
        <h2>Lista de sorters</h2>
        <div>
            {data.map((sorter) => (
                <div key={sorter.id}>
                  {sorter.nombre}
                </div>
            ))}
        </div>
    </main>
  )
}
