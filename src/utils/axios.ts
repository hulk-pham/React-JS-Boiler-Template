import axios from "axios";
import { ENV } from "declares/env";
import { LocalStorageKey } from "declares/interfaces/local-storage";

axios.defaults.headers.common["Authorization"] = localStorage.getItem(
  LocalStorageKey.AccessToken
);

export const axiosInstance = axios.create({
  baseURL: ENV.API_URL,
  timeout: 4000,
});
