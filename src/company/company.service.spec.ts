import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyService, PrismaService, ConfigService],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all companies', async () => {
    const result = await service.getAll();
    expect(result).toBeInstanceOf(Array);
  });

  describe('create', () => {
    it('should create new company', async () => {
      const beforeCreate = await service.getAll();
      const company = {
        name: '회사이름',
        country: '국가',
        area: '지역',
      };
      await service.createCompany(company);
      const afterCreate = await service.getAll();
      await expect(afterCreate.length).toEqual(beforeCreate.length + 1);
    });
  });
});
