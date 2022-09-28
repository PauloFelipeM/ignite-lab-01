import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import slugify from 'slugify';

interface CreateCouserParams {
  title: string;
  slug?: string;
}

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  list() {
    return this.prisma.course.findMany();
  }

  findBySlug(slug: string) {
    return this.prisma.course.findUnique({
      where: {
        slug,
      },
    });
  }

  findById(id: string) {
    return this.prisma.course.findUnique({
      where: {
        id,
      },
    });
  }

  async create({ title, slug }: CreateCouserParams) {
    const courseSlug = slug ?? slugify(title, { lower: true });

    const courseWithSameSlug = await this.prisma.course.findUnique({
      where: {
        slug: courseSlug,
      },
    });

    if (courseWithSameSlug) {
      throw new Error('Another course with the same slug already exist.');
    }

    return await this.prisma.course.create({
      data: {
        title,
        slug: courseSlug,
      },
    });
  }
}
