import { fetchAuthSession } from 'aws-amplify/auth';
import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}



const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Interceptor para añadir el token de autenticación
axiosInstance.interceptors.request.use(async (config) => {
  try {
    const { accessToken } = (await fetchAuthSession()).tokens ?? {};
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken.toString()}`;
    }
    return config;
  } catch (error) {
    return config;
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance.get<T[]>(this.endpoint, requestConfig).then((res) => ({
      count: parseInt(res.headers["x-total-count"]),
      results: res.data,
    }));
  };

  getById = async (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  create = async (entity: T) => {
    return axiosInstance.post<T>(this.endpoint, entity).then((res) => res.data);
  };

  delete = async (id: number) => {
    return axiosInstance
      .delete<void>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
