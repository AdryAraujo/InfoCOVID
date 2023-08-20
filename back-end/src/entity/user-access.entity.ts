import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserAccess {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    latitude: string;
  
    @Column()
    longitude: string;

    @ManyToOne(() => User, (user) => user.accesses)
    user: User;
}
