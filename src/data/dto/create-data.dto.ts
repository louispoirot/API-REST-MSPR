import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateDataDto {
    @ApiProperty({ example: 1500, description: 'Nombre total de cas confirmés' })
    @IsInt()
    @IsNotEmpty()
    total_cases: number;

    @ApiProperty({ example: 100, description: 'Nombre total de décès' })
    @IsInt()
    @IsNotEmpty()
    total_deaths: number;

    @ApiProperty({ example: 50, description: 'Nombre de cas confirmés pendant cette date' })
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

    @ApiProperty({ example: '2020-03-15', description: 'Date de la donnée (format ISO)' })
    @IsDateString()
    @IsNotEmpty()
    date_value: string;

    @ApiProperty({ example: 'Covid-19', description: 'Nom de la pandémie' })
    @IsOptional()
    @IsString()
    pandemic?: string;
}
