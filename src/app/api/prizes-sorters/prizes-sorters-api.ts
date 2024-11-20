import { appServices, ICreatePrizeSorter, IPrizeSorter } from "@/core";
import { fetchCore } from "../fetchCore";


const api_url = appServices.prizesSorters

export async function getPrizesSorters(): Promise<IPrizeSorter> {
    const response = await fetchCore<IPrizeSorter>({
        path: `${api_url}`,
        options: {
            method: 'GET',
        }
    })

    return response
}

export async function getPrizeSorterById({ id }: { id: number }) {
    const response = await fetchCore<IPrizeSorter>({
        path: `${api_url}/${id}`,
        options: {
            method: 'GET',
        }
    })

    return response
}

export async function createPrizeSorter(prizeSorter: ICreatePrizeSorter): Promise<ICreatePrizeSorter> {
    const response = await fetchCore<ICreatePrizeSorter>({
        path: `${api_url}/`,
        options: {
            method: 'POST',
            body: JSON.stringify(prizeSorter)
        }
    })

    return response
}

export async function updatePrizeSorter(prizeSorter: IPrizeSorter) {
    const response = await fetchCore<ICreatePrizeSorter>({
        path: `${api_url}/${prizeSorter.id}`,
        options: {
            method: 'PUT',
            body: JSON.stringify(prizeSorter)
        }
    })

    return response
}

export async function deletePrizeSorter({ id }: { id: number }) {
    const response = await fetchCore<ICreatePrizeSorter>({
        path: `${api_url}/${id}`,
        options: {
            method: 'DELETE',
        }
    })

    return response
}