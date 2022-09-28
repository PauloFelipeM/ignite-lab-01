import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { StudentsService } from '../../services/students.service';
import { CoursesService } from '../../services/courses.service';
import { EnrollmentsService } from '../../services/enrollments.service';

interface Customer {
  authUserId: string;
}

interface Product {
  id: string;
  title: string;
  slug: string;
}

interface PurchaseCreatedPayload {
  customer: Customer;
  product: Product;
}

@Controller()
export class PurchasesController {
  constructor(
    private studentsService: StudentsService,
    private coursesService: CoursesService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload() value: PurchaseCreatedPayload) {
    let student = await this.studentsService.findByAuthUserId(
      value.customer.authUserId,
    );

    if (!student) {
      student = await this.studentsService.create({
        authUserId: value.customer.authUserId,
      });
    }

    let course = await this.coursesService.findBySlug(value.product.slug);

    if (!course) {
      course = await this.coursesService.create({
        title: value.product.title,
      });
    }

    await this.enrollmentsService.create({
      courseId: course.id,
      studentId: student.id,
    });
  }
}
