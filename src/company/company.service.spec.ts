import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto';

class MockService {
  getAll() {
    return [];
  }
  createCompany(dto: CreateCompanyDto) {
    return [];
  }
}

describe.only('CompanyService', () => {
  let service: CompanyService;

  beforeEach(async () => {
    const mockProvider = { provide: CompanyService, useClass: MockService };
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyService, PrismaService, ConfigService, mockProvider],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a company', async () => {
      const createCompanySpy = jest.spyOn(service, 'createCompany');
      const dto = new CreateCompanyDto();
      service.createCompany(dto);
      expect(createCompanySpy).toHaveBeenCalledWith(dto);
    });
  });
});
