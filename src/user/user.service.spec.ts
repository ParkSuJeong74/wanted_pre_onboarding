import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateApplyDto } from './dto';
import { UserService } from './user.service';

class MockService {
  createUser(name: string) {
    return [];
  }
  applyNotiByUser(dto: CreateApplyDto) {
    return [];
  }
}

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const mockProvider = { provide: UserService, useClass: MockService };
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService, ConfigService, mockProvider],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      const createCompanySpy = jest.spyOn(service, 'createUser');
      service.createUser('');
      expect(createCompanySpy).toHaveBeenCalledWith('');
    });
  });

  describe('applyNoti', () => {
    it('should create a applyNoti', async () => {
      const createCompanySpy = jest.spyOn(service, 'applyNotiByUser');
      const dto = new CreateApplyDto();
      service.applyNotiByUser(dto);
      expect(createCompanySpy).toHaveBeenCalledWith(dto);
    });
  });
});
