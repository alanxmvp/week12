import {MigrationInterface, QueryRunner} from "typeorm";

export class QuoraP41560776976302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "DF_0050ef78a9e5350ecc579e26640"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "like_count"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "DF_fc293ece9ffe858c9da8ef55899"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "like_count"`);
        await queryRunner.query(`ALTER TABLE "question" ADD "upvote_count" int NOT NULL CONSTRAINT "DF_17bb1b7fef43b058359bc25504f" DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "question" ADD "downvote_count" int NOT NULL CONSTRAINT "DF_3b08dddbaa74b8ba1ebb2035b59" DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "upvote_count" int NOT NULL CONSTRAINT "DF_0af313e582cdaacda7a23cc9c89" DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "downvote_count" int NOT NULL CONSTRAINT "DF_16d01e303db81fd2700867f8094" DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "DF_16d01e303db81fd2700867f8094"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "DF_0af313e582cdaacda7a23cc9c89"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "DF_3b08dddbaa74b8ba1ebb2035b59"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "DF_17bb1b7fef43b058359bc25504f"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "like_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "DF_fc293ece9ffe858c9da8ef55899" DEFAULT 0 FOR "like_count"`);
        await queryRunner.query(`ALTER TABLE "question" ADD "like_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "DF_0050ef78a9e5350ecc579e26640" DEFAULT 0 FOR "like_count"`);
    }

}
