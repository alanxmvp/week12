import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm";
import { Bookings } from "./Bookings";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact_no: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(type => Bookings, bookings => bookings.user)
    bookings: Bookings[]

}
