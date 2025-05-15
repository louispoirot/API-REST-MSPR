import { Module } from '@nestjs/common';
import { PandemieService } from './pandemie.service';
import { PandemieController } from './pandemie.controller';

@Module({
  providers: [PandemieService],
  controllers: [PandemieController]
})
export class PandemieModule {}
