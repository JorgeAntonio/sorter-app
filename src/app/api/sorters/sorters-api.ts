import { appServices, ICreateSorter, ISorter, ISorterFilter } from "@/core";
import { fetchCore } from "../fetchCore";

const api_url = appServices.sorters

const params = new URLSearchParams()

export async function getSorters(filter: ISorterFilter) {

    if (filter.nombre) params.append('nombre', filter.nombre)

    const response = await fetchCore<ISorter[]>({
        path: `${api_url}/${params.toString()}`,
        options: {
            method: 'GET',
            cache: 'no-store'
        }
    })
    return response
}

export async function getSortersById({ id }: { id: number }) {
    const response = await fetchCore<ICreateSorter>({
        path: `${api_url}/${id}`,
        options: {
            method: 'GET',
        }
    })

    return response
}


export async function createSorter(prize: ICreateSorter) {
    const response = await fetchCore<ISorter>({
        path: `${api_url}/`,
        options: {
            method: 'POST',
            body: JSON.stringify(prize)
        }
    })

    return response
}

export async function updateSorter(prize: ISorter) {
    const response = await fetchCore<ICreateSorter>({
        path: `${api_url}/${prize.id}`,
        options: {
            method: 'PUT',
            body: JSON.stringify(prize)
        }
    })

    return response
}

export async function deleteSorter({ id }: { id: number }) {
    const response = await fetchCore<ISorter>({
        path: `${api_url}/${id}`,
        options: {
            method: 'DELETE',
        }
    })

    return response
}