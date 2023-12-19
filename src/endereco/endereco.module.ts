import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
// import { EnderecoController } from './endereco.controller';
import { DatabaseModule } from '../database/database.module';
import { enderecoProvider } from './endereco.provider';

@Module({
  imports: [DatabaseModule],
  // controllers: [EnderecoController],
  providers: [ enderecoProvider, EnderecoService],
})
export class EnderecoModule {}
