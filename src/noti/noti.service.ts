import { Injectable } from '@nestjs/common';
import { Noti } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotiDto } from './dto';

@Injectable()
export class NotiService {
  constructor(private readonly prismaService: PrismaService) {}

  async createNoti(createNotiDto: CreateNotiDto): Promise<Noti> {
    const { company_id, position, reward, description, tech } = createNotiDto;
    return await this.prismaService.noti.create({
      data: {
        company_id,
        position,
        reward,
        description,
        tech,
      },
    });
  }

  async notiLists(): Promise<Noti[]> {
    return await this.prismaService.noti.findMany();
  }

  async notiDetail(id): Promise<Noti> {
    return await this.prismaService.noti.findUnique({
      where: id,
    });
  }

  async deleteNoti(id): Promise<Noti> {
    return await this.prismaService.noti.delete({ where: id });
  }
}
