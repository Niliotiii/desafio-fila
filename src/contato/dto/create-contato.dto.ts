import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, isEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TipoResponsavelEnum } from '../../enums/tipo_responsavel.enum';

export class CreateContatoDto {
    @ApiProperty({ description: 'Telefone do contato' })
    @IsNotEmpty()
    @IsString()
    telefone: string;

    @ApiProperty({ description: 'Tipo Responsável do contato' })
    @IsNotEmpty()
    @IsEnum(TipoResponsavelEnum)
    tipo_responsavel_id: TipoResponsavelEnum;
}
