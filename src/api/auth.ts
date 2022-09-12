import { AxiosResponse } from "axios";
import { api } from "./api";

export interface SignInRequest {
  email: string;
  password: string;
}

interface ISignInSuccessResponse {
  accessToken: string;
  id: number;
  email: string;
  emailVerified: boolean;
  name: string;
  profile: string;
  permissionsToCompany: string;
  companyId: number;
}

interface ICreateAcountRequest {
  name: string;
  email: string;
  password: string;
}

interface ICreateAcountResponse {
  id: number;
  email: string;
  emailVerified: boolean;
  name: string;
  profile: string;
  permissionsToCompany: string;
  companyId: number;
}

export const signIn = async (
  params: SignInRequest
): Promise<AxiosResponse<ISignInSuccessResponse>> => {
  return api.post("auth/login", params);
};

export const createAcount = async (
  params: ICreateAcountRequest
): Promise<AxiosResponse<ICreateAcountResponse>> => {
  return api.post("auth/create-account", params);
};
