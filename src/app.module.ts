import { Module } from '@nestjs/common';
import { CalendarModule } from './calendar/calendar.module';
import { PandemieModule } from './pandemie/pandemie.module';
import { LocationModule } from './location/location.module';
import { DataModule } from './data/data.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { PredictionModule } from './prediction/prediction.module';

@Module({
  imports: [CalendarModule, PandemieModule, LocationModule, DataModule, DatabaseModule, PredictionModule],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule { }
