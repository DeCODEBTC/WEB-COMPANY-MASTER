import { AxiosRequestConfig } from "axios";

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {};
  }

  const token = localStorage.getItem("access_token");
  console.log(token);
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
};

export default authRequestInterceptor;
