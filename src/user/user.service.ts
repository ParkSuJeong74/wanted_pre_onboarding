import { Injectable } from '@nestjs/common';
import { ApplyNoti, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateApplyDto } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(): Promise<User[]> {
    return await this.prismaService.user.findMany({});
  }

  async getAllApplies(): Promise<ApplyNoti[]> {
    return await this.prismaService.applyNoti.findMany({});
  }

  async createUser(name): Promise<User> {
    return await this.prismaService.user.create({ data: name });
  }

  async applyNotiByUser(createApplyDtp: CreateApplyDto): Promise<ApplyNoti> {
    const { user_id, noti_id } = createApplyDtp;
    return await this.prismaService.applyNoti.create({
      data: { user_id, noti_id },
    });
  }
}
