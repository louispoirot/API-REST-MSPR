import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreatePredictionDto {
    @ApiProperty({ example: 1600, description: 'Nombre de cas prédits' })
    @IsInt()
    @IsNotEmpty()
    total_cases: number;

    @ApiProperty({ example: 80, description: 'Nombre de décès prédits' })
    @IsInt()
    @IsNotEmpty()
    total_deaths: number;

    @ApiProperty({ example: 60, description: 'Nombre de nouveaux cas prédits' })
    @IsInt()
    @IsNotEmpty()
    new_cases: number;

    @ApiProperty({ example: 3, description: 'Nombre de nouveaux décès prédits' })
    @IsInt()
    @IsNotEmpty()
    new_deaths: number;

    @ApiProperty({ example: 1, description: 'ID de la localisation' })
    @IsInt()
    @IsPositive()
    id_location: number;

    @ApiProperty({ example: '2020-03-20', description: 'Date de la prédiction (format ISO)' })
    @IsDateString()
    @IsNotEmpty()
    date_value: string;

    @ApiProperty({ example: 'Covid-19', description: 'Nom de la pandémie' })
    @IsOptional()
    @IsString()
    pandemic?: string;
}
