import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { City } from "./city.entity";

export enum PlaceType {
    CITY = "city",
    STATE = "state"
}

@Entity()
export class CovidCase {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => City, (city) => city.cases, { eager: true })
    city: City;

    @Column({ type: "date" })
    date: string;

    @Column({ type: "varchar", length: 6 })
    epidemiologicalWeek: string;

    @Column({ type: "integer" })
    estimatedPopulation2019: number;

    @Column({ type: "boolean" })
    isLast: boolean;

    @Column({ type: "boolean" })
    isRepeated: boolean;

    @Column({ type: "integer" })
    lastAvailableConfirmed: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    lastAvailableConfirmedPer100kInhabitants: number;

    @Column({ type: "date" })
    lastAvailableDate: string;

    @Column({ type: "decimal", precision: 3, scale: 2 })
    lastAvailableDeathRate: number;

    @Column({ type: "integer" })
    lastAvailableDeaths: number;

    @Column({ type: "integer" })
    orderForPlace: number;

    @Column({ type: "enum", enum: PlaceType })
    placeType: PlaceType;

    @Column({ type: "integer" })
    newConfirmed: number;

    @Column({ type: "integer" })
    newDeaths: number;
}
