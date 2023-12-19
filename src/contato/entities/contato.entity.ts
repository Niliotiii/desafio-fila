import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { TipoResponsavelEnum } from '../../enums/tipo_responsavel.enum';

@Entity('contato')
export class Contato {
    @ApiProperty({ description: 'Id do contato' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'Telefone do contato' })
    @Column({ type: 'varchar', length: 50 })
    telefone: string;

    @ApiProperty({ description: 'Id do tipo_responsavel do contato' })
    @Column({
        type: "enum",
        enum: TipoResponsavelEnum,
        default: TipoResponsavelEnum.Mãe,
    })
    tipo_responsavel_id: TipoResponsavelEnum;
}
