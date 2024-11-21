import { sortersApi } from "@/app/api"
import CreateSorter from "../components/new-sorter";
import SorterList from "../components/sorter-list";

export default async function SorterPage() {
    const data = await sortersApi.getSorters({})

    return (
        <main className="container mx-auto">
            <div className="flex gap-2">
                <section className="border-r-2 p-4 h-full">
                    <CreateSorter />
                </section>
                <section className="p-4 space-y-4">
                    <SorterList sorteos={data} />
                </section>
            </div>
        </main>
    )
}
