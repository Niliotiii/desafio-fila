import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('endereco')
export class Endereco {
    @ApiProperty({ description: 'Id do endereço' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'CEP do endereço' })
    @Column({ type: 'varchar', length: 50 })
    cep: string;

    @ApiProperty({ description: 'Logradouro do endereço' })
    @Column({ type: 'varchar', length: 100 })
    logradouro: string;

    @ApiProperty({ description: 'Número do endereço' })
    @Column({ type: 'int'})
    numero: number;

    @ApiProperty({ description: 'Bairro do endereço' })
    @Column({ type: 'varchar', length: 100 })
    bairro: string;

    @ApiProperty({ description: 'Complemento do endereço' })
    @Column({ type: 'varchar', length: 200 })
    complemento: string;

    @ApiProperty({ description: 'Município do endereço' })
    @Column({ type: 'varchar', length: 100 })
    municipio: string;

    @ApiProperty({ description: 'UF do endereço' })
    @Column({ type: 'varchar', length: 50 })
    uf: string;
}