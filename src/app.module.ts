import { Module } from '@nestjs/common';
import { CriancaModule } from './crianca/crianca.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ContatoModule } from './contato/contato.module';

@Module({
  imports: [CriancaModule, EnderecoModule, ContatoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
