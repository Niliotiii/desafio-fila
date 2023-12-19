import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCriancaTable1703010919542 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'crianca',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'sexo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'data_nascimento',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'nome_responsavel',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'contato_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'endereco_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'tipo_responsavel_id',
            type: 'int',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['contato_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'contato',
          },
          {
            columnNames: ['endereco_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'endereco',
          },
          {
            columnNames: ['tipo_responsavel_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipo_responsavel',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('crianca');
  }
}
