import { PrizesForm } from "../components/prizes-form";
import PrizesList from "../components/prizes-list";

export default function PrizesPage() {
    return (
        <main className="container mx-auto">
            <div className="flex gap-2">
                <section className="border-r-2 p-4 h-full">
                    <PrizesForm />
                </section>
                <section className="p-4">
                    <PrizesList />
                </section>
            </div>
        </main>
    )
}
