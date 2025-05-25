import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { CalendarResponseDto } from './dto/response-calendar.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('calendars')
export class CalendarController {
    constructor(private readonly calendarService: CalendarService) { }

    @ApiOperation({ summary: 'Créer une nouvelle date (entrée dans le calendrier)' })
    @Post()
    create(@Body() createCalendarDto: CreateCalendarDto) {
        return this.calendarService.create(createCalendarDto);
    }

    @ApiOperation({ summary: 'Lister toutes les dates' })
    @Get()
    async findAll(): Promise<CalendarResponseDto[]> {
        const calendars = await this.calendarService.findAll();
        return calendars.map(calendar => new CalendarResponseDto(calendar));
    }

    @ApiOperation({ summary: 'Récupérer une date spécifique par ID' })
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<CalendarResponseDto> {
        const calendar = await this.calendarService.findOne(id);
        return new CalendarResponseDto(calendar);
    }

    @ApiOperation({ summary: 'Mettre à jour une date existante' })
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateCalendarDto: UpdateCalendarDto) {
        return this.calendarService.update(id, updateCalendarDto);
    }

    @ApiOperation({ summary: 'Supprimer une date du calendrier' })
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.calendarService.remove(id);
    }

}
