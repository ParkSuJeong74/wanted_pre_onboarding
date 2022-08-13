import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotiService } from './noti.service';

describe('NotiService', () => {
  let service: NotiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotiService, PrismaService, ConfigService],
    }).compile();

    service = module.get<NotiService>(NotiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
