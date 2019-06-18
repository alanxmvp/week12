import {MigrationInterface, QueryRunner} from "typeorm";

export class QuoraP51560779465475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "question__votes" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL CONSTRAINT "DF_ee38f7a4cce9a4a2709ed7debfd" DEFAULT 0, "question_id" int, "user_id" int, CONSTRAINT "PK_77ecb1e1e8fe44211feb7513d94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_5636979765043cb6541fc54f76" ON "question__votes" ("question_id") WHERE "question_id" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_fc4dfc6e6ddbe9345c11be5227" ON "question__votes" ("user_id") WHERE "user_id" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "answer__votes" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL CONSTRAINT "DF_97b38c8d5b3bdaaa3f4340c1889" DEFAULT 0, "answer_id" int, "user_id" int, CONSTRAINT "PK_1ae1dd595a3594c4381ec4db1e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_eb6c9c7140e87579af4ecb50d4" ON "answer__votes" ("answer_id") WHERE "answer_id" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_02f4dd6d34627e8ba676baee10" ON "answer__votes" ("user_id") WHERE "user_id" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "DF_17bb1b7fef43b058359bc25504f"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "DF_3b08dddbaa74b8ba1ebb2035b59"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "DF_0af313e582cdaacda7a23cc9c89"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "DF_16d01e303db81fd2700867f8094"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "question__votes" ADD CONSTRAINT "FK_5636979765043cb6541fc54f763" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question__votes" ADD CONSTRAINT "FK_fc4dfc6e6ddbe9345c11be5227b" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer__votes" ADD CONSTRAINT "FK_eb6c9c7140e87579af4ecb50d48" FOREIGN KEY ("answer_id") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer__votes" ADD CONSTRAINT "FK_02f4dd6d34627e8ba676baee10a" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer__votes" DROP CONSTRAINT "FK_02f4dd6d34627e8ba676baee10a"`);
        await queryRunner.query(`ALTER TABLE "answer__votes" DROP CONSTRAINT "FK_eb6c9c7140e87579af4ecb50d48"`);
        await queryRunner.query(`ALTER TABLE "question__votes" DROP CONSTRAINT "FK_fc4dfc6e6ddbe9345c11be5227b"`);
        await queryRunner.query(`ALTER TABLE "question__votes" DROP CONSTRAINT "FK_5636979765043cb6541fc54f763"`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "downvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "DF_16d01e303db81fd2700867f8094" DEFAULT 0 FOR "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "upvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "DF_0af313e582cdaacda7a23cc9c89" DEFAULT 0 FOR "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "question" ADD "downvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "DF_3b08dddbaa74b8ba1ebb2035b59" DEFAULT 0 FOR "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "question" ADD "upvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "DF_17bb1b7fef43b058359bc25504f" DEFAULT 0 FOR "upvote_count"`);
        await queryRunner.query(`DROP INDEX "REL_02f4dd6d34627e8ba676baee10" ON "answer__votes"`);
        await queryRunner.query(`DROP INDEX "REL_eb6c9c7140e87579af4ecb50d4" ON "answer__votes"`);
        await queryRunner.query(`DROP TABLE "answer__votes"`);
        await queryRunner.query(`DROP INDEX "REL_fc4dfc6e6ddbe9345c11be5227" ON "question__votes"`);
        await queryRunner.query(`DROP INDEX "REL_5636979765043cb6541fc54f76" ON "question__votes"`);
        await queryRunner.query(`DROP TABLE "question__votes"`);
    }

}
