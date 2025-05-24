import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsDateString, IsString, IsOptional } from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class CreatePandemieDto {
    @ApiProperty({
        description: 'Type de pandemie',
        example: 'Covid-19',
    })
    @IsNotEmpty()
    @IsString()
    Type: string;
}