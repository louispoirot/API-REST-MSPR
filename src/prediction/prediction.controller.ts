import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePredictionDto } from './dto/create-prediction.dto';
import { PredictionService } from './prediction.service';
import { FilterPredictionDto } from './dto/filter-prediction.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { UpdatePredictionDto } from './dto/update-prediction.dto';

@Controller('predictions')
export class PredictionController {
    constructor(private readonly predictionService: PredictionService) { }

    @ApiOperation({ summary: 'Créer une nouvelle entrée de données statistiques' })
    @Post()
    Create(@Body() createPredictionDto: CreatePredictionDto) {
        return this.predictionService.create(createPredictionDto);
    }

    @ApiOperation({ summary: 'Lister toutes les données avec filtres optionnels (calendar, location, pandemie)' })
    @ApiQuery({ name: 'id_calendar', required: false, type: Number })
    @ApiQuery({ name: 'id_location', required: false, type: Number })
    @ApiQuery({ name: 'id_pandemie', required: false, type: Number })
    @Get()
    findAll(@Query() filters?: FilterPredictionDto) {
        return this.predictionService.findByFilters(filters);
    }

    @ApiOperation({ summary: 'Récupérer une donnée spécifique par son ID' })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.predictionService.findOne(id);
    }

    @ApiOperation({ summary: 'Lister les données associées à une date précise (id_calendar)' })
    @Get('calendar/:id')
    findCalendar(@Param('id', ParseIntPipe) id: number) {
        return this.predictionService.findByCalendarId(id);
    }

    @ApiOperation({ summary: 'Lister les données associées à une pandémie précise (id_pandemie)' })
    @Get('pandemie/:id')
    findPandemie(@Param('id', ParseIntPipe) id: number) {
        return this.predictionService.findByPandemieId(id);
    }

    @ApiOperation({ summary: 'Lister les données associées à une localisation précise (id_location)' })
    @Get('location/:id')
    findLocation(@Param('id', ParseIntPipe) id: number) {
        return this.predictionService.findByLocationId(id);
    }

    @ApiOperation({ summary: 'Mettre à jour une donnée existante' })
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updatePredictionDto: UpdatePredictionDto) {
        return this.predictionService.update(id, updatePredictionDto);
    }

    @ApiOperation({ summary: 'Supprimer une donnée existante' })
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.predictionService.remove(id);
    }

}