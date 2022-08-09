import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotiController } from './noti.controller';
import { NotiService } from './noti.service';

@Module({
  imports: [],
  providers: [NotiService, PrismaService],
  controllers: [NotiController],
})
export class NotiModule {}
