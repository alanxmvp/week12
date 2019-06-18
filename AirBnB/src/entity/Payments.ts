import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Bookings } from "./bookings";

@Entity()
export class Payments {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  amount: number;

  @ManyToOne(type => Bookings, bookings => bookings.payments)
  @JoinColumn({ name: "booking_id" })
  bookings: Bookings[]

}