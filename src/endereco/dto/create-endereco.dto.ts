import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEnderecoDto {
    @ApiProperty({ description: 'CEP do endereço' })
    @IsNotEmpty()
    @IsString()
    cep: string;

    @ApiProperty({ description: 'Logradouro do endereço' })
    @IsNotEmpty()
    @IsString()
    logradouro: string;

    @ApiProperty({ description: 'Número do endereço' })
    @IsNotEmpty()
    @IsNumber()
    numero: number;

    @ApiProperty({ description: 'Bairro do endereço' })
    @IsNotEmpty()
    @IsString()
    bairro: string;

    @ApiPropertyOptional({ description: 'Complemento do endereço' })
    @IsOptional()
    @IsString()
    complemento: string;

    @ApiProperty({ description: 'Município do endereço' })
    @IsNotEmpty()
    @IsString()
    municipio: string;

    @ApiProperty({ description: 'UF do endereço' })
    @IsNotEmpty()
    @IsString()
    uf: string;
}
