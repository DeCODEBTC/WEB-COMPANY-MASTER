import { Prisma } from '@prisma/client';

export class CreateCategoryDto implements Prisma.MenuCreateInput {
  deliveyVisible?: boolean;
  products?: Prisma.ProductCreateNestedManyWithoutMenuInput;
  company: Prisma.CompanyCreateNestedOneWithoutMenuInput;

  name: string;
  code: number;
  tableVisible: boolean;
  deliveryVisible: boolean;
  companyId: number;
}
