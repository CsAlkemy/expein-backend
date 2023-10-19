import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LendService } from './lend.service';
import { CreateLendDto } from './dto/create-lend.dto';
import { UpdateLendDto } from './dto/update-lend.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Lend')
@Controller('api/v1/lend')
export class LendController {
  constructor(private readonly lendService: LendService) {}

  @Post()
  create(@Body() createLendDto: CreateLendDto) {
    return this.lendService.create(createLendDto);
  }

  @Get()
  findAll() {
    return this.lendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLendDto: UpdateLendDto) {
    return this.lendService.update(+id, updateLendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lendService.remove(+id);
  }
}
