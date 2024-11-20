// 'use server'
// import { decrypt, encrypt } from "@/lib/encript";
// import { cookies } from 'next/headers';
// import { app_name } from "./constants";

// export async function createSession(userId: string) {
//     const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
//     const encryptedSession = await encrypt({ userId, expiresAt });
//     (await cookies()).set(
//         `${app_name}_session`,
//         encryptedSession,
//         {
//             httpOnly: true,
//             secure: true,
//             expires: expiresAt,
//             sameSite: 'lax',
//             path: '/',
//         }
//     )
// }

// export async function updateSession() {
//     const session = (await cookies()).get(
//         `${app_name}_session`
//     )?.value
//     const payload = await decrypt(session)

//     if (!session || !payload) {
//         return null
//     }

//     const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

//     const cookieStore = await cookies()
//     cookieStore.set(
//         `${app_name}_session`, 
//         session, {
//         httpOnly: true,
//         secure: true,
//         expires: expires,
//         sameSite: 'lax',
//         path: '/',
//     })
// }

// export async function deleteSession() {
//     const cookieStore = await cookies()
//     cookieStore.delete(`${app_name}_session`)
// }