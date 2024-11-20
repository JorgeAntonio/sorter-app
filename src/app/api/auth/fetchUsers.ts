import { IUser } from '@/core/types/auth/IAuth';
import { fetchCore } from '../fetchCore';
import { appServices } from '@/core';

const service = appServices

export async function getUsers() {
  const response = await fetchCore<IUser[]>({
    path: service.users,
    options: {
      method: 'GET',
    },
    });

    return response;
}

export async function getUser(id: number) {
  const response = await fetchCore<IUser>({
    path: `${service.users}/${id}`,  
    options: {
      method: 'GET',
    },
    });

    return response;
}