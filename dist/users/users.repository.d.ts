import { Repository } from "typeorm";
import { Users } from "./users.entity";
export declare class UsersRepository extends Repository<Users> {
    createUser(userInfo: any): Promise<any>;
    searchUserWithEmail(email: any): Promise<boolean>;
    searchUserWithId(id: any): Promise<boolean>;
    deleteUser(id: any): Promise<void>;
}
