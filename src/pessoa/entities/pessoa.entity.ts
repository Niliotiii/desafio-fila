import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('pessoa')
export class Pessoa {
  @ApiProperty({ description: 'Id da pessoa' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Nome da pessoa' })
  @Column({ type: 'varchar', length: 200 })
  name: string;
}
