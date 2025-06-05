import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { DataModule } from './data/data.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { PredictionModule } from './prediction/prediction.module';

@Module({
  imports: [LocationModule, DataModule, DatabaseModule, PredictionModule],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule { }
