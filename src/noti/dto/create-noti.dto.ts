import { IsNumber, IsString } from 'class-validator';

export class CreateNotiDto {
  @IsString()
  company_id: string;

  @IsString()
  position: string;

  @IsNumber()
  reward: number;

  @IsString()
  description: string;

  @IsString()
  tech: string;
}
