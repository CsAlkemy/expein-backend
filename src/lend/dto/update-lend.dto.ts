import { PartialType } from '@nestjs/swagger';
import { CreateLendDto } from './create-lend.dto';

export class UpdateLendDto extends PartialType(CreateLendDto) {}
