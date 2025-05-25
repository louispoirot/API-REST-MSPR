import { Module } from '@nestjs/common';
import { PredictionService } from './prediction.service';
import { PredictionController } from './prediction.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [PredictionService],
  controllers: [PredictionController],
  imports: [DatabaseModule],
})
export class PredictionModule { }
