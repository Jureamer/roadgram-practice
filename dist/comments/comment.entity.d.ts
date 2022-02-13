import { BaseEntity } from "typeorm";
export declare class Comment extends BaseEntity {
    id: number;
    article_id: number;
    tag_id: number;
    order: number;
}
