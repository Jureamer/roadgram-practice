import { BaseEntity } from "typeorm";
export declare class Article extends BaseEntity {
    id: number;
    user_id: number;
    total_like: number;
    total_comment: number;
    content: string;
    thumbnail: string;
    created_at: Date;
    updated_at: Date;
}
