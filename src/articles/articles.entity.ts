import { BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  total_like: number;

  @Column()
  total_comment: number;

  @Column()
  content: string;

  @Column()
  thumbnail: string;

  @Column({type: "timestamp", default: () => "now()"})
  created_at: Date;

  @Column({type: "timestamp", default: () => "now()"})
  updated_at: Date;
}