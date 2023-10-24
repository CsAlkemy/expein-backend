import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateLendDto } from './dto/create-lend.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PayloadResponseDto } from '../common/dto/payload-response.dto';
import { LendService } from './lend.service';
import { UpdateLendDto } from './dto/update-lend.dto';

@ApiTags('Lend')
@Controller('api/v1/lend')
export class LendController {
  constructor(private landService: LendService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateLendDto })
  @ApiResponse({ description: 'Add Borrow or Lend', status: HttpStatus.OK })
  async create(@Body() createLendDto: CreateLendDto) {
    const lend = await this.landService.create(createLendDto);
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: lend?.isLend? 'Lend has been successfully created':'Borrow has been successfully created',
      payload: lend,
    });
  }

  @Get()
  async findAll() {
    const res = await this.landService.findAll();
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: 'Data Fetch successfully',
      payload: res,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.landService.findOne(id);
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: 'Data Fetch successfully',
      payload: res,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLendDto: UpdateLendDto,
  ) {
    const lend = await this.landService.update(id, updateLendDto);
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: 'Updated Successfully',
      payload: lend,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const res = await this.landService.remove(id);
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: 'Data Deleted Successfully',
      payload: res,
    });
  }
}
