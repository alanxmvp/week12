import {MigrationInterface, QueryRunner} from "typeorm";

export class QuoraP31560696719513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" ADD "like_count" int NOT NULL CONSTRAINT "DF_0050ef78a9e5350ecc579e26640" DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "like_count" int NOT NULL CONSTRAINT "DF_fc293ece9ffe858c9da8ef55899" DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "DF_fc293ece9ffe858c9da8ef55899"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "like_count"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "DF_0050ef78a9e5350ecc579e26640"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "like_count"`);
    }

}
