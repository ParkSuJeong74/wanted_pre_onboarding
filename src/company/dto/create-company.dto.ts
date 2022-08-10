import { IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  name: string;

  @IsString()
  country: string;

  @IsString()
  area: string;
}
