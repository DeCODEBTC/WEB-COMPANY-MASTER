import { AxiosResponse } from "axios";
import { api } from "./api";

export interface IGetCategoriesResponseDto {
  id: number;
  name: string;
  code: number;
  tableVisible: boolean;
  deliveryVisible: boolean;
  companyId: number;
}

export const getCategories = async (): Promise<
  AxiosResponse<IGetCategoriesResponseDto[]>
> => {
  return api.get(`company/:company_id/category`);
};
