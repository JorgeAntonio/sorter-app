import { appServices, ICreatePrize, IPrize, IPrizeFilter } from "@/core";
import { fetchCore } from "../fetchCore";

const api_url = appServices.prizes

const params = new URLSearchParams()

export async function getPrizes(filter: IPrizeFilter): Promise<IPrizeFilter> {

    if (filter.nombre) {
        params.append('nombre', filter.nombre)
    }

    const response = await fetchCore<IPrizeFilter>({
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


export async function createPrize(prize: ICreatePrize): Promise<ICreatePrize> {
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