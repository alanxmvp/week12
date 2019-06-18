import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Owner } from "./Owner";
import { Properties_tags } from "./Properties_tags";
import { Bookings } from "./Bookings";

@Entity()
export class properties {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @ManyToOne(type => Owner, owner => owner.Properties)
  @JoinColumn({ name: "owner_id" })
  Owner: Owner[]

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(type => Bookings, bookings => bookings.properties)
  bookings: Bookings[]

  @ManyToMany(type => Properties_tags, properties_tags => properties_tags.properties)
  properties_tags: Properties_tags[]
}