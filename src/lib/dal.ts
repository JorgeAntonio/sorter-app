// 'use server'

// import { userFunctionApi } from '@/api'
// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'
// import { cache } from 'react'
// import { app_name } from "./constants"
// import { decrypt } from './encript'

// export const verifySession = cache(async () => {
//     const cookie = (await cookies()).get(
//         `${app_name}_session`
//     )?.value
//     const session = await decrypt(cookie)

//     if (!session?.userId) {
//         redirect('/auth')
//     }

//     return { isAuth: true, userId: session.userId }
// })

// export const getUser = cache(async () => {
//     const session = await verifySession()
//     if (!session) return null

//     try {
//         const data = await userFunctionApi.getUser(Number(session.userId))

//         const user = data

//         return user
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (error) {
//         console.log('Failed to fetch user')
//         return null
//     }
// })