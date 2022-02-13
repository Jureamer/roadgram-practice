import { BaseEntity } from "typeorm";
export declare class Like extends BaseEntity {
    id: number;
    user_id: number;
    article_id: number;
}
