import { NotFoundException, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCriancaDto } from './dto/create-crianca.dto';
import { UpdateCriancaDto } from './dto/update-crianca.dto';
import { Repository } from 'typeorm';
import { Crianca } from './entities/crianca.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Contato } from 'src/contato/entities/contato.entity';

@ApiTags('crianca')
export class CriancaService {
  constructor(
    @Inject('CRIANCA_REPOSITORY')
    private criancaRepository: Repository<Crianca>,
    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>,
    @Inject('CONTATO_REPOSITORY')
    private contatoRepository: Repository<Contato>,
  ) {}

  @ApiOperation({ summary: 'Cria um novo registro' })
  @ApiResponse({
    status: 201,
    description: 'Registro criado com sucesso',
  })
  async create(createCriancaDto: CreateCriancaDto) {
    console.log(createCriancaDto)
    const newEndereco = this.enderecoRepository.create(createCriancaDto.endereco_id);
    await this.enderecoRepository.save(newEndereco);
  
    const newContato = this.contatoRepository.create(createCriancaDto.contato_id);
    await this.contatoRepository.save(newContato);
  
    const newCrianca = this.criancaRepository.create({
      ...createCriancaDto,
      endereco: newEndereco,
      contato: newContato,
    });

    console.log(newCrianca)

    await this.criancaRepository.save(newCrianca);
    return newCrianca;
  }

  @ApiOperation({ summary: 'Busca todos os registros' })
  @ApiResponse({
    status: 200,
    description: 'Todos os registros buscados com sucesso',
  })
  findAll() {
    return this.criancaRepository.find();
  }

  @ApiOperation({ summary: 'Busca registro por id' })
  @ApiResponse({
    status: 200,
    description: 'Registro buscado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Registro não existe' })
  findOne(id: number) {
    return this.criancaRepository.findOne({ where: { id } });
  }

  @ApiOperation({ summary: 'Atualiza um registro' })
  @ApiResponse({
    status: 200,
    description: 'Registro atualizado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'O registro não existe' })
  async update(id: number, updateCriancaDto: UpdateCriancaDto) {
    // const crianca = await this.criancaRepository.findOne({ where: { id } });
    // if (!crianca) {
    //   throw new NotFoundException(`Registro #${id} não existe`);
    // }
    // await this.criancaRepository.update(id, updateCriancaDto);
    return this.criancaRepository.findOne({ where: { id } });
  }

  @ApiOperation({ summary: 'Remove um registro' })
  @ApiResponse({
    status: 200,
    description: 'Registro removido com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Registro não existe' })
  async remove(id: number) {
    const crianca = await this.criancaRepository.findOne({ where: { id } });
    if (!crianca) {
      throw new NotFoundException(`Registro #${id} não existe`);
    }
    await this.criancaRepository.remove(crianca);
  }
}
