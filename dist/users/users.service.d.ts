import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): Promise<Users[]>;
    createUser(createUserDto: CreateUserDto): Promise<Users>;
    deleteUser(id: number): Promise<void>;
}
