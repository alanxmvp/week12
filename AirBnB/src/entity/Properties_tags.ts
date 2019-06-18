import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { properties } from "./properties";
import { Tags } from "./Tags";

@Entity()
export class Properties_tags {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Tags, tags => tags.Properties_tags)
  @JoinColumn({ name: "tag_id" })
  tags: Tags[]

  @ManyToMany(type => properties, Properties => Properties.properties_tags)
  @JoinColumn({ name: "property_id" })
  properties: properties[]

}
