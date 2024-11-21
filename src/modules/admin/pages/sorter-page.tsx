import { sortersApi } from "@/app/api"
import CreateSorterForm from "../components/create-sorter-form";
import SorterList from "../components/sorter-list";
import SplitLayout from "@/components/layout/split-layout";

export default async function SorterPage() {
    const data = await sortersApi.getSorters({})

    return (
        <>
            <SplitLayout
                leftContent={<CreateSorterForm />}
                rightContent={<SorterList sorteos={data} />}
            />
        </>
    )
}
