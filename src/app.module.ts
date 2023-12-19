import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CriancaModule } from './crianca/crianca.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ContatoModule } from './contato/contato.module';

@Module({
  imports: [CriancaModule, EnderecoModule, ContatoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
