import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, isEnum, minLength } from 'class-validator';
import { IsCPF, IsDate } from 'brazilian-class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SexoEnum } from '../../enums/sexo.enum';
import { TipoResponsavelEnum } from '../../enums/tipo_responsavel.enum';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Contato } from 'src/contato/entities/contato.entity';
import { CreateContatoDto } from '../../contato/dto/create-contato.dto';
import { CreateEnderecoDto } from 'src/endereco/dto/create-endereco.dto';

export class CreateCriancaDto {

    @ApiProperty({ description: 'Nome da criança' })
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    nome: string;

    @ApiProperty({ description: 'CPF da criança' })
    @IsNotEmpty()
    @IsString()
    @IsCPF()
    cpf: string;

    @ApiPropertyOptional({ description: 'Sexo da criança' })
    @IsOptional()
    @IsEnum(SexoEnum)
    sexo: SexoEnum;

    @ApiProperty({ description: 'CPF da criança' })
    @IsNotEmpty()
    @IsString()
    @IsDate()
    data_nascimento: Date;

    @ApiProperty({ description: 'Nome do responsável da criança' })
    @IsNotEmpty()
    @IsString()
    nome_responsavel: string;

    @ApiProperty({ description: 'Tipo Responsável do contato' })
    @IsNotEmpty()
    @IsEnum(TipoResponsavelEnum)
    tipo_responsavel_id: TipoResponsavelEnum;

    @ApiProperty({ description: 'Id do endereço da criança' })
    @IsNotEmpty()
    endereco_id: CreateEnderecoDto;

    @ApiProperty({ description: 'Id do contato da criança' })
    @IsNotEmpty()
    contato_id: CreateContatoDto;
}
