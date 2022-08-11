import { IsJSON, IsNumber, IsString } from 'class-validator';

export class NotiListsResponse {
  @IsString()
  id: string;

  @IsString()
  position: string;

  @IsNumber()
  reward: number;

  @IsString()
  tech: string;

  @IsJSON()
  Company: {
    name: string;
    country: string;
    area: string;
  };
}
