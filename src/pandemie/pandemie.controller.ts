import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PandemieService } from './pandemie.service';
import { CreatePandemieDto } from './dto/create-pandemie.dto';
import { UpdatePandemieDto } from './dto/update-pandemie.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('Pandemie')
@Controller('pandemie')
export class PandemieController {
    constructor(private readonly pandemieService: PandemieService) { }

    @Post()
    @ApiOperation({ summary: 'Créer une nouvelle pandémie' })
    create(@Body() createPandemieDto: CreatePandemieDto) {
        return this.pandemieService.create(createPandemieDto);
    }

    @Get()
    @ApiOperation({ summary: 'Lister toutes les pandémies' })
    findAll() {
        return this.pandemieService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtenir une pandémie par son ID' })
    @ApiParam({ name: 'id', type: Number })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.pandemieService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Mettre à jour une pandémie' })
    @ApiParam({ name: 'id', type: Number })
    update(@Param('id', ParseIntPipe) id: number, @Body() updatePandemieDto: UpdatePandemieDto) {
        return this.pandemieService.update(id, updatePandemieDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer une pandémie' })
    @ApiParam({ name: 'id', type: Number })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.pandemieService.remove(id);
    }
}
