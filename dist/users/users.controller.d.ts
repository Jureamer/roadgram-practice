import { UsersService } from './users.service';
import { Users } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<Users[]>;
    createUser(createUserDto: CreateUserDto): Promise<Users>;
    deleteUser(id: number): Promise<void>;
}
