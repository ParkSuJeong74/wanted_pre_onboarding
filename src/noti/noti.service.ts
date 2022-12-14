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

  async notiDetail(id: string) {
    const noti = await this.prismaService.noti.findUnique({
      where: { id },
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
            Noti: { select: { id: true } },
          },
        },
      },
    });
    return noti;
  }

  async deleteNoti(id: string): Promise<Noti> {
    return await this.prismaService.noti.delete({ where: { id } });
  }

  async updateNoti(id: string, updateNotiDto: UpdateNotiDto): Promise<Noti> {
    const { position, reward, description, tech } = updateNotiDto;
    return await this.prismaService.noti.update({
      where: { id },
      data: {
        position,
        reward,
        description,
        tech,
      },
    });
  }

  async searchNoti({ search }) {
    return await this.prismaService.noti.findMany({
      where: {
        OR: [
          { position: { startsWith: search } },
          { tech: { startsWith: search } },
          { Company: { name: { startsWith: search } } },
        ],
      },
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
  }
}
