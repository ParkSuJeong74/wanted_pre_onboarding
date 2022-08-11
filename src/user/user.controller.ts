import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async applyNoti(@Body() name: string) {
    return await this.userService.createNoti(name);
  }
}
