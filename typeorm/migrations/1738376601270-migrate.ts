import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migrate1738376601270 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [{
                name: "id",
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
                unsigned: true
            }, {
                name: "name",
                type: "varchar",
                length: "63"
            }]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
