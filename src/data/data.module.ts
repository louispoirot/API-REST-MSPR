import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [DataService],
  controllers: [DataController],
  imports: [DatabaseModule],
})
export class DataModule { }
