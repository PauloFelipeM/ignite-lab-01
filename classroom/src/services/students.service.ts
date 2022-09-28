import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateStudentParams {
  authUserId: string;
}

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  list() {
    return this.prisma.student.findMany();
  }

  async findByAuthUserId(authUserId: string) {
    return await this.prisma.student.findUnique({
      where: {
        authUserId,
      },
    });
  }

  findById(id: string) {
    return this.prisma.student.findUnique({
      where: {
        id,
      },
    });
  }

  async create({ authUserId }: CreateStudentParams) {
    return await this.prisma.student.create({
      data: {
        authUserId,
      },
    });
  }
}
