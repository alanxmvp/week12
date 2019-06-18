import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Answer } from "./Answer";
import { User } from "./User";

@Entity()
export class Answer_Votes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  vote_value: number;

  @OneToOne(type => Answer, answer => answer.answervote)
  @JoinColumn({ name: "answer_id" })
  answer: Answer[]

  @OneToOne(type => User, user => user.answervote)
  @JoinColumn({ name: "user_id" })
  user: User[]
}
