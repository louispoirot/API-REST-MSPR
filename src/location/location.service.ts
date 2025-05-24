import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
    constructor(private readonly databaseService: DatabaseService) { }

    async create(createLocationDto: CreateLocationDto) {
        return this.databaseService.location.create({
            data: createLocationDto
        })
    }

    async findAll() {
        return this.databaseService.location.findMany();
    }

    async findOne(id: number) {
        return this.databaseService.location.findUnique({
            where: {
                id,
            }
        });
    }

    async update(id: number, updateLocationDto: UpdateLocationDto) {
        return this.databaseService.location.update({
            where: {
                id,
            },
            data: updateLocationDto
        });
    }

    async remove(id: number) {
        return this.databaseService.location.delete({
            where: {
                id,
            }
        });
    }
}
