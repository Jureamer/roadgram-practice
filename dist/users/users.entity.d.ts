import { BaseEntity } from "typeorm";
export declare class Users extends BaseEntity {
    id: number;
    nickname: string;
    email: string;
    password: string;
    status_message: string;
    profile_image: string;
    total_follwer: number;
    total_follwing: number;
    login_method: number;
    created_at: Date;
}
