import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';

@Injectable()
export class CalendarService {
    constructor(private readonly databaseService: DatabaseService) { }

    async create(createCalendarDto: CreateCalendarDto) {
        return this.databaseService.calendar.create({
            data: createCalendarDto
        })
    }

    async findAll() {
        return this.databaseService.calendar.findMany();
    }

    async findOne(id: number) {
        return this.databaseService.calendar.findUnique({
            where: {
                id,
            }
        });
    }

    async update(id: number, updateCalendarDto: UpdateCalendarDto) {
        return this.databaseService.calendar.update({
            where: {
                id,
            },
            data: updateCalendarDto
        });
    }

    async remove(id: number) {
        return this.databaseService.calendar.delete({
            where: {
                id,
            }
        });
    }

}
