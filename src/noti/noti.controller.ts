import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
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

  @Get('all')
  async notiLists(): Promise<NotiListsResponse[]> {
    return await this.notiService.notiLists();
  }

  @Get('search')
  async searchNoti(@Query() search: string) {
    return await this.notiService.searchNoti(search);
  }

  @Get(':id')
  async notiDetail(@Param('id') id: string) {
    return await this.notiService.notiDetail(id);
  }

  @Post()
  async createNoti(@Body() createNotiDto: CreateNotiDto): Promise<Noti> {
    return await this.notiService.createNoti(createNotiDto);
  }

  @Patch(':id')
  async updateNoti(
    @Param('id') id: string,
    @Body() updateNotiDto: UpdateNotiDto,
  ): Promise<UpdateNotiDto> {
    return await this.notiService.updateNoti(id, updateNotiDto);
  }

  @Delete(':id')
  async deleteNoti(@Param('id') id: string): Promise<number> {
    await this.notiService.deleteNoti(id);
    return HttpStatus.OK;
  }
}
