import { DataSource } from 'typeorm';
import { Contato } from './entities/contato.entity';

export const contatoProvider = {
  provide: 'CONTATO_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Contato),
  inject: ['DATA_SOURCE'],
};
