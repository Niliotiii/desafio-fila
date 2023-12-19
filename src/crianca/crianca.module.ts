import { Module } from '@nestjs/common';
import { CriancaService } from './crianca.service';
import { CriancaController } from './crianca.controller';
import { DatabaseModule } from '../database/database.module';
import { criancaProvider, enderecoProvider, contatoProvider } from './crianca.provider';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { ContatoModule } from 'src/contato/contato.module';

@Module({
  imports: [DatabaseModule, EnderecoModule, ContatoModule],
  controllers: [CriancaController],
  providers: [criancaProvider, enderecoProvider, contatoProvider, CriancaService],
})
export class CriancaModule {}