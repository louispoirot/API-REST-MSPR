import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsDateString, IsString, IsOptional } from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class CreateLocationDto {
    @ApiProperty({
        description: 'Pays',
        example: 'France',
    })
    @IsNotEmpty()
    @IsString()
    country: string;

    @ApiProperty({
        description: 'Continent',
        example: 'Europe',
    })
    @IsOptional()
    @IsString()
    continent: string;

    @ApiProperty({
        description: 'Latitude du pays',
        example: '15.64789',
    })
    @IsOptional()
    @Type(() => Number)
    latitude: Decimal;

    @ApiProperty({
        description: 'Longitude du pays',
        example: '15.64789',
    })
    @IsOptional()
    @Type(() => Number)
    Longitude: Decimal;
}