import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateDataDto } from './dto/create-data.dto';
import { DataService } from './data.service';
import { FilterDataDto } from './dto/filter-data.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) { }

    @Post()
    Create(@Body() createDataDto: CreateDataDto) {
        return this.dataService.create(createDataDto);
    }

    @ApiQuery({ name: 'id_calendar', required: false, type: Number })
    @ApiQuery({ name: 'id_location', required: false, type: Number })
    @ApiQuery({ name: 'id_pandemie', required: false, type: Number })
    @Get()
    findAll(@Query() filters?: FilterDataDto) {
        return this.dataService.findByFilters(filters);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.dataService.findOne(id);
    }

    @Get('calendar/:id')
    findCalendar(@Param('id', ParseIntPipe) id: number) {
        return this.dataService.findByCalendarId(id);
    }

    @Get('pandemie/:id')
    findPandemie(@Param('id', ParseIntPipe) id: number) {
        return this.dataService.findByPandemieId(id);
    }

    @Get('location/:id')
    findLocation(@Param('id', ParseIntPipe) id: number) {
        return this.dataService.findByLocationId(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateDataDto: CreateDataDto) {
        return this.dataService.update(id, updateDataDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.dataService.remove(id);
    }
}
