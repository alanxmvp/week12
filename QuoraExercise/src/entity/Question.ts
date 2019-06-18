import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Answer } from "./Answer";
import { User } from "./User";
import { Question_Votes } from "./Question_Votes";

@Entity()
export class Question {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(type => Answer, answer => answer.question)
  answer: Answer[]

  @ManyToOne(type => User, user => user.question)
  @JoinColumn({ name: "user_id" })
  user: User[]

  @OneToOne(type => Question_Votes, questionvote => questionvote.question)
  questionvote: Question_Votes[]
}
