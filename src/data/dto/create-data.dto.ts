import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateDataDto {
    @ApiProperty({ example: 1500, description: 'Nombre total de cas confirmé' })
    @IsInt()
    @IsNotEmpty()
    total_cases: number;

    @ApiProperty({ example: 100, description: 'Nombre total de décès' })
    @IsInt()
    @IsNotEmpty()
    total_deaths: number;

    @ApiProperty({ example: 50, description: 'Nombre de cas confirmé pendant cette date' })
    @IsInt()
    @IsNotEmpty()
    new_cases: number;

    @ApiProperty({ example: 5, description: 'Nombre de décès pendant cette date' })
    @IsInt()
    @IsNotEmpty()
    new_deaths: number;

    @ApiProperty({ example: 1, description: 'ID de la localisation' })
    @IsInt()
    @IsPositive()
    id_location: number;

    @ApiProperty({ example: 1, description: 'ID de la pandémie' })
    @IsInt()
    @IsPositive()
    id_pandemie: number;

    @ApiProperty({ example: 1, description: 'ID du calendrier (date)' })
    @IsInt()
    @IsPositive()
    id_calendar: number;
}