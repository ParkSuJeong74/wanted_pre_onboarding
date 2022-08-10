import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateNotiDto } from './dto';
import { NotiService } from './noti.service';

@Controller('noti')
export class NotiController {
  constructor(private readonly notiService: NotiService) {}

  @Post()
  async createNoti(
    @Body() createNotiDto: CreateNotiDto,
  ): Promise<CreateNotiDto> {
    return await this.notiService.createNoti(createNotiDto);
  }

  @Get()
  async notiLists() {
    return await this.notiService.notiLists();
  }

  @Get()
  async notiDetail(@Query() id: string) {
    return await this.notiService.notiDetail(id);
  }
}
