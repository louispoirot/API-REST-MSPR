import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class FilterDataDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id_calendar?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id_location?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    id_pandemie?: number;
}
