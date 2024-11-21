import SplitLayout from "@/components/layout/split-layout";
import { CreatePrizesForm } from "../components/create-prizes-form";
import PrizesList from "../components/prizes-list";

export default function PrizesPage() {
    return (
        <>
            <SplitLayout
                leftContent={<CreatePrizesForm />}
                rightContent={<PrizesList />}
            />
        </>
    )
}
