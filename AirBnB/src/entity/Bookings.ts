import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { properties } from "./properties";
import { Payments } from "./Payments";

@Entity()
export class Bookings {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Payments, payments => payments.bookings)
  payments: Payments[]

  @ManyToOne(type => properties, Properties => Properties.bookings)
  @JoinColumn({ name: "property_id" })
  properties: properties[]

  @Column()
  price: number;

  @ManyToOne(type => User, user => user.bookings)
  @JoinColumn({ name: "user_id" })
  user: User[]

  @Column()
  booking_date: Date;

  @Column()
  check_in: Date;

  @Column()
  check_out: Date;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
