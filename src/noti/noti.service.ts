import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotiDto } from './dto';

@Injectable()
export class NotiService {
  constructor(private readonly prismaService: PrismaService) {}

  async createNoti(createNotiDto: CreateNotiDto): Promise<CreateNotiDto> {
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

  async notiLists() {
    return await this.prismaService.noti.findMany();
  }

  async notiDetail(id: string) {
    return await this.prismaService.noti.findUnique({
      where: { id },
    });
  }
}
