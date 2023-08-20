import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { UserAccess } from "./user-access.entity";

@Entity()
export class User {
    @PrimaryColumn()
    uid: string;

    @OneToMany(() => UserAccess, (access) => access.user)
    accesses: UserAccess[];
}
