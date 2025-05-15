import { ApiProperty } from '@nestjs/swagger';

export class CalendarResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ example: '2020-01-22' })
    date_value: string;

    constructor(entity: any) {
        this.id = entity.id;
        this.date_value = entity.date_value.toISOString().split('T')[0]; // 👈 garde que la date
    }
}