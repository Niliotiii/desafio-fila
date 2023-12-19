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
import { CriancaService } from './crianca.service';
import { CreateCriancaDto } from './dto/create-crianca.dto';
import { UpdateCriancaDto } from './dto/update-crianca.dto';

@ApiTags('crianca')
@Controller('crianca')
export class CriancaController {
  constructor(private readonly criancaService: CriancaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma crianca' })
  create(@Body() createcriancaDto: CreateCriancaDto) {
    return this.criancaService.create(createcriancaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as criancas' })
  findAll() {
    return this.criancaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma crianca por id' })
  @ApiParam({ name: 'id', description: 'ID da crianca' })
  findOne(@Param('id') id: number) {
    return this.criancaService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma crianca por id' })
  @ApiParam({ name: 'id', description: 'ID da crianca' })
  update(@Param('id') id: number, @Body() updatecriancaDto: UpdateCriancaDto) {
    return this.criancaService.update(+id, updatecriancaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma crianca por id' })
  @ApiParam({ name: 'id', description: 'ID da crianca' })
  remove(@Param('id') id: string) {
    return this.criancaService.remove(+id);
  }
}
