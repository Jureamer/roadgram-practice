import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService){}
  
  @Get()
  async getUsers():Promise<Users[]> {
    return await this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return await this.usersService.createUser(createUserDto);
  }

  @Delete()
  async deleteUser(@Query('id') id: number): Promise<void>{
    return await this.usersService.deleteUser(id);
  }
}
