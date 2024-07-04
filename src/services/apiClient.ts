import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance.get<T[]>(this.endpoint, requestConfig).then((res) => ({
      count: parseInt(res.headers["x-total-count"]),
      results: res.data,
    }));
  };

  create = (entity: T) => {
    return axiosInstance.post<T>(this.endpoint, entity).then((res) => res.data);
  };

  delete = (id: number) => {
    return axiosInstance
      .delete<void>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
