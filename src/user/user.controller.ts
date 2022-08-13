import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateApplyDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() name: string): Promise<User> {
    return await this.userService.createUser(name);
  }

  @Post('apply')
  async applyNoti(@Body() createApplyDtp: CreateApplyDto) {
    return await this.userService.applyNotiByUser(createApplyDtp);
  }
}
