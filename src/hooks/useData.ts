import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<FetchResponse<T>>({} as FetchResponse<T>);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<T[]>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) =>
          setData({
            count: parseInt(res.headers["x-total-count"]),
            results: res.data,
          })
        )
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
        })
        .finally(() => setLoading(false));

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, loading, error };
};

export default useData;
