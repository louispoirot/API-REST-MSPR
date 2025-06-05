import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreatePredictionDto } from './dto/create-prediction.dto';
import { UpdatePredictionDto } from './dto/update-prediction.dto';
import { FilterDataDto } from '../data/dto/filter-data.dto';
import { ResponsePredictionDto } from './dto/response-prediction.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PredictionService {
    constructor(private readonly databaseService: DatabaseService) { }

    async create(createPredictionDto: CreatePredictionDto): Promise<ResponsePredictionDto> {
        const entity = await this.databaseService.prediction.create({
            data: createPredictionDto,
        });
        return new ResponsePredictionDto(entity);
    }

    async findOne(id: number): Promise<ResponsePredictionDto> {
        const entity = await this.databaseService.prediction.findUnique({
            where: { id },
        });
        return new ResponsePredictionDto(entity);
    }

    async update(id: number, updateDto: UpdatePredictionDto): Promise<ResponsePredictionDto> {
        const entity = await this.databaseService.prediction.update({
            where: { id },
            data: updateDto,
        });
        return new ResponsePredictionDto(entity);
    }

    async remove(id: number): Promise<ResponsePredictionDto> {
        const entity = await this.databaseService.prediction.delete({
            where: { id },
        });
        return new ResponsePredictionDto(entity);
    }

    async findByFilters(filters?: FilterDataDto): Promise<ResponsePredictionDto[]> {
        const query: Prisma.predictionFindManyArgs = {
            where: {},
        };

        if (filters?.id_location) {
            query.where!.id_location = filters.id_location;
        }

        if (filters?.pandemic) {
            query.where!.pandemic = filters.pandemic;
        }

        if (filters?.date_value) {
            query.where!.date_value = new Date(filters.date_value);
        }

        const results = await this.databaseService.prediction.findMany(query);
        return results.map((e) => new ResponsePredictionDto(e));
    }
}
