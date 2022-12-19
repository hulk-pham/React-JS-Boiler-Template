import axios from "axios";
import { ENV } from "declare/env";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useAPI = ({ url }: { url: string }) => {
  return useSWR(ENV.API_URL + url, fetcher);
};
