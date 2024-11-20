import { appServices, ICreatePrize, IPrize, IPrizeFilter } from "@/core";
import { fetchCore } from "../fetchCore";

const api_url = appServices.premios

const params = new URLSearchParams()

export async function getPrizes(filter: IPrizeFilter) {

    if (filter.nombre) params.append('nombre', filter.nombre)

    const response = await fetchCore<IPrize[]>({
        path: `${api_url}/${params.toString()}`,
        options: {
            method: 'GET',
        }
    })
    return response
}

export async function getPrizeById({ id }: { id: number }) {
    const response = await fetchCore<ICreatePrize>({
        path: `${api_url}/${id}`,
        options: {
            method: 'GET',
        }
    })

    return response
}


export async function createPrize(prize: ICreatePrize) {
    const response = await fetchCore<ICreatePrize>({
        path: `${api_url}/`,
        options: {
            method: 'POST',
            body: JSON.stringify(prize)
        }
    })

    return response
}

export async function updatePrize(prize: IPrize) {
    const response = await fetchCore<ICreatePrize>({
        path: `${api_url}/${prize.id}`,
        options: {
            method: 'PUT',
            body: JSON.stringify(prize)
        }
    })

    return response
}

export async function deletePrize({ id }: { id: number }) {
    const response = await fetchCore<ICreatePrize>({
        path: `${api_url}/${id}`,
        options: {
            method: 'DELETE',
        }
    })

    return response
}