import { Module } from '@nestjs/common';
import { ContatoService } from './contato.service';
// import { ContatoController } from './contato.controller';
import { DatabaseModule } from '../database/database.module';
import { contatoProvider } from './contato.provider';

@Module({
  imports: [DatabaseModule],
  // controllers: [ContatoController],
  providers: [contatoProvider, ContatoService],
})
export class ContatoModule {}
