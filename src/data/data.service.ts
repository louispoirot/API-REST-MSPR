import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';

@Injectable()
export class DataService {
    constructor(private readonly databaseService: DatabaseService) { }

    async create(createDataDto: CreateDataDto) {
        return this.databaseService.data.create({
            data: createDataDto
        });
    }

    async findAll() {
        return this.databaseService.data.findMany();
    }

    async findOne(id: number) {
        return this.databaseService.data.findUnique({
            where: {
                id,
            }
        });
    }

    async update(id: number, updateDataDto: UpdateDataDto) {
        return this.databaseService.data.update({
            where: {
                id,
            },
            data: updateDataDto
        });
    }

    async remove(id: number) {
        return this.databaseService.data.delete({
            where: {
                id,
            }
        });
    }

    async findByCalendarId(id_calendar: number) {
        return this.databaseService.data.findMany({
            where: {
                id_calendar,
            }
        });
    }

    async findByLocationId(id_location: number) {
        return this.databaseService.data.findMany({
            where: {
                id_location,
            }
        });
    }

    async findByPandemieId(id_pandemie: number) {
        return this.databaseService.data.findMany({
            where: {
                id_pandemie,
            }
        });
    }

    async findByFilters(filters: {
        id_calendar?: number;
        id_location?: number;
        id_pandemie?: number;
    }) {
        return this.databaseService.data.findMany({
            where: {
                ...(filters.id_calendar !== undefined && { id_calendar: filters.id_calendar }),
                ...(filters.id_location !== undefined && { id_location: filters.id_location }),
                ...(filters.id_pandemie !== undefined && { id_pandemie: filters.id_pandemie }),
            },
        });
    }

}
