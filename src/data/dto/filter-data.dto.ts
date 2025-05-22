import { Type, Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class FilterDataDto {
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