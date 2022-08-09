import { IsNumber, IsString } from 'class-validator';

export class CreateNotiDto {
  @IsNumber()
  company_id: number;

  @IsString()
  position: string;

  @IsNumber()
  reward: number;

  @IsString()
  description: string;

  @IsString()
  tech: string;
}
