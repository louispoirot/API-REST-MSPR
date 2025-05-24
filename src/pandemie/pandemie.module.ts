import { Module } from '@nestjs/common';
import { PandemieService } from './pandemie.service';
import { PandemieController } from './pandemie.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [PandemieService],
  controllers: [PandemieController],
  imports: [DatabaseModule],
})
export class PandemieModule { }
