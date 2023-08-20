import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import { CovidCase } from "./covid-case.entity";
import { State } from "./state.entity";

@Entity()
export class City {
    @PrimaryColumn()
    ibgeCode: number;

    @Column()
    city: string;

    @ManyToOne(() => State, (state) => state.cities, { eager: true })
    state: State;

    @OneToMany(() => CovidCase, (covidCase) => covidCase.city)
    cases: CovidCase[];
}
