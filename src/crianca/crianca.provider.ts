import { DataSource } from 'typeorm';
import { Crianca } from './entities/crianca.entity';
import { Endereco } from '../endereco/entities/endereco.entity';
import { Contato } from '../contato/entities/contato.entity';

export const criancaProvider = {
  provide: 'CRIANCA_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Crianca),
  inject: ['DATA_SOURCE'],
};

export const enderecoProvider = {
  provide: 'ENDERECO_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Endereco),
  inject: ['DATA_SOURCE'],
};

export const contatoProvider = {
  provide: 'CONTATO_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Contato),
  inject: ['DATA_SOURCE'],
};