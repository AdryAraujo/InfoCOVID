import { Entity, PrimaryColumn, OneToMany } from "typeorm";
import { City } from "./city.entity";

@Entity()
export class State {
    @PrimaryColumn({ type: "varchar", length: 2 })
    state: string;

    @OneToMany(() => City, (city) => city.state)
    cities: City[];
}
