import { IsString } from 'class-validator';

export class CreateApplyDto {
  @IsString()
  user_id: string;

  @IsString()
  noti_id: string;
}
