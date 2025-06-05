import { ApiProperty } from '@nestjs/swagger';

export class ResponsePredictionDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    total_cases: number;

    @ApiProperty()
    total_deaths: number;

    @ApiProperty()
    new_cases: number;

    @ApiProperty()
    new_deaths: number;

    @ApiProperty()
    id_location: number;

    @ApiProperty({ example: '2020-01-22', description: 'Date au format ISO (YYYY-MM-DD)' })
    date_value: string;

    @ApiProperty({ required: false })
    pandemic?: string;

    constructor(entity: any) {
        this.id = entity.id;
        this.total_cases = entity.total_cases;
        this.total_deaths = entity.total_deaths;
        this.new_cases = entity.new_cases;
        this.new_deaths = entity.new_deaths;
        this.id_location = entity.id_location;
        this.pandemic = entity.pandemic;

        // Convertit la date en YYYY-MM-DD
        this.date_value = entity.date_value.toISOString().split('T')[0];
    }
}
