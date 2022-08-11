import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Noti } from '@prisma/client';
import { CreateNotiDto, NotiListsResponse, UpdateNotiDto } from './dto';
import { NotiService } from './noti.service';

@Controller('noti')
export class NotiController {
  constructor(private readonly notiService: NotiService) {}

  @Get()
  async notiDetail(@Query() id: string): Promise<Noti> {
    return await this.notiService.notiDetail(id);
  }

  @Get('all')
  async notiLists(): Promise<NotiListsResponse[]> {
    return await this.notiService.notiLists();
  }

  @Post()
  async createNoti(@Body() createNotiDto: CreateNotiDto): Promise<Noti> {
    return await this.notiService.createNoti(createNotiDto);
  }

  @Patch()
  async updateNoti(@Query() id: number, @Body() updateNotiDto: UpdateNotiDto) {
    return await this.notiService.updateNoti(id, updateNotiDto);
  }

  @Delete()
  async deleteNoti(@Query() id: string): Promise<number> {
    await this.notiService.deleteNoti(id);
    return HttpStatus.OK;
  }
}
