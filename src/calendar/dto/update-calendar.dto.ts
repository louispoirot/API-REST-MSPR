import { CreateCalendarDto } from "./create-calendar.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateCalendarDto extends PartialType(CreateCalendarDto) { }