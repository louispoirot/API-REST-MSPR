import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { CreatePredictionDto } from './dto/create-prediction.dto';
import { UpdatePredictionDto } from './dto/update-prediction.dto';
import { PredictionService } from './prediction.service';
import { FilterDataDto } from '../data/dto/filter-data.dto';
import { ResponsePredictionDto } from './dto/response-prediction.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('prediction')
@Controller('prediction')
export class PredictionController {
    constructor(private readonly predictionService: PredictionService) { }

    @ApiOperation({ summary: 'Créer une prédiction statistique' })
    @Post()
    create(@Body() createDto: CreatePredictionDto): Promise<ResponsePredictionDto> {
        return this.predictionService.create(createDto);
    }

    @ApiOperation({ summary: 'Lister les prédictions avec filtres optionnels' })
    @ApiQuery({ name: 'id_location', required: false, type: Number })
    @ApiQuery({ name: 'pandemic', required: false, type: String })
    @ApiQuery({ name: 'date_value', required: false, type: String, description: 'Date au format YYYY-MM-DD' })
    @Get()
    findAll(@Query() filters?: FilterDataDto): Promise<ResponsePredictionDto[]> {
        return this.predictionService.findByFilters(filters);
    }

    @ApiOperation({ summary: 'Récupérer une prédiction par ID' })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<ResponsePredictionDto> {
        return this.predictionService.findOne(id);
    }

    @ApiOperation({ summary: 'Mettre à jour une prédiction existante' })
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdatePredictionDto,
    ): Promise<ResponsePredictionDto> {
        return this.predictionService.update(id, updateDto);
    }

    @ApiOperation({ summary: 'Supprimer une prédiction existante' })
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<ResponsePredictionDto> {
        return this.predictionService.remove(id);
    }
}
