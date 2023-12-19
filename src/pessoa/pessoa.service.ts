import { NotFoundException, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Repository } from 'typeorm';
import { Pessoa } from './entities/pessoa.entity';

@ApiTags('pessoas')
export class PessoaService {
  constructor(
    @Inject('PESSOA_REPOSITORY')
    private pessoaRepository: Repository<Pessoa>,
  ) {}

  @ApiOperation({ summary: 'Create a new pessoa' })
  @ApiResponse({
    status: 201,
    description: 'The pessoa has been successfully created.',
  })
  async create(createPessoaDto: CreatePessoaDto) {
    const newPessoa = this.pessoaRepository.create(createPessoaDto);
    await this.pessoaRepository.save(newPessoa);
    return newPessoa;
  }

  @ApiOperation({ summary: 'Get all pessoas' })
  @ApiResponse({
    status: 200,
    description: 'The pessoas have been successfully found.',
  })
  findAll() {
    return this.pessoaRepository.find();
  }

  @ApiOperation({ summary: 'Get a pessoa by id' })
  @ApiResponse({
    status: 200,
    description: 'The pessoa has been successfully found.',
  })
  @ApiResponse({ status: 404, description: 'Pessoa not found.' })
  findOne(id: number) {
    return this.pessoaRepository.findOne({ where: { id } });
  }

  @ApiOperation({ summary: 'Update a pessoa' })
  @ApiResponse({
    status: 200,
    description: 'The pessoa has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Pessoa not found.' })
  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    const pessoa = await this.pessoaRepository.findOne({ where: { id } });
    if (!pessoa) {
      throw new NotFoundException(`Pessoa #${id} not found`);
    }
    await this.pessoaRepository.update(id, updatePessoaDto);
    return this.pessoaRepository.findOne({ where: { id } });
  }

  @ApiOperation({ summary: 'Remove a pessoa' })
  @ApiResponse({
    status: 200,
    description: 'The pessoa has been successfully removed.',
  })
  @ApiResponse({ status: 404, description: 'Pessoa not found.' })
  async remove(id: number) {
    const pessoa = await this.pessoaRepository.findOne({ where: { id } });
    if (!pessoa) {
      throw new NotFoundException(`Pessoa #${id} not found`);
    }
    await this.pessoaRepository.remove(pessoa);
  }
}
