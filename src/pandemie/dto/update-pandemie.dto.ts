import { PartialType } from '@nestjs/mapped-types';
import { CreatePandemieDto } from './create-pandemie.dto';

export class UpdatePandemieDto extends PartialType(CreatePandemieDto) { }