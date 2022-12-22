import useSWR from "swr";
import { axiosInstance } from "utils/axios";

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export function useAPI<T>({ url }: { url: string }) {
  return useSWR<T, Error>(url, fetcher);
}
