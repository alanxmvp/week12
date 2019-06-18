import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import { Answer } from "./Answer";
import { Question } from "./Question";
import { Answer_Votes } from "./Answer_Votes";
import { Question_Votes } from "./Question_Votes";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => Answer, answer => answer.user)
  answer: Answer[]

  @OneToMany(type => Question, question => question.user)
  question: Question[]

  @OneToOne(type => Answer_Votes, answervote => answervote.user)
  answervote: Answer_Votes[]

  @OneToOne(type => Question_Votes, questionvote => questionvote.user)
  questionvote: Question_Votes[]
}
