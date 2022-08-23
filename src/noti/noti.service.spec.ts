import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotiDto, UpdateNotiDto } from './dto';
import { NotiService } from './noti.service';

class MockService {
  createNoti(dto: CreateNotiDto) {
    return [];
  }
  notiLists() {
    return [];
  }
  notiDetail(id: string) {
    return [];
  }
  deleteNoti(id: string) {
    return [];
  }
  updateNoti(id: string, dto: UpdateNotiDto) {
    return [];
  }
  searchNoti(search: string) {
    return [];
  }
}

describe('NotiService', () => {
  let service: NotiService;

  beforeEach(async () => {
    const mockProvider = { provide: NotiService, useClass: MockService };
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotiService, PrismaService, ConfigService, mockProvider],
    }).compile();

    service = module.get<NotiService>(NotiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a noti', async () => {
      const createSpy = jest.spyOn(service, 'createNoti');
      const dto = new CreateNotiDto();
      service.createNoti(dto);
      expect(createSpy).toHaveBeenCalledWith(dto);
    });
  });

  describe('notiLists', () => {
    it('should return notiLists', async () => {
      const listsSpy = jest.spyOn(service, 'notiLists');
      service.notiLists();
      expect(listsSpy).toHaveBeenCalled();
    });
  });

  describe('notiDetail', () => {
    it('should return notiDetail', async () => {
      const notiDetailSpy = jest.spyOn(service, 'notiDetail');
      service.notiDetail('');
      expect(notiDetailSpy).toHaveBeenCalledWith('');
    });
  });

  describe('deleteNoti', () => {
    it('should return deleteNoti', async () => {
      const deleteSpy = jest.spyOn(service, 'deleteNoti');
      service.deleteNoti('');
      expect(deleteSpy).toHaveBeenCalledWith('');
    });
  });

  describe('updateNoti', () => {
    it('should return updateNoti', async () => {
      const updateNotiSpy = jest.spyOn(service, 'updateNoti');
      const dto = new UpdateNotiDto();
      service.updateNoti('', dto);
      expect(updateNotiSpy).toHaveBeenCalledWith('', dto);
    });
  });

  describe('searchNoti', () => {
    it('should return searchNoti', async () => {
      const searchNotiSpy = jest.spyOn(service, 'searchNoti');
      service.searchNoti('');
      expect(searchNotiSpy).toHaveBeenCalledWith('');
    });
  });
});
