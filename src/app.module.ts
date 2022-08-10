import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { NotiModule } from './noti/noti.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    NotiModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CompanyModule,
  ],
  controllers: [],
  providers: [],
  exports: [ConfigModule],
})
export class AppModule {}
