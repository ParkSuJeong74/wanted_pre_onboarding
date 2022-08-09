import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotiModule } from './noti/noti.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [NotiModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
  exports: [ConfigModule],
})
export class AppModule {}
