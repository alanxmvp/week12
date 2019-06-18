import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Question } from "./Question";
import { User } from "./User";

@Entity()
export class Question_Votes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  vote_value: number;

  @OneToOne(type => Question, question => question.questionvote)
  @JoinColumn({ name: "question_id" })
  question: Question[]

  @OneToOne(type => User, user => user.answervote)
  @JoinColumn({ name: "user_id" })
  user: User[]
}
