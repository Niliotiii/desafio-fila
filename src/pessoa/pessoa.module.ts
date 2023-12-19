import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { DatabaseModule } from '../database/database.module';
import { pessoaProvider } from './pessoa.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PessoaController],
  providers: [pessoaProvider, PessoaService],
})
export class PessoaModule {}
