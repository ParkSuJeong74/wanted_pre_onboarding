import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService, ConfigService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all users', async () => {
    const result = await service.getAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('should return all applies', async () => {
    const result = await service.getAllApplies();
    expect(result).toBeInstanceOf(Array);
  });

  describe('create', () => {
    it('should create new user', async () => {
      const beforeCreate = await service.getAll();
      const user = {
        name: '유저이름',
      };
      await service.createUser(user);
      const afterCreate = await service.getAll();
      await expect(afterCreate.length).toEqual(beforeCreate.length + 1);
    });

    it('should create new applyNoti', async () => {
      const beforeCreate = await service.getAllApplies();
      const user = {
        user_id: '330ac66b-40ba-4a7b-b7fc-795fa6dd061c', // 이미 DB에 있는 테스트용 id
        noti_id: 'd6893040-fc94-423b-800b-0916acafe18e',
      };
      await service.applyNotiByUser(user);
      const afterCreate = await service.getAllApplies();
      await expect(afterCreate.length).toEqual(beforeCreate.length + 1);
    });
  });
});
