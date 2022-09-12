import { AxiosRequestConfig } from "axios";

const companyRequestInterceptor = (config: AxiosRequestConfig) => {
  const companyId = window.localStorage.getItem("company_id");
  config.url = config.url?.replace(
    "company/:company_id/",
    `company/${companyId}/`
  );
  return config;
};

export default companyRequestInterceptor;
