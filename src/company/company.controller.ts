import { Body, Controller, Post } from '@nestjs/common';
import { Company } from '@prisma/client';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return await this.companyService.createCompany(createCompanyDto);
  }
}
