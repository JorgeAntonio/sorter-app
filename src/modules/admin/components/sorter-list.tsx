import { SorterCard } from "./sorter-card"
import { ISorter } from "@/core";

export default function SorterList(
  { sorteos }: { sorteos: ISorter[] }
) {
  return (
    <main className="w-full">
        <h2 className="text-2xl font-bold">Listado de sorteos creados</h2>
        <div className="flex flex-col gap-4 py-4">
            {sorteos.map((sorter) => (
                <div key={sorter.id}>
                  <SorterCard sorter={sorter} />
                </div>
            ))}
        </div>
    </main>
  )
}
