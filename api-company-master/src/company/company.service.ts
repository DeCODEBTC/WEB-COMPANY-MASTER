import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(company: any): Promise<any> {
    return await this.prisma.company.create({
      data: company,
    });
  }

  async findAll() {
    return await this.prisma.company.findMany({
      include: {
        team: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
