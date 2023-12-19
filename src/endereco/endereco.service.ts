import { NotFoundException, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Repository } from 'typeorm';
import { Endereco } from './entities/endereco.entity';

@ApiTags('endereco')
export class EnderecoService {
  constructor(
    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>,
  ) {}

  @ApiOperation({ summary: 'Cria um novo registro' })
  @ApiResponse({
    status: 201,
    description: 'Registro criado com sucesso',
  })
  async create(createEnderecoDto: CreateEnderecoDto) {
    const newEndereco = this.enderecoRepository.create(createEnderecoDto);
    await this.enderecoRepository.save(newEndereco);
    return newEndereco;
  }

  @ApiOperation({ summary: 'Busca todos os registros' })
  @ApiResponse({
    status: 200,
    description: 'Todos os registros buscados com sucesso',
  })
  findAll() {
    return this.enderecoRepository.find();
  }

  @ApiOperation({ summary: 'Busca registro por id' })
  @ApiResponse({
    status: 200,
    description: 'Registro buscado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Registro não existe' })
  findOne(id: number) {
    return this.enderecoRepository.findOne({ where: { id } });
  }

  @ApiOperation({ summary: 'Atualiza um registro' })
  @ApiResponse({
    status: 200,
    description: 'Registro atualizado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'O registro não existe' })
  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    const endereco = await this.enderecoRepository.findOne({ where: { id } });
    if (!endereco) {
      throw new NotFoundException(`Registro #${id} não existe`);
    }
    await this.enderecoRepository.update(id, updateEnderecoDto);
    return this.enderecoRepository.findOne({ where: { id } });
  }

  @ApiOperation({ summary: 'Remove um registro' })
  @ApiResponse({
    status: 200,
    description: 'Registro removido com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Registro não existe' })
  async remove(id: number) {
    const endereco = await this.enderecoRepository.findOne({ where: { id } });
    if (!endereco) {
      throw new NotFoundException(`Registro #${id} não existe`);
    }
    await this.enderecoRepository.remove(endereco);
  }
}
