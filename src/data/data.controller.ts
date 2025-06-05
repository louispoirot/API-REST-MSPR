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
import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';
import { DataService } from './data.service';
import { FilterDataDto } from './dto/filter-data.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseDataDto } from './dto/response-data.dto';

@ApiTags('data')
@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) { }

    @ApiOperation({ summary: 'Créer une nouvelle entrée de données statistiques' })
    @Post()
    async create(@Body() createDataDto: CreateDataDto): Promise<ResponseDataDto> {
        return this.dataService.create(createDataDto);
    }

    @ApiOperation({ summary: 'Lister les données avec filtres optionnels' })
    @ApiQuery({ name: 'id_location', required: false, type: Number })
    @ApiQuery({ name: 'pandemic', required: false, type: String })
    @ApiQuery({ name: 'date_value', required: false, type: String, description: 'Date au format YYYY-MM-DD' })
    @Get()
    async findAll(@Query() filters?: FilterDataDto): Promise<ResponseDataDto[]> {
        return this.dataService.findByFilters(filters);
    }

    @ApiOperation({ summary: 'Récupérer une donnée par son ID' })
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<ResponseDataDto> {
        return this.dataService.findOne(id);
    }

    @ApiOperation({ summary: 'Mettre à jour une donnée existante' })
    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDataDto: UpdateDataDto,
    ): Promise<ResponseDataDto> {
        return this.dataService.update(id, updateDataDto);
    }

    @ApiOperation({ summary: 'Supprimer une donnée existante' })
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<ResponseDataDto> {
        return this.dataService.remove(id);
    }
}
