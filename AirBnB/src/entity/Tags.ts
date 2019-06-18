import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Properties_tags } from "./Properties_tags";

@Entity()
export class Tags {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @OneToMany(type => Properties_tags, properties_tags => properties_tags.tags)
  Properties_tags: Properties_tags[]

}