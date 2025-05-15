import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateCalendarDto {
    @ApiProperty({
        description: 'Date enregistrée dans le calendrier (format ISO)',
        example: '2023-01-01',
    })
    @IsNotEmpty()
    @IsDateString()
    date_value: string;
}