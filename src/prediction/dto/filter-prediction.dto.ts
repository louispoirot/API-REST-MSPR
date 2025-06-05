import { IsOptional, IsString, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterPredictionDto {
    @ApiPropertyOptional({ example: 'Covid-19', description: 'Filtrer par nom de pandémie' })
    @IsOptional()
    @IsString()
    pandemic?: string;

    @ApiPropertyOptional({ example: '2020-03-15', description: 'Filtrer par date (format ISO)' })
    @IsOptional()
    @IsDateString()
    date_value?: string;

    @ApiPropertyOptional({ example: 1, description: 'Filtrer par ID de localisation' })
    @IsOptional()
    id_location?: number;
}
