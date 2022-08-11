import { Injectable } from '@nestjs/common';
import { Noti } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotiDto, NotiListsResponse, UpdateNotiDto } from './dto';

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

  async notiLists(): Promise<NotiListsResponse[]> {
    const notiLists = await this.prismaService.noti.findMany({
      select: {
        id: true,
        position: true,
        reward: true,
        tech: true,
        Company: {
          select: {
            name: true,
            country: true,
            area: true,
          },
        },
      },
    });
    return notiLists;
  }

  async notiDetail(id): Promise<Noti> {
    const noti = await this.prismaService.noti.findUnique({
      where: id,
    });
    console.log(noti.company_id);
    return;
  }

  async deleteNoti(id): Promise<Noti> {
    return await this.prismaService.noti.delete({ where: id });
  }

  async updateNoti(id, updateNotiDto: UpdateNotiDto): Promise<UpdateNotiDto> {
    const { position, reward, description, tech } = updateNotiDto;
    return await this.prismaService.noti.update({
      where: id,
      data: {
        position,
        reward,
        description,
        tech,
      },
    });
  }
}
