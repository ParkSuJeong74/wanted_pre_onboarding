import { IsNumber, IsString } from 'class-validator';

export class UpdateNotiDto {
  @IsString()
  position: string;

  @IsNumber()
  reward: number;

  @IsString()
  description: string;

  @IsString()
  tech: string;
}
