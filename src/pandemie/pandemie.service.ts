import { Injectable } from '@nestjs/common';
import { CreatePandemieDto } from './dto/create-pandemie.dto';
import { UpdatePandemieDto } from './dto/update-pandemie.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PandemieService {
    constructor(private readonly databaseService: DatabaseService) { }

    async create(createPandemieDto: CreatePandemieDto) {
        return this.databaseService.pandemie.create({
            data: createPandemieDto,
        });
    }

    async findAll() {
        return this.databaseService.pandemie.findMany();
    }

    async findOne(id: number) {
        return this.databaseService.pandemie.findUnique({
            where: { id },
        });
    }

    async update(id: number, updatePandemieDto: UpdatePandemieDto) {
        return this.databaseService.pandemie.update({
            where: { id },
            data: updatePandemieDto,
        });
    }

    async remove(id: number) {
        return this.databaseService.pandemie.delete({
            where: { id },
        });
    }
}
