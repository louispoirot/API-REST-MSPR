import { IsInt, IsOptional } from 'class-validator';

export class FilterPredictionDto {
    @IsOptional()
    @IsInt()
    id_calendar?: number;

    @IsOptional()
    @IsInt()
    id_location?: number;

    @IsOptional()
    @IsInt()
    id_pandemie?: number;
}