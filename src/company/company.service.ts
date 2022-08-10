import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto';

@Injectable()
export class CompanyService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCompany(createCompanyDto: CreateCompanyDto) {
    const { name, country, area } = createCompanyDto;
    return await this.prismaService.company.create({
      data: {
        name,
        country,
        area,
      },
    });
  }
}
