import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateDataDto } from './dto/create-data.dto';
import { DataService } from './data.service';
import { FilterDataDto } from './dto/filter-data.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { UpdateDataDto } from './dto/update-data.dto';

@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) { }

    @ApiOperation({ summary: 'Créer une nouvelle entrée de données statistiques' })
    @Post()
    Create(@Body() createDataDto: CreateDataDto) {
        return this.dataService.create(createDataDto);
    }

    @ApiOperation({ summary: 'Lister toutes les données avec filtres optionnels (calendar, location, pandemie)' })
    @ApiQuery({ name: 'id_calendar', required: false, type: Number })
    @ApiQuery({ name: 'id_location', required: false, type: Number })
    @ApiQuery({ name: 'id_pandemie', required: false, type: Number })
    @Get()
    findAll(@Query() filters?: FilterDataDto) {
        return this.dataService.findByFilters(filters);
    }

    @ApiOperation({ summary: 'Récupérer une donnée spécifique par son ID' })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.dataService.findOne(id);
    }

    @ApiOperation({ summary: 'Mettre à jour une donnée existante' })
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateDataDto: UpdateDataDto) {
        return this.dataService.update(id, updateDataDto);
    }

    @ApiOperation({ summary: 'Supprimer une donnée existante' })
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.dataService.remove(id);
    }

}
