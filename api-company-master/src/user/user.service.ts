import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(): Promise<User[] | null> {
    return await this.prisma.user.findMany({
      include: {
        company: true,
      },
    });
  }

  async createUser(user: CreateUserDto): Promise<any | null> {
    return this.prisma.user.create({
      data: {
        ...user,
        password: await bcrypt.hash(user.password, 10),
      },
      select: {
        id: true,
        name: true,
        email: true,
        permissionsToCompany: true,
      },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  async updatePicture(file: string, id: number) {
    const response = await this.prisma.user.update({
      where: { id },
      data: {
        profile: file,
      },
    });

    return response;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
