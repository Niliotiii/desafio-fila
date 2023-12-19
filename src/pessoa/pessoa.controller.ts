import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';

@ApiTags('pessoa')
@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma pessoa' })
  create(@Body() createPessoaDto: CreatePessoaDto) {
    return this.pessoaService.create(createPessoaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as pessoas' })
  findAll() {
    return this.pessoaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma pessoa por id' })
  @ApiParam({ name: 'id', description: 'ID da pessoa' })
  findOne(@Param('id') id: number) {
    return this.pessoaService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma pessoa por id' })
  @ApiParam({ name: 'id', description: 'ID da pessoa' })
  update(@Param('id') id: number, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaService.update(+id, updatePessoaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma pessoa por id' })
  @ApiParam({ name: 'id', description: 'ID da pessoa' })
  remove(@Param('id') id: string) {
    return this.pessoaService.remove(+id);
  }
}
