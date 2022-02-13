import { BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column({unique: true})
  email: string;

  @Column({nullable: false})
  password: string;

  @Column({default: ""})
  status_message: string;

  @Column({default: ""})
  profile_image: string;

  @Column( {default: 0})
  total_follwer: number;

  @Column( {default: 0})
  total_follwing: number;

  @Column()
  login_method: number;

  @Column({type: "timestamp", default: () => "now()"})
  created_at: Date;
}

  
  