import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreatePredictionDto } from './dto/create-prediction.dto';
import { UpdatePredictionDto } from './dto/update-prediction.dto';
import { Prisma } from '@prisma/client';
import { FilterPredictionDto } from './dto/filter-prediction.dto';

@Injectable()
export class PredictionService {
    constructor(private readonly databaseService: DatabaseService) { }

    async create(createPredictionDto: CreatePredictionDto) {
        return this.databaseService.prediction.create({
            data: createPredictionDto
        });
    }

    async findOne(id: number) {
        return this.databaseService.prediction.findUnique({
            where: {
                id,
            }
        });
    }

    async update(id: number, updatePredictionDto: UpdatePredictionDto) {
        return this.databaseService.prediction.update({
            where: {
                id,
            },
            data: updatePredictionDto
        });
    }

    async remove(id: number) {
        return this.databaseService.prediction.delete({
            where: {
                id,
            }
        });
    }

    async findByCalendarId(id_calendar: number) {
        return this.databaseService.prediction.findMany({
            where: {
                id_calendar,
            }
        });
    }

    async findByLocationId(id_location: number) {
        return this.databaseService.prediction.findMany({
            where: {
                id_location,
            }
        });
    }

    async findByPandemieId(id_pandemie: number) {
        return this.databaseService.prediction.findMany({
            where: {
                id_pandemie,
            }
        });
    }

    async findByFilters(filters?: FilterPredictionDto) {
        const query: Prisma.predictionFindManyArgs = {
            where: {}
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

        return this.databaseService.prediction.findMany(query);
    }

}
