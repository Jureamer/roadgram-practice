import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository : UsersRepository
  ) {}
  async getUsers(): Promise<Users[]> {
    const users = await Users.find();
    console.log(users);
    return users
  }

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const {nickname, email, password, login_method} = createUserDto;
    
    const getUser = await this.usersRepository.searchUserWithEmail(email);

    if(!getUser) {
      const result = this.usersRepository.createUser(createUserDto);
      return result;
    }
  }

  async deleteUser(id: number): Promise<void> {
    const getUser = await this.usersRepository.searchUserWithId(id);
    console.log("getUser", getUser);
    if(getUser) {
      const result = await this.usersRepository.deleteUser(id);
      console.log("result", result);
    } 
  }
}
