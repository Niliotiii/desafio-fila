// import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePessoaDto {
  @ApiProperty({ description: 'Id da pessoa' })
  // @IsNotEmpty()
  // @IsString()
  id: number;

  @ApiProperty({ description: 'Nome da pessoa' })
  // @IsNotEmpty()
  // @IsString()
  name: string;
}
