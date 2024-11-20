import { IToken } from '@/core/types/auth/IAuth'
import { getCookie } from './actions'

export interface IResCookie {
  name: string
  value: string
  path: string
}

const APP_NAME = process.env.APP_NAME

export async function getUser() {
  const res: IResCookie = (await getCookie(`${APP_NAME}_token`)) as IResCookie
  const user: IToken = res ? JSON.parse(res.value) : null
  return user
}
