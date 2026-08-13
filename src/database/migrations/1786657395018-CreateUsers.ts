import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1786657395018 implements MigrationInterface {
    name = 'CreateUsers1786657395018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test"`);
    }

}
