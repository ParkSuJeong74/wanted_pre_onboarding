import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
