import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Noti } from '@prisma/client';
import { CreateNotiDto, NotiListsResponse } from './dto';
import { NotiService } from './noti.service';

@Controller('noti')
export class NotiController {
  constructor(private readonly notiService: NotiService) {}

  @Post()
  async createNoti(@Body() createNotiDto: CreateNotiDto): Promise<Noti> {
    return await this.notiService.createNoti(createNotiDto);
  }

  @Get()
  async notiDetail(@Query() id: string): Promise<Noti> {
    return await this.notiService.notiDetail(id);
  }

  @Delete()
  async deleteNoti(@Query() id: string): Promise<Noti> {
    return await this.notiService.deleteNoti(id);
  }

  @Get('all')
  async notiLists(): Promise<NotiListsResponse[]> {
    return await this.notiService.notiLists();
  }
}
