import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { TipoResponsavelEnum } from '../../enums/tipo_responsavel.enum';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Contato } from 'src/contato/entities/contato.entity';

@Entity('crianca')
export class Crianca {
    @ApiProperty({ description: 'Id da criança' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'Nome da criança' })
    @Column({ type: 'varchar', length: 50 })
    nome: string;

    @ApiProperty({ description: 'CPF da criança' })
    @Column({ type: 'varchar', length: 50 })
    cpf: string;

    @ApiProperty({ description: 'Sexo da criança' })
    @Column({ type: 'varchar', length: 50 })
    sexo: string;

    @ApiProperty({ description: 'Data de nascimento da criança' })
    @Column({ type: 'varchar', length: 50 })
    data_nascimento: Date;

    @ApiProperty({ description: 'Nome do responsável da criança' })
    @Column({ type: 'varchar', length: 50 })
    nome_responsavel: string;

    @ApiProperty({ description: 'Tipo Responsável da criança' })
    @Column({
        type: "enum",
        enum: TipoResponsavelEnum,
        default: TipoResponsavelEnum.Mãe,
    })
    tipo_responsavel_id: TipoResponsavelEnum;

    @ManyToOne(() => Endereco)
    @ApiProperty({ description: 'Id do endereço da criança' })
    @JoinColumn({ name: 'endereco_id', referencedColumnName: 'id' })
    @Column({ type: 'int' })
    endereco_id:Endereco;

    @ManyToOne(() => Contato)
    @ApiProperty({ description: 'Id do contato da criança' })
    @JoinColumn({ name: 'contato_id', referencedColumnName: 'id' })
    @Column({ type: 'int' })
    contato_id:Endereco;
  newCrianca: Contato;
}
