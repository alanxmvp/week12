import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm";
import { properties } from "./properties";

@Entity()
export class Owner {

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

  @OneToMany(type => properties, Properties => Properties.Owner)
  Properties: properties[]

}
