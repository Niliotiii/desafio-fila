import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertTipoResponsavelTable1703017319346 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO tipo_responsavel (id, nome) VALUES (1, 'Mãe'), (2, 'Pai'), (3, 'Avós'), (4, 'Outros')`,
        )
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM tipo_responsavel`)
    }

}
