import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';
import { FilterDataDto } from './dto/filter-data.dto';
import { Prisma } from '@prisma/client';
import { ResponseDataDto } from './dto/response-data.dto';

@Injectable()
export class DataService {
    constructor(private readonly databaseService: DatabaseService) { }

    async create(createDataDto: CreateDataDto): Promise<ResponseDataDto> {
        const entity = await this.databaseService.data.create({
            data: createDataDto,
        });
        return new ResponseDataDto(entity);
    }

    async findOne(id: number): Promise<ResponseDataDto> {
        const entity = await this.databaseService.data.findUnique({
            where: { id },
        });
        return new ResponseDataDto(entity);
    }

    async update(id: number, updateDataDto: UpdateDataDto): Promise<ResponseDataDto> {
        const entity = await this.databaseService.data.update({
            where: { id },
            data: updateDataDto,
        });
        return new ResponseDataDto(entity);
    }

    async remove(id: number): Promise<ResponseDataDto> {
        const entity = await this.databaseService.data.delete({
            where: { id },
        });
        return new ResponseDataDto(entity);
    }

    async findByFilters(filters?: FilterDataDto): Promise<ResponseDataDto[]> {
        const query: Prisma.dataFindManyArgs = {
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

        const results = await this.databaseService.data.findMany(query);
        return results.map((entity) => new ResponseDataDto(entity));
    }
}
