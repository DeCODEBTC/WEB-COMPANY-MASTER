import axios from "axios";
import authRequestInterceptor from "./interceptors/authRequestInterceptor";
import companyRequestInterceptor from "./interceptors/companyRequestInterceptor";
import unauthorizedResponseInterceptor from "./interceptors/unauthorizedResponseInterceptor";

const api = axios.create({
  baseURL: "http://localhost:9000",
});
api.interceptors.request.use(authRequestInterceptor);
api.interceptors.request.use(companyRequestInterceptor);
api.interceptors.response.use(
  (response) => response,
  unauthorizedResponseInterceptor
);
export { api };
