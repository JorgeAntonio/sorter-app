const isProduction = process.env.NODE_ENV === 'production';
const productionUrl = process.env.API_URL_PROD;
const developmentUrl = process.env.API_URL_DEV;

const baseUrl = isProduction ? productionUrl : developmentUrl;

interface IProps {
  path: string;
  options?: RequestInit;
}

export async function fetchCore<T>({ path, options }: IProps): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
  };

  const newOptions: RequestInit = {
    ...options,
    headers: { ...headers, ...(options?.headers || {}) } as Record<string, string>,
  };

  const url = `${baseUrl}${path}`;

  try {
    const response = await fetchWithTimeout(url, newOptions);

    if (response.status === 204) {
      return {} as T;
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Fetch failed for ${url}:`, error);
    return {} as T;
  }
}


async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout = 50000
): Promise<Response> {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  const response = await fetch(url, {
    ...options,
    signal: controller.signal,
  })

  clearTimeout(id)
  return response
}



// export async function fetchCore2<T>({ path, options }: IProps): Promise<T> {
//   const headers: Record<string, string> = {
//     'Content-Type': 'application/json',
//   };

//   const token = getCookie('access');

//   if (token) {
//     headers['Authorization'] = `Bearer ${token}`;
//   }

//   const newOptions: RequestInit = {
//     ...options,
//     headers: { ...headers, ...(options?.headers || {}) } as Record<string, string>,
//   };

//   const url = `${baseUrl}${path}`;

//   let response = await fetchWithTimeout(url, newOptions);

//   // Si el token ha expirado (401 Unauthorized), intentamos refrescarlo
//   if (response.status === 401) {
//     try {
//       // Intentar refrescar el token
//       const newAccessToken = await refreshAccessToken();

//       // Actualizar headers con el nuevo token y reintentar la petición
//       (newOptions.headers as Record<string, string>)['Authorization'] = `Bearer ${newAccessToken}`;
//       response = await fetchWithTimeout(url, newOptions);
//     } catch (error) {
//       throw new Error('No se pudo refrescar el token' + error);
//     }
//   }

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   return response.json();
// }
