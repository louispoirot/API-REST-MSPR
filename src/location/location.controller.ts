import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('Location')
@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) { }

    @Post()
    @ApiOperation({ summary: 'Créer une nouvelle localisation' })
    create(@Body() createLocationDto: CreateLocationDto) {
        return this.locationService.create(createLocationDto);
    }

    @Get()
    @ApiOperation({ summary: 'Récupérer toutes les localisations' })
    findAll() {
        return this.locationService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Récupérer une localisation par ID' })
    @ApiParam({ name: 'id', type: Number })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.locationService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Mettre à jour une localisation par ID' })
    @ApiParam({ name: 'id', type: Number })
    update(@Param('id', ParseIntPipe) id: number, @Body() updateLocationDto: UpdateLocationDto) {
        return this.locationService.update(id, updateLocationDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer une localisation par ID' })
    @ApiParam({ name: 'id', type: Number })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.locationService.remove(id);
    }
}
