import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Question } from "./Question";
import { User } from "./User";
import { Answer_Votes } from "./Answer_Votes";

@Entity()
export class Answer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(type => Question, question => question.answer)
  @JoinColumn({ name: "question_id" })
  question: Question[]

  @ManyToOne(type => User, user => user.answer)
  @JoinColumn({ name: "user_id" })
  user: User[]

  @OneToOne(type => Answer_Votes, answervote => answervote.answer)
  answervote: Answer_Votes[]
}
