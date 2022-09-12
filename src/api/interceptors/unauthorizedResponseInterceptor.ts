import { AxiosError } from "axios";

const unauthorizedResponseInterceptor = (
  error: AxiosError
): Promise<AxiosError> => {
  const status = error.response?.status;

  if (status === 401 && window.location.pathname !== "/auth/sign-in") {
    localStorage.removeItem("access-token");
    window.location.href = "/auth/sign-in";
  }
  return Promise.reject(error);
};

export default unauthorizedResponseInterceptor;
