import axios from "axios";
import { ENV } from "declares/env";
import { LocalStorageKey } from "declares/interfaces/local-storage";

export const axiosInstance = axios.create({
  baseURL: ENV.API_URL,
  timeout: 4000,
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem(LocalStorageKey.AccessToken);
  if (token && config && config.headers) {
    config.headers.Authorization = token;
  }
  return config;
});
