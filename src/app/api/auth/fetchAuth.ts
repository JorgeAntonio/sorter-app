import { createCookie, getUser } from '@/functions';
import { fetchCore } from '../fetchCore';
import { apiServices } from '@/core';
import { ILogin, IRegister, IToken, IUser } from '@/core/types/auth/IAuth';

const app_name = process.env.APP_NAME
const service = apiServices.authServices

export async function login(props: ILogin) {
  const { username, password } = props;
  const response = await fetchCore<IToken>({
    path: service.login,
    options: {
      method: 'POST',
      body: JSON.stringify({ username, password })
    },
  });

  // // Guardar tokens en cookies
  // const cookieValue = JSON.stringify(response);
  // await createCookie(`${app_name}_token`, cookieValue);

  return response;
}

export async function refreshAccessToken() {
  const refreshToken = await getUser()
  const { refresh } = refreshToken

  if (!refresh) {
    throw new Error('No refresh token found');
  }

  const response = await fetchCore<IToken>({
    path: service.tokenRefresh,
    options: {
      method: 'POST',
      body: JSON.stringify({ refresh: refreshToken }),
    },
  });

  // Guardar el nuevo access token
  const cookieValue = JSON.stringify(response);
  await createCookie(`${app_name}_token`, cookieValue);

  return response;
}

export async function register (props: IRegister) {
  const { username, password, password2, email, first_name, last_name } = props
  const response = await fetchCore<IUser[]>({
    path: service.register,
    options: {
      method: 'POST', body: JSON.stringify({
        username, password, password2, email, last_name, first_name
      })
    },
  })

  return response
}