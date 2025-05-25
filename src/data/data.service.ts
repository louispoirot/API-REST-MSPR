import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';
import { Prisma } from '@prisma/client';
import { FilterDataDto } from './dto/filter-data.dto';

@Injectable()
export class DataService {
    constructor(private readonly databaseService: DatabaseService) { }

    async create(createDataDto: CreateDataDto) {
        return this.databaseService.data.create({
            data: createDataDto
        });
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

    async findByFilters(filters?: FilterDataDto) {
        const query: Prisma.dataFindManyArgs = {
            where: {},
        };

        if (filters?.id_calendar) {
            query.where!.id_calendar = filters!.id_calendar;
        }

        if (filters?.id_location) {
            query.where!.id_location = filters!.id_location;
        }

        if (filters?.id_pandemie) {
            query.where!.id_pandemie = filters!.id_pandemie;
        }

        return this.databaseService.data.findMany(query);
    }

}
