import { NotFoundException, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { Repository } from 'typeorm';
import { Contato } from './entities/contato.entity';

@ApiTags('contato')
export class ContatoService {
  constructor(
    @Inject('CONTATO_REPOSITORY')
    private contatoRepository: Repository<Contato>,
  ) {}

  @ApiOperation({ summary: 'Cria um novo registro' })
  @ApiResponse({
    status: 201,
    description: 'Registro criado com sucesso',
  })
  async create(createContatoDto: CreateContatoDto) {
    const newContato = this.contatoRepository.create(createContatoDto);
    await this.contatoRepository.save(newContato);
    return newContato;
  }

  @ApiOperation({ summary: 'Busca todos os registros' })
  @ApiResponse({
    status: 200,
    description: 'Todos os registros buscados com sucesso',
  })
  findAll() {
    return this.contatoRepository.find();
  }

  @ApiOperation({ summary: 'Busca registro por id' })
  @ApiResponse({
    status: 200,
    description: 'Registro buscado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Registro não existe' })
  findOne(id: number) {
    return this.contatoRepository.findOne({ where: { id } });
  }

  @ApiOperation({ summary: 'Atualiza um registro' })
  @ApiResponse({
    status: 200,
    description: 'Registro atualizado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'O registro não existe' })
  async update(id: number, updateContatoDto: UpdateContatoDto) {
    const Contato = await this.contatoRepository.findOne({ where: { id } });
    if (!Contato) {
      throw new NotFoundException(`Registro #${id} não existe`);
    }
    await this.contatoRepository.update(id, updateContatoDto);
    return this.contatoRepository.findOne({ where: { id } });
  }

  @ApiOperation({ summary: 'Remove um registro' })
  @ApiResponse({
    status: 200,
    description: 'Registro removido com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Registro não existe' })
  async remove(id: number) {
    const Contato = await this.contatoRepository.findOne({ where: { id } });
    if (!Contato) {
      throw new NotFoundException(`Registro #${id} não existe`);
    }
    await this.contatoRepository.remove(Contato);
  }
}
