import { useEffect, useState } from "react";

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestOptions {
  method: "POST" | "GET" | "PUT" | "DELETE";
  route: string;
  body?: any;
}
function usePerformRequest<Type>({ method, route, body }: RequestOptions) {
  const [data, setData] = useState<Type>();
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [status, setStatus] = useState<number | string>("undefined");
  const [isLoading, setLoading] = useState<boolean>(false);
  const reloadData = async () => {
    const token = localStorage.getItem("t");
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `${token}`,
      },
      method,
      data: body,
      url: route,
    };
    setLoading(true);
    const r: any = await axios.request(config).catch((e: AxiosError) => {
      setError(e);
      setStatus(e.response?.status as number);

      return {
        status: e.response?.status,
      };
    });
    setResponse(r as AxiosResponse);
    setStatus(r.status);
    setLoading(false);
    setData(r?.data ?? undefined);
  };
  useEffect(() => {
    reloadData().catch(() => setLoading(false));
  }, [route]);

  return { data, response, isLoading, reloadData, status, error };
}

interface PerformRequestOptions {
  method: "POST" | "PATCH" | "GET" | "PUT" | "DELETE";
  data?: any;
  route: string;
  headers?: any;
  doNotUseAuthorization?: boolean;
  callback?: () => any;
}

async function PerformRequest<Type>({
  method,
  data,
  route,
  headers,
  doNotUseAuthorization,
  callback,
}: PerformRequestOptions) {
  const token = localStorage.getItem("t");

  const requestHeaders = doNotUseAuthorization
    ? { ...headers }
    : { Authorization: `${token}`, ...headers };
  const config = {
    method,
    data,
    url: route,
    headers: requestHeaders,
  };

  const r: any = await axios.request(config).catch((e: AxiosError) => {
    if (callback) callback();
    return {
      status: e.response?.status,
      message: (e?.response?.data as any)?.message,
      data: (e?.response?.data as any)?.data,
    };
  });
  return {
    status: r.status as number,
    data: r?.data as Type,
    message: r?.message ?? undefined,
  };
}
export { usePerformRequest, PerformRequest };
