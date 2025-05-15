import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { DatabaseModule } from 'src/database/database.module';
import { CalendarController } from './calendar.controller';

@Module({
  providers: [CalendarService],
  imports: [DatabaseModule],
  controllers: [CalendarController],
})
export class CalendarModule { }
